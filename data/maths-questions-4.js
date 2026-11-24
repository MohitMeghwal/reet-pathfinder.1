(function (global) {
  "use strict";

  global.REET.registerPack({
    questions: [
      {
        id: "MTH-0151", subjectId: "maths", chapterId: "mth-ch5", topicId: "mth-t8",
        question: "पैटर्न पूरा कीजिए: 3, 6, 12, 24, 48, ___",
        options: ["72", "96", "60", "84"],
        correct: 1,
        explanation: "प्रत्येक पद को 2 से गुणा किया गया है: 48 × 2 = 96।",
        difficulty: "easy", category: "practice_original", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["पैटर्न"]
      },
      {
        id: "MTH-0152", subjectId: "maths", chapterId: "mth-ch5", topicId: "mth-t8",
        question: "अक्षर पैटर्न पूरा कीजिए: AZ, BY, CX, DW, ___",
        options: ["EV", "EU", "FV", "EW"],
        correct: 0,
        explanation: "पहला अक्षर आगे बढ़ रहा है (A, B, C, D, E) और दूसरा पीछे (Z, Y, X, W, V): EV।",
        difficulty: "medium", category: "application", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["तर्क पैटर्न"]
      },
      {
        id: "MTH-0153", subjectId: "maths", chapterId: "mth-ch5", topicId: "mth-t8",
        question: "किसी पासे (Dice) को एक बार फेंकने पर 'सम संख्या' आने की प्रायिकता क्या होगी?",
        options: ["1/6", "1/2", "1/3", "2/3"],
        correct: 1,
        explanation: "कुल परिणाम = {1,2,3,4,5,6} (6); सम संख्याएँ = {2,4,6} (3)। प्रायिकता = 3/6 = 1/2।",
        difficulty: "medium", category: "pyq_concept", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["प्रायिकता"]
      },
      {
        id: "MTH-0154", subjectId: "maths", chapterId: "mth-ch5", topicId: "mth-t8",
        question: "पाई चार्ट (वृत्त आरेख) में संपूर्ण वृत्त का केंद्रीय कोण कितने डिग्री का होता है?",
        options: ["180°", "90°", "360°", "100°"],
        correct: 2,
        explanation: "पाई चार्ट में सभी खंडों के केंद्रीय कोणों का योग सदैव 360° होता है।",
        difficulty: "easy", category: "important", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["पाई चार्ट"]
      },
      {
        id: "MTH-0155", subjectId: "maths", chapterId: "mth-ch5", topicId: "mth-t8",
        question: "यदि एक पाई चार्ट में 'गणित' विषय को 25% हिस्सा मिला है, तो उसका केंद्रीय कोण कितना होगा?",
        options: ["45°", "60°", "90°", "120°"],
        correct: 2,
        explanation: "360° का 25% = (25/100) × 360° = 90°।",
        difficulty: "medium", category: "application", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["पाई चार्ट"]
      },
      {
        id: "MTH-0156", subjectId: "maths", chapterId: "mth-ch5", topicId: "mth-t8",
        question: "1, 4, 9, 16, 25, ___, 49 — रिक्त स्थान में क्या आएगा?",
        options: ["32", "36", "38", "40"],
        correct: 1,
        explanation: "यह प्राकृत संख्याओं के वर्गों की श्रेणी है: 1², 2², 3², 4², 5², 6² (= 36), 7²।",
        difficulty: "easy", category: "practice_original", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["वर्ग पैटर्न"]
      },
      {
        id: "MTH-0157", subjectId: "maths", chapterId: "mth-ch5", topicId: "mth-t8",
        question: "प्रथम 7 प्राकृत संख्याओं की माध्यिका (Median) क्या होगी?",
        options: ["3", "4", "5", "3.5"],
        correct: 1,
        explanation: "1, 2, 3, 4, 5, 6, 7 में ठीक बीच का (चौथा) पद 4 है।",
        difficulty: "easy", category: "practice_original", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["माध्यिका"]
      },
      {
        id: "MTH-0158", subjectId: "maths", chapterId: "mth-ch5", topicId: "mth-t8",
        question: "एक सिक्के को उछालने पर 'चित' (Head) आने की संभावना कितनी है?",
        options: ["1/4", "1/2", "1", "0"],
        correct: 1,
        explanation: "दो संभावित परिणाम (Head, Tail) में से 1 अनुकूल है, अतः 1/2।",
        difficulty: "easy", category: "practice_original", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["प्रायिकता"]
      },
      {
        id: "MTH-0159", subjectId: "maths", chapterId: "mth-ch5", topicId: "mth-t8",
        question: "यदि 5 मित्र एक-दूसरे से ठीक एक-एक बार हाथ मिलाते हैं, तो कुल कितनी बार हाथ मिलाए जाएँगे?",
        options: ["10", "15", "20", "25"],
        correct: 0,
        explanation: "कुल हैंडशेक = n(n−1)/2 = (5 × 4)/2 = 10 बार।",
        difficulty: "hard", category: "difficult", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["गणितीय तर्क"]
      },
      {
        id: "MTH-0160", subjectId: "maths", chapterId: "mth-ch5", topicId: "mth-t8",
        question: "एक 3×3 जादुई वर्ग (Magic Square) में यदि 1 से 9 तक के अंक भरें, तो प्रत्येक पंक्ति का योग कितना होता है?",
        options: ["12", "15", "18", "45"],
        correct: 1,
        explanation: "1 से 9 तक का योग = 45; 3 पंक्तियों में बराबर बँटने पर प्रत्येक पंक्ति का योग = 45 ÷ 3 = 15।",
        difficulty: "hard", category: "difficult", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["जादुई वर्ग"]
      },
      {
        id: "MTH-0161", subjectId: "maths", chapterId: "mth-ch5", topicId: "mth-t8",
        question: "आँकड़ों 15, 20, 20, 25, 30, 20, 10 में किस मान की बारंबारता सर्वाधिक है?",
        options: ["15", "20", "25", "30"],
        correct: 1,
        explanation: "20 तीन बार आया है, अतः इसकी बारंबारता सर्वाधिक (3) है।",
        difficulty: "easy", category: "practice_original", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["बारंबारता"]
      },
      {
        id: "MTH-0162", subjectId: "maths", chapterId: "mth-ch5", topicId: "mth-t8",
        question: "1 + 3 + 5 + 7 + 9 + 11 + 13 का योग पैटर्न से तुरंत क्या होगा?",
        options: ["42", "49", "56", "64"],
        correct: 1,
        explanation: "यहाँ 7 क्रमागत विषम संख्याएँ हैं; योग = 7² = 49।",
        difficulty: "medium", category: "application", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["पैटर्न"]
      },
      {
        id: "MTH-0163", subjectId: "maths", chapterId: "mth-ch5", topicId: "mth-t8",
        question: "चित्रालेख में आधा चित्र किस मान को दर्शाता है?",
        options: ["शून्य", "पैमाने का ठीक आधा मान", "दोगुना मान", "गलत आँकड़ा"],
        correct: 1,
        explanation: "यदि 1 पूरा चित्र = 10 है, तो आधा चित्र = 5 को दर्शाता है।",
        difficulty: "easy", category: "practice_original", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["चित्रालेख"]
      },
      {
        id: "MTH-0164", subjectId: "maths", chapterId: "mth-ch5", topicId: "mth-t8",
        question: "निम्नलिखित में से कौन-सा 'केंद्रीय प्रवृत्ति का माप' (Measure of Central Tendency) नहीं है?",
        options: ["माध्य (Mean)", "माध्यिका (Median)", "बहुलक (Mode)", "परिसर (Range)"],
        correct: 3,
        explanation: "माध्य, माध्यिका और बहुलक केंद्रीय प्रवृत्ति के माप हैं, जबकि परिसर (Range) विक्षेपण (Dispersion) का माप है।",
        difficulty: "hard", category: "difficult", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["सांख्यिकी"]
      },
      {
        id: "MTH-0165", subjectId: "maths", chapterId: "mth-ch5", topicId: "mth-t8",
        question: "यदि किसी श्रेणी का माध्य 10 और माध्यिका 12 है, तो आनुभविक सूत्र (Mode = 3 Median − 2 Mean) से बहुलक कितना होगा?",
        options: ["14", "16", "18", "20"],
        correct: 1,
        explanation: "Mode = 3(12) − 2(10) = 36 − 20 = 16।",
        difficulty: "hard", category: "difficult", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["सांख्यिकी सूत्र"]
      },
      {
        id: "MTH-0166", subjectId: "maths", chapterId: "mth-ch6", topicId: "mth-t9",
        question: "NCF 2005 के अनुसार विद्यालय में गणित शिक्षण का सबसे संकीर्ण नहीं बल्कि 'मुख्य और उच्च लक्ष्य' क्या है?",
        options: ["केवल पहाड़े रटवाना", "बच्चे के चिंतन का गणितीयकरण (Mathematisation) करना", "जल्दी-जल्दी जोड़ करना", "केवल परीक्षा पास कराना"],
        correct: 1,
        explanation: "NCF 2005 के अनुसार गणित शिक्षण का मुख्य लक्ष्य बच्चे की सोच का गणितीयकरण (तर्क, अमूर्तन और समस्या समाधान) करना है।",
        difficulty: "easy", category: "pyq_pattern", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["NCF 2005"]
      },
      {
        id: "MTH-0167", subjectId: "maths", chapterId: "mth-ch6", topicId: "mth-t9",
        question: "वैन हीले के ज्यामितीय चिंतन स्तर के अनुसार, जब एक बच्चा समोसे को 'त्रिभुज' और रोटी को 'वृत्त' कहता है (दिखावट के आधार पर), तो वह किस स्तर पर है?",
        options: ["स्तर 0: चाक्षुषीकरण (Visualization)", "स्तर 1: विश्लेषण", "स्तर 2: अनौपचारिक निगमन", "स्तर 3: औपचारिक निगमन"],
        correct: 0,
        explanation: "चाक्षुषीकरण स्तर पर बच्चा आकृतियों को उनके गुणों के बजाय समग्र बाहरी दिखावट से पहचानता है।",
        difficulty: "medium", category: "pyq_pattern", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["वैन हीले"]
      },
      {
        id: "MTH-0168", subjectId: "maths", chapterId: "mth-ch6", topicId: "mth-t9",
        question: "प्राथमिक कक्षाओं में गणित के नए नियम या सूत्र सिखाने के लिए कौन-सी विधि सर्वाधिक उपयुक्त है?",
        options: ["आगमन विधि (उदाहरण से नियम की ओर)", "निगमन विधि", "केवल रटंत विधि", "व्याख्यान विधि"],
        correct: 0,
        explanation: "आगमन विधि में बच्चे कई मूर्त उदाहरणों का अवलोकन करके स्वयं नियम खोजते हैं।",
        difficulty: "easy", category: "important", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["आगमन विधि"]
      },
      {
        id: "MTH-0169", subjectId: "maths", chapterId: "mth-ch6", topicId: "mth-t9",
        question: "'अज्ञात से ज्ञात की ओर' किस शिक्षण विधि का सिद्धांत है?",
        options: ["संश्लेषण विधि", "विश्लेषण विधि (Analysis Method)", "प्रदर्शन विधि", "अनुकरण विधि"],
        correct: 1,
        explanation: "विश्लेषण विधि में समस्या (अज्ञात) को छोटे-छोटे हिस्सों में तोड़कर ज्ञात तथ्यों तक पहुँचा जाता है।",
        difficulty: "medium", category: "pyq_concept", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["विश्लेषण विधि"]
      },
      {
        id: "MTH-0170", subjectId: "maths", chapterId: "mth-ch6", topicId: "mth-t9",
        question: "'गणित सभी विज्ञानों का सिंहद्वार एवं कुंजी है' — यह प्रसिद्ध कथन किसका है?",
        options: ["रोजर बेकन", "आर्यभट्ट", "हॉगबेन", "गैलिलियो"],
        correct: 0,
        explanation: "रोजर बेकन ने गणित को सभी विज्ञानों का द्वार और कुंजी कहा है।",
        difficulty: "medium", category: "important", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["कथन"]
      },
      {
        id: "MTH-0171", subjectId: "maths", chapterId: "mth-ch6", topicId: "mth-t9",
        question: "गणित की प्रकृति कैसी होती है?",
        options: ["अस्पष्ट और अनिश्चित", "तार्किक, क्रमबद्ध, अमूर्त एवं सटीक", "केवल काल्पनिक", "व्यक्तिगत राय पर आधारित"],
        correct: 1,
        explanation: "गणित का ज्ञान तार्किक, सार्वभौमिक, क्रमबद्ध और सटीक प्रतीकों पर आधारित होता है।",
        difficulty: "easy", category: "pyq_concept", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["गणित की प्रकृति"]
      },
      {
        id: "MTH-0172", subjectId: "maths", chapterId: "mth-ch6", topicId: "mth-t9",
        question: "वैन हीले मॉडल के किस स्तर पर बच्चा यह समझने लगता है कि 'सभी वर्ग आयत होते हैं'?",
        options: ["स्तर 0: चाक्षुषीकरण", "स्तर 1: विश्लेषण", "स्तर 2: अनौपचारिक निगमन (संबंध)", "स्तर 4: दृढ़ता"],
        correct: 2,
        explanation: "अनौपचारिक निगमन स्तर पर बच्चा विभिन्न आकृतियों के गुणों के बीच तार्किक संबंध स्थापित करता है।",
        difficulty: "hard", category: "difficult", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["वैन हीले"]
      },
      {
        id: "MTH-0173", subjectId: "maths", chapterId: "mth-ch6", topicId: "mth-t9",
        question: "प्राथमिक स्तर पर गणित पढ़ाने के लिए कौन-सा क्रम (CPA / ELPS) सर्वाधिक वैज्ञानिक है?",
        options: ["प्रतीक → चित्र → ठोस अनुभव", "मूर्त अनुभव (Concrete) → चित्र/प्रतिमा (Pictorial) → अमूर्त प्रतीक (Abstract)", "केवल सूत्र → रटना", "परीक्षा → पाठ"],
        correct: 1,
        explanation: "ब्रूनर व आधुनिक गणित शिक्षण के अनुसार बच्चे पहले ठोस वस्तुओं से, फिर चित्रों से और अंत में अमूर्त प्रतीकों से सीखते हैं।",
        difficulty: "medium", category: "application", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["CPA दृष्टिकोण"]
      },
      {
        id: "MTH-0174", subjectId: "maths", chapterId: "mth-ch6", topicId: "mth-t9",
        question: "समस्या-समाधान विधि (Problem Solving Method) के चरणों का सही क्रम क्या है?",
        options: ["समस्या पहचानना → योजना बनाना → योजना लागू करना → उत्तर की जाँच करना", "रटना → लिखना → भूलना", "सीधे उत्तर देखना → नकल करना", "केवल सूत्र लिखना"],
        correct: 0,
        explanation: "जॉर्ज पोल्या के 4 चरण: समस्या को समझना, योजना बनाना, क्रियान्वयन और पीछे मुड़कर जाँच करना।",
        difficulty: "medium", category: "important", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["पोल्या"]
      },
      {
        id: "MTH-0175", subjectId: "maths", chapterId: "mth-ch6", topicId: "mth-t9",
        question: "किस गणितज्ञ ने कहा था 'गणित वह भाषा है जिसमें परमेश्वर ने संपूर्ण जगत को लिखा है'?",
        options: ["गैलिलियो", "न्यूटन", "प्लेटो", "रसेल"],
        correct: 0,
        explanation: "गैलिलियो गैलीली ने गणित को प्रकृति व ब्रह्मांड की भाषा बताया।",
        difficulty: "hard", category: "difficult", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["कथन"]
      },
      {
        id: "MTH-0176", subjectId: "maths", chapterId: "mth-ch6", topicId: "mth-t9",
        question: "जहाँ बड़े नियमों का उपयोग करके छोटे-छोटे प्रश्न हल किए जाते हैं, वह विधि है:",
        options: ["निगमन विधि (Deductive Method)", "आगमन विधि", "प्रयोगशाला विधि", "खेल विधि"],
        correct: 0,
        explanation: "निगमन विधि सामान्य नियम/सूत्र से विशिष्ट उदाहरण/प्रश्न की ओर चलती है।",
        difficulty: "easy", category: "practice_original", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["निगमन विधि"]
      },
      {
        id: "MTH-0177", subjectId: "maths", chapterId: "mth-ch6", topicId: "mth-t9",
        question: "'अंकों और अक्षरों के बिना गणित' या व्यावहारिक मानसिक गणना को बढ़ाने के लिए कौन-सा कार्य उपयोगी है?",
        options: ["दैनिक जीवन की खरीदारी के मौखिक प्रश्न व अनुमान लगाना", "केवल 100 पृष्ठ लिखना", "कैलकुलेटर का उपयोग", "मौन बैठना"],
        correct: 0,
        explanation: "अनुमान और मानसिक गणना वास्तविक जीवन की स्थितियों से विकसित होती है।",
        difficulty: "easy", category: "application", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["मानसिक गणित"]
      },
      {
        id: "MTH-0178", subjectId: "maths", chapterId: "mth-ch6", topicId: "mth-t9",
        question: "योजना / प्रोजेक्ट विधि (Project Method) के प्रवर्तक कौन हैं?",
        options: ["डब्ल्यू.एच. किलपैट्रिक", "आर्मस्ट्रांग", "हर्बर्ट", "बिने"],
        correct: 0,
        explanation: "जॉन ड्यूवी के शिष्य डब्ल्यू.एच. किलपैट्रिक ने उद्देश्यपूर्ण सामाजिक गतिविधि के रूप में प्रोजेक्ट विधि दी।",
        difficulty: "medium", category: "pyq_pattern", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["प्रोजेक्ट विधि"]
      },
      {
        id: "MTH-0179", subjectId: "maths", chapterId: "mth-ch6", topicId: "mth-t9",
        question: "ह्यूरिस्टिक / अन्वेषण विधि (Heuristic Method) के प्रतिपादक कौन हैं?",
        options: ["प्रो. एच.ई. आर्मस्ट्रांग", "किलपैट्रिक", "स्किनर", "थॉर्नडाइक"],
        correct: 0,
        explanation: "आर्मस्ट्रांग ने अन्वेषण विधि दी जिसका अर्थ है 'मैं खोजता हूँ' (स्वयं खोजकर सीखना)।",
        difficulty: "medium", category: "pyq_concept", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["अन्वेषण विधि"]
      },
      {
        id: "MTH-0180", subjectId: "maths", chapterId: "mth-ch6", topicId: "mth-t9",
        question: "प्राथमिक स्तर पर गणित की पाठ्यपुस्तक में 'खुले अंत वाले प्रश्न' (Open-ended Questions) क्यों होने चाहिए?",
        options: ["क्योंकि वे एक से अधिक सही उत्तर व विविध चिंतन को बढ़ावा देते हैं", "क्योंकि उनकी जाँच नहीं होती", "क्योंकि वे छोटे होते हैं", "केवल समय भरने के लिए"],
        correct: 0,
        explanation: "खुले प्रश्न (जैसे 'ऐसे दो अंक लिखो जिनका योग 12 हो') सृजनात्मक व अपसारी गणितीय चिंतन बढ़ाते हैं।",
        difficulty: "medium", category: "application", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["खुले प्रश्न"]
      },
      {
        id: "MTH-0181", subjectId: "maths", chapterId: "mth-ch6", topicId: "mth-t9",
        question: "गणित का किस विषय के साथ सर्वाधिक प्रत्यक्ष सहसंबंध (Correlation) होता है?",
        options: ["विज्ञान (भौतिकी, रसायन) एवं भूगोल", "केवल संगीत", "केवल चित्रकला", "किसी से नहीं"],
        correct: 0,
        explanation: "गणित विज्ञान के सूत्रों, मापन और भूगोल के अक्षांश-देशांतर व समय गणना का आधार है।",
        difficulty: "easy", category: "practice_original", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["सहसंबंध"]
      },
      {
        id: "MTH-0182", subjectId: "maths", chapterId: "mth-ch6", topicId: "mth-t9",
        question: "गणित के प्रति बच्चों का डर (Math Anxiety) कम करने के लिए शिक्षक को क्या करना चाहिए?",
        options: ["त्रुटियों को सीखने का हिस्सा मानकर खेल, गतिविधि और संदर्भ से जोड़कर पढ़ाना", "गलती पर सज़ा देना", "तेज बच्चों की ही तारीफ करना", "कठिन परीक्षा रोज़ लेना"],
        correct: 0,
        explanation: "भयमुक्त, गतिविधि-आधारित वातावरण गणित के प्रति सकारात्मक दृष्टिकोण बनाता है।",
        difficulty: "easy", category: "practice_original", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["गणित भय"]
      },
      {
        id: "MTH-0183", subjectId: "maths", chapterId: "mth-ch6", topicId: "mth-t9",
        question: "शून्य की खोज और दशमलव स्थानिक मान पद्धति के विकास का श्रेय किस प्राचीन भारतीय परंपरा/गणितज्ञ को जाता है?",
        options: ["आर्यभट्ट एवं ब्रह्मगुप्त (भारतीय गणित)", "यूक्लिड", "पाइथागोरस", "आर्किमिडीज"],
        correct: 0,
        explanation: "आर्यभट्ट, ब्रह्मगुप्त और भारतीय गणित परंपरा ने शून्य और दशमलव स्थानिक मान प्रणाली को विश्व को दिया।",
        difficulty: "easy", category: "important", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["भारतीय गणित"]
      },
      {
        id: "MTH-0184", subjectId: "maths", chapterId: "mth-ch6", topicId: "mth-t10",
        question: "2D ज्यामितीय आकृतियों, उनके परिमाप और क्षेत्रफल को मूर्त रूप से सिखाने के लिए कौन-सा उपकरण सर्वाधिक उपयोगी है?",
        options: ["जियोबोर्ड (Geoboard)", "थर्मामीटर", "रेडियो", "ग्लोब"],
        correct: 0,
        explanation: "जियोबोर्ड की कीलों पर रबर बैंड लगाकर बच्चे आयत, वर्ग, त्रिभुज और उनका परिमाप-क्षेत्रफल स्वयं बना सकते हैं।",
        difficulty: "easy", category: "pyq_pattern", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["जियोबोर्ड"]
      },
      {
        id: "MTH-0185", subjectId: "maths", chapterId: "mth-ch6", topicId: "mth-t10",
        question: "7 ज्यामितीय टुकड़ों वाली प्रसिद्ध चीनी पहेली, जो बच्चों में स्थानिक समझ (Spatial Understanding) विकसित करती है, क्या कहलाती है?",
        options: ["टैनग्राम (Tangram)", "अबेकस", "ग्राफ पेपर", "डायन्स ब्लॉक"],
        correct: 0,
        explanation: "टैनग्राम में 5 त्रिभुज, 1 वर्ग और 1 समांतर चतुर्भुज (कुल 7 टुकड़े) होते हैं जिनसे विविध आकृतियाँ बनाई जाती हैं।",
        difficulty: "easy", category: "pyq_pattern", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["टैनग्राम"]
      },
      {
        id: "MTH-0186", subjectId: "maths", chapterId: "mth-ch6", topicId: "mth-t10",
        question: "दशमलव संख्याओं के गुणन (जैसे 0.3 × 0.4 = 0.12) को दृश्य रूप से समझाने के लिए सबसे अच्छा TLM कौन-सा है?",
        options: ["ग्राफ पेपर / 10×10 वर्गाकार ग्रिड पेपर", "रोमन घड़ी", "कंपास", "ग्लोब"],
        correct: 0,
        explanation: "10×10 ग्रिड में 100 छोटे वर्ग होते हैं, जिससे दशमलव भागों और उनके गुणनफल को रंगकर स्पष्ट दिखाया जा सकता है।",
        difficulty: "medium", category: "pyq_concept", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["ग्राफ पेपर"]
      },
      {
        id: "MTH-0187", subjectId: "maths", chapterId: "mth-ch6", topicId: "mth-t10",
        question: "स्थानीय मान (Place Value) और हासिल वाले जोड़-घटाव सिखाने के लिए सबसे उपयुक्त सामग्री कौन-सी है?",
        options: ["डायन्स ब्लॉक (Dienes Blocks) एवं अबेकस", "चाँदा", "स्केल", "प्रकार"],
        correct: 0,
        explanation: "डायन्स ब्लॉक (इकाई, दहाई की छड़ें, सैकड़ा की प्लेट) स्थानीय मान को ठोस रूप से समझाते हैं।",
        difficulty: "easy", category: "important", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["डायन्स ब्लॉक"]
      },
      {
        id: "MTH-0188", subjectId: "maths", chapterId: "mth-ch6", topicId: "mth-t10",
        question: "एक छात्र 3/4 + 2/5 = 5/9 लिखता है। उसकी त्रुटि का मुख्य कारण क्या है?",
        options: ["वह भिन्नों में 'समान हर' की अवधारणा नहीं समझ पाया है और अंश-हर को अलग-अलग जोड़ रहा है", "उसे पहाड़े नहीं आते", "वह आलसी है", "उसे लिखना नहीं आता"],
        correct: 0,
        explanation: "यह एक सामान्य संकल्पनात्मक त्रुटि है जहाँ बच्चा प्राकृत संख्याओं के जोड़ नियम को भिन्नों पर लागू कर देता है।",
        difficulty: "medium", category: "application", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["त्रुटि विश्लेषण"]
      },
      {
        id: "MTH-0189", subjectId: "maths", chapterId: "mth-ch6", topicId: "mth-t10",
        question: "कक्षा 2 का एक छात्र 'चार सौ पाँच' को '4005' लिखता है। यह किसकी कमी को दर्शाता है?",
        options: ["स्थानीय मान (Place Value) की अवधारणा की कमी", "जोड़ की कमी", "गुणा की कमी", "ज्यामिति की कमी"],
        correct: 0,
        explanation: "सैकड़ा, दहाई और इकाई के स्थानों की समझ न होने पर बच्चा बोलने के क्रम में 400 और 5 जोड़कर 4005 लिख देता है।",
        difficulty: "easy", category: "application", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["स्थानीय मान त्रुटि"]
      },
      {
        id: "MTH-0190", subjectId: "maths", chapterId: "mth-ch6", topicId: "mth-t10",
        question: "गणित में 'डिस्कैल्कुलिया' (Dyscalculia) क्या है?",
        options: ["संख्याओं और गणितीय गणनाओं को समझने से जुड़ी अधिगम अक्षमता", "पढ़ने की कठिनाई", "लिखने की कठिनाई", "देखने की समस्या"],
        correct: 0,
        explanation: "डिस्कैल्कुलिया संख्या-बोध, चिह्नों और गणना में होने वाली विशिष्ट तंत्रिका-विकासात्मक कठिनाई है।",
        difficulty: "easy", category: "important", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["डिस्कैल्कुलिया"]
      },
      {
        id: "MTH-0191", subjectId: "maths", chapterId: "mth-ch6", topicId: "mth-t10",
        question: "दो भिन्नों (जैसे 1/3 और 1/4) की तुलना करने में कौन-सा TLM सबसे अच्छा रहेगा?",
        options: ["भिन्न पट्टियाँ / फ्रैक्शन किट (Fraction Strips)", "अबेकस", "घड़ी", "परकार"],
        correct: 0,
        explanation: "समान लंबाई की पट्टियों को 3 और 4 भागों में बाँटकर देखने से बच्चा तुरंत समझ जाता है कि 1/3 > 1/4 है।",
        difficulty: "easy", category: "application", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["TLM"]
      },
      {
        id: "MTH-0192", subjectId: "maths", chapterId: "mth-ch6", topicId: "mth-t10",
        question: "गणित में निदानात्मक परीक्षण (Diagnostic Test) के बाद क्या किया जाना चाहिए?",
        options: ["उपचारात्मक शिक्षण (Remedial Teaching)", "वार्षिक परीक्षा", "दंड देना", "कक्षा से बाहर भेजना"],
        correct: 0,
        explanation: "निदान से त्रुटि का कारण पता चलता है और उपचार से उस कठिनाई को दूर किया जाता है।",
        difficulty: "easy", category: "practice_original", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["उपचारात्मक शिक्षण"]
      },
      {
        id: "MTH-0193", subjectId: "maths", chapterId: "mth-ch6", topicId: "mth-t10",
        question: "रचनात्मक आकलन के लिए गणित में कौन-सी तकनीक उपयुक्त है?",
        options: ["प्रोजेक्ट कार्य, अवलोकन, गणितीय पहेलियाँ और पोर्टफोलियो", "केवल साल के अंत की लिखित परीक्षा", "रैंकिंग सूची", "केवल 100 सवालों का होमवर्क"],
        correct: 0,
        explanation: "विविध गतिविधियाँ और पोर्टफोलियो बच्चे की गणितीय समझ का निरंतर व समग्र आकलन करते हैं।",
        difficulty: "easy", category: "practice_original", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["रचनात्मक आकलन"]
      },
      {
        id: "MTH-0194", subjectId: "maths", chapterId: "mth-ch6", topicId: "mth-t10",
        question: "यदि एक छात्र 45 − 28 = 23 लिखता है (छोटे अंक में से बड़ा घटाने के बजाय 8 − 5 = 3 कर देता है), तो उसे किसकी समझ देनी होगी?",
        options: ["पुनर्समूहन (Regrouping / उधार लेना) की अवधारणा", "पहाड़ों की", "भिन्न की", "कोण की"],
        correct: 0,
        explanation: "दहाई से 1 दहाई (10 इकाई) उधार लेकर 15 − 8 = 7 करने (पुनर्समूहन) का अभ्यास कराना होगा।",
        difficulty: "medium", category: "application", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["त्रुटि विश्लेषण"]
      },
      {
        id: "MTH-0195", subjectId: "maths", chapterId: "mth-ch6", topicId: "mth-t10",
        question: "दृष्टिबाधित विद्यार्थियों को गणित सिखाने के लिए कौन-सा उपकरण उपयोग किया जाता है?",
        options: ["टेलर फ्रेम (Taylor Frame) व ब्रेल अबेकस", "केवल ब्लैकबोर्ड", "चार्ट पेपर", "प्रोजेक्टर"],
        correct: 0,
        explanation: "टेलर फ्रेम और ब्रेल/स्पर्शनीय अबेकस दृष्टिबाधित बच्चों को गणना और बीजगणित सिखाने के लिए उपयोगी हैं।",
        difficulty: "hard", category: "difficult", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["समावेशी गणित"]
      },
      {
        id: "MTH-0196", subjectId: "maths", chapterId: "mth-ch6", topicId: "mth-t10",
        question: "प्राथमिक स्तर पर 'गणित प्रयोगशाला' (Mathematics Lab) का मुख्य उद्देश्य क्या है?",
        options: ["प्रत्यक्ष गतिविधियों और मॉडलों से गणितीय अवधारणाओं की खोज व सत्यापन करना", "केवल परीक्षा लेना", "पहाड़े रटना", "कंप्यूटर गेम खेलना"],
        correct: 0,
        explanation: "गणित प्रयोगशाला में छात्र स्वयं माप, तौल, कटआउट और उपकरणों से प्रयोग करके अवधारणाएँ सीखते हैं।",
        difficulty: "easy", category: "practice_original", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["गणित प्रयोगशाला"]
      },
      {
        id: "MTH-0197", subjectId: "maths", chapterId: "mth-ch6", topicId: "mth-t10",
        question: "कौन-सा कथन गणित में 'त्रुटि विश्लेषण' के महत्व को सही दर्शाता है?",
        options: ["त्रुटियाँ बताती हैं कि बच्चा अवधारणा को किस गलत ढंग से समझ रहा है, जिससे सही उपचार संभव होता है", "त्रुटियाँ केवल मूर्खता का प्रमाण हैं", "त्रुटियों को अनदेखा कर देना चाहिए", "त्रुटि करने पर अंक शून्य कर देने चाहिए"],
        correct: 0,
        explanation: "त्रुटि विश्लेषण शिक्षक को बच्चे की मानसिक प्रक्रिया में झाँकने और सटीक मार्गदर्शन देने में मदद करता है।",
        difficulty: "easy", category: "pyq_concept", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["त्रुटि विश्लेषण"]
      },
      {
        id: "MTH-0198", subjectId: "maths", chapterId: "mth-ch6", topicId: "mth-t10",
        question: "दो भिन्न-भिन्न लंबाई की छड़ियों से मेज़ की लंबाई मापने की गतिविधि कक्षा 2 में किस अवधारणा की नींव रखती है?",
        options: ["अमानक इकाइयों से मानक मापन इकाइयों की आवश्यकता समझना", "क्षेत्रफल सूत्र", "पाइथागोरस प्रमेय", "सांख्यिकी"],
        correct: 0,
        explanation: "जब अलग-अलग हाथ या छड़ियों से अलग माप आता है, तो बच्चे समझते हैं कि सबको एक जैसी मानक इकाई (सेमी/मीटर) की जरूरत क्यों है।",
        difficulty: "medium", category: "application", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["मापन शिक्षण"]
      },
      {
        id: "MTH-0199", subjectId: "maths", chapterId: "mth-ch6", topicId: "mth-t10",
        question: "निम्नलिखित में से कौन-सा प्रश्न 'संकल्पनात्मक समझ' (Conceptual Understanding) का परीक्षण करता है, न कि केवल प्रक्रिया का?",
        options: ["24 × 5 का मान निकालो", "दो ऐसी संख्याएँ बताओ जिनका गुणनफल 24 हो और अंतर 2 हो", "5 का पहाड़ा लिखो", "12 + 8 जोड़ो"],
        correct: 1,
        explanation: "गुणनफल 24 और अंतर 2 वाले युग्म (6 और 4) खोजने में गुणनखंड और संबंध की गहरी समझ लगती है।",
        difficulty: "medium", category: "pyq_concept", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["संकल्पनात्मक समझ"]
      },
      {
        id: "MTH-0200", subjectId: "maths", chapterId: "mth-ch6", topicId: "mth-t10",
        question: "गणित शिक्षण में 'ड्रिल वर्क' (अभ्यास कार्य) का मुख्य उद्देश्य क्या होना चाहिए?",
        options: ["अवधारणा समझने के बाद गति, सटीकता और आत्मविश्वास बढ़ाना", "बिना समझाए रटवाना", "बच्चों को थकाना", "दंड देना"],
        correct: 0,
        explanation: "अवधारणा की समझ बनने के पश्चात ही सार्थक अभ्यास कार्य कौशल को स्थायी बनाता है।",
        difficulty: "easy", category: "practice_original", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["अभ्यास कार्य"]
      }
    ]
  });
})(window);
