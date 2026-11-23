(function (global) {
  "use strict";

  var REET = global.REET = global.REET || {};

  REET.getTodayPracticeCount = function () {
    var today = REET.getTodayKey();
    return (REET.state.practice.dailyLog && REET.state.practice.dailyLog[today]) || 0;
  };

  REET.togglePlannerTask = function (taskId) {
    var tasks = REET.state.planner.tasks || [];
    var task = tasks.find(function (t) { return t.id === taskId; });
    if (!task) return;
    task.done = !task.done;
    if (task.done) {
      REET.touchStreak();
      REET.addXP(REET.XP_TABLE.PLANNER_TASK);
      REET.logActivity("planner", "लक्ष्य पूर्ण: " + task.title, "#/planner");
    }
    if (REET.evaluateAchievements) REET.evaluateAchievements();
    REET.saveState();
  };

  REET.addPlannerTask = function (title, subjectId) {
    var clean = String(title || "").trim();
    if (!clean) return null;
    var item = {
      id: "task-" + Date.now(),
      title: clean,
      subjectId: subjectId || "cdp",
      done: false
    };
    REET.state.planner.tasks.unshift(item);
    REET.saveState();
    return item;
  };

  REET.deletePlannerTask = function (taskId) {
    REET.state.planner.tasks = (REET.state.planner.tasks || []).filter(function (t) {
      return t.id !== taskId;
    });
    REET.saveState();
  };

  REET.updatePlannerTargets = function (dailyQ, dailyMin, weeklyQ) {
    var p = REET.state.profile;
    p.dailyQuestionTarget = Math.max(5, Math.min(200, Number(dailyQ) || 30));
    p.dailyMinutesTarget = Math.max(10, Math.min(480, Number(dailyMin) || 60));
    REET.state.planner.weeklyGoalQuestions = Math.max(20, Math.min(1400, Number(weeklyQ) || 180));
    REET.saveState();
  };

  REET.getWeeklyPracticeCount = function () {
    var log = REET.state.practice.dailyLog || {};
    var sum = 0;
    var now = new Date();
    for (var i = 0; i < 7; i++) {
      var d = new Date(now.getTime() - i * 86400000);
      var key = d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
      sum += log[key] || 0;
    }
    return sum;
  };

  REET.getPlannerSuggestions = function () {
    var list = [];
    var summary = REET.getProgressSummary();
    var todayCount = REET.getTodayPracticeCount();
    var target = REET.state.profile.dailyQuestionTarget || 30;

    if (todayCount < target) {
      list.push({
        title: "दैनिक प्रश्न लक्ष्य पूरा करें (" + todayCount + "/" + target + ")",
        route: "#/practice"
      });
    }

    var lowestSubj = null;
    REET.SUBJECT_META.forEach(function (m) {
      var st = summary.subjectStats[m.id];
      if (!st) return;
      if (!lowestSubj || st.percent < lowestSubj.percent) {
        lowestSubj = { id: m.id, title: m.title, percent: st.percent };
      }
    });
    if (lowestSubj) {
      list.push({
        title: lowestSubj.title + " का अध्ययन बढ़ाएँ (" + lowestSubj.percent + "% पूर्ण)",
        route: "#/library/" + lowestSubj.id
      });
    }

    var wrongCount = REET.getWrongQuestions ? REET.getWrongQuestions().length : 0;
    if (wrongCount > 0) {
      list.push({
        title: "गलत उत्तरों का पुनरावलोकन (" + wrongCount + " प्रश्न)",
        route: "#/revision"
      });
    }

    return list;
  };
})(window);
