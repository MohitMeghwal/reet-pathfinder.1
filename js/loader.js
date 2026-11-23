(function (global) {
  "use strict";

  var REET = global.REET = global.REET || {};

  REET.DATA_FILES = [
    "data/exam-config.js",
    "data/syllabus.js",
    "data/pyq-verified.js",

    "data/cdp-theory-1.js",
    "data/cdp-theory-2.js",
    "data/cdp-theory-3.js",
    "data/cdp-questions-1.js",
    "data/cdp-questions-2.js",
    "data/cdp-questions-3.js",
    "data/cdp-questions-4.js",
    "data/cdp-revision.js",

    "data/hindi-theory-1.js",
    "data/hindi-theory-2.js",
    "data/hindi-theory-3.js",
    "data/hindi-questions-1.js",
    "data/hindi-questions-2.js",
    "data/hindi-questions-3.js",
    "data/hindi-questions-4.js",
    "data/hindi-revision.js",

    "data/english-theory-1.js",
    "data/english-theory-2.js",
    "data/english-theory-3.js",
    "data/english-questions-1.js",
    "data/english-questions-2.js",
    "data/english-questions-3.js",
    "data/english-questions-4.js",
    "data/english-revision.js",

    "data/maths-theory-1.js",
    "data/maths-theory-2.js",
    "data/maths-theory-3.js",
    "data/maths-questions-1.js",
    "data/maths-questions-2.js",
    "data/maths-questions-3.js",
    "data/maths-questions-4.js",
    "data/maths-revision.js",

    "data/evs-theory-1.js",
    "data/evs-theory-2.js",
    "data/evs-theory-3.js",
    "data/evs-questions-1.js",
    "data/evs-questions-2.js",
    "data/evs-questions-3.js",
    "data/evs-questions-4.js",
    "data/evs-revision.js"
  ];

  REET.registerPack = function (pack) {
    if (!pack || typeof pack !== "object") return;
    if (pack.examConfig) {
      REET.data.examConfig = pack.examConfig;
    }
    if (Array.isArray(pack.syllabus)) {
      REET.data.syllabus = pack.syllabus;
    }
    if (Array.isArray(pack.pyqVerified)) {
      REET.data.pyqVerified = REET.data.pyqVerified.concat(pack.pyqVerified);
    }
    if (pack.theory && typeof pack.theory === "object") {
      Object.keys(pack.theory).forEach(function (topicId) {
        REET.data.theory[topicId] = pack.theory[topicId];
      });
    }
    if (Array.isArray(pack.questions)) {
      REET.data.questions = REET.data.questions.concat(pack.questions);
    }
    if (pack.revision && typeof pack.revision === "object") {
      if (Array.isArray(pack.revision.notes)) {
        REET.data.revision.notes = REET.data.revision.notes.concat(pack.revision.notes);
      }
      if (Array.isArray(pack.revision.facts)) {
        REET.data.revision.facts = REET.data.revision.facts.concat(pack.revision.facts);
      }
      if (Array.isArray(pack.revision.flashcards)) {
        REET.data.revision.flashcards = REET.data.revision.flashcards.concat(pack.revision.flashcards);
      }
      if (Array.isArray(pack.revision.formulas)) {
        REET.data.revision.formulas = REET.data.revision.formulas.concat(pack.revision.formulas);
      }
    }
  };

  function loadSingleScript(src) {
    return new Promise(function (resolve) {
      var s = global.document.createElement("script");
      s.src = src;
      s.async = false;
      s.onload = function () {
        REET.data.loadedFiles.push(src);
        resolve(true);
      };
      s.onerror = function () {
        REET.data.skippedFiles.push(src);
        resolve(false);
      };
      global.document.head.appendChild(s);
    });
  }

  REET.loadAllDataFiles = function () {
    return Promise.all(REET.DATA_FILES.map(loadSingleScript));
  };

  REET.validateData = function () {
    var health = {
      duplicateIds: [],
      invalidCorrect: [],
      brokenLinks: [],
      duplicateTexts: [],
      countsBySubject: { cdp: 0, hindi: 0, english: 0, maths: 0, evs: 0 }
    };

    var validSubjects = {};
    var validChapters = {};
    var validTopics = {};

    (REET.data.syllabus || []).forEach(function (subj) {
      validSubjects[subj.id] = true;
      (subj.chapters || []).forEach(function (ch) {
        validChapters[ch.id] = subj.id;
        (ch.topics || []).forEach(function (tp) {
          validTopics[tp.id] = ch.id;
        });
      });
    });

    var seenIds = {};
    var seenTexts = {};

    (REET.data.questions || []).forEach(function (q) {
      if (!q || !q.id) return;
      if (seenIds[q.id]) {
        health.duplicateIds.push(q.id);
      }
      seenIds[q.id] = true;

      if (typeof q.correct !== "number" || q.correct < 0 || q.correct > 3 || !Array.isArray(q.options) || q.options.length !== 4) {
        health.invalidCorrect.push(q.id);
      }

      if (REET.data.syllabus.length > 0) {
        if (!validSubjects[q.subjectId] || !validChapters[q.chapterId] || !validTopics[q.topicId]) {
          health.brokenLinks.push(q.id);
        }
      }

      var normText = String(q.question || "").trim().toLowerCase();
      if (normText) {
        if (seenTexts[normText]) {
          health.duplicateTexts.push(q.id);
        }
        seenTexts[normText] = true;
      }

      if (Object.prototype.hasOwnProperty.call(health.countsBySubject, q.subjectId)) {
        health.countsBySubject[q.subjectId] += 1;
      }
    });

    REET.dataHealth = health;
    if (health.duplicateIds.length || health.invalidCorrect.length || health.brokenLinks.length || health.duplicateTexts.length) {
      console.warn("REET validateData findings:", health);
    }
    return health;
  };
})(window);
