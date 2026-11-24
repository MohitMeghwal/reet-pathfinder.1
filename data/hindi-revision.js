(function (global) {
  "use strict";

  global.REET.registerPack({
    revision: {
      notes: [
        { id: "hin-n1", subjectId: "hindi", chapterId: "hin-ch1", title: "भाषा अर्जन बनाम अधिगम", points: ["अर्जन: स्वाभाविक, अनौपचारिक, मातृभाषा (चॉम्स्की: LAD)।", "अधिगम: प्रयासपूर्ण, औपचारिक, नियमबद्ध।", "संविधान अनुच्छेद 343(1): राजभाषा हिंदी, लिपि देवनागरी; 14 सितंबर हिंदी दिवस।"] },
        { id: "hin-n2", subjectId: "hindi", chapterId: "hin-ch2", title: "संज्ञा व सर्वनाम", points: ["संज्ञा के 3 मुख्य भेद: व्यक्तिवाचक, जातिवाचक, भाववाचक।", "हिंदी में मूल सर्वनाम 11 हैं; कुल भेद 6 (पुरुषवाचक, निजवाचक, निश्चयवाचक, अनिश्चयवाचक, संबंधवाचक, प्रश्नवाचक)।"] },
        { id: "hin-n3", subjectId: "hindi", chapterId: "hin-ch2", title: "विशेषण व क्रिया", points: ["विशेषण के 4 भेद: गुणवाचक, संख्यावाचक, परिमाणवाचक, सार्वनामिक।", "क्रिया: अकर्मक (सोना, उड़ना) व सकर्मक (पढ़ना, खाना); पूर्वकालिक ('कर' जुड़कर), प्रेरणार्थक ('वा' जुड़कर)।"] },
        { id: "hin-n4", subjectId: "hindi", chapterId: "hin-ch2", title: "कारक विभक्तियाँ", points: ["कर्ता (ने), कर्म (को), करण (से/साधन), संप्रदान (को/के लिए), अपादान (से/अलग होना), संबंध (का/के/की), अधिकरण (में/पर), संबोधन (हे/अरे)।"] },
        { id: "hin-n5", subjectId: "hindi", chapterId: "hin-ch2", title: "वचन, लिंग व अव्यय", points: ["नित्य बहुवचन: प्राण, आँसू, हस्ताक्षर, दर्शन।", "नित्य एकवचन: पानी, जनता, वर्षा, सत्य।", "अव्यय (अविकारी): क्रियाविशेषण, संबंधबोधक, समुच्चयबोधक, विस्मयादिबोधक।"] },
        { id: "hin-n6", subjectId: "hindi", chapterId: "hin-ch3", title: "स्वर संधि के 5 भेद", points: ["दीर्घ (आ, ई, ऊ), गुण (ए, ओ, अर्), वृद्धि (ऐ, औ), यण (य्, व्, र्), अयादि (अय्, आय्, अव्, आव्)।"] },
        { id: "hin-n7", subjectId: "hindi", chapterId: "hin-ch3", title: "व्यंजन व विसर्ग संधि", points: ["व्यंजन: वाक्+ईश=वागीश, जगत्+नाथ=जगन्नाथ, उत्+चारण=उच्चारण।", "विसर्ग: मनः+रथ=मनोरथ, निः+छल=निश्छल, दुः+जन=दुर्जन।"] },
        { id: "hin-n8", subjectId: "hindi", chapterId: "hin-ch3", title: "समास के 6 भेद", points: ["अव्ययीभाव (प्रथम अव्यय), तत्पुरुष (कारक लोप), कर्मधारय (विशेषण-विशेष्य), द्विगु (प्रथम संख्या), द्वंद्व (दोनों प्रधान), बहुव्रीहि (तीसरा अर्थ)।"] },
        { id: "hin-n9", subjectId: "hindi", chapterId: "hin-ch3", title: "उपसर्ग व प्रत्यय", points: ["उपसर्ग शब्द के आगे जुड़ते हैं (संस्कृत के 22 उपसर्ग)।", "प्रत्यय शब्द के पीछे जुड़ते हैं: कृत् (धातु में) व तद्धित (संज्ञा/विशेषण में)।", "'इक' प्रत्यय से प्रथम स्वर में वृद्धि होती है (समाज→सामाजिक)।"] },
        { id: "hin-n10", subjectId: "hindi", chapterId: "hin-ch3", title: "तत्सम, तद्भव, देशज, विदेशी", points: ["तत्सम: अग्नि, दुग्ध, मयूर। तद्भव: आग, दूध, मोर।", "देशज: लोटा, पगड़ी। संकर: रेलगाड़ी।", "तुर्की: कैंची, चाकू; पुर्तगाली: बाल्टी, साबुन।"] },
        { id: "hin-n11", subjectId: "hindi", chapterId: "hin-ch4", title: "पर्यायवाची व मुहावरे-लोकोक्ति", points: ["जल+ज=कमल, जल+द=बादल, जल+धि=समुद्र।", "मुहावरा वाक्यांश है, लोकोक्ति पूर्ण स्वतंत्र वाक्य है।"] },
        { id: "hin-n12", subjectId: "hindi", chapterId: "hin-ch4", title: "वाक्य भेद व विराम चिह्न", points: ["रचनानुसार 3 भेद: सरल, संयुक्त (और/किंतु), मिश्र (कि/जो-सो)।", "अर्थानुसार 8 भेद; हंसपद (^) छूटे शब्द हेतु; लाघव (०) संक्षेप हेतु।"] },
        { id: "hin-n13", subjectId: "hindi", chapterId: "hin-ch5", title: "शुद्ध वर्तनी नियम", points: ["शुद्ध रूप: कवयित्री, उज्ज्वल, आशीर्वाद, पूजनीय, अहल्या, शृंगार, अंत्याक्षरी, व्यावहारिक।"] },
        { id: "hin-n14", subjectId: "hindi", chapterId: "hin-ch6", title: "भाषा कौशल व शिक्षण विधियाँ", points: ["क्रम: सुनना → बोलना → पढ़ना → लिखना (LSRW)।", "ग्रहणात्मक: सुनना, पढ़ना; अभिव्यक्तात्मक: बोलना, लिखना।", "प्राथमिक स्तर पर व्याकरण हेतु आगमन व समवाय विधि श्रेष्ठ।"] },
        { id: "hin-n15", subjectId: "hindi", chapterId: "hin-ch6", title: "मूल्यांकन व TLM", points: ["निदानात्मक परीक्षण से कारण जानकर उपचारात्मक शिक्षण दें।", "दृश्य: श्यामपट्ट, फ्लैशकार्ड; श्रव्य: रेडियो; श्रव्य-दृश्य: कठपुतली, वीडियो।"] }
      ],
      facts: [
        { id: "hin-f1", subjectId: "hindi", text: "नोम चॉम्स्की ने भाषा अर्जन यंत्र (LAD) की अवधारणा दी।", type: "fact" },
        { id: "hin-f2", subjectId: "hindi", text: "संविधान के अनुच्छेद 343(1) में हिंदी राजभाषा व देवनागरी लिपि है।", type: "law" },
        { id: "hin-f3", subjectId: "hindi", text: "14 सितंबर को भारत में हिंदी दिवस मनाया जाता है।", type: "fact" },
        { id: "hin-f4", subjectId: "hindi", text: "आठवीं अनुसूची में 22 मान्यता प्राप्त भाषाएँ हैं।", type: "fact" },
        { id: "hin-f5", subjectId: "hindi", text: "रूपिम (Morpheme) अर्थ की सबसे छोटी इकाई है।", type: "definition" },
        { id: "hin-f6", subjectId: "hindi", text: "हिंदी में मूल सर्वनामों की संख्या 11 है।", type: "fact" },
        { id: "hin-f7", subjectId: "hindi", text: "प्राण, आँसू, हस्ताक्षर और दर्शन नित्य बहुवचन शब्द हैं।", type: "grammar" },
        { id: "hin-f8", subjectId: "hindi", text: "संस्कृत में प्रमुख उपसर्गों की संख्या 22 मानी जाती है।", type: "grammar" },
        { id: "hin-f9", subjectId: "hindi", text: "संधि दो वर्णों का मेल है, जबकि समास दो शब्दों का मेल है।", type: "grammar" },
        { id: "hin-f10", subjectId: "hindi", text: "दशानन, पीतांबर व नीलकंठ में रूढ़ अर्थ होने पर बहुव्रीहि समास होता है।", type: "grammar" },
        { id: "hin-f11", subjectId: "hindi", text: "'अनिल' का अर्थ वायु और 'अनल' का अर्थ अग्नि होता है।", type: "vocab" },
        { id: "hin-f12", subjectId: "hindi", text: "रचना के आधार पर वाक्य के 3 भेद: सरल, संयुक्त, मिश्र।", type: "grammar" },
        { id: "hin-f13", subjectId: "hindi", text: "अर्थ के आधार पर वाक्य के 8 भेद होते हैं।", type: "grammar" },
        { id: "hin-f14", subjectId: "hindi", text: "वाक्य में प्रयुक्त शब्द 'पद' कहलाता है।", type: "definition" },
        { id: "hin-f15", subjectId: "hindi", text: "भाषा के 4 कौशल: सुनना, बोलना, पढ़ना, लिखना (LSRW)।", type: "pedagogy" },
        { id: "hin-f16", subjectId: "hindi", text: "सुनना और पढ़ना ग्रहणात्मक कौशल हैं।", type: "pedagogy" },
        { id: "hin-f17", subjectId: "hindi", text: "बोलना और लिखना अभिव्यक्तात्मक कौशल हैं।", type: "pedagogy" },
        { id: "hin-f18", subjectId: "hindi", text: "आगमन विधि में उदाहरण से नियम की ओर चलते हैं।", type: "pedagogy" },
        { id: "hin-f19", subjectId: "hindi", text: "मौन पठन का मुख्य उद्देश्य तीव्र गति से अर्थ-ग्रहण करना है।", type: "pedagogy" },
        { id: "hin-f20", subjectId: "hindi", text: "ब्लू-प्रिंट संतुलित प्रश्न-पत्र निर्माण से संबंधित है।", type: "pedagogy" }
      ],
      flashcards: [
        { id: "hin-fc1", subjectId: "hindi", chapterId: "hin-ch1", topicId: "hin-t1", front: "भाषा अर्जन व अधिगम में मुख्य अंतर?", back: "अर्जन स्वाभाविक व अनौपचारिक; अधिगम प्रयासपूर्ण व औपचारिक।" },
        { id: "hin-fc2", subjectId: "hindi", chapterId: "hin-ch1", topicId: "hin-t1", front: "LAD का पूरा नाम और प्रतिपादक?", back: "Language Acquisition Device — नोम चॉम्स्की।" },
        { id: "hin-fc3", subjectId: "hindi", chapterId: "hin-ch1", topicId: "hin-t1", front: "ध्वनि की सबसे छोटी इकाई क्या है?", back: "स्वनिम (Phoneme) / वर्ण।" },
        { id: "hin-fc4", subjectId: "hindi", chapterId: "hin-ch1", topicId: "hin-t1", front: "अर्थ की सबसे छोटी इकाई क्या है?", back: "रूपिम (Morpheme)।" },
        { id: "hin-fc5", subjectId: "hindi", chapterId: "hin-ch2", topicId: "hin-t2", front: "हिंदी में मूल सर्वनाम कितने हैं?", back: "11 (मैं, तू, आप, यह, वह, जो, सो, कौन, क्या, कोई, कुछ)।" },
        { id: "hin-fc6", subjectId: "hindi", chapterId: "hin-ch2", topicId: "hin-t2", front: "प्रविशेषण किसे कहते हैं?", back: "विशेषण की भी विशेषता बताने वाले शब्द (जैसे 'बहुत सुंदर' में 'बहुत')।" },
        { id: "hin-fc7", subjectId: "hindi", chapterId: "hin-ch2", topicId: "hin-t2", front: "पूर्वकालिक क्रिया की पहचान?", back: "मुख्य क्रिया से पहले समाप्त होने वाली क्रिया (धातु + कर, जैसे 'खाकर')।" },
        { id: "hin-fc8", subjectId: "hindi", chapterId: "hin-ch2", topicId: "hin-t3", front: "करण कारक और अपादान कारक में अंतर?", back: "करण में 'से' साधन के लिए; अपादान में 'से' अलग होने या तुलना के लिए।" },
        { id: "hin-fc9", subjectId: "hindi", chapterId: "hin-ch2", topicId: "hin-t3", front: "नित्य बहुवचन 4 शब्द बताइए।", back: "प्राण, आँसू, हस्ताक्षर, दर्शन।" },
        { id: "hin-fc10", subjectId: "hindi", chapterId: "hin-ch2", topicId: "hin-t3", front: "हेतुहेतुमद् भूतकाल का उदाहरण?", back: "'यदि वह पढ़ता तो पास हो जाता।'" },
        { id: "hin-fc11", subjectId: "hindi", chapterId: "hin-ch3", topicId: "hin-t4", front: "'स्वागत' का संधि-विच्छेद व संधि?", back: "सु + आगत (यण स्वर संधि)।" },
        { id: "hin-fc12", subjectId: "hindi", chapterId: "hin-ch3", topicId: "hin-t4", front: "'पावक' का संधि-विच्छेद व संधि?", back: "पौ + अक (अयादि स्वर संधि)।" },
        { id: "hin-fc13", subjectId: "hindi", chapterId: "hin-ch3", topicId: "hin-t4", front: "'मनोरथ' का संधि-विच्छेद व संधि?", back: "मनः + रथ (विसर्ग संधि)।" },
        { id: "hin-fc14", subjectId: "hindi", chapterId: "hin-ch3", topicId: "hin-t4", front: "'यथाशक्ति' में कौन-सा समास है?", back: "अव्ययीभाव समास (शक्ति के अनुसार)।" },
        { id: "hin-fc15", subjectId: "hindi", chapterId: "hin-ch3", topicId: "hin-t4", front: "'चौराहा' में कौन-सा समास है?", back: "द्विगु समास (चार राहों का समूह)।" },
        { id: "hin-fc16", subjectId: "hindi", chapterId: "hin-ch3", topicId: "hin-t5", front: "कृत् व तद्धित प्रत्यय में अंतर?", back: "कृत् धातु/क्रिया में जुड़ते हैं; तद्धित संज्ञा, सर्वनाम व विशेषण में।" },
        { id: "hin-fc17", subjectId: "hindi", chapterId: "hin-ch3", topicId: "hin-t5", front: "'अग्नि' व 'मयूर' का तद्भव रूप?", back: "आग और मोर।" },
        { id: "hin-fc18", subjectId: "hindi", chapterId: "hin-ch3", topicId: "hin-t5", front: "'रेलगाड़ी' किस श्रेणी का शब्द है?", back: "संकर शब्द (अंग्रेजी + हिंदी)।" },
        { id: "hin-fc19", subjectId: "hindi", chapterId: "hin-ch4", topicId: "hin-t6", front: "'कृतज्ञ' का विलोम क्या है?", back: "कृतघ्न।" },
        { id: "hin-fc20", subjectId: "hindi", chapterId: "hin-ch4", topicId: "hin-t6", front: "'अनिल' व 'अनल' का अर्थ?", back: "अनिल = वायु; अनल = अग्नि।" },
        { id: "hin-fc21", subjectId: "hindi", chapterId: "hin-ch4", topicId: "hin-t6", front: "मुहावरा व लोकोक्ति में अंतर?", back: "मुहावरा वाक्यांश है; लोकोक्ति पूर्ण स्वतंत्र वाक्य है।" },
        { id: "hin-fc22", subjectId: "hindi", chapterId: "hin-ch4", topicId: "hin-t7", front: "वाक्य के दो अंग कौन-से हैं?", back: "उद्देश्य और विधेय।" },
        { id: "hin-fc23", subjectId: "hindi", chapterId: "hin-ch4", topicId: "hin-t7", front: "हंसपद (^) चिह्न कब लगाते हैं?", back: "लिखते समय छूटे हुए शब्द को दर्शाने के लिए।" },
        { id: "hin-fc24", subjectId: "hindi", chapterId: "hin-ch5", topicId: "hin-t8", front: "'कवि' का शुद्ध स्त्रीलिंग व 'उज्वल' का शुद्ध रूप?", back: "कवयित्री और उज्ज्वल।" },
        { id: "hin-fc25", subjectId: "hindi", chapterId: "hin-ch5", topicId: "hin-t8", front: "'अनेकों लोग आए' में क्या अशुद्धि है?", back: "वचन अशुद्धि ('अनेक' स्वयं बहुवचन है)।" },
        { id: "hin-fc26", subjectId: "hindi", chapterId: "hin-ch6", topicId: "hin-t9", front: "भाषा कौशलों का सही क्रम?", back: "सुनना → बोलना → पढ़ना → लिखना (LSRW)।" },
        { id: "hin-fc27", subjectId: "hindi", chapterId: "hin-ch6", topicId: "hin-t9", front: "समवाय विधि क्या है?", back: "गद्य/पद्य पाठ के संदर्भ में ही व्याकरण पढ़ाना।" },
        { id: "hin-fc28", subjectId: "hindi", chapterId: "hin-ch6", topicId: "hin-t9", front: "आगमन विधि की दिशा?", back: "उदाहरण से नियम की ओर (मूर्त से अमूर्त)।" },
        { id: "hin-fc29", subjectId: "hindi", chapterId: "hin-ch6", topicId: "hin-t10", front: "निदानात्मक व उपचारात्मक शिक्षण में क्रम?", back: "पहले निदानात्मक परीक्षण (कमी का कारण), फिर उपचारात्मक शिक्षण (सुधार)।" },
        { id: "hin-fc30", subjectId: "hindi", chapterId: "hin-ch6", topicId: "hin-t10", front: "पोर्टफोलियो क्या है?", back: "विद्यार्थी के क्रमिक कार्यों और प्रगति का व्यवस्थित संग्रह।" }
      ]
    }
  });
})(window);
