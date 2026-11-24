(function (global) {
  "use strict";

  global.REET.registerPack({
    questions: [
      {
        id: "MTH-0051", subjectId: "maths", chapterId: "mth-ch2", topicId: "mth-t3",
        question: "किसी संख्या का सबसे छोटा गुणनखंड और सबसे बड़ा गुणनखंड क्रमशः क्या होते हैं?",
        options: ["0 और संख्या स्वयं", "1 और संख्या स्वयं", "2 और संख्या का आधा", "1 और अनंत"],
        correct: 1,
        explanation: "प्रत्येक प्राकृत संख्या का सबसे छोटा गुणनखंड 1 और सबसे बड़ा गुणनखंड वह संख्या स्वयं होती है।",
        difficulty: "easy", category: "pyq_concept", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["गुणनखंड"]
      },
      {
        id: "MTH-0052", subjectId: "maths", chapterId: "mth-ch2", topicId: "mth-t3",
        question: "संख्या 4832* में * का कौन-सा मान रखने पर संख्या 4 से पूर्णतः विभाज्य होगी?",
        options: ["1", "3", "4", "5"],
        correct: 2,
        explanation: "4 से विभाज्यता के लिए अंतिम दो अंक 4 से विभाज्य होने चाहिए; 24, 4 से पूर्णतः विभाज्य है (24 ÷ 4 = 6)।",
        difficulty: "medium", category: "application", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["विभाज्यता"]
      },
      {
        id: "MTH-0053", subjectId: "maths", chapterId: "mth-ch2", topicId: "mth-t3",
        question: "यदि किसी संख्या को 6 से विभाजित करना हो, तो उसे किन दो संख्याओं से विभाजित होना अनिवार्य है?",
        options: ["2 और 4", "2 और 3", "3 और 9", "1 और 5"],
        correct: 1,
        explanation: "6 = 2 × 3 (असहभाज्य गुणनखंड), अतः जो संख्या 2 और 3 दोनों से विभाज्य हो वह 6 से भी विभाज्य होती है।",
        difficulty: "easy", category: "important", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["विभाज्यता"]
      },
      {
        id: "MTH-0054", subjectId: "maths", chapterId: "mth-ch2", topicId: "mth-t3",
        question: "एक टोकरी में 144 सेब हैं। यदि उन्हें 12-12 के पैकेट में भरा जाए, तो कितने पैकेट बनेंगे?",
        options: ["10", "12", "14", "16"],
        correct: 1,
        explanation: "144 ÷ 12 = 12 पैकेट।",
        difficulty: "easy", category: "practice_original", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["भाग"]
      },
      {
        id: "MTH-0055", subjectId: "maths", chapterId: "mth-ch2", topicId: "mth-t3",
        question: "98 × 102 का मान सरल वितरण नियम से क्या होगा?",
        options: ["9996", "9984", "10004", "9900"],
        correct: 0,
        explanation: "(100 − 2)(100 + 2) = 100² − 2² = 10000 − 4 = 9996।",
        difficulty: "medium", category: "application", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["संक्रियाएँ"]
      },
      {
        id: "MTH-0056", subjectId: "maths", chapterId: "mth-ch2", topicId: "mth-t3",
        question: "यदि 5 पेनों का मूल्य ₹65 है, तो 8 पेनों का मूल्य कितना होगा?",
        options: ["₹96", "₹104", "₹112", "₹120"],
        correct: 1,
        explanation: "1 पेन = 65 ÷ 5 = ₹13; अतः 8 पेन = 13 × 8 = ₹104।",
        difficulty: "easy", category: "practice_original", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["ऐकिक नियम"]
      },
      {
        id: "MTH-0057", subjectId: "maths", chapterId: "mth-ch2", topicId: "mth-t3",
        question: "48 के सभी गुणनखंडों का योगफल कितना होगा?",
        options: ["100", "124", "96", "112"],
        correct: 1,
        explanation: "48 के गुणनखंड: 1+2+3+4+6+8+12+16+24+48 = 124।",
        difficulty: "hard", category: "difficult", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["गुणनखंड योग"]
      },
      {
        id: "MTH-0058", subjectId: "maths", chapterId: "mth-ch2", topicId: "mth-t3",
        question: "600 को किस छोटी-से-छोटी संख्या से गुणा किया जाए कि गुणनफल एक पूर्ण वर्ग बन जाए?",
        options: ["2", "3", "6", "5"],
        correct: 2,
        explanation: "600 = 100 × 6 = 10² × 2 × 3; अतः 6 से गुणा करने पर 600 × 6 = 3600 (60²) पूर्ण वर्ग बनेगा।",
        difficulty: "hard", category: "difficult", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["गुणनखंड"]
      },
      {
        id: "MTH-0059", subjectId: "maths", chapterId: "mth-ch2", topicId: "mth-t4",
        question: "12, 15 और 20 का लघुत्तम समापवर्त्य (LCM) कितना होगा?",
        options: ["30", "60", "90", "120"],
        correct: 1,
        explanation: "12, 15 और 20 से विभाजित होने वाली सबसे छोटी संख्या 60 है।",
        difficulty: "easy", category: "pyq_pattern", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["LCM"]
      },
      {
        id: "MTH-0060", subjectId: "maths", chapterId: "mth-ch2", topicId: "mth-t4",
        question: "24 और 36 का महत्तम समापवर्तक (HCF) क्या है?",
        options: ["6", "12", "18", "72"],
        correct: 1,
        explanation: "24 = 2³×3 और 36 = 2²×3²; उभयनिष्ठ न्यूनतम घात = 2²×3 = 12।",
        difficulty: "easy", category: "pyq_pattern", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["HCF"]
      },
      {
        id: "MTH-0061", subjectId: "maths", chapterId: "mth-ch2", topicId: "mth-t4",
        question: "दो संख्याओं का HCF = 8 तथा LCM = 96 है। यदि एक संख्या 24 हो, तो दूसरी संख्या क्या होगी?",
        options: ["16", "32", "48", "64"],
        correct: 1,
        explanation: "दूसरी संख्या = (LCM × HCF) / पहली संख्या = (96 × 8) / 24 = 32।",
        difficulty: "easy", category: "important", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["LCM-HCF संबंध"]
      },
      {
        id: "MTH-0062", subjectId: "maths", chapterId: "mth-ch2", topicId: "mth-t4",
        question: "तीन घंटियाँ क्रमशः 10, 15 और 20 मिनट के अंतराल पर बजती हैं। यदि वे सुबह 8:00 बजे एक साथ बजीं, तो पुनः एक साथ कब बजेंगी?",
        options: ["8:30 बजे", "9:00 बजे", "9:30 बजे", "10:00 बजे"],
        correct: 1,
        explanation: "10, 15, 20 का LCM = 60 मिनट = 1 घंटा। अतः 8:00 + 1 घंटा = सुबह 9:00 बजे।",
        difficulty: "medium", category: "application", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["LCM अनुप्रयोग"]
      },
      {
        id: "MTH-0063", subjectId: "maths", chapterId: "mth-ch2", topicId: "mth-t4",
        question: "भिन्नों 2/3, 4/5 और 6/7 का HCF (म.स.) क्या होगा?",
        options: ["2/105", "12/1", "2/15", "4/35"],
        correct: 0,
        explanation: "भिन्नों का HCF = अंशों (2,4,6) का HCF / हरों (3,5,7) का LCM = 2 / 105।",
        difficulty: "hard", category: "difficult", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["भिन्नों का HCF"]
      },
      {
        id: "MTH-0064", subjectId: "maths", chapterId: "mth-ch2", topicId: "mth-t4",
        question: "दो अलग-अलग अभाज्य संख्याओं p और q का HCF और LCM क्रमशः क्या होगा?",
        options: ["1 और p + q", "1 और p × q", "p और q", "0 और p × q"],
        correct: 1,
        explanation: "दो भिन्न अभाज्य संख्याओं में कोई उभयनिष्ठ गुणनखंड नहीं होता, अतः HCF = 1 और LCM = p × q।",
        difficulty: "medium", category: "pyq_concept", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["LCM-HCF"]
      },
      {
        id: "MTH-0065", subjectId: "maths", chapterId: "mth-ch2", topicId: "mth-t4",
        question: "वह बड़ी-से-बड़ी संख्या कौन-सी है जिससे 45 और 60 दोनों पूर्णतः विभाजित हो जाएँ?",
        options: ["5", "15", "30", "180"],
        correct: 1,
        explanation: "45 और 60 का HCF = 15।",
        difficulty: "easy", category: "practice_original", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["HCF"]
      },
      {
        id: "MTH-0066", subjectId: "maths", chapterId: "mth-ch2", topicId: "mth-t4",
        question: "दो टंकियों में क्रमशः 48 लीटर और 64 लीटर दूध है। उस सबसे बड़े माप (बर्तन) की क्षमता क्या होगी जो दोनों टंकियों का दूध पूरा-पूरा माप सके?",
        options: ["8 लीटर", "16 लीटर", "24 लीटर", "192 लीटर"],
        correct: 1,
        explanation: "48 और 64 का HCF = 16 लीटर।",
        difficulty: "medium", category: "application", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["HCF अनुप्रयोग"]
      },
      {
        id: "MTH-0067", subjectId: "maths", chapterId: "mth-ch2", topicId: "mth-t4",
        question: "वह छोटी-से-छोटी संख्या ज्ञात कीजिए जिसे 12, 16 और 18 से भाग देने पर प्रत्येक दशा में 5 शेष बचे:",
        options: ["144", "149", "139", "154"],
        correct: 1,
        explanation: "12, 16, 18 का LCM = 144; अभीष्ट संख्या = 144 + 5 = 149।",
        difficulty: "hard", category: "difficult", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["LCM"]
      },
      {
        id: "MTH-0068", subjectId: "maths", chapterId: "mth-ch2", topicId: "mth-t4",
        question: "भिन्नों 3/4, 5/8 और 7/12 का LCM क्या होगा?",
        options: ["105/4", "1/24", "35/4", "105/24"],
        correct: 0,
        explanation: "भिन्नों का LCM = अंशों (3, 5, 7) का LCM / हरों (4, 8, 12) का HCF = 105 / 4।",
        difficulty: "hard", category: "difficult", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["भिन्नों का LCM"]
      },
      {
        id: "MTH-0069", subjectId: "maths", chapterId: "mth-ch2", topicId: "mth-t4",
        question: "दो संख्याओं का अनुपात 3:4 है और उनका HCF = 5 है, तो उनका LCM कितना होगा?",
        options: ["20", "40", "60", "80"],
        correct: 2,
        explanation: "संख्याएँ 3×5 = 15 और 4×5 = 20 हैं; 15 और 20 का LCM = 60।",
        difficulty: "medium", category: "pyq_pattern", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["LCM-HCF"]
      },
      {
        id: "MTH-0070", subjectId: "maths", chapterId: "mth-ch2", topicId: "mth-t4",
        question: "क्या दो संख्याओं का HCF = 12 और LCM = 100 हो सकता है?",
        options: ["हाँ, सदैव", "नहीं, क्योंकि LCM सदैव HCF से पूर्णतः विभाज्य होता है", "हाँ, यदि संख्याएँ सम हों", "केवल अभाज्य संख्याओं में"],
        correct: 1,
        explanation: "100, 12 से विभाज्य नहीं है; किसी भी दो संख्याओं का LCM सदैव उनके HCF का गुणज होता है।",
        difficulty: "hard", category: "difficult", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["LCM-HCF गुण"]
      },
      {
        id: "MTH-0071", subjectId: "maths", chapterId: "mth-ch2", topicId: "mth-t4",
        question: "18, 24 और 30 का HCF कितना होगा?",
        options: ["3", "6", "12", "18"],
        correct: 1,
        explanation: "18 = 6×3, 24 = 6×4, 30 = 6×5; सबसे बड़ा उभयनिष्ठ गुणनखंड 6 है।",
        difficulty: "easy", category: "practice_original", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["HCF"]
      },
      {
        id: "MTH-0072", subjectId: "maths", chapterId: "mth-ch2", topicId: "mth-t4",
        question: "4, 6, 8 और 12 से पूर्णतः विभाजित होने वाली 3 अंकों की सबसे छोटी संख्या कौन-सी है?",
        options: ["104", "108", "120", "144"],
        correct: 2,
        explanation: "4, 6, 8, 12 का LCM = 24। 24 का सबसे छोटा 3-अंकीय गुणज = 24 × 5 = 120।",
        difficulty: "medium", category: "application", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["LCM"]
      },
      {
        id: "MTH-0073", subjectId: "maths", chapterId: "mth-ch2", topicId: "mth-t4",
        question: "यदि दो संख्याओं का गुणनफल 320 और उनका HCF = 4 हो, तो उनका LCM कितना होगा?",
        options: ["40", "60", "80", "160"],
        correct: 2,
        explanation: "LCM = गुणनफल / HCF = 320 / 4 = 80।",
        difficulty: "easy", category: "important", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["LCM"]
      },
      {
        id: "MTH-0074", subjectId: "maths", chapterId: "mth-ch2", topicId: "mth-t4",
        question: "दो क्रमागत (लगातार) सम संख्याओं का HCF सदैव कितना होता है?",
        options: ["1", "2", "4", "0"],
        correct: 1,
        explanation: "किन्हीं भी दो लगातार सम संख्याओं (जैसे 8 और 10) का HCF सदैव 2 होता है।",
        difficulty: "medium", category: "pyq_concept", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["HCF"]
      },
      {
        id: "MTH-0075", subjectId: "maths", chapterId: "mth-ch2", topicId: "mth-t4",
        question: "दो क्रमागत प्राकृत संख्याओं (जैसे 15 और 16) का HCF सदैव कितना होता है?",
        options: ["0", "1", "2", "15"],
        correct: 1,
        explanation: "कोई भी दो लगातार प्राकृत संख्याएँ सदैव असहभाज्य होती हैं, अतः उनका HCF = 1 होता है।",
        difficulty: "easy", category: "important", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["HCF"]
      },
      {
        id: "MTH-0076", subjectId: "maths", chapterId: "mth-ch3", topicId: "mth-t5",
        question: "दो पूरक कोणों (Complementary Angles) का योग कितना होता है?",
        options: ["90°", "180°", "270°", "360°"],
        correct: 0,
        explanation: "जिन दो कोणों का योग 90° हो वे पूरक कोण कहलाते हैं, और 180° योग वाले संपूरक कोण कहलाते हैं।",
        difficulty: "easy", category: "pyq_pattern", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["कोण"]
      },
      {
        id: "MTH-0077", subjectId: "maths", chapterId: "mth-ch3", topicId: "mth-t5",
        question: "यदि एक कोण 65° का है, तो उसका संपूरक कोण (Supplementary Angle) कितना होगा?",
        options: ["25°", "115°", "125°", "295°"],
        correct: 1,
        explanation: "संपूरक कोण = 180° − 65° = 115°।",
        difficulty: "easy", category: "important", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["संपूरक कोण"]
      },
      {
        id: "MTH-0078", subjectId: "maths", chapterId: "mth-ch3", topicId: "mth-t5",
        question: "एक घन (Cube) में क्रमशः कितने फलक (Faces), किनारे (Edges) और शीर्ष (Vertices) होते हैं?",
        options: ["6 फलक, 12 किनारे, 8 शीर्ष", "8 फलक, 12 किनारे, 6 शीर्ष", "6 फलक, 8 किनारे, 12 शीर्ष", "4 फलक, 6 किनारे, 4 शीर्ष"],
        correct: 0,
        explanation: "घन और घनाभ दोनों में 6 फलक, 12 किनारे और 8 शीर्ष होते हैं।",
        difficulty: "easy", category: "pyq_pattern", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["3D आकृतियाँ"]
      },
      {
        id: "MTH-0079", subjectId: "maths", chapterId: "mth-ch3", topicId: "mth-t5",
        question: "किसी त्रिभुज के दो कोण 50° और 60° हैं, तो तीसरा कोण कितना होगा?",
        options: ["60°", "70°", "80°", "90°"],
        correct: 1,
        explanation: "त्रिभुज के तीनों कोणों का योग 180° होता है; तीसरा कोण = 180° − (50° + 60°) = 70°।",
        difficulty: "easy", category: "practice_original", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["त्रिभुज"]
      },
      {
        id: "MTH-0080", subjectId: "maths", chapterId: "mth-ch3", topicId: "mth-t5",
        question: "निम्नलिखित में से कौन-सी भुजाएँ एक त्रिभुज का निर्माण कर सकती हैं?",
        options: ["2 सेमी, 3 सेमी, 6 सेमी", "3 सेमी, 4 सेमी, 5 सेमी", "1 सेमी, 2 सेमी, 3 सेमी", "4 सेमी, 5 सेमी, 10 सेमी"],
        correct: 1,
        explanation: "त्रिभुज की दो छोटी भुजाओं का योग तीसरी से बड़ा होना चाहिए: 3 + 4 = 7 > 5।",
        difficulty: "medium", category: "pyq_concept", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["त्रिभुज गुण"]
      },
      {
        id: "MTH-0081", subjectId: "maths", chapterId: "mth-ch3", topicId: "mth-t5",
        question: "180° से बड़ा किंतु 360° से छोटा कोण क्या कहलाता है?",
        options: ["अधिक कोण", "ऋजु कोण", "प्रतिवर्ती / वृहत् कोण (Reflex Angle)", "न्यून कोण"],
        correct: 2,
        explanation: "180° से 360° के बीच के कोण को प्रतिवर्ती या वृहत् कोण (Reflex Angle) कहते हैं।",
        difficulty: "medium", category: "important", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["कोण प्रकार"]
      },
      {
        id: "MTH-0082", subjectId: "maths", chapterId: "mth-ch3", topicId: "mth-t5",
        question: "अंग्रेजी के अक्षर 'H' में कितनी सममित रेखाएँ (Lines of Symmetry) होती हैं?",
        options: ["1", "2", "4", "0"],
        correct: 1,
        explanation: "'H' में एक ऊर्ध्वाधर और एक क्षैतिज — कुल 2 सममित रेखाएँ होती हैं।",
        difficulty: "medium", category: "application", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["सममिति"]
      },
      {
        id: "MTH-0083", subjectId: "maths", chapterId: "mth-ch3", topicId: "mth-t5",
        question: "दो समकोणों (Right Angles) का योग किस कोण के बराबर होता है?",
        options: ["न्यून कोण", "अधिक कोण", "ऋजु / सरल कोण (180°)", "संपूर्ण कोण"],
        correct: 2,
        explanation: "90° + 90° = 180°, जिसे ऋजु या सरल कोण (Straight Angle) कहते हैं।",
        difficulty: "easy", category: "practice_original", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["कोण"]
      },
      {
        id: "MTH-0084", subjectId: "maths", chapterId: "mth-ch3", topicId: "mth-t5",
        question: "यूलर सूत्र (Euler's Formula) के अनुसार किसी बहुफलक में फलक (F), शीर्ष (V) और किनारे (E) का सही संबंध क्या है?",
        options: ["F + V + E = 2", "F + V − E = 2", "F − V + E = 2", "F × V − E = 2"],
        correct: 1,
        explanation: "यूलर का सूत्र: F + V − E = 2 (जैसे घन के लिए 6 + 8 − 12 = 2)।",
        difficulty: "medium", category: "pyq_pattern", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["यूलर सूत्र"]
      },
      {
        id: "MTH-0085", subjectId: "maths", chapterId: "mth-ch3", topicId: "mth-t5",
        question: "चतुर्भुज के चारों अंतःकोणों का योग कितना होता है?",
        options: ["180°", "270°", "360°", "540°"],
        correct: 2,
        explanation: "किसी भी चतुर्भुज को दो त्रिभुजों में बाँटा जा सकता है, अतः 2 × 180° = 360°।",
        difficulty: "easy", category: "practice_original", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["चतुर्भुज"]
      },
      {
        id: "MTH-0086", subjectId: "maths", chapterId: "mth-ch3", topicId: "mth-t5",
        question: "एक समबाहु त्रिभुज (Equilateral Triangle) का प्रत्येक कोण कितने डिग्री का होता है?",
        options: ["45°", "60°", "90°", "120°"],
        correct: 1,
        explanation: "समबाहु त्रिभुज के तीनों कोण बराबर होते हैं: 180° ÷ 3 = 60°।",
        difficulty: "easy", category: "important", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["समबाहु त्रिभुज"]
      },
      {
        id: "MTH-0087", subjectId: "maths", chapterId: "mth-ch3", topicId: "mth-t5",
        question: "निम्नलिखित में से किस ठोस आकृति में कोई भी शीर्ष (Vertex) नहीं होता?",
        options: ["शंकु", "पिरामिड", "गोला (Sphere)", "घन"],
        correct: 2,
        explanation: "गोले (और बेलन) में कोई कोना या शीर्ष नहीं होता।",
        difficulty: "easy", category: "pyq_concept", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["3D आकृतियाँ"]
      },
      {
        id: "MTH-0088", subjectId: "maths", chapterId: "mth-ch3", topicId: "mth-t5",
        question: "घड़ी में 3:00 बजे घंटे और मिनट की सुइयों के बीच कितने डिग्री का कोण बनता है?",
        options: ["60°", "90°", "120°", "180°"],
        correct: 1,
        explanation: "प्रत्येक घंटे का खंड 30° का होता है; 3 पर 3 × 30° = 90° (समकोण)।",
        difficulty: "easy", category: "application", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["घड़ी कोण"]
      },
      {
        id: "MTH-0089", subjectId: "maths", chapterId: "mth-ch3", topicId: "mth-t5",
        question: "एक वर्ग (Square) में कुल कितनी सममित रेखाएँ होती हैं?",
        options: ["2", "4", "6", "अनंत"],
        correct: 1,
        explanation: "वर्ग में 2 विकर्णों के अनुदिश तथा 2 भुजाओं के मध्य-बिंदुओं को मिलाने वाली — कुल 4 सममित रेखाएँ होती हैं।",
        difficulty: "medium", category: "pyq_concept", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["सममिति"]
      },
      {
        id: "MTH-0090", subjectId: "maths", chapterId: "mth-ch3", topicId: "mth-t5",
        question: "वृत्त की सबसे लंबी जीवा (Chord) क्या कहलाती है?",
        options: ["त्रिज्या", "व्यास (Diameter)", "चाप", "स्पर्श रेखा"],
        correct: 1,
        explanation: "केंद्र से होकर जाने वाली जीवा (व्यास) वृत्त की सबसे लंबी जीवा होती है।",
        difficulty: "easy", category: "important", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["वृत्त"]
      },
      {
        id: "MTH-0091", subjectId: "maths", chapterId: "mth-ch3", topicId: "mth-t6",
        question: "एक आयताकार बगीचे की लंबाई 25 मीटर और चौड़ाई 15 मीटर है। इसका परिमाप (Perimeter) क्या होगा?",
        options: ["40 मी", "80 मी", "375 मी", "60 मी"],
        correct: 1,
        explanation: "आयत का परिमाप = 2 × (लंबाई + चौड़ाई) = 2 × (25 + 15) = 2 × 40 = 80 मीटर।",
        difficulty: "easy", category: "pyq_pattern", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["परिमाप"]
      },
      {
        id: "MTH-0092", subjectId: "maths", chapterId: "mth-ch3", topicId: "mth-t6",
        question: "एक वर्गाकार खेत का परिमाप 48 मीटर है, तो उसका क्षेत्रफल (Area) कितना होगा?",
        options: ["144 वर्ग मी", "192 वर्ग मी", "96 वर्ग मी", "64 वर्ग मी"],
        correct: 0,
        explanation: "वर्ग की भुजा = परिमाप / 4 = 48 / 4 = 12 मी; क्षेत्रफल = 12 × 12 = 144 वर्ग मी।",
        difficulty: "medium", category: "pyq_pattern", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["वर्ग क्षेत्रफल"]
      },
      {
        id: "MTH-0093", subjectId: "maths", chapterId: "mth-ch3", topicId: "mth-t6",
        question: "एक आयत का क्षेत्रफल 120 वर्ग सेमी है। यदि इसकी लंबाई 15 सेमी हो, तो चौड़ाई कितनी होगी?",
        options: ["6 सेमी", "8 सेमी", "10 सेमी", "12 सेमी"],
        correct: 1,
        explanation: "चौड़ाई = क्षेत्रफल / लंबाई = 120 / 15 = 8 सेमी।",
        difficulty: "easy", category: "important", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["आयत"]
      },
      {
        id: "MTH-0094", subjectId: "maths", chapterId: "mth-ch3", topicId: "mth-t6",
        question: "एक त्रिभुज का आधार 10 सेमी तथा ऊँचाई 6 सेमी है, तो इसका क्षेत्रफल कितना होगा?",
        options: ["60 वर्ग सेमी", "30 वर्ग सेमी", "16 वर्ग सेमी", "20 वर्ग सेमी"],
        correct: 1,
        explanation: "त्रिभुज का क्षेत्रफल = (1/2) × आधार × ऊँचाई = (1/2) × 10 × 6 = 30 वर्ग सेमी।",
        difficulty: "easy", category: "practice_original", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["त्रिभुज क्षेत्रफल"]
      },
      {
        id: "MTH-0095", subjectId: "maths", chapterId: "mth-ch3", topicId: "mth-t6",
        question: "7 सेमी त्रिज्या वाले वृत्त की परिधि (Circumference) क्या होगी? (π = 22/7 लें)",
        options: ["22 सेमी", "44 सेमी", "154 सेमी", "88 सेमी"],
        correct: 1,
        explanation: "परिधि = 2πr = 2 × (22/7) × 7 = 44 सेमी।",
        difficulty: "easy", category: "pyq_concept", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["वृत्त परिधि"]
      },
      {
        id: "MTH-0096", subjectId: "maths", chapterId: "mth-ch3", topicId: "mth-t6",
        question: "1 वर्ग मीटर कितने वर्ग सेंटीमीटर के बराबर होता है?",
        options: ["100 वर्ग सेमी", "1,000 वर्ग सेमी", "10,000 वर्ग सेमी", "1,00,000 वर्ग सेमी"],
        correct: 2,
        explanation: "1 मी × 1 मी = 100 सेमी × 100 सेमी = 10,000 वर्ग सेमी।",
        difficulty: "medium", category: "important", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["इकाई रूपांतरण"]
      },
      {
        id: "MTH-0097", subjectId: "maths", chapterId: "mth-ch3", topicId: "mth-t6",
        question: "यदि किसी वर्ग की भुजा को दोगुना कर दिया जाए, तो उसका क्षेत्रफल कितने गुना हो जाएगा?",
        options: ["2 गुना", "3 गुना", "4 गुना", "8 गुना"],
        correct: 2,
        explanation: "(2a)² = 4a², अतः क्षेत्रफल 4 गुना हो जाता है।",
        difficulty: "medium", category: "pyq_pattern", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["वर्ग"]
      },
      {
        id: "MTH-0098", subjectId: "maths", chapterId: "mth-ch3", topicId: "mth-t6",
        question: "एक आयताकार कमरे के फर्श (लंबाई 6 मी, चौड़ाई 4 मी) पर 50 सेमी × 50 सेमी की कितनी वर्गाकार टाइलें लगेंगी?",
        options: ["48", "96", "100", "24"],
        correct: 1,
        explanation: "फर्श का क्षेत्रफल = 600 × 400 = 2,40,000 वर्ग सेमी; 1 टाइल = 50 × 50 = 2,500 वर्ग सेमी। टाइलें = 240000 / 2500 = 96।",
        difficulty: "hard", category: "difficult", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["टाइल प्रश्न"]
      },
      {
        id: "MTH-0099", subjectId: "maths", chapterId: "mth-ch3", topicId: "mth-t6",
        question: "एक 12 सेमी × 8 सेमी आयताकार कागज़ से 4 सेमी भुजा के अधिकतम कितने वर्ग काटे जा सकते हैं?",
        options: ["4", "6", "8", "12"],
        correct: 1,
        explanation: "लंबाई में 12/4 = 3 और चौड़ाई में 8/4 = 2 वर्ग आएँगे; कुल = 3 × 2 = 6 वर्ग।",
        difficulty: "medium", category: "application", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["क्षेत्रफल"]
      },
      {
        id: "MTH-0100", subjectId: "maths", chapterId: "mth-ch3", topicId: "mth-t6",
        question: "एक समबाहु त्रिभुज का परिमाप 36 सेमी है, तो उसकी एक भुजा की लंबाई कितनी होगी?",
        options: ["9 सेमी", "12 सेमी", "18 सेमी", "6 सेमी"],
        correct: 1,
        explanation: "समबाहु त्रिभुज की तीनों भुजाएँ समान होती हैं: भुजा = 36 / 3 = 12 सेमी।",
        difficulty: "easy", category: "practice_original", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["परिमाप"]
      }
    ]
  });
})(window);
