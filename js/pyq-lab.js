(function (global) {
  "use strict";

  var REET = global.REET = global.REET || {};

  REET.getVerifiedPYQs = function (filters) {
    var f = filters || {};
    var fromBank = (REET.data.questions || []).filter(function (q) {
      return q.category === "verified_pyq" && q.verificationStatus === "verified";
    });
    var fromFile = (REET.data.pyqVerified || []).filter(function (q) {
      return q && q.category === "verified_pyq";
    });
    var merged = fromFile.concat(fromBank);

    return merged.filter(function (q) {
      if (f.subjectId && q.subjectId !== f.subjectId) return false;
      if (f.year && String(q.year) !== String(f.year)) return false;
      if (f.chapterId && q.chapterId !== f.chapterId) return false;
      if (f.topicId && q.topicId !== f.topicId) return false;
      if (f.difficulty && q.difficulty !== f.difficulty) return false;
      return true;
    });
  };

  REET.getPYQAnalytics = function (filters) {
    var pyqs = REET.getVerifiedPYQs(filters);
    if (!pyqs.length) {
      return {
        hasData: false,
        total: 0,
        years: [],
        bySubject: [],
        topTopics: [],
        repeatedTags: []
      };
    }

    var yearSet = {};
    var subjCounts = {};
    var topicCounts = {};
    var tagCounts = {};

    pyqs.forEach(function (q) {
      if (q.year) yearSet[q.year] = true;
      subjCounts[q.subjectId] = (subjCounts[q.subjectId] || 0) + 1;
      if (q.topicId) topicCounts[q.topicId] = (topicCounts[q.topicId] || 0) + 1;
      (q.tags || []).forEach(function (t) {
        tagCounts[t] = (tagCounts[t] || 0) + 1;
      });
    });

    var bySubject = REET.SUBJECT_META.map(function (m) {
      return { label: m.short, count: subjCounts[m.id] || 0 };
    });

    var topTopics = Object.keys(topicCounts).map(function (tid) {
      var info = REET.getTopicById(tid);
      return { label: info ? info.topic.title : tid, count: topicCounts[tid] };
    }).sort(function (a, b) { return b.count - a.count; }).slice(0, 6);

    var repeatedTags = Object.keys(tagCounts).map(function (t) {
      return { label: t, count: tagCounts[t] };
    }).sort(function (a, b) { return b.count - a.count; }).slice(0, 8);

    return {
      hasData: true,
      total: pyqs.length,
      years: Object.keys(yearSet).sort(),
      bySubject: bySubject,
      topTopics: topTopics,
      repeatedTags: repeatedTags
    };
  };
})(window);
