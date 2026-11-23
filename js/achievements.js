(function (global) {
  "use strict";

  var REET = global.REET = global.REET || {};

  REET.BADGE_DEFINITIONS = [
    {
      id: "first_step",
      title: "पहला कदम",
      desc: "पहला थ्योरी टॉपिक पूरा करें",
      check: function (st, summary) { return summary.completedTopics >= 1; }
    },
    {
      id: "practice_100",
      title: "शताब्दी अभ्यासक",
      desc: "कुल 100 अभ्यास प्रश्न हल करें",
      check: function (st, summary) { return summary.totalAttempted >= 100; }
    },
    {
      id: "practice_500",
      title: "500 प्रश्न योद्धा",
      desc: "कुल 500 अभ्यास प्रश्न हल करें",
      check: function (st, summary) { return summary.totalAttempted >= 500; }
    },
    {
      id: "practice_1000",
      title: "सहस्र साधक",
      desc: "कुल 1,000 अभ्यास प्रश्न हल करें",
      check: function (st, summary) { return summary.totalAttempted >= 1000; }
    },
    {
      id: "first_mock",
      title: "पहला मॉक टेस्ट",
      desc: "अपना पहला मॉक टेस्ट पूरा करें",
      check: function (st) { return (st.mock.history || []).length >= 1; }
    },
    {
      id: "streak_7",
      title: "7-दिन निरंतरता",
      desc: "लगातार 7 दिन अध्ययन या अभ्यास करें",
      check: function (st) { return (st.achievements.streak.longest || 0) >= 7; }
    },
    {
      id: "daily_30",
      title: "Daily 30 चैलेंजर",
      desc: "कम से कम एक Daily 30 चैलेंज पूरा करें",
      check: function (st) { return Object.keys(st.practice.daily30 || {}).length >= 1; }
    },
    {
      id: "subject_revision",
      title: "रिवीजन चैंपियन",
      desc: "किसी एक पूरे विषय का रिवीजन पूरा करें",
      check: function () {
        return REET.SUBJECT_META.some(function (m) {
          return REET.isSubjectRevisionComplete && REET.isSubjectRevisionComplete(m.id);
        });
      }
    }
  ];

  REET.evaluateAchievements = function () {
    var st = REET.state;
    var summary = REET.getProgressSummary();
    var unlocked = st.achievements.unlocked || {};
    var newlyUnlocked = [];

    REET.BADGE_DEFINITIONS.forEach(function (b) {
      if (!unlocked[b.id] && b.check(st, summary)) {
        unlocked[b.id] = { unlockedAt: new Date().toISOString() };
        newlyUnlocked.push(b);
      }
    });

    st.achievements.unlocked = unlocked;

    if (newlyUnlocked.length) {
      newlyUnlocked.forEach(function (b) {
        REET.showToast("उपलब्धि प्राप्त: " + b.title);
      });
    }
    return newlyUnlocked;
  };

  REET.getTrophyMotivation = function () {
    var summary = REET.getProgressSummary();
    var streak = REET.state.achievements.streak.current || 0;
    if (summary.completedTopics === 0 && summary.totalAttempted === 0) {
      return {
        title: "सफर की शुरुआत करें!",
        sub: "आज पहला टॉपिक खोलें और REET 2027 की तैयारी शुरू करें।"
      };
    }
    if (streak >= 7) {
      return {
        title: streak + " दिन की शानदार स्ट्रीक!",
        sub: "नियमित अभ्यास ही सफलता की कुंजी है। आगे बढ़ते रहें!"
      };
    }
    return {
      title: "अच्छी प्रगति (" + summary.overallPercent + "%)",
      sub: summary.totalAttempted + " प्रश्न हल हो चुके हैं। रोज़ थोड़ा अभ्यास जारी रखें!"
    };
  };
})(window);
