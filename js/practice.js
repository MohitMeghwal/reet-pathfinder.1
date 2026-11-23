(function (global) {
  "use strict";

  var REET = global.REET = global.REET || {};

  REET.practiceSession = null;

  REET.generateExplanation = function (q, selectedIndex) {
    var labels = ["A", "B", "C", "D"];
    var isCorrect = selectedIndex === q.correct;
    var topicInfo = REET.getTopicById(q.topicId);
    var topicTitle = topicInfo ? topicInfo.topic.title : q.topicId;

    return {
      isCorrect: isCorrect,
      correctLabel: labels[q.correct],
      correctText: q.options[q.correct],
      explanation: q.explanation || "सही उत्तर विकल्प " + labels[q.correct] + " है।",
      optionNotes: Array.isArray(q.optionNotes) ? q.optionNotes : null,
      conceptTested: (q.tags && q.tags.length) ? q.tags.join(", ") : topicTitle,
      topicToRevise: topicTitle,
      topicId: q.topicId,
      subjectId: q.subjectId
    };
  };

  REET.startPractice = function (config) {
    var cfg = config || {};
    var mode = cfg.mode || "mixed";
    var pool = [];

    if (mode === "pyq") {
      pool = REET.filterQuestions({ subjectId: cfg.subjectId, pyqOnly: true });
    } else if (mode === "important") {
      pool = REET.filterQuestions({ subjectId: cfg.subjectId, category: "important" });
    } else if (mode === "difficult") {
      pool = REET.filterQuestions({ subjectId: cfg.subjectId, difficulty: "hard" });
    } else if (mode === "topic") {
      pool = REET.filterQuestions({ topicId: cfg.topicId, difficulty: cfg.difficulty });
    } else if (mode === "chapter") {
      pool = REET.filterQuestions({ chapterId: cfg.chapterId, difficulty: cfg.difficulty });
    } else if (mode === "subject") {
      pool = REET.filterQuestions({ subjectId: cfg.subjectId, difficulty: cfg.difficulty });
    } else if (mode === "daily30") {
      var bySubj = ["cdp", "hindi", "english", "maths", "evs"];
      bySubj.forEach(function (sid) {
        var sq = REET.filterQuestions({ subjectId: sid }).slice();
        sq.sort(function () { return 0.5 - Math.random(); });
        pool = pool.concat(sq.slice(0, 6));
      });
    } else {
      pool = REET.filterQuestions({ subjectId: cfg.subjectId, difficulty: cfg.difficulty });
    }

    if (mode !== "daily30") {
      pool = pool.slice().sort(function () { return 0.5 - Math.random(); });
      var limit = Number(cfg.count) || 15;
      pool = pool.slice(0, limit);
    }

    if (!pool.length) {
      REET.practiceSession = null;
      return null;
    }

    REET.practiceSession = {
      mode: mode,
      questions: pool,
      answers: {},
      currentIndex: 0,
      startedAt: Date.now(),
      finished: false
    };
    return REET.practiceSession;
  };

  REET.saveAnswer = function (questionId, selectedIndex) {
    var sess = REET.practiceSession;
    if (!sess) return null;
    var q = sess.questions.find(function (item) { return item.id === questionId; });
    if (!q) return null;

    if (Object.prototype.hasOwnProperty.call(sess.answers, questionId)) {
      return REET.generateExplanation(q, sess.answers[questionId]);
    }

    sess.answers[questionId] = selectedIndex;
    var isCorrect = selectedIndex === q.correct;

    REET.touchStreak();
    var rec = REET.state.practice.attempted[q.id] || {
      attempts: 0,
      correctCount: 0,
      lastCorrect: false,
      recent: []
    };
    rec.attempts += 1;
    if (isCorrect) rec.correctCount += 1;
    rec.lastCorrect = isCorrect;
    rec.recent = (rec.recent || []).concat([isCorrect]).slice(-15);
    REET.state.practice.attempted[q.id] = rec;

    var today = REET.getTodayKey();
    REET.state.practice.dailyLog[today] = (REET.state.practice.dailyLog[today] || 0) + 1;

    REET.addXP(REET.XP_TABLE.PRACTICE_ATTEMPT + (isCorrect ? REET.XP_TABLE.PRACTICE_CORRECT : 0));
    if (REET.evaluateAchievements) REET.evaluateAchievements();
    REET.saveState();

    return REET.generateExplanation(q, selectedIndex);
  };

  REET.finishPractice = function () {
    var sess = REET.practiceSession;
    if (!sess) return null;
    sess.finished = true;
    var total = sess.questions.length;
    var attempted = 0;
    var correct = 0;

    sess.questions.forEach(function (q) {
      if (Object.prototype.hasOwnProperty.call(sess.answers, q.id)) {
        attempted += 1;
        if (sess.answers[q.id] === q.correct) correct += 1;
      }
    });

    var summary = {
      mode: sess.mode,
      total: total,
      attempted: attempted,
      correct: correct,
      accuracy: attempted > 0 ? Math.round((correct / attempted) * 100) : 0,
      date: new Date().toISOString()
    };

    if (sess.mode === "daily30") {
      var today = REET.getTodayKey();
      if (!REET.state.practice.daily30[today]) {
        REET.state.practice.daily30[today] = summary;
        REET.addXP(REET.XP_TABLE.DAILY30_COMPLETE);
      }
    }

    REET.state.practice.history.unshift(summary);
    if (REET.state.practice.history.length > 30) REET.state.practice.history.length = 30;
    REET.logActivity("practice", "प्रैक्टिस सत्र (" + correct + "/" + total + " सही)", "#/practice");
    if (REET.evaluateAchievements) REET.evaluateAchievements();
    REET.saveState();
    return summary;
  };
})(window);
