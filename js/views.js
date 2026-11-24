(function (global) {
  "use strict";

  var REET = global.REET = global.REET || {};
  var esc = REET.escapeHTML;

  REET.uiState = {
    librarySubject: "cdp",
    libraryTopicId: null,
    practiceMode: "mixed",
    practiceSubj: "",
    practiceChap: "",
    practiceTopic: "",
    practiceDiff: "",
    practiceCount: 15,
    revisionTab: "notes",
    revisionSubj: "",
    flashcardIdx: 0,
    flashcardFlipped: false,
    flashcardOnlyReview: false,
    mockResultFilter: "all"
  };

  function renderSubjectGraphic(subjId) {
    if (REET.assets[subjId]) {
      return '<img src="' + esc(REET.assets[subjId]) + '" alt="" loading="lazy">';
    }
    return REET.svg.subjectArt(subjId);
  }

  /* 1. DASHBOARD (Matches Reference Image Layout & Visual Hierarchy) */
  REET.renderDashboard = function () {
    var summary = REET.getProgressSummary();
    var st = REET.state;
    var hasProgress = summary.completedTopics > 0 || summary.totalAttempted > 0;
    var heroRoute = "#/library/cdp";
    var heroBtnText = "अपनी पढ़ाई शुरू करो →";
    if (hasProgress && st.study.lastPosition) {
      heroRoute = "#/library/" + st.study.lastPosition.subjectId + "/" + st.study.lastPosition.topicId;
      heroBtnText = "पढ़ाई जारी रखें →";
    }

    var heroVisual = REET.assets.hero
      ? '<img src="' + esc(REET.assets.hero) + '" alt="REET Pathfinder Academy" loading="lazy">'
      : REET.svg.heroPalaceAndStudents();

    var mockDisplay = summary.lastMock ? summary.lastMock.percent + "%" : "0%";
    var mockSub = summary.lastMock ? (summary.lastMock.score + "/" + summary.lastMock.maxScore) : "कोई टेस्ट नहीं";

    var subjectCardsHtml = REET.SUBJECT_META.map(function (m) {
      var sData = (REET.data.syllabus || []).find(function (s) { return s.id === m.id; });
      var chTotal = sData ? (sData.chapters || []).length : 0;
      var qCount = REET.dataHealth.countsBySubject[m.id] || 0;
      var stSub = summary.subjectStats[m.id] || { percent: 0 };
      return '<article class="subject-card" data-subject="' + esc(m.id) + '">' +
        '<h3 class="subject-card-title">' + esc(m.title) + '</h3>' +
        '<div class="subject-card-art">' + renderSubjectGraphic(m.id) + '</div>' +
        '<div class="subject-card-body">' +
          '<p class="subject-card-meta">' + qCount + ' प्रश्न | ' + chTotal + ' चैप्टर</p>' +
          '<p class="subject-card-meta" style="font-weight:700;">' + stSub.percent + '% पूर्ण</p>' +
          '<div class="subject-progress-track"><div class="subject-progress-fill" style="width:' + stSub.percent + '%"></div></div>' +
        '</div>' +
        '<a class="subject-card-btn btn" href="#/library/' + esc(m.id) + '">अध्ययन शुरू करें →</a>' +
        '<a class="subject-card-arrow" href="#/library/' + esc(m.id) + '" aria-label="' + esc(m.title) + ' खोलें">→</a>' +
      '</article>';
    }).join("");

    var tasks = (st.planner.tasks || []).slice(0, 5);
    var doneTasks = tasks.filter(function (t) { return t.done; }).length;
    var tasksHtml = tasks.length
      ? tasks.map(function (t) {
          return '<label style="display:flex;align-items:center;gap:8px;min-height:32px;font-size:0.86rem;cursor:pointer;">' +
            '<input type="checkbox" data-action="toggle-task" data-task-id="' + esc(t.id) + '" ' + (t.done ? "checked" : "") + '>' +
            '<span style="' + (t.done ? "text-decoration:line-through;opacity:0.65;" : "") + '">' + esc(t.title) + '</span>' +
          '</label>';
        }).join("")
      : '<p style="font-size:0.86rem;color:var(--text-muted);">आज कोई लक्ष्य नहीं जोड़ा गया है।</p>';

    var qotd = REET.getQuestionOfTheDay();
    var todayKey = REET.getTodayKey();
    var qotdSaved = st.qotd && st.qotd[todayKey];
    var qotdHtml = "";
    if (!qotd) {
      qotdHtml = '<p>प्रश्न डेटा लोड होने पर आज का महत्वपूर्ण प्रश्न यहाँ दिखेगा।</p>';
    } else {
      var topicInfo = REET.getTopicById(qotd.topicId);
      var chLabel = topicInfo ? topicInfo.chapter.title.split(":")[0] : qotd.subjectId.toUpperCase();
      var opts = qotd.options.map(function (opt, idx) {
        var cls = "option-btn";
        if (qotdSaved && qotdSaved.submitted) {
          if (idx === qotd.correct) cls += " correct";
          else if (idx === qotdSaved.choice) cls += " wrong";
        }
        return '<button type="button" class="' + cls + '" style="min-height:38px;padding:7px 10px;font-size:0.88rem;" data-action="answer-qotd" data-qid="' + esc(qotd.id) + '" data-opt="' + idx + '" ' + (qotdSaved && qotdSaved.submitted ? "disabled" : "") + '>' +
          '<strong>' + ["A", "B", "C", "D"][idx] + '.</strong> <span>' + esc(opt) + '</span></button>';
      }).join("");

      qotdHtml = '<p style="font-weight:700;margin:0 0 8px;font-size:0.94rem;">' + esc(qotd.question) + '</p>' +
        '<div class="qotd-split">' +
          '<div class="option-list" style="margin:0;gap:6px;">' + opts + '</div>' +
          '<div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px;">' +
            '<span style="font-size:2.4rem;" aria-hidden="true">💡</span>' +
            '<span class="badge" style="background:var(--orange-500);color:#fff;">' + esc(chLabel) + '</span>' +
          '</div>' +
        '</div>' +
        (qotdSaved && qotdSaved.submitted ? '<div class="explanation-box" style="font-size:0.86rem;"><strong>व्याख्या:</strong> ' + esc(qotd.explanation) + '</div>' : "");
    }

    var lastMockHtml = summary.lastMock
      ? '<div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap;">' +
          REET.charts.donut(summary.lastMock.percent, summary.lastMock.percent + "%") +
          '<div><p style="margin:0;font-size:0.88rem;color:var(--text-secondary);">आपका स्कोर</p>' +
          '<p style="margin:2px 0 8px;font-size:1.3rem;font-weight:800;">' + summary.lastMock.score + ' / ' + summary.lastMock.maxScore + '</p>' +
          '<a href="#/mock" class="btn btn-teal btn-sm">विस्तृत रिपोर्ट देखें →</a></div>' +
        '</div>'
      : '<div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap;">' +
          REET.charts.donut(0, "0%") +
          '<div><p style="margin:0;font-size:0.88rem;color:var(--text-secondary);">आपका स्कोर</p>' +
          '<p style="margin:2px 0 8px;font-size:1.15rem;font-weight:800;">0 / 150</p>' +
          '<a href="#/mock" class="btn btn-teal btn-sm">पहला टेस्ट दें →</a></div>' +
        '</div>';

    var step1 = true;
    var step2 = summary.completedTopics >= 1;
    var step3 = summary.totalAttempted >= 10;
    var step4 = (st.mock.history || []).length >= 1;
    var step5 = summary.overallPercent >= 80 && step4;

    var journeyHtml = [
      { label: "पंजीकरण", done: step1 },
      { label: "सिलेबस अध्ययन", done: step2 },
      { label: "प्रैक्टिस शुरू", done: step3 },
      { label: "मॉक टेस्ट दें", done: step4 },
      { label: "REET में सफलता!", done: step5 }
    ].map(function (s) {
      return '<div class="journey-step ' + (s.done ? "done" : "") + '">' +
        '<span class="journey-check">' + (s.done ? "✓" : "•") + '</span>' +
        '<span>' + esc(s.label) + '</span></div>';
    }).join("");

    return '<div class="dashboard-canvas">' +
      '<section class="hero-banner">' +
        '<div class="hero-copy">' +
          '<h1 class="hero-title">तुम्हारी <span class="hero-highlight">REET की तैयारी</span><br>अब एक नए <span class="hero-highlight">Adventure</span> की शुरुआत है!</h1>' +
          '<p class="hero-sub">सीखो, समझो, अभ्यास करो और REET Level 1 में सफलता पाओ!</p>' +
          '<a href="' + heroRoute + '" class="btn btn-cta">' + heroBtnText + '</a>' +
        '</div>' +
        '<div class="hero-art">' + heroVisual + '</div>' +
      '</section>' +

      '<section class="stats-grid" aria-label="मुख्य आँकड़े">' +
        '<div class="parchment-card stat-card">' +
          '<div class="stat-icon-box" aria-hidden="true">🏆</div>' +
          '<div style="flex:1;"><div class="stat-label">कुल तैयारी प्रगति</div><div class="stat-value">' + summary.overallPercent + '%</div>' +
          '<div class="stat-bar"><div class="stat-bar-fill" style="width:' + summary.overallPercent + '%"></div></div></div>' +
        '</div>' +
        '<div class="parchment-card stat-card">' +
          '<div class="stat-icon-box" aria-hidden="true">📖</div>' +
          '<div><div class="stat-label">पढ़े हुए चैप्टर</div><div class="stat-value">' + summary.completedChapters + ' / ' + summary.totalChapters + '</div></div>' +
        '</div>' +
        '<div class="parchment-card stat-card">' +
          '<div class="stat-icon-box" aria-hidden="true">✅</div>' +
          '<div><div class="stat-label">कुल प्रश्न अभ्यास</div><div class="stat-value">' + summary.totalAttempted + '</div></div>' +
        '</div>' +
        '<div class="parchment-card stat-card">' +
          '<div class="stat-icon-box" aria-hidden="true">🎯</div>' +
          '<div><div class="stat-label">मॉक टेस्ट स्कोर</div><div class="stat-value">' + mockDisplay + '</div><div style="font-size:0.76rem;color:var(--text-muted);">' + esc(mockSub) + '</div></div>' +
        '</div>' +
      '</section>' +

      '<section class="subjects-and-goal-row" aria-label="REET विषय एवं आज का लक्ष्य">' +
        subjectCardsHtml +
        '<aside class="parchment-card goal-card">' +
          '<div>' +
            '<div class="widget-header" style="margin-bottom:6px;"><h2 class="widget-title" style="font-size:1rem;">📅 आज का लक्ष्य</h2></div>' +
            '<p style="margin:0 0 6px;font-size:0.84rem;font-weight:700;">' + tasks.length + ' में से ' + doneTasks + ' पूरे</p>' +
            '<div class="stat-bar" style="margin-bottom:8px;"><div class="stat-bar-fill" style="width:' + (tasks.length ? Math.round((doneTasks / tasks.length) * 100) : 0) + '%"></div></div>' +
            tasksHtml +
          '</div>' +
          '<a href="#/planner" class="btn btn-teal btn-sm" style="width:100%;margin-top:8px;">लक्ष्य देखें →</a>' +
        '</aside>' +
      '</section>' +

      '<section class="dashboard-widgets">' +
        '<div class="parchment-card">' +
          '<div class="widget-header"><h2 class="widget-title">⭐ आज का महत्वपूर्ण प्रश्न</h2><a href="#/practice" style="font-size:0.84rem;font-weight:700;color:var(--teal-700);">View All →</a></div>' +
          qotdHtml +
        '</div>' +
        '<div class="parchment-card">' +
          '<div class="widget-header"><h2 class="widget-title">📊 पिछले टेस्ट का परिणाम</h2></div>' +
          lastMockHtml +
        '</div>' +
        '<div class="parchment-card">' +
          '<div class="widget-header"><h2 class="widget-title">⚡ Quick Access</h2></div>' +
          '<div class="quick-access-grid">' +
            '<a href="#/pyq-lab" class="quick-tile">📄 PYQ पेपर्स</a>' +
            '<a href="#/revision/formulas" class="quick-tile">⭐ फॉर्मूला शीट</a>' +
            '<a href="#/revision/notes" class="quick-tile">📝 शॉर्ट नोट्स</a>' +
            '<a href="#/revision" class="quick-tile">🔄 रिवीजन नोट्स</a>' +
          '</div>' +
        '</div>' +
      '</section>' +

      '<section class="journey-strip">' +
        '<div class="journey-title">🏆 आपकी तैयारी का सफर</div>' +
        '<div class="journey-steps">' + journeyHtml + '</div>' +
      '</section>' +
    '</div>';
  };

  /* 2. STUDY LIBRARY */
  REET.renderLibrary = function (subjectId, topicId) {
    var subjId = subjectId || REET.uiState.librarySubject || "cdp";
    REET.uiState.librarySubject = subjId;
    var subj = (REET.data.syllabus || []).find(function (s) { return s.id === subjId; });
    var tabs = REET.SUBJECT_META.map(function (m) {
      return '<a href="#/library/' + m.id + '" class="tab-btn ' + (m.id === subjId ? "active" : "") + '">' + esc(m.short) + '</a>';
    }).join("");

    if (!subj) {
      return '<div class="calm-page"><div class="tabs-row">' + tabs + '</div><div class="empty-state">सिलेबस डेटा लोड हो रहा है या अभी उपलब्ध नहीं है। सामग्री जल्द जोड़ी जाएगी।</div></div>';
    }

    var allTopics = REET.getSubjectTopics(subjId);
    var activeTopicId = topicId || (allTopics[0] ? allTopics[0].topic.id : null);
    REET.uiState.libraryTopicId = activeTopicId;

    var sidebarHtml = (subj.chapters || []).map(function (ch) {
      var tpItems = (ch.topics || []).map(function (tp) {
        var done = Boolean(REET.state.study.completedTopics[tp.id]);
        var isActive = tp.id === activeTopicId;
        return '<li><a href="#/library/' + esc(subjId) + '/' + esc(tp.id) + '" class="topic-btn ' + (isActive ? "active" : "") + '">' +
          '<span>' + esc(tp.title) + '</span>' +
          '<span>' + (done ? "✅" : "") + '</span></a></li>';
      }).join("");
      return '<div class="chapter-box"><div class="chapter-btn">' + esc(ch.title) + '</div><ul class="topic-list">' + tpItems + '</ul></div>';
    }).join("");

    var activeInfo = activeTopicId ? REET.getTopicById(activeTopicId) : null;
    var theoryPack = activeTopicId ? REET.data.theory[activeTopicId] : null;
    var mainHtml = "";

    if (!activeInfo) {
      mainHtml = '<div class="empty-state">कृपया बाईं ओर से एक टॉपिक चुनें।</div>';
    } else {
      REET.updateProgress("topic_open", {
        subjectId: subjId,
        chapterId: activeInfo.chapter.id,
        topicId: activeInfo.topic.id,
        title: activeInfo.topic.title
      });

      var idx = allTopics.findIndex(function (x) { return x.topic.id === activeTopicId; });
      var prevTp = idx > 0 ? allTopics[idx - 1].topic : null;
      var nextTp = idx >= 0 && idx < allTopics.length - 1 ? allTopics[idx + 1].topic : null;
      var isBookmarked = Boolean(REET.state.study.bookmarkedTopics[activeTopicId]);
      var isDone = Boolean(REET.state.study.completedTopics[activeTopicId]);
      var mastery = REET.getTopicMastery(activeTopicId);

      var blocksHtml = "";
      if (!theoryPack || !Array.isArray(theoryPack.blocks) || !theoryPack.blocks.length) {
        blocksHtml = '<div class="empty-state"><p>इस टॉपिक की विस्तृत थ्योरी सामग्री जल्द जोड़ी जाएगी।</p>' +
          '<a href="#/practice/topic/' + esc(activeTopicId) + '" class="btn btn-teal btn-sm">इस टॉपिक के प्रश्न देखें →</a></div>';
      } else {
        blocksHtml = theoryPack.blocks.map(function (b) {
          var cls = "theory-block";
          if (b.type === "examFacts" || b.type === "frequentlyTested") cls += " theory-block-exam";
          if (b.type === "example" || b.type === "classroom") cls += " theory-block-example";

          var inner = '<h3>' + esc(b.title || "विवरण") + '</h3>';
          if (b.content) inner += '<p>' + esc(b.content) + '</p>';
          if (Array.isArray(b.points)) {
            inner += '<ul>' + b.points.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join("") + '</ul>';
          }
          if (b.table && Array.isArray(b.table.headers) && Array.isArray(b.table.rows)) {
            inner += '<table class="theory-table"><thead><tr>' +
              b.table.headers.map(function (h) { return '<th>' + esc(h) + '</th>'; }).join("") +
              '</tr></thead><tbody>' +
              b.table.rows.map(function (r) {
                return '<tr>' + r.map(function (c) { return '<td>' + esc(c) + '</td>'; }).join("") + '</tr>';
              }).join("") + '</tbody></table>';
          }
          return '<div class="' + cls + '">' + inner + '</div>';
        }).join("");
      }

      mainHtml = '<div class="reading-progress-bar"><div id="topic-reading-fill" class="reading-progress-fill" style="width:' + (REET.state.study.topicScroll[activeTopicId] || 0) + '%"></div></div>' +
        '<div class="study-card">' +
          '<div style="display:flex;flex-wrap:wrap;justify-content:space-between;gap:10px;align-items:center;margin-bottom:12px;">' +
            '<div><span class="badge badge-teal">' + esc(activeInfo.chapter.title) + '</span> ' +
            '<span class="badge badge-provisional">' + esc(REET.MASTERY_LABELS[mastery]) + '</span>' +
            '<h2 style="margin-top:6px;">' + esc(activeInfo.topic.title) + '</h2>' +
            '<small style="color:var(--text-muted);">अनुमानित पठन समय: ~' + (activeInfo.topic.readMinutes || 8) + ' मिनट</small></div>' +
            '<div style="display:flex;gap:8px;flex-wrap:wrap;">' +
              '<button type="button" class="btn btn-outline btn-sm" data-action="toggle-bookmark" data-topic-id="' + esc(activeTopicId) + '">' + (isBookmarked ? "★ बुकमार्क किया गया" : "☆ बुकमार्क करें") + '</button>' +
              '<button type="button" class="btn btn-teal btn-sm" data-action="complete-topic" data-topic-id="' + esc(activeTopicId) + '">' + (isDone ? "✓ थ्योरी पूर्ण" : "थ्योरी पूरी हुई") + '</button>' +
            '</div>' +
          '</div>' +
          blocksHtml +
          '<div style="display:flex;flex-wrap:wrap;justify-content:space-between;gap:10px;margin-top:16px;padding-top:12px;border-top:1px solid var(--study-border);">' +
            (prevTp ? '<a class="btn btn-outline btn-sm" href="#/library/' + esc(subjId) + '/' + esc(prevTp.id) + '">← पिछला टॉपिक</a>' : '<span></span>') +
            '<a class="btn btn-cta btn-sm" href="#/practice/topic/' + esc(activeTopicId) + '">संबंधित प्रश्न हल करें →</a>' +
            (nextTp ? '<a class="btn btn-teal btn-sm" href="#/library/' + esc(subjId) + '/' + esc(nextTp.id) + '">अगला टॉपिक →</a>' : '<span></span>') +
          '</div>' +
        '</div>';
    }

    return '<div class="calm-page">' +
      '<div class="page-header"><h1 class="page-title">📚 स्टडी लाइब्रेरी — ' + esc(subj.title) + '</h1></div>' +
      '<div class="tabs-row">' + tabs + '</div>' +
      '<div class="library-layout"><aside class="chapter-accordion">' + sidebarHtml + '</aside><div id="theory-reader-pane">' + mainHtml + '</div></div>' +
    '</div>';
  };

  /* 3. PYQ RESEARCH LAB */
  REET.renderPyqLab = function () {
    var analytics = REET.getPYQAnalytics({});
    if (!analytics.hasData) {
      return '<div class="calm-page">' +
        '<div class="page-header"><h1 class="page-title">🔬 PYQ रिसर्च लैब</h1></div>' +
        '<div class="empty-state">' +
          '<h2>सत्यापित PYQ अभी उपलब्ध नहीं हैं</h2>' +
          '<p>सत्यता की नीति के अनुसार कोई भी काल्पनिक या अपुष्ट पुराना प्रश्न यहाँ नहीं दिखाया जाता।</p>' +
          '<p>जब आप <code>data/pyq-verified.js</code> में आधिकारिक पेपर के सत्यापित प्रश्न जोड़ेंगे, तो वर्ष-वार विश्लेषण, बार-बार पूछे गए टॉपिक्स और चार्ट स्वतः यहाँ दिखने लगेंगे।</p>' +
          '<div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:14px;">' +
            '<button type="button" class="btn btn-cta" data-action="start-pattern-practice">PYQ-पैटर्न अभ्यास शुरू करें →</button>' +
            '<a href="#/practice" class="btn btn-outline">प्रैक्टिस ज़ोन में जाएँ</a>' +
          '</div>' +
        '</div>' +
      '</div>';
    }
    return '<div class="calm-page">' +
      '<div class="page-header"><h1 class="page-title">🔬 PYQ रिसर्च लैब</h1><span class="badge badge-provisional">आंशिक डेटा पर आधारित (' + analytics.total + ' प्रश्न)</span></div>' +
      '<div class="study-card"><h3>विषय-वार सत्यापित PYQ</h3>' +
      REET.charts.bars(analytics.bySubject.map(function (b) { return { label: b.label, value: b.count }; })) +
      '</div>' +
    '</div>';
  };

  /* 4. PRACTICE ZONE */
  REET.renderPractice = function (presetMode, presetTopicId) {
    if (presetMode) REET.uiState.practiceMode = presetMode;
    if (presetTopicId) REET.uiState.practiceTopic = presetTopicId;

    var sess = REET.practiceSession;
    if (sess && !sess.finished) {
      var q = sess.questions[sess.currentIndex];
      var chosen = Object.prototype.hasOwnProperty.call(sess.answers, q.id) ? sess.answers[q.id] : null;
      var exp = chosen !== null ? REET.generateExplanation(q, chosen) : null;

      var optsHtml = q.options.map(function (opt, idx) {
        var cls = "option-btn";
        if (chosen !== null) {
          if (idx === q.correct) cls += " correct";
          else if (idx === chosen) cls += " wrong";
        }
        return '<button type="button" class="' + cls + '" data-action="practice-answer" data-qid="' + esc(q.id) + '" data-opt="' + idx + '" ' + (chosen !== null ? "disabled" : "") + '>' +
          '<strong>' + ["A", "B", "C", "D"][idx] + '.</strong> <span>' + esc(opt) + '</span></button>';
      }).join("");

      return '<div class="calm-page">' +
        '<div class="page-header">' +
          '<h1 class="page-title">✍️ प्रैक्टिस सत्र (' + (sess.currentIndex + 1) + ' / ' + sess.questions.length + ')</h1>' +
          '<button type="button" class="btn btn-outline btn-sm" data-action="practice-finish">सत्र समाप्त करें</button>' +
        '</div>' +
        '<div class="study-card">' +
          '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:8px;">' +
            '<span class="badge badge-teal">' + esc(q.id) + '</span>' +
            '<span class="badge badge-provisional">' + esc(q.difficulty) + ' | ' + esc(q.category) + '</span>' +
          '</div>' +
          '<p style="font-size:1.08rem;font-weight:600;">' + esc(q.question) + '</p>' +
          '<div class="option-list">' + optsHtml + '</div>' +
          (exp ? '<div class="explanation-box"><p><strong>' + (exp.isCorrect ? "✅ सही उत्तर!" : "❌ गलत उत्तर (सही विकल्प: " + exp.correctLabel + ")") + '</strong></p><p>' + esc(exp.explanation) + '</p><p><small>संबंधित टॉपिक: <a href="#/library/' + esc(exp.subjectId) + '/' + esc(exp.topicId) + '" style="text-decoration:underline;color:var(--teal-700);">' + esc(exp.topicToRevise) + '</a></small></p></div>' : "") +
          '<div style="display:flex;justify-content:space-between;margin-top:16px;">' +
            '<button type="button" class="btn btn-outline btn-sm" data-action="practice-prev" ' + (sess.currentIndex === 0 ? "disabled" : "") + '>← पिछला</button>' +
            (sess.currentIndex < sess.questions.length - 1
              ? '<button type="button" class="btn btn-teal btn-sm" data-action="practice-next">अगला →</button>'
              : '<button type="button" class="btn btn-cta btn-sm" data-action="practice-finish">परिणाम देखें →</button>') +
          '</div>' +
        '</div>' +
      '</div>';
    }

    if (sess && sess.finished) {
      var latest = REET.state.practice.history[0] || { total: sess.questions.length, attempted: 0, correct: 0, accuracy: 0 };
      return '<div class="calm-page">' +
        '<div class="page-header"><h1 class="page-title">🎉 प्रैक्टिस सारांश</h1></div>' +
        '<div class="study-card">' +
          '<p>कुल प्रश्न: <strong>' + latest.total + '</strong> | हल किए: <strong>' + latest.attempted + '</strong> | सही: <strong>' + latest.correct + '</strong> | सटीकता: <strong>' + latest.accuracy + '%</strong></p>' +
          '<button type="button" class="btn btn-cta" data-action="practice-reset-ui">नया अभ्यास शुरू करें</button>' +
        '</div>' +
      '</div>';
    }

    var modes = [
      { id: "topic", label: "टॉपिक-वार" },
      { id: "chapter", label: "चैप्टर-वार" },
      { id: "subject", label: "विषय-वार" },
      { id: "pyq", label: "केवल सत्यापित PYQ" },
      { id: "important", label: "महत्वपूर्ण प्रश्न" },
      { id: "difficult", label: "कठिन प्रश्न" },
      { id: "mixed", label: "मिश्रित अभ्यास" },
      { id: "daily30", label: "Daily 30 चैलेंज" }
    ];

    var subjOpts = '<option value="">सभी विषय</option>' + REET.SUBJECT_META.map(function (m) {
      return '<option value="' + m.id + '" ' + (REET.uiState.practiceSubj === m.id ? "selected" : "") + '>' + esc(m.title) + '</option>';
    }).join("");

    return '<div class="calm-page">' +
      '<div class="page-header"><h1 class="page-title">✍️ प्रैक्टिस ज़ोन</h1></div>' +
      '<div class="tabs-row">' + modes.map(function (m) {
        return '<button type="button" class="tab-btn ' + (REET.uiState.practiceMode === m.id ? "active" : "") + '" data-action="set-practice-mode" data-mode="' + m.id + '">' + esc(m.label) + '</button>';
      }).join("") + '</div>' +
      '<div class="study-card">' +
        '<div class="form-grid">' +
          '<div class="form-field"><label for="p-subj">विषय</label><select id="p-subj" class="form-control">' + subjOpts + '</select></div>' +
          '<div class="form-field"><label for="p-diff">कठिनाई</label><select id="p-diff" class="form-control"><option value="">सभी</option><option value="easy">आसान</option><option value="medium">मध्यम</option><option value="hard">कठिन</option></select></div>' +
          '<div class="form-field"><label for="p-count">प्रश्नों की संख्या</label><select id="p-count" class="form-control"><option value="10">10</option><option value="15" selected>15</option><option value="30">30</option><option value="50">50</option></select></div>' +
        '</div>' +
        '<div style="margin-top:16px;"><button type="button" class="btn btn-cta" data-action="start-practice">प्रैक्टिस शुरू करें →</button></div>' +
      '</div>' +
    '</div>';
  };

  /* 5. MOCK TEST CENTER */
  REET.renderMock = function () {
    var cfg = REET.data.examConfig;
    var banner = '<div class="cbt-banner">⚠️ ' + esc(cfg.bannerText) + '</div>';

    if (REET.activeTest) {
      var t = REET.activeTest;
      var qid = t.questionIds[t.currentIndex];
      var qObj = t.optionsMap[qid];
      var chosen = Object.prototype.hasOwnProperty.call(t.choices, qid) ? t.choices[qid] : null;
      var remSec = Math.max(0, Math.floor((t.endTimestamp - Date.now()) / 1000));
      var timerStr = String(Math.floor(remSec / 3600)).padStart(2, "0") + ":" +
        String(Math.floor((remSec % 3600) / 60)).padStart(2, "0") + ":" +
        String(remSec % 60).padStart(2, "0");

      var paletteHtml = t.questionIds.map(function (id, idx) {
        var hasAns = Object.prototype.hasOwnProperty.call(t.choices, id);
        var isMarked = Boolean(t.marked[id]);
        var isVisited = Boolean(t.visited[idx]);
        var cls = "palette-btn";
        if (hasAns && isMarked) cls += " status-answered-marked";
        else if (isMarked) cls += " status-marked";
        else if (hasAns) cls += " status-answered";
        else if (isVisited) cls += " status-not-answered";
        if (idx === t.currentIndex) cls += " current";
        return '<button type="button" class="' + cls + '" data-action="mock-goto" data-idx="' + idx + '">' + (idx + 1) + '</button>';
      }).join("");

      return '<div class="calm-page">' +
        (t.isProvisional ? banner : "") +
        '<div class="page-header">' +
          '<h1 class="page-title">' + esc(t.title) + ' (प्रश्न ' + (t.currentIndex + 1) + '/' + t.questionIds.length + ')</h1>' +
          '<div id="cbt-timer-display" class="cbt-timer" aria-live="off">' + timerStr + '</div>' +
        '</div>' +
        '<div class="cbt-layout">' +
          '<div class="study-card">' +
            '<p style="font-size:1.06rem;font-weight:600;">' + esc(qObj.question) + '</p>' +
            '<div class="option-list">' + qObj.options.map(function (o, i) {
              return '<button type="button" class="option-btn ' + (chosen === i ? "selected" : "") + '" data-action="mock-select" data-opt="' + i + '">' +
                '<strong>' + ["A", "B", "C", "D"][i] + '.</strong> <span>' + esc(o) + '</span></button>';
            }).join("") + '</div>' +
            '<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:space-between;margin-top:16px;">' +
              '<div style="display:flex;gap:8px;flex-wrap:wrap;">' +
                '<button type="button" class="btn btn-outline btn-sm" data-action="mock-prev">← पिछला</button>' +
                '<button type="button" class="btn btn-outline btn-sm" data-action="mock-clear">Clear Response</button>' +
                '<button type="button" class="btn btn-outline btn-sm" data-action="mock-mark">' + (t.marked[qid] ? "Unmark Review" : "Mark for Review") + '</button>' +
              '</div>' +
              '<div style="display:flex;gap:8px;">' +
                '<button type="button" class="btn btn-teal btn-sm" data-action="mock-save-next">Save & Next →</button>' +
                '<button type="button" class="btn btn-cta btn-sm" data-action="mock-confirm-submit">Submit Test</button>' +
              '</div>' +
            '</div>' +
          '</div>' +
          '<aside class="study-card"><h3>प्रश्न पैलेट</h3><div class="palette-grid">' + paletteHtml + '</div></aside>' +
        '</div>' +
      '</div>';
    }

    if (REET.lastMockResult) {
      var res = REET.lastMockResult;
      var filteredDetails = res.details.filter(function (d) {
        if (REET.uiState.mockResultFilter === "correct") return d.isCorrect;
        if (REET.uiState.mockResultFilter === "wrong") return d.userChoice !== null && !d.isCorrect;
        return true;
      });
      return '<div class="calm-page">' +
        '<div class="page-header"><h1 class="page-title">📊 मॉक टेस्ट परिणाम — ' + esc(res.title) + '</h1></div>' +
        '<div class="study-card" style="margin-bottom:14px;">' +
          '<p>स्कोर: <strong>' + res.score + ' / ' + res.maxScore + ' (' + res.percent + '%)</strong> | सही: <strong>' + res.correct + '</strong> | गलत: <strong>' + res.wrong + '</strong> | अनुत्तरित: <strong>' + res.unattempted + '</strong> | सटीकता: <strong>' + res.accuracy + '%</strong></p>' +
          '<div style="display:flex;gap:8px;flex-wrap:wrap;">' +
            '<button type="button" class="btn btn-outline btn-sm" data-action="mock-filter-res" data-filter="all">सभी प्रश्न देखें</button>' +
            '<button type="button" class="btn btn-teal btn-sm" data-action="mock-filter-res" data-filter="correct">सही उत्तर देखें</button>' +
            '<button type="button" class="btn btn-cta btn-sm" data-action="mock-clear-result">फिर से टेस्ट दें</button>' +
            '<a href="#/" class="btn btn-outline btn-sm">डैशबोर्ड पर जाएँ</a>' +
          '</div>' +
        '</div>' +
        filteredDetails.map(function (d, idx) {
          return '<div class="study-card" style="margin-bottom:10px;">' +
            '<p><strong>' + (idx + 1) + '. ' + esc(d.question) + '</strong></p>' +
            '<p>आपका उत्तर: ' + (d.userChoice !== null ? ["A", "B", "C", "D"][d.userChoice] : "अनुत्तरित") + ' | सही उत्तर: <strong>' + ["A", "B", "C", "D"][d.correct] + '</strong></p>' +
            '<div class="explanation-box">' + esc(d.explanation) + '</div>' +
          '</div>';
        }).join("") +
      '</div>';
    }

    return '<div class="calm-page">' +
      '<div class="page-header"><h1 class="page-title">📝 मॉक टेस्ट सेंटर</h1></div>' +
      banner +
      '<div class="form-grid">' +
        '<div class="study-card">' +
          '<h2>आधिकारिक पैटर्न मॉक (अनंतिम)</h2>' +
          '<p>' + cfg.totalQuestions + ' प्रश्न | ' + cfg.totalMarks + ' अंक | ' + cfg.durationMinutes + ' मिनट (प्रत्येक विषय के 30 प्रश्न)</p>' +
          '<button type="button" class="btn btn-cta" data-action="start-official-mock">आधिकारिक पैटर्न मॉक शुरू करें →</button>' +
        '</div>' +
        '<div class="study-card">' +
          '<h2>कस्टम मॉक टेस्ट</h2>' +
          '<div class="form-field"><label for="cm-subj">विषय</label><select id="cm-subj" class="form-control"><option value="">सभी विषय</option>' +
            REET.SUBJECT_META.map(function (m) { return '<option value="' + m.id + '">' + esc(m.title) + '</option>'; }).join("") +
          '</select></div>' +
          '<div class="form-field" style="margin-top:8px;"><label for="cm-count">प्रश्नों की संख्या</label><select id="cm-count" class="form-control"><option value="15">15</option><option value="30" selected>30</option><option value="60">60</option></select></div>' +
          '<div class="form-field" style="margin-top:8px;"><label for="cm-time">समय (मिनट)</label><input id="cm-time" class="form-control" type="number" value="30" min="5" max="180"></div>' +
          '<button type="button" class="btn btn-teal" style="margin-top:12px;" data-action="start-custom-mock">कस्टम मॉक शुरू करें →</button>' +
        '</div>' +
      '</div>' +
    '</div>';
  };

  /* 6. REVISION CENTER */
  REET.renderRevision = function (subTab) {
    if (subTab) REET.uiState.revisionTab = subTab;
    var tab = REET.uiState.revisionTab || "notes";
    var tabs = [
      { id: "notes", label: "शॉर्ट नोट्स" },
      { id: "facts", label: "महत्वपूर्ण तथ्य" },
      { id: "flashcards", label: "फ्लैशकार्ड" },
      { id: "formulas", label: "गणित फॉर्मूला शीट" },
      { id: "wrong", label: "गलत उत्तरों का पुनरावलोकन" }
    ];

    var bodyHtml = "";
    if (tab === "notes") {
      var notes = REET.getNotes(REET.uiState.revisionSubj);
      bodyHtml = notes.length
        ? notes.map(function (n) {
            return '<div class="study-card" style="margin-bottom:10px;"><h3>' + esc(n.title) + '</h3><ul>' +
              (n.points || []).map(function (p) { return '<li>' + esc(p) + '</li>'; }).join("") + '</ul></div>';
          }).join("")
        : '<div class="empty-state">नोट्स सामग्री जल्द जोड़ी जाएगी।</div>';
    } else if (tab === "facts") {
      var facts = REET.getFacts(REET.uiState.revisionSubj);
      bodyHtml = facts.length
        ? '<div class="study-card"><ul>' + facts.map(function (f) { return '<li>' + esc(f.text) + '</li>'; }).join("") + '</ul></div>'
        : '<div class="empty-state">महत्वपूर्ण तथ्य जल्द जोड़े जाएँगे।</div>';
    } else if (tab === "flashcards") {
      var cards = REET.getFlashcards(REET.uiState.revisionSubj, REET.uiState.flashcardOnlyReview);
      if (!cards.length) {
        bodyHtml = '<div class="empty-state">फ्लैशकार्ड उपलब्ध नहीं हैं।</div>';
      } else {
        var idx = REET.uiState.flashcardIdx % cards.length;
        var c = cards[idx];
        bodyHtml = '<div class="study-card">' +
          '<p>कार्ड ' + (idx + 1) + ' / ' + cards.length + ' (क्लिक करके पलटें)</p>' +
          '<div class="flashcard" data-action="flip-flashcard" tabindex="0">' +
            '<h3>' + esc(REET.uiState.flashcardFlipped ? c.back : c.front) + '</h3>' +
          '</div>' +
          '<div style="display:flex;gap:10px;justify-content:center;margin-top:12px;flex-wrap:wrap;">' +
            '<button type="button" class="btn btn-teal btn-sm" data-action="rate-flashcard" data-cid="' + esc(c.id) + '" data-topic="' + esc(c.topicId) + '" data-chap="' + esc(c.chapterId) + '" data-status="remembered">✓ याद हो गया</button>' +
            '<button type="button" class="btn btn-outline btn-sm" data-action="rate-flashcard" data-cid="' + esc(c.id) + '" data-topic="' + esc(c.topicId) + '" data-chap="' + esc(c.chapterId) + '" data-status="needs_revision">↻ फिर से दोहराएँ</button>' +
          '</div>' +
        '</div>';
      }
    } else if (tab === "formulas") {
      var formulas = REET.getFormulas();
      bodyHtml = formulas.length
        ? formulas.map(function (fm) {
            return '<div class="study-card" style="margin-bottom:10px;"><h3>' + esc(fm.title) + '</h3><p><strong>सूत्र:</strong> ' + esc(fm.formula) + '</p><p><strong>उदाहरण:</strong> ' + esc(fm.example) + '</p></div>';
          }).join("")
        : '<div class="empty-state">गणित फॉर्मूला शीट जल्द जोड़ी जाएगी।</div>';
    } else if (tab === "wrong") {
      var wrongList = REET.getWrongQuestions();
      bodyHtml = wrongList.length
        ? wrongList.map(function (q) {
            return '<div class="study-card" style="margin-bottom:10px;"><p><strong>[' + esc(q.id) + '] ' + esc(q.question) + '</strong></p>' +
              '<p>सही उत्तर: <strong>' + ["A", "B", "C", "D"][q.correct] + '. ' + esc(q.options[q.correct]) + '</strong></p>' +
              '<div class="explanation-box">' + esc(q.explanation) + '</div></div>';
          }).join("")
        : '<div class="empty-state">बहुत बढ़िया! अभी कोई गलत उत्तर रिवीजन सूची में नहीं है।</div>';
    }

    return '<div class="calm-page">' +
      '<div class="page-header"><h1 class="page-title">🔄 रिवीजन सेंटर</h1></div>' +
      '<div class="tabs-row">' + tabs.map(function (t) {
        return '<button type="button" class="tab-btn ' + (tab === t.id ? "active" : "") + '" data-action="set-rev-tab" data-tab="' + t.id + '">' + esc(t.label) + '</button>';
      }).join("") + '</div>' +
      bodyHtml +
    '</div>';
  };

  /* 7. PERFORMANCE */
  REET.renderPerformance = function () {
    var summary = REET.getProgressSummary();
    var barItems = REET.SUBJECT_META.map(function (m) {
      var s = summary.subjectStats[m.id] || { percent: 0 };
      return { label: m.short, value: s.percent, display: s.percent + "%", color: m.color };
    });
    var mockPoints = (REET.state.mock.history || []).map(function (m, i) {
      return { label: "M" + (i + 1), value: m.percent };
    });

    return '<div class="calm-page">' +
      '<div class="page-header"><h1 class="page-title">📈 मेरी परफॉर्मेंस</h1></div>' +
      '<div class="study-card" style="margin-bottom:14px;">' +
        '<p>कुल अभ्यास: <strong>' + summary.totalAttempted + '</strong> | सही: <strong>' + summary.totalCorrect + '</strong> | सटीकता: <strong>' + summary.accuracy + '%</strong> | पूर्ण टॉपिक: <strong>' + summary.completedTopics + '/' + summary.totalTopics + '</strong></p>' +
      '</div>' +
      '<div class="form-grid">' +
        '<div class="study-card"><h3>विषय-वार तैयारी (%)</h3>' + REET.charts.bars(barItems) + '</div>' +
        '<div class="study-card"><h3>मॉक टेस्ट प्रगति</h3>' + REET.charts.line(mockPoints) + '</div>' +
      '</div>' +
    '</div>';
  };

  /* 8. SMART PLANNER */
  REET.renderPlanner = function () {
    var p = REET.state.profile;
    var weekly = REET.getWeeklyPracticeCount();
    var suggestions = REET.getPlannerSuggestions();
    var tasks = REET.state.planner.tasks || [];

    return '<div class="calm-page">' +
      '<div class="page-header"><h1 class="page-title">🗓️ स्मार्ट स्टडी प्लानर</h1></div>' +
      '<div class="form-grid" style="margin-bottom:14px;">' +
        '<div class="study-card">' +
          '<h3>दैनिक व साप्ताहिक लक्ष्य</h3>' +
          '<p>दैनिक लक्ष्य: <strong>' + REET.getTodayPracticeCount() + ' / ' + p.dailyQuestionTarget + ' प्रश्न</strong> | साप्ताहिक: <strong>' + weekly + ' / ' + (REET.state.planner.weeklyGoalQuestions || 180) + '</strong></p>' +
          '<div class="form-field"><label for="pl-dq">दैनिक प्रश्न लक्ष्य</label><input id="pl-dq" class="form-control" type="number" value="' + p.dailyQuestionTarget + '"></div>' +
          '<div class="form-field" style="margin-top:8px;"><label for="pl-dm">दैनिक अध्ययन (मिनट)</label><input id="pl-dm" class="form-control" type="number" value="' + p.dailyMinutesTarget + '"></div>' +
          '<button type="button" class="btn btn-teal btn-sm" style="margin-top:10px;" data-action="save-planner-targets">लक्ष्य सेव करें</button>' +
        '</div>' +
        '<div class="study-card">' +
          '<h3>नियम-आधारित अगले सुझाव</h3>' +
          '<ul>' + suggestions.map(function (s) {
            return '<li><a href="' + s.route + '" style="color:var(--teal-700);font-weight:700;">' + esc(s.title) + ' →</a></li>';
          }).join("") + '</ul>' +
        '</div>' +
      '</div>' +
      '<div class="study-card">' +
        '<h3>कार्य सूची (To-Do)</h3>' +
        '<div style="display:flex;gap:8px;margin-bottom:12px;">' +
          '<input id="new-task-input" class="form-control" type="text" placeholder="नया अध्ययन लक्ष्य जोड़ें..." style="flex:1;">' +
          '<button type="button" class="btn btn-cta btn-sm" data-action="add-planner-task">जोड़ें</button>' +
        '</div>' +
        tasks.map(function (t) {
          return '<div style="display:flex;align-items:center;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--study-border);">' +
            '<label style="display:flex;align-items:center;gap:8px;cursor:pointer;"><input type="checkbox" data-action="toggle-task" data-task-id="' + esc(t.id) + '" ' + (t.done ? "checked" : "") + '><span>' + esc(t.title) + '</span></label>' +
            '<button type="button" class="btn btn-outline btn-sm" data-action="delete-task" data-task-id="' + esc(t.id) + '">हटाएँ</button>' +
          '</div>';
        }).join("") +
      '</div>' +
    '</div>';
  };

  /* 9. ACHIEVEMENTS */
  REET.renderAchievements = function () {
    var ach = REET.state.achievements;
    return '<div class="calm-page">' +
      '<div class="page-header"><h1 class="page-title">🏅 उपलब्धियाँ व बैज</h1></div>' +
      '<div class="study-card" style="margin-bottom:14px;">' +
        '<p>कुल XP: <strong>' + (ach.xp || 0) + ' XP</strong> | वर्तमान स्ट्रीक: <strong>' + (ach.streak.current || 0) + ' दिन</strong> | अधिकतम स्ट्रीक: <strong>' + (ach.streak.longest || 0) + ' दिन</strong></p>' +
      '</div>' +
      '<div class="form-grid">' +
        REET.BADGE_DEFINITIONS.map(function (b) {
          var unlocked = Boolean(ach.unlocked[b.id]);
          return '<div class="study-card" style="opacity:' + (unlocked ? "1" : "0.65") + ';">' +
            '<h3>' + (unlocked ? "🏆 " : "🔒 ") + esc(b.title) + '</h3>' +
            '<p>' + esc(b.desc) + '</p>' +
            '<span class="badge ' + (unlocked ? "badge-success" : "badge-provisional") + '">' + (unlocked ? "प्राप्त" : "लॉक") + '</span>' +
          '</div>';
        }).join("") +
      '</div>' +
    '</div>';
  };
})(window);
