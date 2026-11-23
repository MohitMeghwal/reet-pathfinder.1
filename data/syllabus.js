(function (global) {
  "use strict";

  global.REET.registerPack({
    syllabus: [
      {
        id: "cdp",
        title: "बाल विकास एवं शिक्षाशास्त्र",
        shortTitle: "CDP",
        quotaTotal: 200,
        chapters: [
          {
            id: "cdp-ch1",
            title: "अध्याय 1: बाल विकास, वृद्धि एवं वंशानुक्रम",
            order: 1,
            quota: 35,
            topics: [
              { id: "cdp-t1", chapterId: "cdp-ch1", title: "वृद्धि एवं विकास की अवधारणा और सिद्धांत", order: 1, readMinutes: 10, syllabusVerified: false, subtopics: [{ id: "cdp-t1-s1", title: "वृद्धि बनाम विकास" }, { id: "cdp-t1-s2", title: "विकास के प्रमुख सिद्धांत" }, { id: "cdp-t1-s3", title: "विकास की अवस्थाएँ" }] },
              { id: "cdp-t2", chapterId: "cdp-ch1", title: "वंशानुक्रम एवं वातावरण का प्रभाव", order: 2, readMinutes: 8, syllabusVerified: false, subtopics: [{ id: "cdp-t2-s1", title: "आनुवंशिकता के नियम" }, { id: "cdp-t2-s2", title: "वातावरण की भूमिका व अंतःक्रिया" }] }
            ]
          },
          {
            id: "cdp-ch2",
            title: "अध्याय 2: वैयक्तिक भिन्नताएँ, व्यक्तित्व एवं समायोजन",
            order: 2,
            quota: 30,
            topics: [
              { id: "cdp-t3", chapterId: "cdp-ch2", title: "वैयक्तिक भिन्नताएँ (Individual Differences)", order: 3, readMinutes: 9, syllabusVerified: false, subtopics: [{ id: "cdp-t3-s1", title: "प्रकार एवं कारण" }, { id: "cdp-t3-s2", title: "शैक्षिक निहितार्थ" }] },
              { id: "cdp-t4", chapterId: "cdp-ch2", title: "व्यक्तित्व एवं समायोजन", order: 4, readMinutes: 9, syllabusVerified: false, subtopics: [{ id: "cdp-t4-s1", title: "व्यक्तित्व मापन की विधियाँ" }, { id: "cdp-t4-s2", title: "रक्षा युक्तियाँ एवं कुसमायोजन" }] }
            ]
          },
          {
            id: "cdp-ch3",
            title: "अध्याय 3: अधिगम एवं प्रमुख सिद्धांत",
            order: 3,
            quota: 40,
            topics: [
              { id: "cdp-t5", chapterId: "cdp-ch3", title: "अधिगम का अर्थ एवं व्यवहारवादी सिद्धांत", order: 5, readMinutes: 12, syllabusVerified: false, subtopics: [{ id: "cdp-t5-s1", title: "थॉर्नडाइक का प्रयास एवं त्रुटि सिद्धांत" }, { id: "cdp-t5-s2", title: "पावलव व स्किनर का अनुबंधन" }] },
              { id: "cdp-t6", chapterId: "cdp-ch3", title: "संज्ञानात्मक व नैतिक विकास: पियाजे, वाइगोत्स्की, कोहलबर्ग", order: 6, readMinutes: 14, syllabusVerified: false, subtopics: [{ id: "cdp-t6-s1", title: "पियाजे की 4 अवस्थाएँ" }, { id: "cdp-t6-s2", title: "वाइगोत्स्की का ZPD एवं पाड़" }, { id: "cdp-t6-s3", title: "कोहलबर्ग के नैतिक स्तर" }] }
            ]
          },
          {
            id: "cdp-ch4",
            title: "अध्याय 4: बुद्धि, सृजनात्मकता एवं अभिप्रेरणा",
            order: 4,
            quota: 30,
            topics: [
              { id: "cdp-t7", chapterId: "cdp-ch4", title: "बुद्धि के सिद्धांत एवं सृजनात्मकता", order: 7, readMinutes: 11, syllabusVerified: false, subtopics: [{ id: "cdp-t7-s1", title: "स्पियरमैन, गिलफोर्ड व गार्डनर" }, { id: "cdp-t7-s2", title: "बुद्धि लब्धि (IQ) एवं अपसारी चिंतन" }] },
              { id: "cdp-t8", chapterId: "cdp-ch4", title: "अभिप्रेरणा (Motivation) एवं अधिगम", order: 8, readMinutes: 8, syllabusVerified: false, subtopics: [{ id: "cdp-t8-s1", title: "आंतरिक व बाह्य अभिप्रेरणा" }, { id: "cdp-t8-s2", title: "मैस्लो का आवश्यकता पदानुक्रम" }] }
            ]
          },
          {
            id: "cdp-ch5",
            title: "अध्याय 5: समावेशी शिक्षा एवं विशेष आवश्यकता वाले बच्चे",
            order: 5,
            quota: 35,
            topics: [
              { id: "cdp-t9", chapterId: "cdp-ch5", title: "समावेशी शिक्षा एवं CWSN", order: 9, readMinutes: 10, syllabusVerified: false, subtopics: [{ id: "cdp-t9-s1", title: "प्रतिभाशाली, सृजनशील एवं वंचित बालक" }, { id: "cdp-t9-s2", title: "RPwD Act 2016 के प्रमुख प्रावधान" }] },
              { id: "cdp-t10", chapterId: "cdp-ch5", title: "अधिगम कठिनाइयाँ (Learning Disabilities)", order: 10, readMinutes: 9, syllabusVerified: false, subtopics: [{ id: "cdp-t10-s1", title: "डिस्लेक्सिया, डिस्ग्राफिया, डिस्कैल्कुलिया" }, { id: "cdp-t10-s2", title: "उपचारात्मक शिक्षण" }] }
            ]
          },
          {
            id: "cdp-ch6",
            title: "अध्याय 6: आकलन, शिक्षणशास्त्र एवं शिक्षा नीतियाँ",
            order: 6,
            quota: 30,
            topics: [
              { id: "cdp-t11", chapterId: "cdp-ch6", title: "आकलन, मूल्यांकन एवं CCE", order: 11, readMinutes: 10, syllabusVerified: false, subtopics: [{ id: "cdp-t11-s1", title: "रचनात्मक बनाम योगात्मक आकलन" }, { id: "cdp-t11-s2", title: "क्रियात्मक अनुसंधान (Action Research)" }] },
              { id: "cdp-t12", chapterId: "cdp-ch6", title: "बाल-केंद्रित शिक्षा, RTE 2009 एवं NEP 2020", order: 12, readMinutes: 11, syllabusVerified: false, subtopics: [{ id: "cdp-t12-s1", title: "RTE 2009 की मुख्य धाराएँ" }, { id: "cdp-t12-s2", title: "NCF व NEP 2020 (5+3+3+4)" }] }
            ]
          }
        ]
      },
      {
        id: "hindi",
        title: "हिंदी (भाषा–I)",
        shortTitle: "हिंदी",
        quotaTotal: 200,
        chapters: [
          {
            id: "hin-ch1",
            title: "अध्याय 1: भाषा का स्वरूप, विकास एवं अर्जन",
            order: 1,
            quota: 25,
            topics: [
              { id: "hin-t1", chapterId: "hin-ch1", title: "भाषा का स्वरूप, विकास एवं भाषा अर्जन-अधिगम", order: 1, readMinutes: 9, syllabusVerified: false, subtopics: [{ id: "hin-t1-s1", title: "भाषा की विशेषताएँ" }, { id: "hin-t1-s2", title: "अर्जन बनाम अधिगम" }] }
            ]
          },
          {
            id: "hin-ch2",
            title: "अध्याय 2: हिंदी व्याकरण (वर्ण व विकारी-अविकारी शब्द)",
            order: 2,
            quota: 40,
            topics: [
              { id: "hin-t2", chapterId: "hin-ch2", title: "संज्ञा, सर्वनाम, विशेषण एवं क्रिया", order: 2, readMinutes: 12, syllabusVerified: false, subtopics: [{ id: "hin-t2-s1", title: "संज्ञा व सर्वनाम के भेद" }, { id: "hin-t2-s2", title: "विशेषण व क्रिया (सकर्मक/अकर्मक)" }] },
              { id: "hin-t3", chapterId: "hin-ch2", title: "लिंग, वचन, कारक, काल एवं अव्यय", order: 3, readMinutes: 10, syllabusVerified: false, subtopics: [{ id: "hin-t3-s1", title: "कारक विभक्तियाँ" }, { id: "hin-t3-s2", title: "काल एवं अव्यय भेद" }] }
            ]
          },
          {
            id: "hin-ch3",
            title: "अध्याय 3: शब्द-संरचना (संधि, समास, उपसर्ग-प्रत्यय)",
            order: 3,
            quota: 35,
            topics: [
              { id: "hin-t4", chapterId: "hin-ch3", title: "संधि एवं समास", order: 4, readMinutes: 12, syllabusVerified: false, subtopics: [{ id: "hin-t4-s1", title: "स्वर, व्यंजन व विसर्ग संधि" }, { id: "hin-t4-s2", title: "समास के 6 भेद" }] },
              { id: "hin-t5", chapterId: "hin-ch3", title: "उपसर्ग, प्रत्यय एवं तत्सम-तद्भव", order: 5, readMinutes: 10, syllabusVerified: false, subtopics: [{ id: "hin-t5-s1", title: "प्रमुख उपसर्ग व प्रत्यय" }, { id: "hin-t5-s2", title: "तत्सम, तद्भव, देशज व विदेशी" }] }
            ]
          },
          {
            id: "hin-ch4",
            title: "अध्याय 4: शब्द-भंडार, मुहावरे एवं वाक्य रचना",
            order: 4,
            quota: 35,
            topics: [
              { id: "hin-t6", chapterId: "hin-ch4", title: "पर्यायवाची, विलोम एवं मुहावरे-लोकोक्तियाँ", order: 6, readMinutes: 10, syllabusVerified: false, subtopics: [{ id: "hin-t6-s1", title: "पर्यायवाची व विलोम शब्द" }, { id: "hin-t6-s2", title: "मुहावरे एवं लोकोक्तियों में अंतर" }] },
              { id: "hin-t7", chapterId: "hin-ch4", title: "वाक्य रचना, शब्द-पद एवं विराम चिह्न", order: 7, readMinutes: 9, syllabusVerified: false, subtopics: [{ id: "hin-t7-s1", title: "सरल, संयुक्त व मिश्र वाक्य" }, { id: "hin-t7-s2", title: "उद्देश्य, विधेय एवं पद-परिचय" }] }
            ]
          },
          {
            id: "hin-ch5",
            title: "अध्याय 5: अपठित गद्यांश एवं सामान्य त्रुटियाँ",
            order: 5,
            quota: 25,
            topics: [
              { id: "hin-t8", chapterId: "hin-ch5", title: "अपठित गद्यांश बोध एवं वर्तनी-वाक्य शुद्धि", order: 8, readMinutes: 10, syllabusVerified: false, subtopics: [{ id: "hin-t8-s1", title: "गद्यांश हल करने की रणनीति" }, { id: "hin-t8-s2", title: "सामान्य वर्तनी व व्याकरणिक त्रुटियाँ" }] }
            ]
          },
          {
            id: "hin-ch6",
            title: "अध्याय 6: हिंदी भाषा शिक्षणशास्त्र एवं मूल्यांकन",
            order: 6,
            quota: 40,
            topics: [
              { id: "hin-t9", chapterId: "hin-ch6", title: "भाषा शिक्षण सिद्धांत, कौशल एवं शिक्षण विधियाँ", order: 9, readMinutes: 12, syllabusVerified: false, subtopics: [{ id: "hin-t9-s1", title: "सुनना, बोलना, पढ़ना, लिखना (LSRW)" }, { id: "hin-t9-s2", title: "आगमन, निगमन, प्रत्यक्ष व समवाय विधि" }] },
              { id: "hin-t10", chapterId: "hin-ch6", title: "भाषा मूल्यांकन, पाठ्यपुस्तक एवं TLM", order: 10, readMinutes: 10, syllabusVerified: false, subtopics: [{ id: "hin-t10-s1", title: "निदानात्मक व उपचारात्मक शिक्षण" }, { id: "hin-t10-s2", title: "श्रव्य-दृश्य शिक्षण सहायक सामग्री" }] }
            ]
          }
        ]
      },
      {
        id: "english",
        title: "English (Language–II)",
        shortTitle: "English",
        quotaTotal: 200,
        chapters: [
          {
            id: "eng-ch1",
            title: "Chapter 1: Parts of Speech & Articles",
            order: 1,
            quota: 35,
            topics: [
              { id: "eng-t1", chapterId: "eng-ch1", title: "Noun, Pronoun, Verb, Adjective & Adverb", order: 1, readMinutes: 12, syllabusVerified: false, subtopics: [{ id: "eng-t1-s1", title: "Types of Nouns & Pronouns" }, { id: "eng-t1-s2", title: "Verbs, Adjectives & Adverbs" }] },
              { id: "eng-t2", chapterId: "eng-ch1", title: "Articles (A, An, The) & Determiners", order: 2, readMinutes: 8, syllabusVerified: false, subtopics: [{ id: "eng-t2-s1", title: "Indefinite vs Definite Articles" }, { id: "eng-t2-s2", title: "Zero Article Rules" }] }
            ]
          },
          {
            id: "eng-ch2",
            title: "Chapter 2: Tenses, Subject-Verb Agreement & Connectors",
            order: 2,
            quota: 35,
            topics: [
              { id: "eng-t3", chapterId: "eng-ch2", title: "Tenses & Subject-Verb Agreement", order: 3, readMinutes: 12, syllabusVerified: false, subtopics: [{ id: "eng-t3-s1", title: "12 Tense Forms" }, { id: "eng-t3-s2", title: "Concord Rules" }] },
              { id: "eng-t4", chapterId: "eng-ch2", title: "Prepositions & Conjunctions", order: 4, readMinutes: 9, syllabusVerified: false, subtopics: [{ id: "eng-t4-s1", title: "Prepositions of Time & Place" }, { id: "eng-t4-s2", title: "Coordinating & Subordinating Conjunctions" }] }
            ]
          },
          {
            id: "eng-ch3",
            title: "Chapter 3: Active/Passive Voice & Direct/Indirect Speech",
            order: 3,
            quota: 30,
            topics: [
              { id: "eng-t5", chapterId: "eng-ch3", title: "Voice Transformation & Narration", order: 5, readMinutes: 12, syllabusVerified: false, subtopics: [{ id: "eng-t5-s1", title: "Active to Passive Rules" }, { id: "eng-t5-s2", title: "Direct to Indirect Speech Rules" }] }
            ]
          },
          {
            id: "eng-ch4",
            title: "Chapter 4: Vocabulary, Synonyms, Antonyms & Idioms",
            order: 4,
            quota: 30,
            topics: [
              { id: "eng-t6", chapterId: "eng-ch4", title: "Synonyms, Antonyms & Functional Vocabulary", order: 6, readMinutes: 10, syllabusVerified: false, subtopics: [{ id: "eng-t6-s1", title: "Word Formation, Prefixes & Suffixes" }, { id: "eng-t6-s2", title: "Common Idioms & Phrasal Verbs" }] }
            ]
          },
          {
            id: "eng-ch5",
            title: "Chapter 5: Reading Comprehension & Unseen Passages",
            order: 5,
            quota: 30,
            topics: [
              { id: "eng-t7", chapterId: "eng-ch5", title: "Unseen Passage Strategies & Inference", order: 7, readMinutes: 10, syllabusVerified: false, subtopics: [{ id: "eng-t7-s1", title: "Skimming & Scanning" }, { id: "eng-t7-s2", title: "Main Idea, Tone & Vocabulary in Context" }] }
            ]
          },
          {
            id: "eng-ch6",
            title: "Chapter 6: English Language Pedagogy, Methods & Assessment",
            order: 6,
            quota: 40,
            topics: [
              { id: "eng-t8", chapterId: "eng-ch6", title: "Principles of ELT, Acquisition vs Learning & LSRW", order: 8, readMinutes: 12, syllabusVerified: false, subtopics: [{ id: "eng-t8-s1", title: "Language Acquisition vs Learning" }, { id: "eng-t8-s2", title: "LSRW Skills & Phonics" }] },
              { id: "eng-t9", chapterId: "eng-ch6", title: "Teaching Methods, Grammar Pedagogy, Assessment & TLM", order: 9, readMinutes: 12, syllabusVerified: false, subtopics: [{ id: "eng-t9-s1", title: "GTM, Direct Method, CLT" }, { id: "eng-t9-s2", title: "CCE, Remedial Teaching & TLM" }] }
            ]
          }
        ]
      },
      {
        id: "maths",
        title: "गणित",
        shortTitle: "गणित",
        quotaTotal: 200,
        chapters: [
          {
            id: "mth-ch1",
            title: "अध्याय 1: संख्या पद्धति, पूर्ण संख्याएँ, भिन्न एवं दशमलव",
            order: 1,
            quota: 40,
            topics: [
              { id: "mth-t1", chapterId: "mth-ch1", title: "संख्या पद्धति, पूर्ण संख्याएँ एवं पूर्णांक", order: 1, readMinutes: 11, syllabusVerified: false, subtopics: [{ id: "mth-t1-s1", title: "स्थानीय मान व जातीय मान" }, { id: "mth-t1-s2", title: "प्राकृत, पूर्ण व पूर्णांक संख्याएँ" }] },
              { id: "mth-t2", chapterId: "mth-ch1", title: "भिन्न एवं दशमलव संख्याएँ", order: 2, readMinutes: 10, syllabusVerified: false, subtopics: [{ id: "mth-t2-s1", title: "उचित, अनुचित व मिश्र भिन्न" }, { id: "mth-t2-s2", title: "दशमलव संक्रियाएँ एवं तुलना" }] }
            ]
          },
          {
            id: "mth-ch2",
            title: "अध्याय 2: चार संक्रियाएँ, गुणनखंड, LCM एवं HCF",
            order: 2,
            quota: 35,
            topics: [
              { id: "mth-t3", chapterId: "mth-ch2", title: "चार मूलभूत संक्रियाएँ एवं गुणनखंड-गुणज", order: 3, readMinutes: 10, syllabusVerified: false, subtopics: [{ id: "mth-t3-s1", title: "BODMAS नियम व विभाज्यता" }, { id: "mth-t3-s2", title: "अभाज्य गुणनखंड" }] },
              { id: "mth-t4", chapterId: "mth-ch2", title: "लघुत्तम समापवर्त्य (LCM) एवं महत्तम समापवर्तक (HCF)", order: 4, readMinutes: 10, syllabusVerified: false, subtopics: [{ id: "mth-t4-s1", title: "LCM व HCF के व्यावहारिक प्रश्न" }, { id: "mth-t4-s2", title: "दो संख्याओं का गुणनफल संबंध" }] }
            ]
          },
          {
            id: "mth-ch3",
            title: "अध्याय 3: ज्यामिति, आकृतियाँ, परिमाप एवं क्षेत्रफल",
            order: 3,
            quota: 35,
            topics: [
              { id: "mth-t5", chapterId: "mth-ch3", title: "ज्यामितीय आकृतियाँ एवं स्थानिक समझ", order: 5, readMinutes: 11, syllabusVerified: false, subtopics: [{ id: "mth-t5-s1", title: "रेखा, कोण, त्रिभुज व चतुर्भुज" }, { id: "mth-t5-s2", title: "2D व 3D आकृतियाँ (फलक, किनारे, शीर्ष)" }] },
              { id: "mth-t6", chapterId: "mth-ch3", title: "परिमाप एवं क्षेत्रफल (आयत, वर्ग, त्रिभुज)", order: 6, readMinutes: 10, syllabusVerified: false, subtopics: [{ id: "mth-t6-s1", title: "वर्ग व आयत का परिमाप" }, { id: "mth-t6-s2", title: "क्षेत्रफल व इकाइयों का रूपांतरण" }] }
            ]
          },
          {
            id: "mth-ch4",
            title: "अध्याय 4: मापन (लंबाई, भार, धारिता), समय एवं मुद्रा",
            order: 4,
            quota: 30,
            topics: [
              { id: "mth-t7", chapterId: "mth-ch4", title: "मापन इकाइयाँ, समय एवं मुद्रा गणना", order: 7, readMinutes: 10, syllabusVerified: false, subtopics: [{ id: "mth-t7-s1", title: "मीट्रिक प्रणाली रूपांतरण" }, { id: "mth-t7-s2", title: "घड़ी, कैलेंडर एवं मुद्रा प्रश्न" }] }
            ]
          },
          {
            id: "mth-ch5",
            title: "अध्याय 5: आँकड़ों का प्रबंधन, पैटर्न एवं गणितीय तर्क",
            order: 5,
            quota: 25,
            topics: [
              { id: "mth-t8", chapterId: "mth-ch5", title: "आँकड़ों का प्रबंधन (Data Handling) एवं पैटर्न", order: 8, readMinutes: 9, syllabusVerified: false, subtopics: [{ id: "mth-t8-s1", title: "दंड आरेख, चित्रालेख व टैली चिह्न" }, { id: "mth-t8-s2", title: "संख्या व आकृति पैटर्न" }] }
            ]
          },
          {
            id: "mth-ch6",
            title: "अध्याय 6: गणित शिक्षणशास्त्र, विधियाँ एवं मूल्यांकन",
            order: 6,
            quota: 35,
            topics: [
              { id: "mth-t9", chapterId: "mth-ch6", title: "गणित की प्रकृति, शिक्षण विधियाँ एवं वैन हीले मॉडल", order: 9, readMinutes: 12, syllabusVerified: false, subtopics: [{ id: "mth-t9-s1", title: "आगमन-निगमन, विश्लेषण-संश्लेषण" }, { id: "mth-t9-s2", title: "वैन हीले का ज्यामितीय चिंतन स्तर" }] },
              { id: "mth-t10", chapterId: "mth-ch6", title: "गणित में मूल्यांकन, TLM एवं अधिगम कठिनाइयाँ", order: 10, readMinutes: 9, syllabusVerified: false, subtopics: [{ id: "mth-t10-s1", title: "डिस्कैल्कुलिया एवं त्रुटि विश्लेषण" }, { id: "mth-t10-s2", title: "जियोबोर्ड, अबेकस व टैनग्राम" }] }
            ]
          }
        ]
      },
      {
        id: "evs",
        title: "पर्यावरण अध्ययन",
        shortTitle: "EVS",
        quotaTotal: 200,
        chapters: [
          {
            id: "evs-ch1",
            title: "अध्याय 1: परिवार, सामाजिक परिवेश, स्वास्थ्य एवं स्वच्छता",
            order: 1,
            quota: 35,
            topics: [
              { id: "evs-t1", chapterId: "evs-ch1", title: "परिवार, संबंध एवं सामाजिक परिवेश", order: 1, readMinutes: 9, syllabusVerified: false, subtopics: [{ id: "evs-t1-s1", title: "एकल व संयुक्त परिवार" }, { id: "evs-t1-s2", title: "सामाजिक संस्थाएँ व मेले-त्योहार" }] },
              { id: "evs-t2", chapterId: "evs-ch1", title: "मानव स्वास्थ्य, स्वच्छता एवं प्रमुख रोग", order: 2, readMinutes: 10, syllabusVerified: false, subtopics: [{ id: "evs-t2-s1", title: "संक्रामक व असंक्रामक रोग" }, { id: "evs-t2-s2", title: "स्वच्छ भारत व प्राथमिक उपचार" }] }
            ]
          },
          {
            id: "evs-ch2",
            title: "अध्याय 2: भोजन, जल, आवास एवं यातायात",
            order: 2,
            quota: 35,
            topics: [
              { id: "evs-t3", chapterId: "evs-ch2", title: "भोजन, पोषण एवं जल संरक्षण", order: 3, readMinutes: 10, syllabusVerified: false, subtopics: [{ id: "evs-t3-s1", title: "संतुलित आहार, विटामिन व खनिज" }, { id: "evs-t3-s2", title: "जल स्रोत, जल चक्र व संरक्षण" }] },
              { id: "evs-t4", chapterId: "evs-ch2", title: "आवास एवं यातायात के साधन", order: 4, readMinutes: 9, syllabusVerified: false, subtopics: [{ id: "evs-t4-s1", title: "विभिन्न क्षेत्रों के आवास" }, { id: "evs-t4-s2", title: "सड़क सुरक्षा एवं यातायात नियम" }] }
            ]
          },
          {
            id: "evs-ch3",
            title: "अध्याय 3: पेड़-पौधे, जीव-जंतु एवं मानव शरीर",
            order: 3,
            quota: 35,
            topics: [
              { id: "evs-t5", chapterId: "evs-ch3", title: "पेड़-पौधे, जीव-जंतु एवं पारिस्थितिकी", order: 5, readMinutes: 11, syllabusVerified: false, subtopics: [{ id: "evs-t5-s1", title: "प्रकाश संश्लेषण व पौधों के भाग" }, { id: "evs-t5-s2", title: "खाद्य श्रृंखला व अनुकूलन" }] },
              { id: "evs-t6", chapterId: "evs-ch3", title: "मानव शरीर के प्रमुख तंत्र एवं ज्ञानेंद्रियाँ", order: 6, readMinutes: 9, syllabusVerified: false, subtopics: [{ id: "evs-t6-s1", title: "पाचन, श्वसन व परिसंचरण तंत्र" }, { id: "evs-t6-s2", title: "ज्ञानेंद्रियों की देखभाल" }] }
            ]
          },
          {
            id: "evs-ch4",
            title: "अध्याय 4: प्राकृतिक संसाधन, प्रदूषण, संरक्षण एवं जलवायु",
            order: 4,
            quota: 30,
            topics: [
              { id: "evs-t7", chapterId: "evs-ch4", title: "प्राकृतिक संसाधन, प्रदूषण एवं मौसम-जलवायु", order: 7, readMinutes: 11, syllabusVerified: false, subtopics: [{ id: "evs-t7-s1", title: "नवीकरणीय व अनवीकरणीय संसाधन" }, { id: "evs-t7-s2", title: "वायु, जल व मृदा प्रदूषण तथा संरक्षण" }] }
            ]
          },
          {
            id: "evs-ch5",
            title: "अध्याय 5: पृथ्वी, परिवेश एवं राजस्थान संदर्भ",
            order: 5,
            quota: 30,
            topics: [
              { id: "evs-t8", chapterId: "evs-ch5", title: "पृथ्वी, सौरमंडल एवं राजस्थान का भौगोलिक-पर्यावरणीय परिवेश", order: 8, readMinutes: 11, syllabusVerified: false, subtopics: [{ id: "evs-t8-s1", title: "पृथ्वी की गतियाँ व दिशा ज्ञान" }, { id: "evs-t8-s2", title: "राजस्थान के प्रमुख वन्यजीव अभयारण्य व जल संरक्षण (बावड़ी/टांका)" }] }
            ]
          },
          {
            id: "evs-ch6",
            title: "अध्याय 6: पर्यावरण अध्ययन शिक्षणशास्त्र",
            order: 6,
            quota: 35,
            topics: [
              { id: "evs-t9", chapterId: "evs-ch6", title: "EVS शिक्षण के सिद्धांत, अनुभवात्मक अधिगम एवं मूल्यांकन", order: 9, readMinutes: 11, syllabusVerified: false, subtopics: [{ id: "evs-t9-s1", title: "अवलोकन, अन्वेषण व क्षेत्र भ्रमण" }, { id: "evs-t9-s2", title: "एकीकृत दृष्टिकोण व पोर्टफोलियो मूल्यांकन" }] }
            ]
          }
        ]
      }
    ]
  });
})(window);
