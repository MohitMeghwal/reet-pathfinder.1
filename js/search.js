(function (global) {
  "use strict";

  var REET = global.REET = global.REET || {};

  REET.performGlobalSearch = function (query) {
    var q = String(query || "").trim().toLowerCase();
    if (q.length < 2) return [];

    var results = [];

    (REET.data.syllabus || []).forEach(function (subj) {
      if (subj.title.toLowerCase().indexOf(q) !== -1) {
        results.push({
          type: "विषय",
          title: subj.title,
          route: "#/library/" + subj.id
        });
      }
      (subj.chapters || []).forEach(function (ch) {
        if (ch.title.toLowerCase().indexOf(q) !== -1) {
          results.push({
            type: "अध्याय",
            title: ch.title + " (" + subj.shortTitle + ")",
            route: "#/library/" + subj.id
          });
        }
        (ch.topics || []).forEach(function (tp) {
          if (tp.title.toLowerCase().indexOf(q) !== -1) {
            results.push({
              type: "टॉपिक",
              title: tp.title,
              route: "#/library/" + subj.id + "/" + tp.id
            });
          }
        });
      });
    });

    (REET.data.questions || []).some(function (item) {
      if (item.question.toLowerCase().indexOf(q) !== -1 || item.id.toLowerCase().indexOf(q) !== -1) {
        results.push({
          type: "प्रश्न (" + item.id + ")",
          title: item.question.slice(0, 72) + (item.question.length > 72 ? "..." : ""),
          route: "#/practice/topic/" + item.topicId
        });
      }
      return results.length >= 14;
    });

    return results.slice(0, 14);
  };
})(window);
