(function (global) {
  "use strict";

  var REET = global.REET = global.REET || {};

  REET.loadQuestions = function () {
    return REET.data.questions || [];
  };

  REET.filterQuestions = function (filters) {
    var f = filters || {};
    return REET.loadQuestions().filter(function (q) {
      if (f.subjectId && q.subjectId !== f.subjectId) return false;
      if (f.chapterId && q.chapterId !== f.chapterId) return false;
      if (f.topicId && q.topicId !== f.topicId) return false;
      if (f.difficulty && q.difficulty !== f.difficulty) return false;
      if (f.category && q.category !== f.category) return false;
      if (f.pyqOnly && q.category !== "verified_pyq") return false;
      return true;
    });
  };

  REET.getTopicById = function (topicId) {
    var found = null;
    (REET.data.syllabus || []).forEach(function (subj) {
      (subj.chapters || []).forEach(function (ch) {
        (ch.topics || []).forEach(function (tp) {
          if (tp.id === topicId) {
            found = { subject: subj, chapter: ch, topic: tp };
          }
        });
      });
    });
    return found;
  };

  REET.getSubjectTopics = function (subjectId) {
    var list = [];
    var subj = (REET.data.syllabus || []).find(function (s) { return s.id === subjectId; });
    if (!subj) return list;
    (subj.chapters || []).forEach(function (ch) {
      (ch.topics || []).forEach(function (tp) {
        list.push({ subject: subj, chapter: ch, topic: tp });
      });
    });
    return list;
  };

  REET.getTopicMastery = function (topicId) {
    var st = REET.state;
    var opened = Boolean(st.study.openedTopics[topicId]);
    var theoryDone = Boolean(st.study.completedTopics[topicId]);
    var reviewed = Boolean(st.revision.reviewedTopics[topicId]);

    var topicQs = REET.filterQuestions({ topicId: topicId });
    var attempts = 0;
    var correctCount = 0;
    var recentResults = [];

    topicQs.forEach(function (q) {
      var rec = st.practice.attempted[q.id];
      if (rec && rec.attempts > 0) {
        attempts += rec.attempts;
        correctCount += rec.correctCount;
        if (Array.isArray(rec.recent)) {
          recentResults = recentResults.concat(rec.recent);
        }
      }
    });

    var acc = attempts > 0 ? Math.round((correctCount / attempts) * 100) : 0;
    var practiceDone = attempts >= 10 && acc >= 60;
    var last10 = recentResults.slice(-10);
    var last10Acc = last10.length >= 10
      ? Math.round((last10.filter(Boolean).length / 10) * 100)
      : 0;

    if (theoryDone && practiceDone && reviewed && last10.length >= 10 && last10Acc >= 80) {
      return REET.MASTERY_STATES.MASTERED;
    }
    if (theoryDone && practiceDone && reviewed) {
      return REET.MASTERY_STATES.REVISION_COMPLETED;
    }
    if (theoryDone && practiceDone) {
      return REET.MASTERY_STATES.PRACTICE_COMPLETED;
    }
    if (theoryDone) {
      return REET.MASTERY_STATES.THEORY_COMPLETED;
    }
    if (opened) {
      return REET.MASTERY_STATES.LEARNING;
    }
    return REET.MASTERY_STATES.NOT_STARTED;
  };

  REET.getProgressSummary = function () {
    var st = REET.state;
    var totalChapters = 0;
    var completedChapters = 0;
    var totalTopics = 0;
    var completedTopics = 0;
    var subjectStats = {};

    (REET.data.syllabus || []).forEach(function (subj) {
      var chCount = (subj.chapters || []).length;
      var chDone = 0;
      var tpCount = 0;
      var tpDone = 0;

      (subj.chapters || []).forEach(function (ch) {
        var topics = ch.topics || [];
        tpCount += topics.length;
        var allDone = topics.length > 0;
        topics.forEach(function (tp) {
          if (st.study.completedTopics[tp.id]) {
            tpDone += 1;
          } else {
            allDone = false;
          }
        });
        if (allDone) chDone += 1;
      });

      totalChapters += chCount;
      completedChapters += chDone;
      totalTopics += tpCount;
      completedTopics += tpDone;

      var qPool = REET.filterQuestions({ subjectId: subj.id });
      var qAttempted = 0;
      var qCorrect = 0;
      qPool.forEach(function (q) {
        var r = st.practice.attempted[q.id];
        if (r && r.attempts > 0) {
          qAttempted += 1;
          if (r.lastCorrect) qCorrect += 1;
        }
      });

      var pct = tpCount > 0 ? Math.round((tpDone / tpCount) * 100) : 0;
      subjectStats[subj.id] = {
        chaptersTotal: chCount,
        chaptersDone: chDone,
        topicsTotal: tpCount,
        topicsDone: tpDone,
        questionsTotal: qPool.length,
        questionsAttempted: qAttempted,
        questionsCorrect: qCorrect,
        percent: pct
      };
    });

    var totalAttempted = 0;
    var totalCorrect = 0;
    Object.keys(st.practice.attempted).forEach(function (qid) {
      var rec = st.practice.attempted[qid];
      totalAttempted += rec.attempts || 0;
      totalCorrect += rec.correctCount || 0;
    });

    var lastMock = st.mock.history.length ? st.mock.history[st.mock.history.length - 1] : null;
    var overallPercent = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;

    return {
      overallPercent: overallPercent,
      totalChapters: totalChapters,
      completedChapters: completedChapters,
      totalTopics: totalTopics,
      completedTopics: completedTopics,
      totalAttempted: totalAttempted,
      totalCorrect: totalCorrect,
      accuracy: totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0,
      lastMock: lastMock,
      subjectStats: subjectStats
    };
  };

  REET.updateProgress = function (eventType, payload) {
    var st = REET.state;
    REET.touchStreak();

    if (eventType === "topic_open" && payload && payload.topicId) {
      if (!st.study.openedTopics[payload.topicId]) {
        st.study.openedTopics[payload.topicId] = true;
        REET.addXP(REET.XP_TABLE.TOPIC_OPEN);
      }
      st.study.lastPosition = {
        subjectId: payload.subjectId,
        chapterId: payload.chapterId,
        topicId: payload.topicId,
        scroll: st.study.topicScroll[payload.topicId] || 0
      };
    } else if (eventType === "topic_complete" && payload && payload.topicId) {
      if (!st.study.completedTopics[payload.topicId]) {
        st.study.completedTopics[payload.topicId] = true;
        REET.addXP(REET.XP_TABLE.TOPIC_COMPLETE);
        REET.logActivity("theory", "थ्योरी पूर्ण: " + (payload.title || payload.topicId), "#/library/" + payload.subjectId + "/" + payload.topicId);
      }
    } else if (eventType === "topic_scroll" && payload && payload.topicId) {
      st.study.topicScroll[payload.topicId] = payload.percent;
    }

    if (REET.evaluateAchievements) REET.evaluateAchievements();
    REET.saveState();
  };

  REET.getNextSuggestedActivity = function () {
    var st = REET.state;
    if (st.study.lastPosition && !st.study.completedTopics[st.study.lastPosition.topicId]) {
      return {
        label: "अधूरा टॉपिक पूरा करें",
        route: "#/library/" + st.study.lastPosition.subjectId + "/" + st.study.lastPosition.topicId
      };
    }
    var wrongIds = Object.keys(st.practice.attempted).filter(function (id) {
      return st.practice.attempted[id].lastCorrect === false;
    });
    if (wrongIds.length >= 5) {
      return { label: "गलत उत्तरों का पुनरावलोकन करें (" + wrongIds.length + ")", route: "#/revision" };
    }
    if (!st.mock.history.length && Object.keys(st.practice.attempted).length >= 15) {
      return { label: "अपना पहला मॉक टेस्ट दें", route: "#/mock" };
    }
    return { label: "आज के 30 अभ्यास प्रश्न (Daily 30) हल करें", route: "#/practice" };
  };

  REET.getNotifications = function () {
    var list = [];
    var st = REET.state;
    var pendingTasks = (st.planner.tasks || []).filter(function (t) { return !t.done; }).length;
    if (pendingTasks > 0) {
      list.push({ text: "स्टडी प्लानर में " + pendingTasks + " लक्ष्य बाकी हैं।", route: "#/planner" });
    }
    var wrongCount = Object.keys(st.practice.attempted).filter(function (id) {
      return st.practice.attempted[id].lastCorrect === false;
    }).length;
    if (wrongCount > 0) {
      list.push({ text: "रिवीजन के लिए " + wrongCount + " गलत उत्तर उपलब्ध हैं।", route: "#/revision" });
    }
    var today = REET.getTodayKey();
    if (!st.practice.daily30[today]) {
      list.push({ text: "आज का Daily 30 चैलेंज अभी पूरा नहीं हुआ है।", route: "#/practice" });
    }
    if (st.achievements.streak.current > 0 && st.achievements.streak.lastActiveDate !== today) {
      list.push({ text: "आपकी " + st.achievements.streak.current + "-दिन की स्ट्रीक बनाए रखने के लिए आज अभ्यास करें।", route: "#/practice" });
    }
    return list;
  };
})(window);
