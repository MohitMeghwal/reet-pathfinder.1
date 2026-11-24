(function (global) {
  "use strict";

  global.REET.registerPack({
    questions: [
      {
        id: "MTH-0101", subjectId: "maths", chapterId: "mth-ch3", topicId: "mth-t6",
        question: "7 सेमी त्रिज्या वाले वृत्त का क्षेत्रफल कितना होगा? (π = 22/7 लें)",
        options: ["44 वर्ग सेमी", "154 वर्ग सेमी", "88 वर्ग सेमी", "308 वर्ग सेमी"],
        correct: 1,
        explanation: "वृत्त का क्षेत्रफल = πr² = (22/7) × 7 × 7 = 154 वर्ग सेमी।",
        difficulty: "easy", category: "pyq_pattern", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["वृत्त क्षेत्रफल"]
      },
      {
        id: "MTH-0102", subjectId: "maths", chapterId: "mth-ch3", topicId: "mth-t6",
        question: "एक आयताकार मैदान की लंबाई 40 मी तथा चौड़ाई 30 मी है। इसके चारों ओर 2 चक्कर दौड़ने में कुल कितनी दूरी तय होगी?",
        options: ["140 मी", "280 मी", "1200 मी", "70 मी"],
        correct: 1,
        explanation: "1 चक्कर (परिमाप) = 2(40+30) = 140 मी; 2 चक्कर = 140 × 2 = 280 मी।",
        difficulty: "easy", category: "application", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["परिमाप"]
      },
      {
        id: "MTH-0103", subjectId: "maths", chapterId: "mth-ch3", topicId: "mth-t6",
        question: "एक तार को मोड़कर 10 सेमी भुजा का वर्ग बनाया गया। यदि उसी तार को खोलकर 12 सेमी लंबा आयत बनाया जाए, तो आयत की चौड़ाई कितनी होगी?",
        options: ["6 सेमी", "8 सेमी", "10 सेमी", "4 सेमी"],
        correct: 1,
        explanation: "तार की लंबाई = वर्ग का परिमाप = 4 × 10 = 40 सेमी। आयत का परिमाप = 2(12 + b) = 40 → 12 + b = 20 → b = 8 सेमी।",
        difficulty: "hard", category: "difficult", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["परिमाप"]
      },
      {
        id: "MTH-0104", subjectId: "maths", chapterId: "mth-ch3", topicId: "mth-t6",
        question: "एक घन का आयतन 64 घन सेमी है, तो उसकी एक कोर (भुजा) की लंबाई कितनी होगी?",
        options: ["4 सेमी", "8 सेमी", "16 सेमी", "6 सेमी"],
        correct: 0,
        explanation: "घन का आयतन = a³ = 64 → a = 4 सेमी (4×4×4 = 64)।",
        difficulty: "medium", category: "pyq_concept", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["घन आयतन"]
      },
      {
        id: "MTH-0105", subjectId: "maths", chapterId: "mth-ch3", topicId: "mth-t6",
        question: "एक घनाभ (Cuboid) की लंबाई 5 सेमी, चौड़ाई 4 सेमी और ऊँचाई 3 सेमी है। इसका आयतन कितना होगा?",
        options: ["12 घन सेमी", "60 घन सेमी", "47 घन सेमी", "94 घन सेमी"],
        correct: 1,
        explanation: "घनाभ का आयतन = l × b × h = 5 × 4 × 3 = 60 घन सेमी।",
        difficulty: "easy", category: "important", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["घनाभ आयतन"]
      },
      {
        id: "MTH-0106", subjectId: "maths", chapterId: "mth-ch3", topicId: "mth-t6",
        question: "एक वर्ग का क्षेत्रफल 196 वर्ग सेमी है, तो इसका परिमाप क्या होगा?",
        options: ["14 सेमी", "56 सेमी", "28 सेमी", "49 सेमी"],
        correct: 1,
        explanation: "भुजा = √196 = 14 सेमी; परिमाप = 4 × 14 = 56 सेमी।",
        difficulty: "medium", category: "pyq_pattern", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["वर्ग"]
      },
      {
        id: "MTH-0107", subjectId: "maths", chapterId: "mth-ch3", topicId: "mth-t6",
        question: "यदि एक आयत की लंबाई और चौड़ाई दोनों को दोगुना कर दिया जाए, तो उसका परिमाप कितने गुना होगा?",
        options: ["2 गुना", "4 गुना", "6 गुना", "8 गुना"],
        correct: 0,
        explanation: "नया परिमाप = 2(2l + 2b) = 2 × [2(l+b)], अतः परिमाप 2 गुना हो जाएगा (जबकि क्षेत्रफल 4 गुना होता है)।",
        difficulty: "medium", category: "pyq_concept", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["परिमाप"]
      },
      {
        id: "MTH-0108", subjectId: "maths", chapterId: "mth-ch3", topicId: "mth-t6",
        question: "एक समकोण त्रिभुज का आधार 8 सेमी और ऊँचाई 15 सेमी है, तो उसका क्षेत्रफल कितना होगा?",
        options: ["120 वर्ग सेमी", "60 वर्ग सेमी", "23 वर्ग सेमी", "46 वर्ग सेमी"],
        correct: 1,
        explanation: "क्षेत्रफल = (1/2) × 8 × 15 = 60 वर्ग सेमी।",
        difficulty: "easy", category: "practice_original", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["त्रिभुज"]
      },
      {
        id: "MTH-0109", subjectId: "maths", chapterId: "mth-ch3", topicId: "mth-t6",
        question: "एक घन की भुजा 5 सेमी है, तो उसका संपूर्ण पृष्ठीय क्षेत्रफल (Total Surface Area) कितना होगा?",
        options: ["125 वर्ग सेमी", "150 वर्ग सेमी", "100 वर्ग सेमी", "25 वर्ग सेमी"],
        correct: 1,
        explanation: "घन का संपूर्ण पृष्ठीय क्षेत्रफल = 6a² = 6 × 5² = 6 × 25 = 150 वर्ग सेमी।",
        difficulty: "hard", category: "difficult", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["घन क्षेत्रफल"]
      },
      {
        id: "MTH-0110", subjectId: "maths", chapterId: "mth-ch3", topicId: "mth-t6",
        question: "1 हेक्टेयर में कितने वर्ग मीटर होते हैं?",
        options: ["1,000 वर्ग मी", "10,000 वर्ग मी", "100 वर्ग मी", "1,00,000 वर्ग मी"],
        correct: 1,
        explanation: "1 हेक्टेयर = 100 मी × 100 मी = 10,000 वर्ग मीटर।",
        difficulty: "medium", category: "important", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["मापन"]
      },
      {
        id: "MTH-0111", subjectId: "maths", chapterId: "mth-ch4", topicId: "mth-t7",
        question: "3 किलोमीटर 250 मीटर को मीटर में बदलने पर क्या प्राप्त होगा?",
        options: ["325 मी", "3250 मी", "30250 मी", "3.25 मी"],
        correct: 1,
        explanation: "3 किमी = 3000 मी; कुल = 3000 + 250 = 3250 मीटर।",
        difficulty: "easy", category: "pyq_pattern", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["लंबाई मापन"]
      },
      {
        id: "MTH-0112", subjectId: "maths", chapterId: "mth-ch4", topicId: "mth-t7",
        question: "4 किलोग्राम 75 ग्राम को किलोग्राम में कैसे लिखा जाएगा?",
        options: ["4.75 किग्रा", "4.075 किग्रा", "4.0075 किग्रा", "47.5 किग्रा"],
        correct: 1,
        explanation: "75 ग्राम = 75/1000 किग्रा = 0.075 किग्रा; अतः 4 + 0.075 = 4.075 किग्रा।",
        difficulty: "medium", category: "pyq_pattern", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["भार मापन"]
      },
      {
        id: "MTH-0113", subjectId: "maths", chapterId: "mth-ch4", topicId: "mth-t7",
        question: "5 लीटर 400 मिलीलीटर दूध में से 2 लीटर 750 मिलीलीटर दूध उपयोग हो गया। कितना दूध शेष बचा?",
        options: ["2 लीटर 650 मिली", "3 लीटर 350 मिली", "2 लीटर 350 मिली", "3 लीटर 650 मिली"],
        correct: 0,
        explanation: "5400 मिली − 2750 मिली = 2650 मिली = 2 लीटर 650 मिलीलीटर।",
        difficulty: "easy", category: "application", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["धारिता"]
      },
      {
        id: "MTH-0114", subjectId: "maths", chapterId: "mth-ch4", topicId: "mth-t7",
        question: "एक रेलगाड़ी सुबह 7:45 बजे चलकर उसी दिन दोपहर 2:15 बजे गंतव्य पर पहुँचती है। यात्रा में कुल कितना समय लगा?",
        options: ["6 घंटे 30 मिनट", "5 घंटे 30 मिनट", "7 घंटे 30 मिनट", "6 घंटे 15 मिनट"],
        correct: 0,
        explanation: "दोपहर 2:15 = 14:15। 14:15 − 7:45 = 6 घंटे 30 मिनट।",
        difficulty: "medium", category: "pyq_pattern", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["समय गणना"]
      },
      {
        id: "MTH-0115", subjectId: "maths", chapterId: "mth-ch4", topicId: "mth-t7",
        question: "निम्नलिखित में से कौन-सा वर्ष एक 'अधिवर्ष' (Leap Year) है?",
        options: ["1900", "2022", "2024", "2025"],
        correct: 2,
        explanation: "2024, 4 से पूर्णतः विभाज्य है। (1900 एक शताब्दी वर्ष है जो 400 से विभाज्य नहीं, अतः लीप वर्ष नहीं है)।",
        difficulty: "easy", category: "important", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["लीप वर्ष"]
      },
      {
        id: "MTH-0116", subjectId: "maths", chapterId: "mth-ch4", topicId: "mth-t7",
        question: "2 घंटे 40 मिनट में कुल कितने मिनट होते हैं?",
        options: ["120 मिनट", "140 मिनट", "160 मिनट", "240 मिनट"],
        correct: 2,
        explanation: "(2 × 60) + 40 = 120 + 40 = 160 मिनट।",
        difficulty: "easy", category: "practice_original", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["समय"]
      },
      {
        id: "MTH-0117", subjectId: "maths", chapterId: "mth-ch4", topicId: "mth-t7",
        question: "यदि 1 दर्जन केलों का मूल्य ₹48 है, तो 15 केलों का मूल्य कितना होगा?",
        options: ["₹54", "₹60", "₹64", "₹72"],
        correct: 1,
        explanation: "12 केले = ₹48 → 1 केला = ₹4 → 15 केले = 15 × 4 = ₹60।",
        difficulty: "easy", category: "application", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["मुद्रा"]
      },
      {
        id: "MTH-0118", subjectId: "maths", chapterId: "mth-ch4", topicId: "mth-t7",
        question: "सीमा ने ₹25.50 की कॉपी, ₹12.75 का पेन और ₹15.25 की पेंसिल खरीदी। उसने ₹100 का नोट दिया, तो दुकानदार उसे कितने रुपये वापस करेगा?",
        options: ["₹46.50", "₹53.50", "₹47.50", "₹45.50"],
        correct: 0,
        explanation: "कुल खर्च = 25.50 + 12.75 + 15.25 = ₹53.50। शेष = 100 − 53.50 = ₹46.50।",
        difficulty: "medium", category: "application", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["मुद्रा"]
      },
      {
        id: "MTH-0119", subjectId: "maths", chapterId: "mth-ch4", topicId: "mth-t7",
        question: "1000 मिलीमीटर (mm) में कितने मीटर होते हैं?",
        options: ["10 मीटर", "1 मीटर", "0.1 मीटर", "100 मीटर"],
        correct: 1,
        explanation: "1 मीटर = 100 सेमी = 100 × 10 मिमी = 1000 मिमी।",
        difficulty: "easy", category: "important", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["मीट्रिक प्रणाली"]
      },
      {
        id: "MTH-0120", subjectId: "maths", chapterId: "mth-ch4", topicId: "mth-t7",
        question: "24 घंटे की घड़ी में सायं 6:20 (6:20 PM) को क्या लिखा जाएगा?",
        options: ["16:20", "18:20", "06:20", "20:20"],
        correct: 1,
        explanation: "दोपहर 12 के बाद के समय में 12 जोड़ते हैं: 6 + 12 = 18, अतः 18:20।",
        difficulty: "easy", category: "practice_original", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["24 घंटे घड़ी"]
      },
      {
        id: "MTH-0121", subjectId: "maths", chapterId: "mth-ch4", topicId: "mth-t7",
        question: "यदि किसी दिन 1 मार्च को बुधवार है, तो उसी वर्ष 29 मार्च को कौन-सा वार होगा?",
        options: ["मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार"],
        correct: 1,
        explanation: "29 − 1 = 28 दिन = 4 पूरे सप्ताह (0 विषम दिन), अतः 29 मार्च को भी बुधवार होगा।",
        difficulty: "medium", category: "pyq_concept", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["कैलेंडर"]
      },
      {
        id: "MTH-0122", subjectId: "maths", chapterId: "mth-ch4", topicId: "mth-t7",
        question: "1 क्विंटल में कितने किलोग्राम होते हैं?",
        options: ["10 किग्रा", "100 किग्रा", "1000 किग्रा", "50 किग्रा"],
        correct: 1,
        explanation: "1 क्विंटल = 100 किलोग्राम तथा 1 मीट्रिक टन = 10 क्विंटल = 1000 किलोग्राम।",
        difficulty: "easy", category: "important", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["भार"]
      },
      {
        id: "MTH-0123", subjectId: "maths", chapterId: "mth-ch4", topicId: "mth-t7",
        question: "3.5 घंटे में कुल कितने सेकंड होते हैं?",
        options: ["12,600 सेकंड", "10,800 सेकंड", "3,600 सेकंड", "7,200 सेकंड"],
        correct: 0,
        explanation: "1 घंटा = 3600 सेकंड; 3.5 × 3600 = 12,600 सेकंड।",
        difficulty: "medium", category: "practice_original", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["समय"]
      },
      {
        id: "MTH-0124", subjectId: "maths", chapterId: "mth-ch4", topicId: "mth-t7",
        question: "एक दवा की बोतल में 200 मिलीलीटर सिरप है। यदि रोज़ 5 मिलीलीटर दवा दो बार ली जाए, तो बोतल कितने दिन चलेगी?",
        options: ["10 दिन", "20 दिन", "40 दिन", "15 दिन"],
        correct: 1,
        explanation: "प्रतिदिन खपत = 5 × 2 = 10 मिली; कुल दिन = 200 ÷ 10 = 20 दिन।",
        difficulty: "medium", category: "application", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["धारिता"]
      },
      {
        id: "MTH-0125", subjectId: "maths", chapterId: "mth-ch4", topicId: "mth-t7",
        question: "₹50 के 6 नोट और ₹10 के 8 सिक्कों का कुल मूल्य कितना होगा?",
        options: ["₹380", "₹340", "₹400", "₹360"],
        correct: 0,
        explanation: "(50 × 6) + (10 × 8) = 300 + 80 = ₹380।",
        difficulty: "easy", category: "practice_original", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["मुद्रा"]
      },
      {
        id: "MTH-0126", subjectId: "maths", chapterId: "mth-ch4", topicId: "mth-t7",
        question: "54 किमी/घंटा की चाल मीटर/सेकंड में कितनी होगी?",
        options: ["10 मी/से", "15 मी/से", "18 मी/से", "20 मी/से"],
        correct: 1,
        explanation: "किमी/घंटा को मी/से में बदलने के लिए 5/18 से गुणा करते हैं: 54 × (5/18) = 15 मी/से।",
        difficulty: "medium", category: "pyq_pattern", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["चाल"]
      },
      {
        id: "MTH-0127", subjectId: "maths", chapterId: "mth-ch4", topicId: "mth-t7",
        question: "एक व्यक्ति 150 मीटर की दूरी 30 सेकंड में तय करता है, तो उसकी चाल क्या है?",
        options: ["5 मी/से", "10 मी/से", "4.5 मी/से", "6 मी/से"],
        correct: 0,
        explanation: "चाल = दूरी / समय = 150 / 30 = 5 मीटर/सेकंड।",
        difficulty: "easy", category: "practice_original", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["चाल-दूरी"]
      },
      {
        id: "MTH-0128", subjectId: "maths", chapterId: "mth-ch4", topicId: "mth-t7",
        question: "निम्नलिखित में से कौन-सा माप सबसे बड़ा है?",
        options: ["1.5 किग्रा", "1450 ग्राम", "1 किग्रा 600 ग्राम", "1550 ग्राम"],
        correct: 2,
        explanation: "1 किग्रा 600 ग्राम = 1600 ग्राम, जो 1500 ग्राम, 1450 ग्राम और 1550 ग्राम से बड़ा है।",
        difficulty: "easy", category: "application", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["तुलना"]
      },
      {
        id: "MTH-0129", subjectId: "maths", chapterId: "mth-ch4", topicId: "mth-t7",
        question: "एक सामान्य (गैर-अधिवर्ष) वर्ष में कुल कितने दिन और सप्ताह होते हैं?",
        options: ["52 सप्ताह और 1 दिन", "52 सप्ताह और 2 दिन", "50 सप्ताह और 5 दिन", "52 सप्ताह और 0 दिन"],
        correct: 0,
        explanation: "365 ÷ 7 = 52 सप्ताह और 1 शेष दिन।",
        difficulty: "easy", category: "pyq_concept", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["कैलेंडर"]
      },
      {
        id: "MTH-0130", subjectId: "maths", chapterId: "mth-ch4", topicId: "mth-t7",
        question: "₹800 पर 5% वार्षिक साधारण ब्याज की दर से 3 वर्ष का ब्याज कितना होगा?",
        options: ["₹100", "₹120", "₹150", "₹80"],
        correct: 1,
        explanation: "साधारण ब्याज = (मूलधन × दर × समय) / 100 = (800 × 5 × 3) / 100 = ₹120।",
        difficulty: "medium", category: "important", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["ब्याज"]
      },
      {
        id: "MTH-0131", subjectId: "maths", chapterId: "mth-ch4", topicId: "mth-t7",
        question: "यदि एक दुकानदार ₹200 की वस्तु को ₹240 में बेचता है, तो उसका लाभ प्रतिशत कितना है?",
        options: ["15%", "20%", "25%", "40%"],
        correct: 1,
        explanation: "लाभ = 240 − 200 = ₹40; लाभ% = (40 / 200) × 100 = 20%।",
        difficulty: "medium", category: "application", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["लाभ-हानि"]
      },
      {
        id: "MTH-0132", subjectId: "maths", chapterId: "mth-ch4", topicId: "mth-t7",
        question: "5 डेकामीटर में कितने सेंटीमीटर होते हैं?",
        options: ["50 सेमी", "500 सेमी", "5,000 सेमी", "50,000 सेमी"],
        correct: 2,
        explanation: "1 डेकामीटर = 10 मीटर = 10 × 100 सेमी = 1000 सेमी; अतः 5 डेकामीटर = 5,000 सेमी।",
        difficulty: "hard", category: "difficult", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["मीट्रिक"]
      },
      {
        id: "MTH-0133", subjectId: "maths", chapterId: "mth-ch4", topicId: "mth-t7",
        question: "रात 11:30 बजे से अगली सुबह 5:15 बजे तक कितने घंटे और मिनट होते हैं?",
        options: ["5 घंटे 45 मिनट", "6 घंटे 15 मिनट", "5 घंटे 15 मिनट", "6 घंटे 45 मिनट"],
        correct: 0,
        explanation: "11:30 से 12:00 = 30 मिनट; 12:00 से 5:15 = 5 घंटे 15 मिनट; कुल = 5 घंटे 45 मिनट।",
        difficulty: "medium", category: "application", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["समय"]
      },
      {
        id: "MTH-0134", subjectId: "maths", chapterId: "mth-ch4", topicId: "mth-t7",
        question: "यदि 1 लीटर पानी का भार लगभग 1 किलोग्राम है, तो 250 मिलीलीटर पानी का भार कितना होगा?",
        options: ["25 ग्राम", "250 ग्राम", "500 ग्राम", "2.5 किग्रा"],
        correct: 1,
        explanation: "1000 मिली = 1000 ग्राम, अतः 250 मिली = 250 ग्राम।",
        difficulty: "easy", category: "practice_original", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["मापन"]
      },
      {
        id: "MTH-0135", subjectId: "maths", chapterId: "mth-ch4", topicId: "mth-t7",
        question: "एक कार 4 घंटे में 180 किमी की दूरी तय करती है, तो 6 घंटे में उसी चाल से कितनी दूरी तय करेगी?",
        options: ["240 किमी", "270 किमी", "300 किमी", "220 किमी"],
        correct: 1,
        explanation: "चाल = 180 / 4 = 45 किमी/घंटा; 6 घंटे में दूरी = 45 × 6 = 270 किमी।",
        difficulty: "easy", category: "practice_original", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["चाल-दूरी"]
      },
      {
        id: "MTH-0136", subjectId: "maths", chapterId: "mth-ch4", topicId: "mth-t7",
        question: "₹500 का 15% कितना होता है?",
        options: ["₹65", "₹75", "₹85", "₹50"],
        correct: 1,
        explanation: "500 × (15 / 100) = ₹75।",
        difficulty: "easy", category: "practice_original", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["प्रतिशत"]
      },
      {
        id: "MTH-0137", subjectId: "maths", chapterId: "mth-ch4", topicId: "mth-t7",
        question: "किसी संख्या में 18 जोड़ने पर उसका मान दोगुना हो जाता है। वह संख्या क्या है?",
        options: ["9", "18", "36", "12"],
        correct: 1,
        explanation: "x + 18 = 2x → x = 18।",
        difficulty: "easy", category: "pyq_concept", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["समीकरण"]
      },
      {
        id: "MTH-0138", subjectId: "maths", chapterId: "mth-ch4", topicId: "mth-t7",
        question: "3 मीटर 40 सेमी लंबी एक छड़ी और 2 मीटर 85 सेमी लंबी दूसरी छड़ी को जोड़ने पर कुल लंबाई कितनी होगी?",
        options: ["6 मी 25 सेमी", "5 मी 25 सेमी", "6 मी 15 सेमी", "5 मी 95 सेमी"],
        correct: 0,
        explanation: "340 सेमी + 285 सेमी = 625 सेमी = 6 मी 25 सेमी।",
        difficulty: "easy", category: "practice_original", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["लंबाई"]
      },
      {
        id: "MTH-0139", subjectId: "maths", chapterId: "mth-ch4", topicId: "mth-t7",
        question: "10,000 ग्राम को किलोग्राम में बदलने पर मान होगा:",
        options: ["1 किग्रा", "10 किग्रा", "100 किग्रा", "0.1 किग्रा"],
        correct: 1,
        explanation: "10,000 ÷ 1,000 = 10 किलोग्राम।",
        difficulty: "easy", category: "practice_original", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["भार"]
      },
      {
        id: "MTH-0140", subjectId: "maths", chapterId: "mth-ch4", topicId: "mth-t7",
        question: "यदि एक पैकेट में 250 ग्राम चाय आती है, तो 4 किलोग्राम चाय से ऐसे कितने पैकेट बनाए जा सकते हैं?",
        options: ["8", "12", "16", "20"],
        correct: 2,
        explanation: "4 किग्रा = 4000 ग्राम; पैकेट = 4000 ÷ 250 = 16 पैकेट।",
        difficulty: "medium", category: "application", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["भार"]
      },
      {
        id: "MTH-0141", subjectId: "maths", chapterId: "mth-ch5", topicId: "mth-t8",
        question: "संख्या पैटर्न को पूरा करें: 2, 5, 10, 17, 26, ___",
        options: ["35", "37", "39", "36"],
        correct: 1,
        explanation: "क्रमशः +3, +5, +7, +9 जुड़ रहा है; अगला अंतर +11 होगा: 26 + 11 = 37।",
        difficulty: "easy", category: "pyq_pattern", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["पैटर्न"]
      },
      {
        id: "MTH-0142", subjectId: "maths", chapterId: "mth-ch5", topicId: "mth-t8",
        question: "आँकड़ों 10, 15, 20, 25, 30 का समांतर माध्य (औसत) क्या होगा?",
        options: ["18", "20", "22", "25"],
        correct: 1,
        explanation: "योग = 10+15+20+25+30 = 100; औसत = 100 / 5 = 20।",
        difficulty: "easy", category: "important", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["औसत"]
      },
      {
        id: "MTH-0143", subjectId: "maths", chapterId: "mth-ch5", topicId: "mth-t8",
        question: "टैली चिह्न (Tally Marks) पद्धति में संख्या '8' को कैसे दर्शाया जाता है?",
        options: ["8 सीधी खड़ी रेखाएँ", "चार खड़ी रेखाएँ जिन्हें 5वीं तिरछी रेखा काटती है + तीन खड़ी रेखाएँ", "दो बंडल चार-चार के", "एक वृत्त और तीन रेखाएँ"],
        correct: 1,
        explanation: "टैली चिह्न में 5 का समूह (4 खड़ी + 1 तिरछी काटती रेखा) बनता है, उसके आगे 3 खड़ी रेखाएँ = 8।",
        difficulty: "easy", category: "pyq_concept", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["टैली चिह्न"]
      },
      {
        id: "MTH-0144", subjectId: "maths", chapterId: "mth-ch5", topicId: "mth-t8",
        question: "एक चित्रालेख (Pictograph) में 1 सेब का चित्र = 5 सेब दर्शाता है। यदि किसी दिन 35 सेब बिके, तो कितने चित्र बनाए जाएँगे?",
        options: ["5", "6", "7", "8"],
        correct: 2,
        explanation: "35 ÷ 5 = 7 चित्र।",
        difficulty: "easy", category: "application", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["चित्रालेख"]
      },
      {
        id: "MTH-0145", subjectId: "maths", chapterId: "mth-ch5", topicId: "mth-t8",
        question: "आँकड़ों 4, 7, 4, 9, 4, 5, 7 का बहुलक (Mode) क्या होगा?",
        options: ["4", "5", "7", "9"],
        correct: 0,
        explanation: "बहुलक वह मान है जो सबसे अधिक बार आता है; यहाँ 4 तीन बार आया है।",
        difficulty: "easy", category: "pyq_pattern", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["बहुलक"]
      },
      {
        id: "MTH-0146", subjectId: "maths", chapterId: "mth-ch5", topicId: "mth-t8",
        question: "आँकड़ों 12, 8, 19, 5, 25 का परिसर (Range) कितना है?",
        options: ["15", "20", "17", "13"],
        correct: 1,
        explanation: "परिसर = अधिकतम मान − न्यूनतम मान = 25 − 5 = 20।",
        difficulty: "medium", category: "important", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["परिसर"]
      },
      {
        id: "MTH-0147", subjectId: "maths", chapterId: "mth-ch5", topicId: "mth-t8",
        question: "श्रेणी 1, 1, 2, 3, 5, 8, 13, ___ (फिबोनाची पैटर्न) का अगला पद क्या होगा?",
        options: ["18", "20", "21", "24"],
        correct: 2,
        explanation: "प्रत्येक पद पिछले दो पदों का योग है: 8 + 13 = 21।",
        difficulty: "medium", category: "pyq_concept", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["पैटर्न"]
      },
      {
        id: "MTH-0148", subjectId: "maths", chapterId: "mth-ch5", topicId: "mth-t8",
        question: "आँकड़ों 3, 9, 5, 11, 7 की माध्यिका (Median) क्या होगी?",
        options: ["5", "7", "9", "11"],
        correct: 1,
        explanation: "आरोही क्रम में रखने पर: 3, 5, 7, 9, 11। बीच की संख्या (तीसरा पद) = 7।",
        difficulty: "medium", category: "pyq_pattern", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["माध्यिका"]
      },
      {
        id: "MTH-0149", subjectId: "maths", chapterId: "mth-ch5", topicId: "mth-t8",
        question: "दंड आरेख (Bar Graph) बनाते समय किन बातों का ध्यान रखना आवश्यक है?",
        options: ["सभी दंडों की चौड़ाई समान और उनके बीच की दूरी बराबर हो", "दंड अलग-अलग चौड़ाई के हों", "पैमाना न लिखा जाए", "केवल 2 दंड हों"],
        correct: 0,
        explanation: "सटीक तुलना के लिए दंड आरेख में समान चौड़ाई और समान अंतराल अनिवार्य हैं।",
        difficulty: "easy", category: "practice_original", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["दंड आरेख"]
      },
      {
        id: "MTH-0150", subjectId: "maths", chapterId: "mth-ch5", topicId: "mth-t8",
        question: "5 संख्याओं का औसत 18 है। यदि एक संख्या हटा दी जाए, तो शेष 4 संख्याओं का औसत 16 हो जाता है। हटाई गई संख्या क्या है?",
        options: ["20", "24", "26", "28"],
        correct: 2,
        explanation: "5 संख्याओं का योग = 5×18 = 90; 4 का योग = 4×16 = 64; हटाई गई संख्या = 90 − 64 = 26।",
        difficulty: "hard", category: "difficult", year: null, paper: null, source: null, verificationStatus: "practice_original", tags: ["औसत"]
      }
    ]
  });
})(window);
