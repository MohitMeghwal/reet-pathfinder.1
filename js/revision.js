(function (global) {
  "use strict";

  var REET = global.REET = global.REET || {};

  REET.getWrongQuestions = function (subjectId) {
    var attempted = REET.state.practice.attempted || {};
    return (REET.data.questions || []).filter(function (q) {
      if (subjectId && q.subjectId !== subjectId) return false;
      var rec = attempted[q.id];
      return Boolean(rec && rec.attempts > 0 && rec.lastCorrect === false);
    });
  };

  REET.getFlashcards = function (subjectId, onlyNeedsRevision) {
    var fcState = REET.state.revision.flashcards || {};
    return (REET.data.revision.flashcards || []).filter(function (card) {
      if (subjectId && card.subjectId !== subjectId) return false;
      if (onlyNeedsRevision && fcState[card.id] !== "needs_revision") return false;
      return true;
    });
  };

  REET.markFlashcard = function (cardId, status, topicId, chapterId) {
    REET.touchStreak();
    REET.state.revision.flashcards[cardId] = status; // "remembered" | "needs_revision"
    if (topicId) REET.state.revision.reviewedTopics[topicId] = true;
    if (chapterId) REET.state.revision.reviewedChapters[chapterId] = true;
    REET.addXP(REET.XP_TABLE.REVISION_CARD);
    if (REET.evaluateAchievements) REET.evaluateAchievements();
    REET.saveState();
  };

  REET.markTopicReviewed = function (topicId, chapterId) {
    if (topicId) REET.state.revision.reviewedTopics[topicId] = true;
    if (chapterId) REET.state.revision.reviewedChapters[chapterId] = true;
    if (REET.evaluateAchievements) REET.evaluateAchievements();
    REET.saveState();
  };

  REET.getNotes = function (subjectId, chapterId) {
    return (REET.data.revision.notes || []).filter(function (n) {
      if (subjectId && n.subjectId !== subjectId) return false;
      if (chapterId && n.chapterId !== chapterId) return false;
      return true;
    });
  };

  REET.getFacts = function (subjectId) {
    return (REET.data.revision.facts || []).filter(function (f) {
      if (subjectId && f.subjectId !== subjectId) return false;
      return true;
    });
  };

  REET.getFormulas = function () {
    return REET.data.revision.formulas || [];
  };

  REET.isSubjectRevisionComplete = function (subjectId) {
    var subj = (REET.data.syllabus || []).find(function (s) { return s.id === subjectId; });
    if (!subj || !subj.chapters || !subj.chapters.length) return false;
    var cards = REET.getFlashcards(subjectId, false);
    if (!cards.length) return false;
    var rememberedCount = cards.filter(function (c) {
      return REET.state.revision.flashcards[c.id] === "remembered";
    }).length;
    return rememberedCount >= Math.ceil(cards.length * 0.8);
  };
})(window);
