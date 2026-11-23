(function (global) {
  "use strict";

  var REET = global.REET = global.REET || {};

  REET.STORAGE_KEY = "reetPathfinder.v1";
  REET.ACTIVE_TEST_KEY = "reetPathfinder.activeTest.v1";
  REET.BACKUP_KEY = "reetPathfinder.backup.v1";

  REET.XP_TABLE = {
    TOPIC_OPEN: 5,
    TOPIC_COMPLETE: 25,
    PRACTICE_CORRECT: 10,
    PRACTICE_ATTEMPT: 2,
    DAILY30_COMPLETE: 60,
    MOCK_COMPLETE: 100,
    REVISION_CARD: 5,
    PLANNER_TASK: 15
  };

  REET.MASTERY_STATES = {
    NOT_STARTED: "not_started",
    LEARNING: "learning",
    THEORY_COMPLETED: "theory_completed",
    PRACTICE_COMPLETED: "practice_completed",
    REVISION_COMPLETED: "revision_completed",
    MASTERED: "mastered"
  };

  REET.MASTERY_LABELS = {
    not_started: "शुरू नहीं",
    learning: "अध्ययन जारी",
    theory_completed: "थ्योरी पूर्ण",
    practice_completed: "अभ्यास पूर्ण",
    revision_completed: "रिवीजन पूर्ण",
    mastered: "दक्ष (Mastered)"
  };

  REET.SUBJECT_META = [
    { id: "cdp", title: "बाल विकास एवं शिक्षाशास्त्र", short: "CDP", color: "#d6336c", target: 200 },
    { id: "hindi", title: "हिंदी (भाषा–I)", short: "हिंदी", color: "#1971c2", target: 200 },
    { id: "english", title: "English (Language–II)", short: "English", color: "#6741d9", target: 200 },
    { id: "maths", title: "गणित", short: "गणित", color: "#d9480f", target: 200 },
    { id: "evs", title: "पर्यावरण अध्ययन", short: "EVS", color: "#2b8a3e", target: 200 }
  ];

  REET.data = {
    examConfig: {
      examName: "REET 2027 Level 1 (Primary: Classes 1–5)",
      provisional: true,
      bannerText: "REET 2027 की आधिकारिक अधिसूचना जारी होने तक पैटर्न अनंतिम (provisional) है।",
      totalQuestions: 150,
      totalMarks: 150,
      durationMinutes: 150,
      marksPerQuestion: 1,
      negativeMarking: false,
      negativeMarksPerWrong: 0,
      verified: false,
      sections: [
        { subjectId: "cdp", title: "बाल विकास एवं शिक्षाशास्त्र", questions: 30, marks: 30, verified: false },
        { subjectId: "hindi", title: "भाषा–I (हिंदी)", questions: 30, marks: 30, verified: false },
        { subjectId: "english", title: "भाषा–II (English)", questions: 30, marks: 30, verified: false },
        { subjectId: "maths", title: "गणित", questions: 30, marks: 30, verified: false },
        { subjectId: "evs", title: "पर्यावरण अध्ययन", questions: 30, marks: 30, verified: false }
      ]
    },
    syllabus: [],
    pyqVerified: [],
    theory: {},
    questions: [],
    revision: { notes: [], facts: [], flashcards: [], formulas: [] },
    loadedFiles: [],
    skippedFiles: []
  };

  REET.dataHealth = {
    duplicateIds: [],
    invalidCorrect: [],
    brokenLinks: [],
    duplicateTexts: [],
    countsBySubject: { cdp: 0, hindi: 0, english: 0, maths: 0, evs: 0 }
  };

  var memoryFallback = {};
  REET.storageBlocked = false;

  REET.defaultState = function () {
    return {
      version: 1,
      profile: {
        name: "Student",
        dailyQuestionTarget: 30,
        dailyMinutesTarget: 60
      },
      study: {
        openedTopics: {},
        completedTopics: {},
        bookmarkedTopics: {},
        topicScroll: {},
        lastPosition: null,
        totalMinutes: 0
      },
      practice: {
        attempted: {},
        history: [],
        daily30: {},
        dailyLog: {}
      },
      mock: {
        history: []
      },
      revision: {
        flashcards: {},
        reviewedTopics: {},
        reviewedChapters: {}
      },
      planner: {
        tasks: [
          { id: "task-1", title: "CDP: बाल विकास के सिद्धांत पढ़ें", subjectId: "cdp", done: false },
          { id: "task-2", title: "हिंदी: संज्ञा और सर्वनाम के 15 प्रश्न हल करें", subjectId: "hindi", done: false },
          { id: "task-3", title: "गणित: संख्या पद्धति के सूत्र दोहराएँ", subjectId: "maths", done: false }
        ],
        weeklyGoalQuestions: 180,
        subjectTargets: { cdp: 40, hindi: 40, english: 35, maths: 40, evs: 35 }
      },
      achievements: {
        xp: 0,
        unlocked: {},
        streak: { current: 0, longest: 0, lastActiveDate: null }
      },
      qotd: {},
      activity: []
    };
  };

  function isValidStateShape(obj) {
    return Boolean(
      obj &&
      typeof obj === "object" &&
      typeof obj.version === "number" &&
      obj.profile &&
      obj.study &&
      obj.practice &&
      obj.mock &&
      obj.revision &&
      obj.planner &&
      obj.achievements
    );
  }

  function migrateState(raw) {
    var base = REET.defaultState();
    if (!raw || typeof raw !== "object") return base;
    if (raw.version === 1) {
      return {
        version: 1,
        profile: Object.assign({}, base.profile, raw.profile || {}),
        study: Object.assign({}, base.study, raw.study || {}),
        practice: Object.assign({}, base.practice, raw.practice || {}),
        mock: Object.assign({}, base.mock, raw.mock || {}),
        revision: Object.assign({}, base.revision, raw.revision || {}),
        planner: Object.assign({}, base.planner, raw.planner || {}),
        achievements: Object.assign({}, base.achievements, raw.achievements || {}),
        qotd: raw.qotd || {},
        activity: Array.isArray(raw.activity) ? raw.activity : []
      };
    }
    return base;
  }

  REET.storageGet = function (key) {
    try {
      var val = global.localStorage.getItem(key);
      return val;
    } catch (e) {
      REET.storageBlocked = true;
      REET.showStorageWarning();
      return Object.prototype.hasOwnProperty.call(memoryFallback, key) ? memoryFallback[key] : null;
    }
  };

  REET.storageSet = function (key, value) {
    try {
      global.localStorage.setItem(key, value);
      return true;
    } catch (e) {
      REET.storageBlocked = true;
      REET.showStorageWarning();
      memoryFallback[key] = value;
      return false;
    }
  };

  REET.storageRemove = function (key) {
    try {
      global.localStorage.removeItem(key);
    } catch (e) {
      delete memoryFallback[key];
    }
  };

  REET.showStorageWarning = function () {
    var el = global.document && global.document.getElementById("storage-warning-banner");
    if (el) el.hidden = false;
  };

  REET.loadState = function () {
    var rawStr = REET.storageGet(REET.STORAGE_KEY);
    if (!rawStr) {
      REET.state = REET.defaultState();
      return REET.state;
    }
    try {
      var parsed = JSON.parse(rawStr);
      if (!isValidStateShape(parsed)) {
        REET.storageSet(REET.BACKUP_KEY, rawStr);
        REET.state = REET.defaultState();
        REET.saveState();
        return REET.state;
      }
      REET.state = migrateState(parsed);
      return REET.state;
    } catch (err) {
      REET.storageSet(REET.BACKUP_KEY, rawStr);
      REET.state = REET.defaultState();
      REET.saveState();
      return REET.state;
    }
  };

  REET.saveState = function () {
    if (!REET.state) REET.state = REET.defaultState();
    REET.storageSet(REET.STORAGE_KEY, JSON.stringify(REET.state));
  };

  REET.getTodayKey = function () {
    var d = new Date();
    var y = d.getFullYear();
    var m = String(d.getMonth() + 1).padStart(2, "0");
    var day = String(d.getDate()).padStart(2, "0");
    return y + "-" + m + "-" + day;
  };

  REET.touchStreak = function () {
    var today = REET.getTodayKey();
    var streak = REET.state.achievements.streak;
    if (streak.lastActiveDate === today) return;
    if (!streak.lastActiveDate) {
      streak.current = 1;
    } else {
      var prev = new Date(streak.lastActiveDate + "T00:00:00");
      var curr = new Date(today + "T00:00:00");
      var diffDays = Math.round((curr - prev) / 86400000);
      streak.current = diffDays === 1 ? streak.current + 1 : 1;
    }
    if (streak.current > streak.longest) streak.longest = streak.current;
    streak.lastActiveDate = today;
  };

  REET.addXP = function (amount) {
    REET.state.achievements.xp = (REET.state.achievements.xp || 0) + amount;
  };

  REET.logActivity = function (type, label, route) {
    REET.state.activity.unshift({
      id: "act-" + Date.now(),
      type: type,
      label: label,
      route: route || "#/",
      timestamp: new Date().toISOString()
    });
    if (REET.state.activity.length > 25) {
      REET.state.activity.length = 25;
    }
  };

  REET.getQuestionOfTheDay = function () {
    var pool = REET.data.questions || [];
    if (!pool.length) return null;
    var key = REET.getTodayKey();
    var hash = 0;
    for (var i = 0; i < key.length; i++) {
      hash = ((hash << 5) - hash) + key.charCodeAt(i);
      hash |= 0;
    }
    var idx = Math.abs(hash) % pool.length;
    return pool[idx];
  };

  REET.escapeHTML = function (str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  };

  REET.showToast = function (message) {
    var box = global.document && global.document.getElementById("toast-container");
    if (!box) return;
    var item = global.document.createElement("div");
    item.className = "toast";
    item.textContent = message;
    box.appendChild(item);
    global.setTimeout(function () {
      if (item.parentNode) item.parentNode.removeChild(item);
    }, 3400);
  };

  REET.exportProgress = function () {
    var payload = JSON.stringify(REET.state, null, 2);
    var blob = new Blob([payload], { type: "application/json" });
    var url = URL.createObjectURL(blob);
    var a = global.document.createElement("a");
    a.href = url;
    a.download = "reet-pathfinder-progress-" + REET.getTodayKey() + ".json";
    global.document.body.appendChild(a);
    a.click();
    global.document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  REET.importProgress = function (jsonText, mode) {
    var parsed = JSON.parse(jsonText);
    if (!isValidStateShape(parsed)) {
      throw new Error("अमान्य प्रगति फ़ाइल (Invalid format)");
    }
    var incoming = migrateState(parsed);
    if (mode === "merge") {
      Object.assign(REET.state.study.openedTopics, incoming.study.openedTopics);
      Object.assign(REET.state.study.completedTopics, incoming.study.completedTopics);
      Object.assign(REET.state.study.bookmarkedTopics, incoming.study.bookmarkedTopics);
      Object.assign(REET.state.practice.attempted, incoming.practice.attempted);
      Object.assign(REET.state.revision.flashcards, incoming.revision.flashcards);
      Object.assign(REET.state.achievements.unlocked, incoming.achievements.unlocked);
      REET.state.achievements.xp = Math.max(REET.state.achievements.xp, incoming.achievements.xp);
      REET.state.mock.history = REET.state.mock.history.concat(incoming.mock.history || []).slice(-30);
    } else {
      REET.state = incoming;
    }
    REET.saveState();
  };

  REET.resetAllData = function () {
    REET.storageRemove(REET.STORAGE_KEY);
    REET.storageRemove(REET.ACTIVE_TEST_KEY);
    REET.state = REET.defaultState();
    REET.saveState();
  };

  REET.state = REET.loadState();
})(window);
