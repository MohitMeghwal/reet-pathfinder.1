(function (global) {
  "use strict";

  global.REET.registerPack({
    revision: {
      notes: [
        { id: "evs-n1", subjectId: "evs", chapterId: "evs-ch1", title: "परिवार व सामाजिक कानून", points: ["परिवार बालक की प्रथम पाठशाला है (एकल व संयुक्त परिवार)।", "बाल विवाह निषेध: लड़की 18 वर्ष, लड़का 21 वर्ष; चाइल्डलाइन: 1098।", "राजस्थान मेले: पुष्कर (अजमेर), बेणेश्वर (डूंगरपुर), रामदेवरा (जैसलमेर)।"] },
        { id: "evs-n2", subjectId: "evs", chapterId: "evs-ch1", title: "स्वास्थ्य व प्रमुख रोग", points: ["मलेरिया: मादा एनाफिलीज़ (प्लाज़्मोडियम), औषधि: सिनकोना छाल/कुनैन; खोज: रोनाल्ड रॉस।", "डेंगू: एडीज मच्छर (दिन में, साफ रुके पानी में)।", "एनीमिया: आयरन की कमी (पालक, गुड़, आँवला); विश्व स्वास्थ्य दिवस: 7 अप्रैल।"] },
        { id: "evs-n3", subjectId: "evs", chapterId: "evs-ch2", title: "भोजन व विटामिन", points: ["कार्बोहाइड्रेट व वसा = ऊर्जा; प्रोटीन = शरीर निर्माण (कमी: क्वाशिओरकर)।", "A=रतौंधी, B1=बेरी-बेरी, C=स्कर्वी, D=रिकेट्स, आयोडीन=घेंघा।", "जल में घुलनशील: B व C; वसा में: A, D, E, K।"] },
        { id: "evs-n4", subjectId: "evs", chapterId: "evs-ch2", title: "जल संरक्षण (राजस्थान संदर्भ)", points: ["जल चक्र: वाष्पीकरण → संघनन → वर्षण → संग्रहण।", "राजस्थान: टांका (भूमिगत टैंक), खड़ीन (जैसलमेर कृषि), बावड़ी (चाँद बावड़ी, दौसा), जोहड़ (जल पुरुष राजेंद्र सिंह)।", "विश्व जल दिवस: 22 मार्च।"] },
        { id: "evs-n5", subjectId: "evs", chapterId: "evs-ch2", title: "विविध क्षेत्रों के आवास", points: ["असम: बाँस के खंभों पर 10–12 फीट ऊँचे घर (बाढ़ से बचाव)।", "राजस्थान: मिट्टी की मोटी दीवारें (गर्मी से बचाव), झोंपा।", "लद्दाख: पत्थर-लकड़ी के दो मंजिला घर; चांगपा जनजाति का तंबू 'रेबो'; एस्किमो का 'इग्लू'।"] },
        { id: "evs-n6", subjectId: "evs", chapterId: "evs-ch2", title: "यातायात व सड़क सुरक्षा", points: ["लाल = रुकें, पीली = तैयार रहें, हरी = चलें; पैदल हेतु जेब्रा क्रॉसिंग।", "प्रथम भारतीय यात्री रेल: 1853 (मुंबई से ठाणे)।"] },
        { id: "evs-n7", subjectId: "evs", chapterId: "evs-ch3", title: "पेड़-पौधे व पारिस्थितिकी", points: ["प्रकाश संश्लेषण: CO₂ + जल → ग्लूकोज़ + O₂ (क्लोरोफिल व सूर्य प्रकाश)।", "खेजड़ी (राज्य वृक्ष): 1730 में अमृता देवी बिश्नोई का बलिदान।", "घटपर्णी (नेपेंथिस): नाइट्रोजन की पूर्ति हेतु कीटभक्षी पौधा; जाइलम = जल संवहन, फ्लोएम = भोजन।"] },
        { id: "evs-n8", subjectId: "evs", chapterId: "evs-ch3", title: "जीव-जंतु व सहजीविता", points: ["खाद्य श्रृंखला: उत्पादक → शाकाहारी → मांसाहारी → अपघटक।", "कोयल अपना घोंसला नहीं बनाती; केंचुआ किसानों का मित्र है।", "भैंस व बगुला (तथा लाइकेन) सहजीविता के उदाहरण हैं।"] },
        { id: "evs-n9", subjectId: "evs", chapterId: "evs-ch3", title: "मानव शरीर के तंत्र", points: ["पाचन मुख से शुरू, सर्वाधिक अवशोषण छोटी आंत में; यकृत सबसे बड़ी ग्रंथि।", "वयस्क में 206 हड्डियाँ (सबसे लंबी फीमर, सबसे छोटी स्टेपीज़)।", "हृदय में 4 कक्ष, ~72 धड़कन/मिनट; सामान्य तापमान 37°C (98.6°F)।"] },
        { id: "evs-n10", subjectId: "evs", chapterId: "evs-ch4", title: "प्राकृतिक संसाधन व प्रदूषण", points: ["नवीकरणीय: सौर, पवन, जल; अनवीकरणीय: कोयला, पेट्रोलियम।", "अम्ल वर्षा: SO₂ व NO₂; ओज़ोन क्षरण: CFC (समताप मंडल)।", "3R: Reduce, Reuse, Recycle; लाइकेन वायु प्रदूषण का प्राकृतिक सूचक है।"] },
        { id: "evs-n11", subjectId: "evs", chapterId: "evs-ch4", title: "पर्यावरण आंदोलन व दिवस", points: ["चिपको आंदोलन (1973, उत्तराखंड): सुंदरलाल बहुगुणा, चंडीप्रसाद भट्ट।", "5 जून: पर्यावरण दिवस; 22 अप्रैल: पृथ्वी दिवस; 16 सितंबर: ओज़ोन दिवस।"] },
        { id: "evs-n12", subjectId: "evs", chapterId: "evs-ch5", title: "पृथ्वी व सौरमंडल", points: ["घूर्णन (24 घंटे) → दिन-रात; परिक्रमण (365¼ दिन) + अक्षीय झुकाव → ऋतुएँ।", "सबसे बड़ा: बृहस्पति; लाल: मंगल; सबसे गर्म/चमकीला: शुक्र; नीला: पृथ्वी; ध्रुव तारा = उत्तर दिशा।"] },
        { id: "evs-n13", subjectId: "evs", chapterId: "evs-ch5", title: "राजस्थान भूगोल व अभयारण्य", points: ["राज्य वृक्ष: खेजड़ी; पुष्प: रोहिड़ा; पक्षी: गोडावण; पशु: चिंकारा/ऊँट।", "रणथंभौर व सरिस्का (बाघ), केवलादेव (प्रवासी पक्षी), मरु उद्यान (गोडावण), तालछापर (काले हिरण)।", "अरावली सर्वोच्च शिखर: गुरु शिखर (1722 मी, सिरोही); कर्क रेखा: बाँसवाड़ा-डूँगरपुर।"] },
        { id: "evs-n14", subjectId: "evs", chapterId: "evs-ch6", title: "NCF 2005 व EVS थीम", points: ["कक्षा 1–2 में भाषा व गणित के साथ समाहित; कक्षा 3–5 में एकीकृत विषय।", "6 थीम: परिवार व मित्र, भोजन, आश्रय, पानी, यात्रा, हम चीज़ें कैसे बनाते हैं।"] },
        { id: "evs-n15", subjectId: "evs", chapterId: "evs-ch6", title: "EVS शिक्षण विधियाँ व आकलन", points: ["अवलोकन, अन्वेषण, क्षेत्र भ्रमण, प्रयोग, प्रोजेक्ट व सामुदायिक संसाधन।", "आकलन: पोर्टफोलियो, अवलोकन चेकलिस्ट, उपाख्यानात्मक अभिलेख; 5E मॉडल।"] }
      ],
      facts: [
        { id: "evs-f1", subjectId: "evs", text: "मलेरिया मादा एनाफिलीज़ मच्छर से फैलता है (खोज: रोनाल्ड रॉस)।", type: "fact" },
        { id: "evs-f2", subjectId: "evs", text: "डेंगू का एडीज मच्छर दिन में काटता है और साफ रुके पानी में पनपता है।", type: "fact" },
        { id: "evs-f3", subjectId: "evs", text: "विश्व स्वास्थ्य दिवस 7 अप्रैल को मनाया जाता है।", type: "date" },
        { id: "evs-f4", subjectId: "evs", text: "विटामिन B और C जल में घुलनशील हैं।", type: "science" },
        { id: "evs-f5", subjectId: "evs", text: "असम में बाढ़ से बचने हेतु बाँस के खंभों पर ऊँचे घर बनाए जाते हैं।", type: "fact" },
        { id: "evs-f6", subjectId: "evs", text: "राजेंद्र सिंह को भारत का 'जल पुरुष' कहा जाता है।", type: "fact" },
        { id: "evs-f7", subjectId: "evs", text: "विश्व जल दिवस 22 मार्च और पृथ्वी दिवस 22 अप्रैल को मनाया जाता है।", type: "date" },
        { id: "evs-f8", subjectId: "evs", text: "खेजड़ी वृक्षों के लिए 1730 में अमृता देवी बिश्नोई ने बलिदान दिया था।", type: "history" },
        { id: "evs-f9", subjectId: "evs", text: "घटपर्णी (नेपेंथिस) नाइट्रोजन की कमी वाली मिट्टी में उगने वाला कीटभक्षी पौधा है।", type: "science" },
        { id: "evs-f10", subjectId: "evs", text: "वयस्क मानव शरीर में 206 हड्डियाँ होती हैं (सबसे लंबी फीमर, सबसे छोटी स्टेपीज़)।", type: "science" },
        { id: "evs-f11", subjectId: "evs", text: "मानव शरीर का सामान्य तापमान 37°C (98.6°F) होता है।", type: "science" },
        { id: "evs-f12", subjectId: "evs", text: "विश्व पर्यावरण दिवस 5 जून और ओज़ोन दिवस 16 सितंबर को मनाया जाता है।", type: "date" },
        { id: "evs-f13", subjectId: "evs", text: "लाइकेन SO₂ वायु प्रदूषण के प्राकृतिक सूचक हैं।", type: "science" },
        { id: "evs-f14", subjectId: "evs", text: "चिपको आंदोलन 1973 में सुंदरलाल बहुगुणा व चंडीप्रसाद भट्ट के नेतृत्व में हुआ।", type: "history" },
        { id: "evs-f15", subjectId: "evs", text: "पृथ्वी के घूर्णन से दिन-रात और परिक्रमण से ऋतुएँ बनती हैं।", type: "geography" },
        { id: "evs-f16", subjectId: "evs", text: "राजस्थान का राज्य पक्षी गोडावण (मरु उद्यान) और राज्य पुष्प रोहिड़ा है।", type: "rajasthan" },
        { id: "evs-f17", subjectId: "evs", text: "अरावली का सर्वोच्च शिखर गुरु शिखर (1722 मी, सिरोही) है।", type: "rajasthan" },
        { id: "evs-f18", subjectId: "evs", text: "कर्क रेखा राजस्थान के बाँसवाड़ा और डूँगरपुर जिलों से गुजरती है।", type: "rajasthan" },
        { id: "evs-f19", subjectId: "evs", text: "NCERT EVS की 6 मुख्य थीम हैं; कक्षा 1–2 में इसे भाषा व गणित में समाहित किया गया है।", type: "pedagogy" },
        { id: "evs-f20", subjectId: "evs", text: "5E अधिगम मॉडल: Engage, Explore, Explain, Elaborate, Evaluate।", type: "pedagogy" }
      ],
      flashcards: [
        { id: "evs-fc1", subjectId: "evs", chapterId: "evs-ch1", topicId: "evs-t1", front: "बाल विवाह निषेध कानून के तहत न्यूनतम विवाह आयु?", back: "लड़की: 18 वर्ष; लड़का: 21 वर्ष।" },
        { id: "evs-fc2", subjectId: "evs", chapterId: "evs-ch1", topicId: "evs-t1", front: "चाइल्ड हेल्पलाइन नंबर क्या है?", back: "1098।" },
        { id: "evs-fc3", subjectId: "evs", chapterId: "evs-ch1", topicId: "evs-t1", front: "बेणेश्वर मेला कहाँ लगता है?", back: "डूंगरपुर (सोम-माही-जाखम संगम)।" },
        { id: "evs-fc4", subjectId: "evs", chapterId: "evs-ch1", topicId: "evs-t2", front: "मलेरिया की दवा कुनैन किस पेड़ से बनती है?", back: "सिनकोना की छाल से।" },
        { id: "evs-fc5", subjectId: "evs", chapterId: "evs-ch1", topicId: "evs-t2", front: "गंबूजिया मछली तालाब में क्यों डालते हैं?", back: "मच्छरों के लार्वा खाने (जैविक नियंत्रण) के लिए।" },
        { id: "evs-fc6", subjectId: "evs", chapterId: "evs-ch1", topicId: "evs-t2", front: "एनीमिया किस तत्व की कमी से होता है?", back: "आयरन (लौह तत्व) की कमी से।" },
        { id: "evs-fc7", subjectId: "evs", chapterId: "evs-ch2", topicId: "evs-t3", front: "विटामिन A, C, D की कमी से होने वाले रोग?", back: "A: रतौंधी, C: स्कर्वी, D: रिकेट्स।" },
        { id: "evs-fc8", subjectId: "evs", chapterId: "evs-ch2", topicId: "evs-t3", front: "आयोडीन की कमी से कौन-सा रोग होता है?", back: "घेंघा / गलगंड (Goitre)।" },
        { id: "evs-fc9", subjectId: "evs", chapterId: "evs-ch2", topicId: "evs-t3", front: "राजस्थान में 'टांका' और 'खड़ीन' क्या हैं?", back: "टांका: वर्षा जल हेतु भूमिगत टैंक; खड़ीन: जैसलमेर की कृषि जल संरक्षण पद्धति।" },
        { id: "evs-fc10", subjectId: "evs", chapterId: "evs-ch2", topicId: "evs-t3", front: "भारत का 'जल पुरुष' किसे कहते हैं?", back: "राजेंद्र सिंह (अलवर जोहड़ पुनर्जीवन)।" },
        { id: "evs-fc11", subjectId: "evs", chapterId: "evs-ch2", topicId: "evs-t4", front: "असम में घर बाँस के खंभों पर क्यों बनते हैं?", back: "भारी बारिश और बाढ़ से बचाव के लिए।" },
        { id: "evs-fc12", subjectId: "evs", chapterId: "evs-ch2", topicId: "evs-t4", front: "चांगपा जनजाति के तंबू को क्या कहते हैं?", back: "रेबो (Rebo) — लद्दाख।" },
        { id: "evs-fc13", subjectId: "evs", chapterId: "evs-ch3", topicId: "evs-t5", front: "पौधों में जाइलम और फ्लोएम के कार्य?", back: "जाइलम = जल संवहन; फ्लोएम = भोजन संवहन।" },
        { id: "evs-fc14", subjectId: "evs", chapterId: "evs-ch3", topicId: "evs-t5", front: "नेपेंथिस (घटपर्णी) कीड़े क्यों खाता है?", back: "नाइट्रोजन की कमी पूरी करने के लिए।" },
        { id: "evs-fc15", subjectId: "evs", chapterId: "evs-ch3", topicId: "evs-t5", front: "मधुमक्खी पालन का सर्वोत्तम समय?", back: "अक्टूबर से दिसंबर।" },
        { id: "evs-fc16", subjectId: "evs", chapterId: "evs-ch3", topicId: "evs-t6", front: "भोजन का पाचन कहाँ से शुरू व कहाँ अवशोषित होता है?", back: "शुरू: मुख; सर्वाधिक अवशोषण: छोटी आंत।" },
        { id: "evs-fc17", subjectId: "evs", chapterId: "evs-ch3", topicId: "evs-t6", front: "मानव शरीर की सबसे लंबी व सबसे छोटी हड्डी?", back: "सबसे लंबी: फीमर (जाँघ); सबसे छोटी: स्टेपीज़ (कान)।" },
        { id: "evs-fc18", subjectId: "evs", chapterId: "evs-ch3", topicId: "evs-t6", front: "मानव हृदय में कितने कक्ष होते हैं?", back: "4 कक्ष (2 आलिंद, 2 निलय)।" },
        { id: "evs-fc19", subjectId: "evs", chapterId: "evs-ch4", topicId: "evs-t7", front: "अम्ल वर्षा की दो मुख्य गैसें?", back: "सल्फर डाइऑक्साइड (SO₂) और नाइट्रोजन ऑक्साइड (NO₂)।" },
        { id: "evs-fc20", subjectId: "evs", chapterId: "evs-ch4", topicId: "evs-t7", front: "ओज़ोन परत किस मंडल में है व क्या रोकती है?", back: "समताप मंडल में; पराबैंगनी (UV) किरणें रोकती है।" },
        { id: "evs-fc21", subjectId: "evs", chapterId: "evs-ch4", topicId: "evs-t7", front: "ध्वनि प्रदूषण मापने की इकाई?", back: "डेसिबल (dB)।" },
        { id: "evs-fc22", subjectId: "evs", chapterId: "evs-ch4", topicId: "evs-t7", front: "3R सिद्धांत का पूरा नाम?", back: "Reduce, Reuse, Recycle।" },
        { id: "evs-fc23", subjectId: "evs", chapterId: "evs-ch5", topicId: "evs-t8", front: "पृथ्वी के घूर्णन और परिक्रमण का प्रभाव?", back: "घूर्णन = दिन-रात; परिक्रमण = ऋतु परिवर्तन।" },
        { id: "evs-fc24", subjectId: "evs", chapterId: "evs-ch5", topicId: "evs-t8", front: "राजस्थान के राज्य वृक्ष, पुष्प और पक्षी?", back: "वृक्ष: खेजड़ी; पुष्प: रोहिड़ा; पक्षी: गोडावण।" },
        { id: "evs-fc25", subjectId: "evs", chapterId: "evs-ch5", topicId: "evs-t8", front: "केवलादेव घना (भरतपुर) किसलिए प्रसिद्ध है?", back: "प्रवासी पक्षियों (साइबेरियन सारस) के लिए।" },
        { id: "evs-fc26", subjectId: "evs", chapterId: "evs-ch5", topicId: "evs-t8", front: "तालछापर अभयारण्य (चूरू) किसलिए प्रसिद्ध है?", back: "काले हिरण (कृष्ण मृग) के लिए।" },
        { id: "evs-fc27", subjectId: "evs", chapterId: "evs-ch6", topicId: "evs-t9", front: "कक्षा 1–2 में EVS कैसे पढ़ाया जाता है?", back: "भाषा और गणित के साथ समाहित (Integrated) करके।" },
        { id: "evs-fc28", subjectId: "evs", chapterId: "evs-ch6", topicId: "evs-t9", front: "NCERT EVS की 6 थीम कौन-सी हैं?", back: "परिवार-मित्र, भोजन, आश्रय, पानी, यात्रा, हम चीज़ें कैसे बनाते हैं।" },
        { id: "evs-fc29", subjectId: "evs", chapterId: "evs-ch6", topicId: "evs-t9", front: "EVS शिक्षण सूत्र (Local to Global)?", back: "स्थानीय परिवेश से शुरू कर वैश्विक संदर्भ तक ले जाना।" },
        { id: "evs-fc30", subjectId: "evs", chapterId: "evs-ch6", topicId: "evs-t9", front: "EVS में आकलन के 2 श्रेष्ठ उपकरण?", back: "पोर्टफोलियो और अवलोकन चेकलिस्ट / उपाख्यानात्मक अभिलेख।" }
      ]
    }
  });
})(window);
