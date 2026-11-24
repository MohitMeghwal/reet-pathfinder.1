(function (global) {
  "use strict";

  global.REET.registerPack({
    questions: [
      {
        id: "MTH-0001", subjectId: "maths", chapterId: "mth-ch1", topicId: "mth-t1",
        question: "सबसे छोटी अभाज्य संख्या (Smallest Prime Number) कौन-सी है?",
        options: ["0", "1", "2", "3"],
        correct: 2,
        explanation: "2 सबसे छोटी और एकमात्र सम अभाज्य संख्या है क्योंकि इसके ठीक दो गुणनखंड (1 और 2) हैं। 1 न तो भाज्य है न अभाज्य।",
        difficulty: "easy", category: "pyq_pattern", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["अभाज्य संख्या"]
      },
      {
        id: "MTH-0002", subjectId: "maths", chapterId: "mth-ch1", topicId: "mth-t1",
        question: "संख्या 54,789 में अंक 7 के स्थानीय मान (Place Value) और जातीय मान (Face Value) का अंतर कितना है?",
        options: ["693", "700", "707", "630"],
        correct: 0,
        explanation: "54,789 में 7 सैकड़े के स्थान पर है, अतः स्थानीय मान = 700 और जातीय मान = 7। अंतर = 700 − 7 = 693।",
        difficulty: "easy", category: "pyq_pattern", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["स्थानीय मान"]
      },
      {
        id: "MTH-0003", subjectId: "maths", chapterId: "mth-ch1", topicId: "mth-t1",
        question: "1 से 50 के बीच कुल कितनी अभाज्य संख्याएँ (Prime Numbers) होती हैं?",
        options: ["10", "15", "18", "25"],
        correct: 1,
        explanation: "1 से 50 तक कुल 15 अभाज्य संख्याएँ हैं: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47।",
        difficulty: "medium", category: "important", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["अभाज्य संख्या"]
      },
      {
        id: "MTH-0004", subjectId: "maths", chapterId: "mth-ch1", topicId: "mth-t1",
        question: "चार अंकों की सबसे बड़ी संख्या और तीन अंकों की सबसे छोटी संख्या का योग क्या होगा?",
        options: ["10099", "9999", "10999", "9899"],
        correct: 0,
        explanation: "4 अंकों की सबसे बड़ी संख्या = 9999; 3 अंकों की सबसे छोटी संख्या = 100। योग = 9999 + 100 = 10099।",
        difficulty: "easy", category: "practice_original", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["संख्या पद्धति"]
      },
      {
        id: "MTH-0005", subjectId: "maths", chapterId: "mth-ch1", topicId: "mth-t1",
        question: "संख्या '0' के बारे में कौन-सा कथन सत्य है?",
        options: ["यह सबसे छोटी प्राकृत संख्या है", "यह सबसे छोटी पूर्ण संख्या (Whole Number) है", "यह एक ऋणात्मक पूर्णांक है", "यह एक अभाज्य संख्या है"],
        correct: 1,
        explanation: "पूर्ण संख्याएँ (0, 1, 2, 3...) 0 से शुरू होती हैं, अतः 0 सबसे छोटी पूर्ण संख्या है।",
        difficulty: "easy", category: "pyq_concept", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["पूर्ण संख्या"]
      },
      {
        id: "MTH-0006", subjectId: "maths", chapterId: "mth-ch1", topicId: "mth-t1",
        question: "अंकों 3, 0, 7, 5 का एक-एक बार प्रयोग करके बनने वाली 4 अंकों की सबसे छोटी संख्या कौन-सी है?",
        options: ["0357", "3057", "3507", "3075"],
        correct: 1,
        explanation: "0 को सबसे आगे रखने पर संख्या 3 अंकों की रह जाएगी, अतः सबसे छोटा अशून्य अंक 3 पहले रखेंगे: 3057।",
        difficulty: "easy", category: "application", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["संख्या निर्माण"]
      },
      {
        id: "MTH-0007", subjectId: "maths", chapterId: "mth-ch1", topicId: "mth-t1",
        question: "रोमन संख्यांक पद्धति में 90 को किस प्रकार लिखा जाता है?",
        options: ["LXXXX", "XC", "CX", "XL"],
        correct: 1,
        explanation: "C = 100 और X = 10; बाईं ओर X लिखने पर 100 − 10 = 90 (XC) बनता है।",
        difficulty: "medium", category: "important", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["रोमन संख्या"]
      },
      {
        id: "MTH-0008", subjectId: "maths", chapterId: "mth-ch1", topicId: "mth-t1",
        question: "1 मिलियन (1 Million) भारतीय संख्यांकन प्रणाली में किसके बराबर होता है?",
        options: ["1 लाख", "10 लाख", "1 करोड़", "10 हजार"],
        correct: 1,
        explanation: "1 मिलियन = 10,00,000 = 10 लाख।",
        difficulty: "easy", category: "pyq_pattern", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["संख्या प्रणाली"]
      },
      {
        id: "MTH-0009", subjectId: "maths", chapterId: "mth-ch1", topicId: "mth-t1",
        question: "निम्नलिखित में से कौन-सा युग्म 'असहभाज्य संख्याओं' (Co-prime Numbers) का है?",
        options: ["(6, 9)", "(8, 15)", "(10, 12)", "(14, 21)"],
        correct: 1,
        explanation: "8 और 15 का उभयनिष्ठ गुणनखंड केवल 1 है (HCF = 1), अतः (8, 15) असहभाज्य संख्याएँ हैं।",
        difficulty: "medium", category: "pyq_concept", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["असहभाज्य"]
      },
      {
        id: "MTH-0010", subjectId: "maths", chapterId: "mth-ch1", topicId: "mth-t1",
        question: "−7 और +3 के बीच कुल कितने पूर्णांक (Integers) स्थित हैं?",
        options: ["8", "9", "10", "11"],
        correct: 1,
        explanation: "−7 और +3 के बीच के पूर्णांक हैं: −6, −5, −4, −3, −2, −1, 0, 1, 2 — कुल 9 पूर्णांक।",
        difficulty: "medium", category: "application", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["पूर्णांक"]
      },
      {
        id: "MTH-0011", subjectId: "maths", chapterId: "mth-ch1", topicId: "mth-t1",
        question: "प्रथम 10 प्राकृत संख्याओं का योग कितना होता है?",
        options: ["45", "50", "55", "60"],
        correct: 2,
        explanation: "प्रथम n प्राकृत संख्याओं का योग = n(n+1)/2 = 10×11/2 = 55।",
        difficulty: "easy", category: "important", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["प्राकृत संख्या"]
      },
      {
        id: "MTH-0012", subjectId: "maths", chapterId: "mth-ch1", topicId: "mth-t1",
        question: "संख्या 36,042 में 0 का स्थानीय मान क्या है?",
        options: ["100", "0", "1000", "40"],
        correct: 1,
        explanation: "शून्य (0) किसी भी स्थान पर हो, उसका स्थानीय मान सदैव 0 ही रहता है।",
        difficulty: "easy", category: "practice_original", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["स्थानीय मान"]
      },
      {
        id: "MTH-0013", subjectId: "maths", chapterId: "mth-ch1", topicId: "mth-t1",
        question: "सबसे छोटी भाज्य संख्या (Smallest Composite Number) कौन-सी है?",
        options: ["1", "2", "3", "4"],
        correct: 3,
        explanation: "4 के तीन गुणनखंड (1, 2, 4) हैं, अतः 4 सबसे छोटी भाज्य संख्या है।",
        difficulty: "easy", category: "pyq_pattern", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["भाज्य संख्या"]
      },
      {
        id: "MTH-0014", subjectId: "maths", chapterId: "mth-ch1", topicId: "mth-t1",
        question: "संख्या 8,754 को निकटतम सैकड़े (Nearest Hundred) तक सन्निकट करने पर क्या प्राप्त होगा?",
        options: ["8,700", "8,800", "8,750", "9,000"],
        correct: 1,
        explanation: "दहाई का अंक 5 (≥ 5) होने के कारण सैकड़े के स्थान पर 7 से बढ़कर 8 हो जाएगा: 8,800।",
        difficulty: "medium", category: "application", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["सन्निकटन"]
      },
      {
        id: "MTH-0015", subjectId: "maths", chapterId: "mth-ch1", topicId: "mth-t1",
        question: "प्रथम 5 विषम प्राकृत संख्याओं का योग कितना है?",
        options: ["15", "20", "25", "30"],
        correct: 2,
        explanation: "प्रथम n विषम संख्याओं का योग = n² = 5² = 25 (1+3+5+7+9 = 25)।",
        difficulty: "medium", category: "pyq_concept", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["विषम संख्या"]
      },
      {
        id: "MTH-0016", subjectId: "maths", chapterId: "mth-ch1", topicId: "mth-t1",
        question: "दो अंकों की सबसे बड़ी अभाज्य संख्या कौन-सी है?",
        options: ["91", "93", "97", "99"],
        correct: 2,
        explanation: "91 = 7×13, 93 = 3×31, 99 = 9×11; केवल 97 अभाज्य है।",
        difficulty: "medium", category: "important", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["अभाज्य संख्या"]
      },
      {
        id: "MTH-0017", subjectId: "maths", chapterId: "mth-ch1", topicId: "mth-t1",
        question: "1000 की पूर्ववर्ती (Predecessor) और परवर्ती (Successor) संख्याओं का गुणनफल क्या है?",
        options: ["999999", "998999", "1000001", "999000"],
        correct: 0,
        explanation: "पूर्ववर्ती = 999, परवर्ती = 1001। गुणनफल = (1000 − 1)(1000 + 1) = 1000² − 1 = 999999।",
        difficulty: "hard", category: "difficult", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["पूर्ववर्ती-परवर्ती"]
      },
      {
        id: "MTH-0018", subjectId: "maths", chapterId: "mth-ch1", topicId: "mth-t1",
        question: "यदि किसी पूर्णांक 'a' को −1 से गुणा किया जाए, तो क्या प्राप्त होता है?",
        options: ["a का व्युत्क्रम", "a का योज्य प्रतिलोम (−a)", "शून्य", "1"],
        correct: 1,
        explanation: "a × (−1) = −a, जो संख्या 'a' का योज्य प्रतिलोम (Additive Inverse) होता है।",
        difficulty: "medium", category: "pyq_concept", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["पूर्णांक"]
      },
      {
        id: "MTH-0019", subjectId: "maths", chapterId: "mth-ch1", topicId: "mth-t1",
        question: "1 से 100 के बीच अंक '9' कुल कितनी बार आता है?",
        options: ["10 बार", "19 बार", "20 बार", "21 बार"],
        correct: 2,
        explanation: "इकाई स्थान पर 10 बार (9, 19, ..., 99) और दहाई स्थान पर 10 बार (90, 91, ..., 99) — कुल 20 बार।",
        difficulty: "hard", category: "difficult", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["संख्या गणना"]
      },
      {
        id: "MTH-0020", subjectId: "maths", chapterId: "mth-ch1", topicId: "mth-t1",
        question: "35,042 का सही विस्तारित रूप (Expanded Form) कौन-सा है?",
        options: ["3000 + 500 + 40 + 2", "30000 + 5000 + 40 + 2", "30000 + 500 + 40 + 2", "30000 + 5000 + 400 + 2"],
        correct: 1,
        explanation: "3 दस-हजार (30000) + 5 हजार (5000) + 0 सैकड़ा + 4 दहाई (40) + 2 इकाई (2)।",
        difficulty: "easy", category: "practice_original", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["विस्तारित रूप"]
      },
      {
        id: "MTH-0021", subjectId: "maths", chapterId: "mth-ch1", topicId: "mth-t2",
        question: "निम्नलिखित में से कौन-सी एक 'उचित भिन्न' (Proper Fraction) है?",
        options: ["7/5", "5/5", "3/8", "9/4"],
        correct: 2,
        explanation: "उचित भिन्न में अंश हमेशा हर से छोटा होता है; यहाँ 3 < 8 है।",
        difficulty: "easy", category: "pyq_pattern", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["भिन्न"]
      },
      {
        id: "MTH-0022", subjectId: "maths", chapterId: "mth-ch1", topicId: "mth-t2",
        question: "2/3, 3/4, 5/6 में सबसे बड़ी भिन्न कौन-सी है?",
        options: ["2/3", "3/4", "5/6", "सभी बराबर हैं"],
        correct: 2,
        explanation: "हरों (3, 4, 6) का LCM 12 है: 2/3 = 8/12, 3/4 = 9/12, 5/6 = 10/12। अतः 5/6 सबसे बड़ी है।",
        difficulty: "easy", category: "pyq_pattern", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["भिन्नों की तुलना"]
      },
      {
        id: "MTH-0023", subjectId: "maths", chapterId: "mth-ch1", topicId: "mth-t2",
        question: "3/4 + 1/2 का मान क्या होगा?",
        options: ["4/6", "5/4 (या 1 1/4)", "1/2", "3/8"],
        correct: 1,
        explanation: "हर 4 बनाने पर: 3/4 + 2/4 = 5/4 = 1 1/4।",
        difficulty: "easy", category: "practice_original", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["भिन्न जोड़"]
      },
      {
        id: "MTH-0024", subjectId: "maths", chapterId: "mth-ch1", topicId: "mth-t2",
        question: "0.2 × 0.03 का मान कितना होगा?",
        options: ["0.6", "0.06", "0.006", "0.0006"],
        correct: 2,
        explanation: "2 × 3 = 6; कुल दशमलव स्थान = 1 + 2 = 3। अतः 0.006।",
        difficulty: "easy", category: "important", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["दशमलव गुणा"]
      },
      {
        id: "MTH-0025", subjectId: "maths", chapterId: "mth-ch1", topicId: "mth-t2",
        question: "मिश्र भिन्न 3 2/5 को अनुचित भिन्न के रूप में लिखें:",
        options: ["15/5", "17/5", "10/5", "13/5"],
        correct: 1,
        explanation: "(3 × 5 + 2) / 5 = 17/5।",
        difficulty: "easy", category: "practice_original", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["मिश्र भिन्न"]
      },
      {
        id: "MTH-0026", subjectId: "maths", chapterId: "mth-ch1", topicId: "mth-t2",
        question: "3/5 का समतुल्य (Equivalent) दशमलव रूप क्या है?",
        options: ["0.35", "0.6", "0.53", "0.06"],
        correct: 1,
        explanation: "3 ÷ 5 = 0.6 (या 6/10 = 0.6)।",
        difficulty: "easy", category: "pyq_concept", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["दशमलव"]
      },
      {
        id: "MTH-0027", subjectId: "maths", chapterId: "mth-ch1", topicId: "mth-t2",
        question: "2/3 ÷ 4/9 का मान क्या होगा?",
        options: ["8/27", "3/2", "2/3", "6/12"],
        correct: 1,
        explanation: "2/3 × 9/4 = 18/12 = 3/2।",
        difficulty: "medium", category: "pyq_concept", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["भिन्न भाग"]
      },
      {
        id: "MTH-0028", subjectId: "maths", chapterId: "mth-ch1", topicId: "mth-t2",
        question: "निम्नलिखित दशमलव संख्याओं में सबसे बड़ी संख्या कौन-सी है: 0.5, 0.05, 0.55, 0.505?",
        options: ["0.5", "0.05", "0.55", "0.505"],
        correct: 2,
        explanation: "दशमलव के 3 स्थानों तक लिखने पर: 0.500, 0.050, 0.550, 0.505। स्पष्टतः 0.550 (0.55) सबसे बड़ी है।",
        difficulty: "medium", category: "application", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["दशमलव तुलना"]
      },
      {
        id: "MTH-0029", subjectId: "maths", chapterId: "mth-ch1", topicId: "mth-t2",
        question: "एक रस्सी की लंबाई 4.5 मीटर है। यदि इसमें से 1.75 मीटर काट लिया जाए, तो कितनी रस्सी बचेगी?",
        options: ["2.75 मी", "3.25 मी", "2.25 मी", "3.75 मी"],
        correct: 0,
        explanation: "4.50 − 1.75 = 2.75 मीटर।",
        difficulty: "easy", category: "application", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["दशमलव घटाव"]
      },
      {
        id: "MTH-0030", subjectId: "maths", chapterId: "mth-ch1", topicId: "mth-t2",
        question: "1/2 में कितने 1/8 होते हैं?",
        options: ["2", "4", "6", "8"],
        correct: 1,
        explanation: "(1/2) ÷ (1/8) = (1/2) × 8 = 4।",
        difficulty: "medium", category: "pyq_pattern", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["भिन्न भाग"]
      },
      {
        id: "MTH-0031", subjectId: "maths", chapterId: "mth-ch1", topicId: "mth-t2",
        question: "संख्या 14.375 में अंक 7 का स्थानीय मान क्या है?",
        options: ["7/10", "7/100 (0.07)", "7/1000", "70"],
        correct: 1,
        explanation: "दशमलव के बाद पहला अंक दसवाँ (3/10) और दूसरा अंक सौवाँ (7/100 = 0.07) होता है।",
        difficulty: "medium", category: "important", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["दशमलव स्थानीय मान"]
      },
      {
        id: "MTH-0032", subjectId: "maths", chapterId: "mth-ch1", topicId: "mth-t2",
        question: "0.025 को सरलतम भिन्न के रूप में लिखने पर क्या प्राप्त होगा?",
        options: ["1/4", "1/40", "1/25", "25/100"],
        correct: 1,
        explanation: "0.025 = 25/1000 = 1/40।",
        difficulty: "medium", category: "pyq_concept", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["दशमलव से भिन्न"]
      },
      {
        id: "MTH-0033", subjectId: "maths", chapterId: "mth-ch1", topicId: "mth-t2",
        question: "4/7 का गुणनात्मक प्रतिलोम (Reciprocal) क्या होगा?",
        options: ["−4/7", "7/4", "4/7", "1"],
        correct: 1,
        explanation: "जिस संख्या से गुणा करने पर गुणनफल 1 आए वह व्युत्क्रम होता है: (4/7) × (7/4) = 1।",
        difficulty: "easy", category: "practice_original", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["व्युत्क्रम"]
      },
      {
        id: "MTH-0034", subjectId: "maths", chapterId: "mth-ch1", topicId: "mth-t2",
        question: "1.2 ÷ 0.04 का मान कितना होगा?",
        options: ["3", "30", "0.3", "300"],
        correct: 1,
        explanation: "1.2 / 0.04 = 120 / 4 = 30।",
        difficulty: "medium", category: "important", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["दशमलव भाग"]
      },
      {
        id: "MTH-0035", subjectId: "maths", chapterId: "mth-ch1", topicId: "mth-t2",
        question: "एक कक्षा में 40 विद्यार्थी हैं, जिनमें से 3/5 लड़कियाँ हैं। कक्षा में लड़कों की संख्या कितनी है?",
        options: ["24", "16", "15", "20"],
        correct: 1,
        explanation: "लड़कियाँ = 40 × (3/5) = 24; अतः लड़के = 40 − 24 = 16।",
        difficulty: "medium", category: "application", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["भिन्न अनुप्रयोग"]
      },
      {
        id: "MTH-0036", subjectId: "maths", chapterId: "mth-ch1", topicId: "mth-t2",
        question: "यदि 12/16 = x/4 हो, तो x का मान क्या होगा?",
        options: ["2", "3", "4", "6"],
        correct: 1,
        explanation: "12 और 16 को 4 से भाग देने पर 3/4 प्राप्त होता है, अतः x = 3।",
        difficulty: "easy", category: "practice_original", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["समतुल्य भिन्न"]
      },
      {
        id: "MTH-0037", subjectId: "maths", chapterId: "mth-ch1", topicId: "mth-t2",
        question: "2/5 + 3/10 − 1/2 का मान क्या होगा?",
        options: ["1/5", "2/5", "3/10", "0"],
        correct: 0,
        explanation: "हर 10 लेने पर: (4 + 3 − 5) / 10 = 2/10 = 1/5।",
        difficulty: "medium", category: "practice_original", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["भिन्न संक्रिया"]
      },
      {
        id: "MTH-0038", subjectId: "maths", chapterId: "mth-ch1", topicId: "mth-t2",
        question: "0.75 को प्रतिशत में बदलने पर कितना प्राप्त होगा?",
        options: ["7.5%", "75%", "0.75%", "750%"],
        correct: 1,
        explanation: "0.75 × 100 = 75%।",
        difficulty: "easy", category: "important", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["प्रतिशत"]
      },
      {
        id: "MTH-0039", subjectId: "maths", chapterId: "mth-ch1", topicId: "mth-t2",
        question: "किसी संख्या का 2/3 भाग 24 है, तो उस संख्या का 1/4 भाग कितना होगा?",
        options: ["9", "12", "18", "36"],
        correct: 0,
        explanation: "संख्या = 24 × (3/2) = 36। अब 36 का 1/4 = 36 ÷ 4 = 9।",
        difficulty: "hard", category: "difficult", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["भिन्न"]
      },
      {
        id: "MTH-0040", subjectId: "maths", chapterId: "mth-ch1", topicId: "mth-t2",
        question: "3.45 + 12.6 + 0.085 का योग कितना होगा?",
        options: ["16.135", "15.135", "16.035", "16.235"],
        correct: 0,
        explanation: "3.450 + 12.600 + 0.085 = 16.135।",
        difficulty: "easy", category: "practice_original", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["दशमलव जोड़"]
      },
      {
        id: "MTH-0041", subjectId: "maths", chapterId: "mth-ch2", topicId: "mth-t3",
        question: "BODMAS नियम के अनुसार 18 ÷ 3 × 2 + 4 − 1 का मान क्या होगा?",
        options: ["7", "15", "12", "9"],
        correct: 1,
        explanation: "पहले भाग: 18 ÷ 3 = 6; फिर गुणा: 6 × 2 = 12; फिर जोड़-घटाव: 12 + 4 − 1 = 15।",
        difficulty: "easy", category: "pyq_pattern", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["BODMAS"]
      },
      {
        id: "MTH-0042", subjectId: "maths", chapterId: "mth-ch2", topicId: "mth-t3",
        question: "यदि संख्या 45*2, अंक 3 से पूर्णतः विभाज्य है, तो * के स्थान पर सबसे छोटा अंक क्या आएगा?",
        options: ["0", "1", "2", "4"],
        correct: 1,
        explanation: "अंकों का योग = 4 + 5 + * + 2 = 11 + *। 3 से विभाज्य होने के लिए 11 + 1 = 12, अतः * = 1।",
        difficulty: "medium", category: "pyq_pattern", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["विभाज्यता"]
      },
      {
        id: "MTH-0043", subjectId: "maths", chapterId: "mth-ch2", topicId: "mth-t3",
        question: "संख्या 36 के कुल कितने गुणनखंड (Factors) होते हैं?",
        options: ["6", "8", "9", "12"],
        correct: 2,
        explanation: "36 के गुणनखंड: 1, 2, 3, 4, 6, 9, 12, 18, 36 — कुल 9 गुणनखंड (अभाज्य गुणनखंड 2²×3² से (2+1)(2+1)=9)।",
        difficulty: "hard", category: "difficult", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["गुणनखंड"]
      },
      {
        id: "MTH-0044", subjectId: "maths", chapterId: "mth-ch2", topicId: "mth-t3",
        question: "120 के अभाज्य गुणनखंड (Prime Factorization) क्या होंगे?",
        options: ["2 × 2 × 2 × 3 × 5", "2 × 2 × 3 × 5", "2 × 3 × 4 × 5", "8 × 15"],
        correct: 0,
        explanation: "120 = 8 × 3 × 5 = 2 × 2 × 2 × 3 × 5।",
        difficulty: "easy", category: "important", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["अभाज्य गुणनखंड"]
      },
      {
        id: "MTH-0045", subjectId: "maths", chapterId: "mth-ch2", topicId: "mth-t3",
        question: "निम्नलिखित में से कौन-सी संख्या 9 से पूर्णतः विभाज्य है?",
        options: ["4532", "7218", "3451", "8123"],
        correct: 1,
        explanation: "7 + 2 + 1 + 8 = 18, जो 9 से विभाज्य है।",
        difficulty: "easy", category: "pyq_concept", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["विभाज्यता"]
      },
      {
        id: "MTH-0046", subjectId: "maths", chapterId: "mth-ch2", topicId: "mth-t3",
        question: "भाग के एक प्रश्न में भाजक 15, भागफल 12 तथा शेषफल 7 है, तो भाज्य (Dividend) क्या होगा?",
        options: ["180", "187", "173", "195"],
        correct: 1,
        explanation: "भाज्य = (भाजक × भागफल) + शेषफल = (15 × 12) + 7 = 180 + 7 = 187।",
        difficulty: "easy", category: "important", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["भाग नियम"]
      },
      {
        id: "MTH-0047", subjectId: "maths", chapterId: "mth-ch2", topicId: "mth-t3",
        question: "25 − [20 − {10 − (7 − 3)}] का मान क्या होगा?",
        options: ["9", "11", "15", "19"],
        correct: 1,
        explanation: "(7−3)=4 → {10−4}=6 → [20−6]=14 → 25−14 = 11।",
        difficulty: "medium", category: "application", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["BODMAS"]
      },
      {
        id: "MTH-0048", subjectId: "maths", chapterId: "mth-ch2", topicId: "mth-t3",
        question: "निम्नलिखित में से कौन-सी संख्या 11 से पूर्णतः विभाज्य है?",
        options: ["1331", "1234", "2456", "3112"],
        correct: 0,
        explanation: "1331 में विषम स्थानों का योग (1+3=4) और सम स्थानों का योग (3+1=4), अंतर 4−4 = 0, अतः 11 से विभाज्य है।",
        difficulty: "medium", category: "pyq_concept", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["11 से विभाज्यता"]
      },
      {
        id: "MTH-0049", subjectId: "maths", chapterId: "mth-ch2", topicId: "mth-t3",
        question: "एक विद्यालय में 18 कमरे हैं और प्रत्येक कमरे में 24 बेंच हैं। यदि एक बेंच पर 2 बच्चे बैठते हैं, तो कुल कितने बच्चे बैठ सकते हैं?",
        options: ["432", "864", "720", "900"],
        correct: 1,
        explanation: "कुल बेंच = 18 × 24 = 432; कुल बच्चे = 432 × 2 = 864।",
        difficulty: "easy", category: "application", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["शाब्दिक प्रश्न"]
      },
      {
        id: "MTH-0050", subjectId: "maths", chapterId: "mth-ch2", topicId: "mth-t3",
        question: "6 के प्रथम 5 गुणजों (Multiples) का औसत कितना होगा?",
        options: ["12", "15", "18", "24"],
        correct: 2,
        explanation: "6 के प्रथम 5 गुणज: 6, 12, 18, 24, 30। योग = 90; औसत = 90 ÷ 5 = 18।",
        difficulty: "medium", category: "practice_original", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["गुणज"]
      }
    ]
  });
})(window);
