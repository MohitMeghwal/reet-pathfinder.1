(function (global) {
  "use strict";

  var REET = global.REET = global.REET || {};

  // Note: In a pure static client-side app without a backend, source files remain inspectable
  // in browser DevTools; however, active test state, DOM, and localStorage NEVER store
  // correct answer indices or explanations during an active mock test.

  REET.activeTest = null;
  REET.lastMockResult = null;
  var timerInterval = null;

  function loadActiveTestFromStorage() {
    var raw = REET.storageGet(REET.ACTIVE_TEST_KEY);
    if (!raw) return null;
    try {
      var parsed = JSON.parse(raw);
      if (parsed && Array.isArray(parsed.questionIds) && parsed.endTimestamp) {
        return parsed;
      }
    } catch (e) {
      return null;
    }
    return null;
  }

  function persistActiveTest() {
    if (!REET.activeTest) {
      REET.storageRemove(REET.ACTIVE_TEST_KEY);
      return;
    }
    // Strict leak prevention: only IDs, shuffled-safe options, choices, marks & timestamps
    var safePayload = {
      testId: REET.activeTest.testId,
      title: REET.activeTest.title,
      mode: REET.activeTest.mode,
      isProvisional: REET.activeTest.isProvisional,
      questionIds: REET.activeTest.questionIds,
      optionsMap: REET.activeTest.optionsMap,
      choices: REET.activeTest.choices,
      marked: REET.activeTest.marked,
      visited: REET.activeTest.visited,
      currentIndex: REET.activeTest.currentIndex,
      durationMinutes: REET.activeTest.durationMinutes,
      endTimestamp: REET.activeTest.endTimestamp,
      startedAt: REET.activeTest.startedAt
    };
    REET.storageSet(REET.ACTIVE_TEST_KEY, JSON.stringify(safePayload));
  }

  REET.restoreActiveTest = function () {
    var saved = loadActiveTestFromStorage();
    if (saved) {
      REET.activeTest = saved;
    }
    return REET.activeTest;
  };

  REET.startMock = function (config) {
    var cfg = config || {};
    var examCfg = REET.data.examConfig;
    var selectedQuestions = [];
    var durationMinutes = Number(cfg.durationMinutes) || examCfg.durationMinutes || 150;
    var title = cfg.title || "REET 2027 पैटर्न मॉक टेस्ट (अनंतिम)";

    if (cfg.mode === "official") {
      (examCfg.sections || []).forEach(function (sec) {
        var sq = REET.filterQuestions({ subjectId: sec.subjectId }).slice();
        sq.sort(function () { return 0.5 - Math.random(); });
        selectedQuestions = selectedQuestions.concat(sq.slice(0, sec.questions));
      });
    } else {
      var pool = REET.loadQuestions().filter(function (q) {
        if (Array.isArray(cfg.subjects) && cfg.subjects.length && cfg.subjects.indexOf(q.subjectId) === -1) return false;
        if (cfg.chapterId && q.chapterId !== cfg.chapterId) return false;
        if (cfg.topicId && q.topicId !== cfg.topicId) return false;
        if (cfg.filterMode === "pyq" && q.category !== "verified_pyq") return false;
        if (cfg.filterMode === "difficult" && q.difficulty !== "hard") return false;
        return true;
      });
      pool = pool.slice().sort(function () { return 0.5 - Math.random(); });
      selectedQuestions = pool.slice(0, Number(cfg.count) || 30);
      title = cfg.title || "कस्टम मॉक टेस्ट (" + selectedQuestions.length + " प्रश्न)";
    }

    if (!selectedQuestions.length) return null;

    var questionIds = [];
    var optionsMap = {};
    selectedQuestions.forEach(function (q) {
      questionIds.push(q.id);
      optionsMap[q.id] = {
        question: q.question,
        options: q.options.slice(),
        subjectId: q.subjectId,
        topicId: q.topicId
      };
    });

    REET.activeTest = {
      testId: "mock-" + Date.now(),
      title: title,
      mode: cfg.mode || "custom",
      isProvisional: cfg.mode === "official" ? Boolean(examCfg.provisional) : false,
      questionIds: questionIds,
      optionsMap: optionsMap,
      choices: {},
      marked: {},
      visited: { 0: true },
      currentIndex: 0,
      durationMinutes: durationMinutes,
      startedAt: Date.now(),
      endTimestamp: Date.now() + durationMinutes * 60 * 1000
    };

    persistActiveTest();
    REET.startMockTimer();
    return REET.activeTest;
  };

  REET.startMockTimer = function () {
    if (timerInterval) global.clearInterval(timerInterval);
    timerInterval = global.setInterval(function () {
      if (!REET.activeTest) {
        global.clearInterval(timerInterval);
        return;
      }
      var remainingMs = REET.activeTest.endTimestamp - Date.now();
      var el = global.document && global.document.getElementById("cbt-timer-display");
      if (remainingMs <= 0) {
        if (el) el.textContent = "00:00:00";
        global.clearInterval(timerInterval);
        REET.submitMock(true);
        return;
      }
      if (el) {
        var totalSec = Math.floor(remainingMs / 1000);
        var h = String(Math.floor(totalSec / 3600)).padStart(2, "0");
        var m = String(Math.floor((totalSec % 3600) / 60)).padStart(2, "0");
        var s = String(totalSec % 60).padStart(2, "0");
        el.textContent = h + ":" + m + ":" + s;
      }
    }, 1000);
  };

  REET.selectMockChoice = function (optionIndex) {
    if (!REET.activeTest) return;
    var qid = REET.activeTest.questionIds[REET.activeTest.currentIndex];
    REET.activeTest.choices[qid] = optionIndex;
    persistActiveTest();
  };

  REET.clearMockChoice = function () {
    if (!REET.activeTest) return;
    var qid = REET.activeTest.questionIds[REET.activeTest.currentIndex];
    delete REET.activeTest.choices[qid];
    persistActiveTest();
  };

  REET.toggleMarkForReview = function () {
    if (!REET.activeTest) return;
    var qid = REET.activeTest.questionIds[REET.activeTest.currentIndex];
    if (REET.activeTest.marked[qid]) {
      delete REET.activeTest.marked[qid];
    } else {
      REET.activeTest.marked[qid] = true;
    }
    persistActiveTest();
  };

  REET.goToMockQuestion = function (idx) {
    if (!REET.activeTest) return;
    if (idx < 0 || idx >= REET.activeTest.questionIds.length) return;
    REET.activeTest.currentIndex = idx;
    REET.activeTest.visited[idx] = true;
    persistActiveTest();
  };

  REET.getMockPaletteCounts = function () {
    var t = REET.activeTest;
    if (!t) return { total: 0, answered: 0, unanswered: 0, marked: 0 };
    var answered = 0;
    var marked = 0;
    t.questionIds.forEach(function (qid) {
      if (Object.prototype.hasOwnProperty.call(t.choices, qid)) answered += 1;
      if (t.marked[qid]) marked += 1;
    });
    return {
      total: t.questionIds.length,
      answered: answered,
      unanswered: t.questionIds.length - answered,
      marked: marked
    };
  };

  // Correct answers and explanations are read ONLY here after submission
  REET.calculateResult = function (testSnapshot) {
    var examCfg = REET.data.examConfig;
    var marksPerQ = examCfg.marksPerQuestion || 1;
    var negMarks = examCfg.negativeMarking ? (examCfg.negativeMarksPerWrong || 0) : 0;

    var qLookup = {};
    REET.loadQuestions().forEach(function (q) { qLookup[q.id] = q; });

    var correct = 0;
    var wrong = 0;
    var unattempted = 0;
    var bySubject = {};
    var byTopic = {};
    var details = [];

    testSnapshot.questionIds.forEach(function (qid) {
      var q = qLookup[qid];
      if (!q) return;
      var userChoice = Object.prototype.hasOwnProperty.call(testSnapshot.choices, qid)
        ? testSnapshot.choices[qid]
        : null;
      var isAttempted = userChoice !== null;
      var isCorrect = isAttempted && userChoice === q.correct;

      if (!bySubject[q.subjectId]) bySubject[q.subjectId] = { total: 0, correct: 0, wrong: 0 };
      if (!byTopic[q.topicId]) byTopic[q.topicId] = { total: 0, correct: 0, subjectId: q.subjectId };

      bySubject[q.subjectId].total += 1;
      byTopic[q.topicId].total += 1;

      if (!isAttempted) {
        unattempted += 1;
      } else if (isCorrect) {
        correct += 1;
        bySubject[q.subjectId].correct += 1;
        byTopic[q.topicId].correct += 1;
      } else {
        wrong += 1;
        bySubject[q.subjectId].wrong += 1;
      }

      if (isAttempted) {
        var rec = REET.state.practice.attempted[q.id] || { attempts: 0, correctCount: 0, lastCorrect: false, recent: [] };
        rec.attempts += 1;
        if (isCorrect) rec.correctCount += 1;
        rec.lastCorrect = isCorrect;
        rec.recent = (rec.recent || []).concat([isCorrect]).slice(-15);
        REET.state.practice.attempted[q.id] = rec;
      }

      details.push({
        id: q.id,
        subjectId: q.subjectId,
        topicId: q.topicId,
        question: q.question,
        options: q.options,
        userChoice: userChoice,
        correct: q.correct,
        isCorrect: isCorrect,
        explanation: q.explanation
      });
    });

    var score = Math.max(0, (correct * marksPerQ) - (wrong * negMarks));
    var maxScore = testSnapshot.questionIds.length * marksPerQ;
    var attempted = correct + wrong;
    var accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;
    var timeSpentSec = Math.min(
      testSnapshot.durationMinutes * 60,
      Math.max(1, Math.round((Date.now() - testSnapshot.startedAt) / 1000))
    );

    return {
      testId: testSnapshot.testId,
      title: testSnapshot.title,
      date: new Date().toISOString(),
      totalQuestions: testSnapshot.questionIds.length,
      correct: correct,
      wrong: wrong,
      unattempted: unattempted,
      score: score,
      maxScore: maxScore,
      percent: maxScore > 0 ? Math.round((score / maxScore) * 100) : 0,
      accuracy: accuracy,
      timeSpentSec: timeSpentSec,
      bySubject: bySubject,
      byTopic: byTopic,
      details: details
    };
  };

  REET.submitMock = function (autoSubmitted) {
    if (!REET.activeTest) return null;
    if (timerInterval) global.clearInterval(timerInterval);

    var snapshot = REET.activeTest;
    REET.activeTest = null;
    persistActiveTest();

    var result = REET.calculateResult(snapshot);
    result.autoSubmitted = Boolean(autoSubmitted);
    REET.lastMockResult = result;

    REET.touchStreak();
    REET.state.mock.history.push({
      testId: result.testId,
      title: result.title,
      date: result.date,
      score: result.score,
      maxScore: result.maxScore,
      percent: result.percent,
      accuracy: result.accuracy,
      correct: result.correct,
      wrong: result.wrong,
      unattempted: result.unattempted,
      timeSpentSec: result.timeSpentSec,
      bySubject: result.bySubject
    });
    if (REET.state.mock.history.length > 25) {
      REET.state.mock.history.shift();
    }

    REET.addXP(REET.XP_TABLE.MOCK_COMPLETE);
    REET.logActivity("mock", result.title + ": " + result.score + "/" + result.maxScore, "#/mock");
    if (REET.evaluateAchievements) REET.evaluateAchievements();
    REET.saveState();

    if (REET.renderCurrentView) REET.renderCurrentView();
    return result;
  };
})(window);
