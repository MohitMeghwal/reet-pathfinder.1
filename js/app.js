(function (global) {
  "use strict";

  var REET = global.REET = global.REET || {};
  var doc = global.document;

  var SIDEBAR_ITEMS = [
    { route: "dashboard", href: "#/", label: "होम डैशबोर्ड", icon: "🏠" },
    { route: "library/cdp", href: "#/library/cdp", label: "बाल विकास एवं शिक्षाशास्त्र", icon: "🧠" },
    { route: "library/hindi", href: "#/library/hindi", label: "हिंदी", icon: "📘" },
    { route: "library/english", href: "#/library/english", label: "English", icon: "🔤" },
    { route: "library/maths", href: "#/library/maths", label: "गणित", icon: "📐" },
    { route: "library/evs", href: "#/library/evs", label: "पर्यावरण अध्ययन", icon: "🌍" },
    { route: "pyq-lab", href: "#/pyq-lab", label: "PYQ रिसर्च लैब", icon: "🔬" },
    { route: "practice-imp", href: "#/practice/important", label: "महत्वपूर्ण प्रश्न", icon: "⭐" },
    { route: "practice", href: "#/practice", label: "प्रैक्टिस ज़ोन", icon: "✍️" },
    { route: "mock", href: "#/mock", label: "मॉक टेस्ट सेंटर", icon: "📝" },
    { route: "revision", href: "#/revision", label: "रिवीजन सेंटर", icon: "🔄" },
    { route: "performance", href: "#/performance", label: "मेरी परफॉर्मेंस", icon: "📈" },
    { route: "planner", href: "#/planner", label: "स्टडी प्लानर", icon: "🗓️" },
    { route: "achievements", href: "#/achievements", label: "उपलब्धियाँ", icon: "🏅" }
  ];

  function parseRoute() {
    var hash = global.location.hash || "#/";
    var clean = hash.replace(/^#\/?/, "");
    var parts = clean ? clean.split("/") : [];
    return {
      section: parts[0] || "dashboard",
      arg1: parts[1] || null,
      arg2: parts[2] || null
    };
  }

  function renderSidebar() {
    var ul = doc.getElementById("sidebar-nav-list");
    if (!ul) return;
    var hash = global.location.hash || "#/";
    ul.innerHTML = SIDEBAR_ITEMS.map(function (item) {
      var isActive = (item.href === "#/" && (hash === "" || hash === "#/")) ||
        (item.href !== "#/" && hash.indexOf(item.href) === 0);
      return '<li><a href="' + item.href + '" class="nav-item-link ' + (isActive ? "active" : "") + '">' +
        '<span class="nav-item-icon" aria-hidden="true">' + item.icon + '</span>' +
        '<span>' + REET.escapeHTML(item.label) + '</span></a></li>';
    }).join("");

    var mot = REET.getTrophyMotivation();
    var tTitle = doc.getElementById("trophy-title");
    var tSub = doc.getElementById("trophy-sub");
    if (tTitle) tTitle.textContent = mot.title;
    if (tSub) tSub.textContent = mot.sub;
  }

  function renderTopbarState() {
    var nameEl = doc.getElementById("topbar-student-name");
    var avEl = doc.getElementById("profile-avatar-text");
    var name = (REET.state.profile && REET.state.profile.name) || "Student";
    if (nameEl) nameEl.textContent = name;
    if (avEl) avEl.textContent = name.charAt(0).toUpperCase();

    var notifs = REET.getNotifications();
    var badge = doc.getElementById("notif-badge");
    if (badge) {
      badge.textContent = String(notifs.length);
      badge.hidden = notifs.length === 0;
    }

    var route = parseRoute();
    doc.querySelectorAll(".bottom-nav-item[data-route]").forEach(function (el) {
      el.classList.toggle("active", el.getAttribute("data-route") === route.section);
    });
  }

  REET.renderCurrentView = function () {
    var root = doc.getElementById("view-root");
    if (!root) return;
    var r = parseRoute();
    var html = "";
    if (r.section === "library") html = REET.renderLibrary(r.arg1, r.arg2);
    else if (r.section === "pyq-lab") html = REET.renderPyqLab();
    else if (r.section === "practice") html = REET.renderPractice(r.arg1, r.arg2);
    else if (r.section === "mock") html = REET.renderMock();
    else if (r.section === "revision") html = REET.renderRevision(r.arg1);
    else if (r.section === "performance") html = REET.renderPerformance();
    else if (r.section === "planner") html = REET.renderPlanner();
    else if (r.section === "achievements") html = REET.renderAchievements();
    else html = REET.renderDashboard();

    root.innerHTML = html;
    renderSidebar();
    renderTopbarState();
  };

  function openModal(title, bodyHtml) {
    var modal = doc.getElementById("modal-root");
    doc.getElementById("modal-title").textContent = title;
    doc.getElementById("modal-body").innerHTML = bodyHtml;
    modal.hidden = false;
  }

  function closeModal() {
    var modal = doc.getElementById("modal-root");
    if (modal) modal.hidden = true;
  }

  function openExamInfoModal() {
    var cfg = REET.data.examConfig;
    var rows = (cfg.sections || []).map(function (s) {
      return '<tr><td>' + REET.escapeHTML(s.title) + '</td><td>' + s.questions + '</td><td>' + s.marks + '</td></tr>';
    }).join("");
    openModal("Target: REET 2027 Level 1 पैटर्न",
      '<div class="cbt-banner">⚠️ ' + REET.escapeHTML(cfg.bannerText) + '</div>' +
      '<p>कुल प्रश्न: <strong>' + cfg.totalQuestions + '</strong> | कुल अंक: <strong>' + cfg.totalMarks + '</strong> | समय: <strong>' + cfg.durationMinutes + ' मिनट</strong> | नकारात्मक अंकन: <strong>' + (cfg.negativeMarking ? "हाँ" : "नहीं (प्रस्तावित)") + '</strong></p>' +
      '<table class="theory-table"><thead><tr><th>खंड</th><th>प्रश्न</th><th>अंक</th></tr></thead><tbody>' + rows + '</tbody></table>'
    );
  }

  function openSettingsModal() {
    var p = REET.state.profile;
    var countsHtml = REET.SUBJECT_META.map(function (m) {
      var c = REET.dataHealth.countsBySubject[m.id] || 0;
      return '<li>' + REET.escapeHTML(m.short) + ': <strong>' + c + ' / ' + m.target + '</strong> प्रश्न</li>';
    }).join("");

    openModal("प्रोफ़ाइल, सेटिंग्स एवं डेटा स्थिति",
      '<div class="form-field"><label for="set-name">विद्यार्थी का नाम</label><input id="set-name" class="form-control" value="' + REET.escapeHTML(p.name) + '"></div>' +
      '<button type="button" class="btn btn-teal btn-sm" style="margin-top:8px;" data-action="save-profile">नाम सेव करें</button>' +
      '<hr style="margin:14px 0;">' +
      '<h3>डेटा स्थिति (Data Status)</h3><ul>' + countsHtml + '</ul>' +
      '<hr style="margin:14px 0;">' +
      '<p style="font-size:0.86rem;color:var(--warning-600);background:var(--warning-100);padding:8px;border-radius:6px;">ब्राउज़र डेटा क्लियर करने पर प्रगति मिट सकती है। यह क्लाउड सिंक नहीं है — समय-समय पर Export करें।</p>' +
      '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px;">' +
        '<button type="button" class="btn btn-outline btn-sm" data-action="export-data">Export Progress (JSON)</button>' +
        '<label class="btn btn-outline btn-sm" style="cursor:pointer;">Import Progress<input id="import-file-input" type="file" accept=".json" hidden></label>' +
        '<button type="button" class="btn btn-danger btn-sm" data-action="reset-data">Reset Data</button>' +
      '</div>'
    );
  }

  function closeDrawer() {
    var sb = doc.getElementById("sidebar");
    var bd = doc.getElementById("drawer-backdrop");
    if (sb) sb.classList.remove("open");
    if (bd) bd.hidden = true;
  }

  function bindGlobalEvents() {
    global.addEventListener("hashchange", function () {
      closeDrawer();
      REET.renderCurrentView();
    });

    doc.getElementById("hamburger-btn").addEventListener("click", function () {
      doc.getElementById("sidebar").classList.add("open");
      doc.getElementById("drawer-backdrop").hidden = false;
    });

    doc.getElementById("drawer-close-btn").addEventListener("click", closeDrawer);
    doc.getElementById("drawer-backdrop").addEventListener("click", closeDrawer);
    doc.getElementById("target-exam-btn").addEventListener("click", openExamInfoModal);
    doc.getElementById("profile-btn").addEventListener("click", openSettingsModal);
    doc.getElementById("bottom-profile-btn").addEventListener("click", openSettingsModal);
    doc.getElementById("modal-close-btn").addEventListener("click", closeModal);

    doc.getElementById("notif-btn").addEventListener("click", function () {
      var pop = doc.getElementById("notif-popover");
      var list = REET.getNotifications();
      pop.innerHTML = list.length
        ? list.map(function (n) { return '<p style="margin:6px 0;"><a href="' + n.route + '" style="color:var(--teal-700);font-weight:600;">• ' + REET.escapeHTML(n.text) + '</a></p>'; }).join("")
        : '<p style="margin:0;">कोई नया रिमाइंडर नहीं है।</p>';
      pop.hidden = !pop.hidden;
    });

    var searchInput = doc.getElementById("global-search-input");
    var searchPop = doc.getElementById("search-results-popover");
    searchInput.addEventListener("input", function () {
      var hits = REET.performGlobalSearch(searchInput.value);
      if (!hits.length) {
        searchPop.hidden = true;
        return;
      }
      searchPop.innerHTML = hits.map(function (h) {
        return '<a href="' + h.route + '" style="display:block;padding:10px 12px;border-bottom:1px solid #eee;">' +
          '<small style="color:var(--teal-700);font-weight:700;">' + REET.escapeHTML(h.type) + '</small><br>' +
          '<span>' + REET.escapeHTML(h.title) + '</span></a>';
      }).join("");
      searchPop.hidden = false;
    });

    doc.addEventListener("click", function (e) {
      if (!e.target.closest(".topbar-search")) searchPop.hidden = true;
      var btn = e.target.closest("[data-action]");
      if (!btn) return;
      var act = btn.getAttribute("data-action");

      if (act === "answer-qotd") {
        var qid = btn.getAttribute("data-qid");
        var opt = Number(btn.getAttribute("data-opt"));
        var qotd = REET.getQuestionOfTheDay();
        if (qotd && qotd.id === qid) {
          REET.state.qotd[REET.getTodayKey()] = { qid: qid, choice: opt, submitted: true };
          REET.saveState();
          REET.renderCurrentView();
        }
      } else if (act === "toggle-task") {
        REET.togglePlannerTask(btn.getAttribute("data-task-id"));
        REET.renderCurrentView();
      } else if (act === "delete-task") {
        REET.deletePlannerTask(btn.getAttribute("data-task-id"));
        REET.renderCurrentView();
      } else if (act === "add-planner-task") {
        var inp = doc.getElementById("new-task-input");
        if (inp && inp.value.trim()) {
          REET.addPlannerTask(inp.value, "cdp");
          REET.renderCurrentView();
        }
      } else if (act === "save-planner-targets") {
        var dq = doc.getElementById("pl-dq").value;
        var dm = doc.getElementById("pl-dm").value;
        REET.updatePlannerTargets(dq, dm, Number(dq) * 6);
        REET.showToast("लक्ष्य सेव हो गए!");
        REET.renderCurrentView();
      } else if (act === "toggle-bookmark") {
        var tid = btn.getAttribute("data-topic-id");
        REET.state.study.bookmarkedTopics[tid] = !REET.state.study.bookmarkedTopics[tid];
        REET.saveState();
        REET.renderCurrentView();
      } else if (act === "complete-topic") {
        var ctid = btn.getAttribute("data-topic-id");
        var info = REET.getTopicById(ctid);
        REET.updateProgress("topic_complete", {
          subjectId: info ? info.subject.id : REET.uiState.librarySubject,
          topicId: ctid,
          title: info ? info.topic.title : ctid
        });
        REET.showToast("टॉपिक थ्योरी पूर्ण चिह्नित!");
        REET.renderCurrentView();
      } else if (act === "set-practice-mode") {
        REET.uiState.practiceMode = btn.getAttribute("data-mode");
        REET.renderCurrentView();
      } else if (act === "start-practice") {
        var sEl = doc.getElementById("p-subj");
        var dEl = doc.getElementById("p-diff");
        var cEl = doc.getElementById("p-count");
        var started = REET.startPractice({
          mode: REET.uiState.practiceMode,
          subjectId: sEl ? sEl.value : "",
          topicId: REET.uiState.practiceTopic,
          difficulty: dEl ? dEl.value : "",
          count: cEl ? Number(cEl.value) : 15
        });
        if (!started) REET.showToast("चयनित फ़िल्टर के लिए अभी प्रश्न उपलब्ध नहीं हैं।");
        REET.renderCurrentView();
      } else if (act === "start-pattern-practice") {
        REET.uiState.practiceMode = "mixed";
        global.location.hash = "#/practice";
      } else if (act === "practice-answer") {
        REET.saveAnswer(btn.getAttribute("data-qid"), Number(btn.getAttribute("data-opt")));
        REET.renderCurrentView();
      } else if (act === "practice-prev") {
        if (REET.practiceSession && REET.practiceSession.currentIndex > 0) {
          REET.practiceSession.currentIndex -= 1;
          REET.renderCurrentView();
        }
      } else if (act === "practice-next") {
        if (REET.practiceSession && REET.practiceSession.currentIndex < REET.practiceSession.questions.length - 1) {
          REET.practiceSession.currentIndex += 1;
          REET.renderCurrentView();
        }
      } else if (act === "practice-finish") {
        REET.finishPractice();
        REET.renderCurrentView();
      } else if (act === "practice-reset-ui") {
        REET.practiceSession = null;
        REET.renderCurrentView();
      } else if (act === "start-official-mock") {
        if (!REET.startMock({ mode: "official" })) {
          REET.showToast("मॉक टेस्ट के लिए प्रश्न अभी पर्याप्त नहीं हैं।");
        }
        REET.renderCurrentView();
      } else if (act === "start-custom-mock") {
        var cs = doc.getElementById("cm-subj").value;
        var cc = Number(doc.getElementById("cm-count").value);
        var ct = Number(doc.getElementById("cm-time").value);
        if (!REET.startMock({ mode: "custom", subjects: cs ? [cs] : [], count: cc, durationMinutes: ct })) {
          REET.showToast("चयनित विषय में अभी प्रश्न उपलब्ध नहीं हैं।");
        }
        REET.renderCurrentView();
      } else if (act === "mock-select") {
        REET.selectMockChoice(Number(btn.getAttribute("data-opt")));
        REET.renderCurrentView();
      } else if (act === "mock-clear") {
        REET.clearMockChoice();
        REET.renderCurrentView();
      } else if (act === "mock-mark") {
        REET.toggleMarkForReview();
        REET.renderCurrentView();
      } else if (act === "mock-prev") {
        if (REET.activeTest && REET.activeTest.currentIndex > 0) {
          REET.goToMockQuestion(REET.activeTest.currentIndex - 1);
          REET.renderCurrentView();
        }
      } else if (act === "mock-save-next") {
        if (REET.activeTest && REET.activeTest.currentIndex < REET.activeTest.questionIds.length - 1) {
          REET.goToMockQuestion(REET.activeTest.currentIndex + 1);
          REET.renderCurrentView();
        }
      } else if (act === "mock-goto") {
        REET.goToMockQuestion(Number(btn.getAttribute("data-idx")));
        REET.renderCurrentView();
      } else if (act === "mock-confirm-submit") {
        var cnt = REET.getMockPaletteCounts();
        openModal("मॉक टेस्ट सबमिट करें?",
          '<p>कुल प्रश्न: <strong>' + cnt.total + '</strong> | उत्तरित: <strong>' + cnt.answered + '</strong> | अनुत्तरित: <strong>' + cnt.unanswered + '</strong> | समीक्षा हेतु चिह्नित: <strong>' + cnt.marked + '</strong></p>' +
          '<button type="button" class="btn btn-cta" data-action="mock-submit-now">हाँ, सबमिट करें</button>'
        );
      } else if (act === "mock-submit-now") {
        closeModal();
        REET.submitMock(false);
      } else if (act === "mock-filter-res") {
        REET.uiState.mockResultFilter = btn.getAttribute("data-filter");
        REET.renderCurrentView();
      } else if (act === "mock-clear-result") {
        REET.lastMockResult = null;
        REET.renderCurrentView();
      } else if (act === "set-rev-tab") {
        REET.uiState.revisionTab = btn.getAttribute("data-tab");
        REET.renderCurrentView();
      } else if (act === "flip-flashcard") {
        REET.uiState.flashcardFlipped = !REET.uiState.flashcardFlipped;
        REET.renderCurrentView();
      } else if (act === "rate-flashcard") {
        REET.markFlashcard(
          btn.getAttribute("data-cid"),
          btn.getAttribute("data-status"),
          btn.getAttribute("data-topic"),
          btn.getAttribute("data-chap")
        );
        REET.uiState.flashcardIdx += 1;
        REET.uiState.flashcardFlipped = false;
        REET.renderCurrentView();
      } else if (act === "save-profile") {
        var nm = doc.getElementById("set-name").value.trim();
        if (nm) REET.state.profile.name = nm;
        REET.saveState();
        closeModal();
        REET.showToast("प्रोफ़ाइल अपडेट हो गई!");
        REET.renderCurrentView();
      } else if (act === "export-data") {
        REET.exportProgress();
      } else if (act === "reset-data") {
        if (global.confirm("क्या आप वाकई अपनी सारी प्रगति रीसेट करना चाहते हैं?") && global.confirm("अंतिम पुष्टि: यह डेटा वापस नहीं आएगा। रीसेट करें?")) {
          REET.resetAllData();
          closeModal();
          REET.showToast("सारा डेटा रीसेट हो गया।");
          REET.renderCurrentView();
        }
      }
    });

    doc.addEventListener("change", function (e) {
      if (e.target && e.target.id === "import-file-input" && e.target.files[0]) {
        var reader = new FileReader();
        reader.onload = function (ev) {
          try {
            var merge = global.confirm("OK = मौजूदा प्रगति में मर्ज (Merge) करें | Cancel = पुरानी प्रगति को बदलें (Replace)");
            REET.importProgress(ev.target.result, merge ? "merge" : "replace");
            closeModal();
            REET.showToast("प्रगति सफलतापूर्वक इम्पोर्ट हो गई!");
            REET.renderCurrentView();
          } catch (err) {
            REET.showToast("अमान्य JSON फ़ाइल।");
          }
        };
        reader.readAsText(e.target.files[0]);
      }
    });

    doc.addEventListener("keydown", function (e) {
      if (!REET.activeTest) return;
      if (e.key >= "1" && e.key <= "4") {
        REET.selectMockChoice(Number(e.key) - 1);
        REET.renderCurrentView();
      } else if (e.key === "ArrowRight") {
        REET.goToMockQuestion(REET.activeTest.currentIndex + 1);
        REET.renderCurrentView();
      } else if (e.key === "ArrowLeft") {
        REET.goToMockQuestion(REET.activeTest.currentIndex - 1);
        REET.renderCurrentView();
      }
    });

    global.addEventListener("scroll", function () {
      var r = parseRoute();
      if (r.section !== "library" || !REET.uiState.libraryTopicId) return;
      var docEl = doc.documentElement;
      var maxScroll = docEl.scrollHeight - global.innerHeight;
      if (maxScroll <= 0) return;
      var pct = Math.min(100, Math.max(0, Math.round((global.scrollY / maxScroll) * 100)));
      var bar = doc.getElementById("topic-reading-fill");
      if (bar) bar.style.width = pct + "%";
      REET.updateProgress("topic_scroll", { topicId: REET.uiState.libraryTopicId, percent: pct });
    }, { passive: true });
  }

  function init() {
    doc.getElementById("brand-logo-slot").innerHTML = REET.svg.logo();
    doc.getElementById("mobile-logo-slot").innerHTML = REET.svg.logo();
    doc.getElementById("sidebar-trophy-icon").innerHTML = REET.svg.trophy();

    REET.restoreActiveTest();
    if (REET.activeTest) REET.startMockTimer();

    bindGlobalEvents();
    REET.loadAllDataFiles().then(function () {
      REET.validateData();
      REET.checkOptionalAssets();
      REET.renderCurrentView();
    });
  }

  if (doc.readyState === "loading") {
    doc.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})(window);
