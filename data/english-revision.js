(function (global) {
  "use strict";

  global.REET.registerPack({
    revision: {
      notes: [
        { id: "eng-n1", subjectId: "english", chapterId: "eng-ch1", title: "Nouns & Pronouns", points: ["Uncountable nouns (advice, furniture, information, news) take singular verbs.", "Always plural nouns: scissors, spectacles, trousers, cattle, police.", "'Each other' = two; 'One another' = more than two."] },
        { id: "eng-n2", subjectId: "english", chapterId: "eng-ch1", title: "Verbs, Adjectives & Adverbs", points: ["Transitive verbs take an object; Intransitive verbs do not.", "Gerund = V-ing functioning as a noun ('Swimming is good').", "Adjective order: Opinion -> Size -> Age -> Shape -> Colour -> Origin -> Material."] },
        { id: "eng-n3", subjectId: "english", chapterId: "eng-ch1", title: "Articles (A, An, The)", points: ["Use 'a' before consonant SOUNDS (a university, a one-rupee coin).", "Use 'an' before vowel SOUNDS (an honest man, an M.A.).", "Use 'the' before rivers, mountain ranges, superlatives, unique objects; zero article before languages, meals, general abstract nouns."] },
        { id: "eng-n4", subjectId: "english", chapterId: "eng-ch2", title: "Tenses Quick Guide", points: ["Universal truths/habits -> Simple Present.", "Earlier of two past actions -> Past Perfect (had + V3).", "'Since' = point of time; 'For' = duration/period of time."] },
        { id: "eng-n5", subjectId: "english", chapterId: "eng-ch2", title: "Subject-Verb Agreement", points: ["'Either...or' / 'Neither...nor' -> verb agrees with nearer subject.", "'As well as' / 'Along with' -> verb agrees with first subject.", "'Each', 'Every', 'Everyone', 'Mathematics', 'News' -> singular verb."] },
        { id: "eng-n6", subjectId: "english", chapterId: "eng-ch2", title: "Prepositions & Conjunctions", points: ["Time: at (clock time), on (day/date), in (month/year).", "'Between' (2) vs 'Among' (>2); 'With' (instrument) vs 'By' (agent).", "Pairs: No sooner...than; Hardly...when; Although...yet."] },
        { id: "eng-n7", subjectId: "english", chapterId: "eng-ch3", title: "Active & Passive Voice", points: ["Core passive structure: be + V3.", "Present/Past Continuous passive: is/was + being + V3.", "Intransitive verbs cannot be passivized; 'know' takes 'to' ('known to me')."] },
        { id: "eng-n8", subjectId: "english", chapterId: "eng-ch3", title: "Direct & Indirect Speech", points: ["Past reporting verb shifts tenses back (is->was, V2->had+V3, will->would).", "Universal truths keep Present Tense.", "Questions drop 'that' and use assertive order (Subject + Verb)."] },
        { id: "eng-n9", subjectId: "english", chapterId: "eng-ch4", title: "Word Formation & Vocabulary", points: ["Prefixes: il- (illegal), ir- (irregular), im- (impossible).", "Common idioms: piece of cake (easy), break the ice (start friendly talk), once in a blue moon (rarely)."] },
        { id: "eng-n10", subjectId: "english", chapterId: "eng-ch5", title: "Reading Comprehension", points: ["Skimming = fast reading for gist/title; Scanning = fast search for specific facts.", "Intensive reading = detailed study; Extensive reading = reading for pleasure."] },
        { id: "eng-n11", subjectId: "english", chapterId: "eng-ch6", title: "Acquisition vs Learning & LSRW", points: ["Acquisition is natural/subconscious; Learning is formal/rule-based.", "Receptive skills: Listening & Reading; Productive skills: Speaking & Writing."] },
        { id: "eng-n12", subjectId: "english", chapterId: "eng-ch6", title: "Phonetics & Phonics", points: ["English has 26 letters and 44 phonemes (20 vowels: 12 monophthongs + 8 diphthongs; 24 consonants).", "Phonics links graphemes (letters) with phonemes (sounds)."] },
        { id: "eng-n13", subjectId: "english", chapterId: "eng-ch6", title: "ELT Teaching Methods", points: ["GTM: mother-tongue translation, weak speaking.", "Direct Method: no mother tongue, direct association.", "CLT: communicative competence, pair/group work, fluency."] },
        { id: "eng-n14", subjectId: "english", chapterId: "eng-ch6", title: "Dr. West, Bilingual & TPR", points: ["Dr. West's Method: focus on silent reading.", "Bilingual Method (C.J. Dodson): selective mother-tongue use for meaning.", "TPR (James Asher): physical actions following verbal commands."] },
        { id: "eng-n15", subjectId: "english", chapterId: "eng-ch6", title: "Grammar, CCE & TLM", points: ["Primary grammar should be taught inductively (examples -> rule).", "Diagnostic test finds gaps -> Remedial teaching fixes them.", "Realia = real objects used as concrete TLM."] }
      ],
      facts: [
        { id: "eng-f1", subjectId: "english", text: "News, physics, mathematics, and innings are singular nouns.", type: "grammar" },
        { id: "eng-f2", subjectId: "english", text: "Scissors, trousers, spectacles, and cattle take plural verbs.", type: "grammar" },
        { id: "eng-f3", subjectId: "english", text: "'A' vs 'An' depends on initial sound, not spelling ('a university', 'an honest man').", type: "grammar" },
        { id: "eng-f4", subjectId: "english", text: "'Since' marks a point of time; 'For' marks a period of time.", type: "grammar" },
        { id: "eng-f5", subjectId: "english", text: "Latin comparatives (senior, junior, superior) take 'to' instead of 'than'.", type: "grammar" },
        { id: "eng-f6", subjectId: "english", text: "'No sooner' always pairs with 'than'; 'Hardly/Scarcely' pairs with 'when'.", type: "grammar" },
        { id: "eng-f7", subjectId: "english", text: "Intransitive verbs have no object and cannot form Passive Voice.", type: "grammar" },
        { id: "eng-f8", subjectId: "english", text: "Universal truths do not change tense in Indirect Speech.", type: "grammar" },
        { id: "eng-f9", subjectId: "english", text: "Skimming finds the main idea; Scanning locates specific details.", type: "reading" },
        { id: "eng-f10", subjectId: "english", text: "Listening and Reading are Receptive skills.", type: "pedagogy" },
        { id: "eng-f11", subjectId: "english", text: "Speaking and Writing are Productive skills.", type: "pedagogy" },
        { id: "eng-f12", subjectId: "english", text: "English has 44 phonemes: 20 vowel sounds and 24 consonant sounds.", type: "phonetics" },
        { id: "eng-f13", subjectId: "english", text: "A diphthong is a gliding vowel sound within a single syllable (8 in English).", type: "phonetics" },
        { id: "eng-f14", subjectId: "english", text: "Direct Method avoids mother-tongue translation.", type: "pedagogy" },
        { id: "eng-f15", subjectId: "english", text: "CLT stands for Communicative Language Teaching.", type: "pedagogy" },
        { id: "eng-f16", subjectId: "english", text: "C.J. Dodson propounded the Bilingual Method.", type: "pedagogy" },
        { id: "eng-f17", subjectId: "english", text: "Dr. Michael West's New Method emphasizes reading.", type: "pedagogy" },
        { id: "eng-f18", subjectId: "english", text: "Realia means real-life objects used as teaching-learning material.", type: "pedagogy" },
        { id: "eng-f19", subjectId: "english", text: "Inductive grammar moves from examples to general rules.", type: "pedagogy" },
        { id: "eng-f20", subjectId: "english", text: "Washback is the effect of testing on classroom teaching and learning.", type: "pedagogy" }
      ],
      flashcards: [
        { id: "eng-fc1", subjectId: "english", chapterId: "eng-ch1", topicId: "eng-t1", front: "Are 'advice' and 'furniture' countable or uncountable?", back: "Uncountable (no plural -s, singular verb)." },
        { id: "eng-fc2", subjectId: "english", chapterId: "eng-ch1", topicId: "eng-t1", front: "Difference between 'each other' and 'one another'?", back: "Each other = two; One another = more than two." },
        { id: "eng-fc3", subjectId: "english", chapterId: "eng-ch1", topicId: "eng-t1", front: "What is a Gerund?", back: "A verb+ing form functioning as a noun (e.g., 'Reading is fun')." },
        { id: "eng-fc4", subjectId: "english", chapterId: "eng-ch1", topicId: "eng-t2", front: "Why do we say 'a university' and 'an hour'?", back: "'University' starts with consonant sound /j/; 'hour' starts with silent h (vowel sound)." },
        { id: "eng-fc5", subjectId: "english", chapterId: "eng-ch1", topicId: "eng-t2", front: "When is Zero Article used?", back: "Before languages, meals, subjects, and general uncountable/abstract nouns." },
        { id: "eng-fc6", subjectId: "english", chapterId: "eng-ch2", topicId: "eng-t3", front: "Past Perfect rule for two past events?", back: "Earlier event = had + V3; later event = Simple Past (V2)." },
        { id: "eng-fc7", subjectId: "english", chapterId: "eng-ch2", topicId: "eng-t3", front: "Verb rule with 'Neither...nor'?", back: "Agrees with the nearer subject." },
        { id: "eng-fc8", subjectId: "english", chapterId: "eng-ch2", topicId: "eng-t3", front: "Verb rule with 'as well as' / 'along with'?", back: "Agrees with the first subject." },
        { id: "eng-fc9", subjectId: "english", chapterId: "eng-ch2", topicId: "eng-t4", front: "Difference between 'at', 'on', 'in' for time?", back: "at = clock time; on = day/date; in = month/year/season." },
        { id: "eng-fc10", subjectId: "english", chapterId: "eng-ch2", topicId: "eng-t4", front: "Correlative pair for 'No sooner' and 'Hardly'?", back: "No sooner...than; Hardly...when." },
        { id: "eng-fc11", subjectId: "english", chapterId: "eng-ch3", topicId: "eng-t5", front: "Passive of 'She writes a letter'?", back: "A letter is written by her." },
        { id: "eng-fc12", subjectId: "english", chapterId: "eng-ch3", topicId: "eng-t5", front: "Passive of 'I know him'?", back: "He is known to me (uses 'to', not 'by')." },
        { id: "eng-fc13", subjectId: "english", chapterId: "eng-ch3", topicId: "eng-t5", front: "Indirect speech rule for universal truths?", back: "Tense remains Simple Present." },
        { id: "eng-fc14", subjectId: "english", chapterId: "eng-ch4", topicId: "eng-t6", front: "Synonym of 'Abundant' & Antonym of 'Transparent'?", back: "Plentiful; Opaque." },
        { id: "eng-fc15", subjectId: "english", chapterId: "eng-ch4", topicId: "eng-t6", front: "Meaning of 'Once in a blue moon'?", back: "Very rarely." },
        { id: "eng-fc16", subjectId: "english", chapterId: "eng-ch4", topicId: "eng-t6", front: "Meaning of 'Break the ice'?", back: "Initiate friendly conversation." },
        { id: "eng-fc17", subjectId: "english", chapterId: "eng-ch4", topicId: "eng-t6", front: "Difference between 'Principal' and 'Principle'?", back: "Principal = school head / main; Principle = rule / belief." },
        { id: "eng-fc18", subjectId: "english", chapterId: "eng-ch5", topicId: "eng-t7", front: "Skimming vs Scanning?", back: "Skimming = gist/main idea; Scanning = specific fact/detail." },
        { id: "eng-fc19", subjectId: "english", chapterId: "eng-ch5", topicId: "eng-t7", front: "Intensive vs Extensive reading?", back: "Intensive = detailed short text study; Extensive = long reading for pleasure." },
        { id: "eng-fc20", subjectId: "english", chapterId: "eng-ch5", topicId: "eng-t7", front: "What is a Simile?", back: "Comparison using 'like' or 'as'." },
        { id: "eng-fc21", subjectId: "english", chapterId: "eng-ch6", topicId: "eng-t8", front: "Natural order of LSRW skills?", back: "Listening -> Speaking -> Reading -> Writing." },
        { id: "eng-fc22", subjectId: "english", chapterId: "eng-ch6", topicId: "eng-t8", front: "Which skills are Receptive vs Productive?", back: "Receptive: Listening, Reading; Productive: Speaking, Writing." },
        { id: "eng-fc23", subjectId: "english", chapterId: "eng-ch6", topicId: "eng-t8", front: "Total phonemes in English?", back: "44 (20 vowels + 24 consonants)." },
        { id: "eng-fc24", subjectId: "english", chapterId: "eng-ch6", topicId: "eng-t8", front: "What is Phonics?", back: "Teaching letter-sound (grapheme-phoneme) relationships." },
        { id: "eng-fc25", subjectId: "english", chapterId: "eng-ch6", topicId: "eng-t9", front: "Main weakness of Grammar-Translation Method?", back: "Neglects listening and speaking fluency." },
        { id: "eng-fc26", subjectId: "english", chapterId: "eng-ch6", topicId: "eng-t9", front: "Key feature of Direct Method?", back: "Teaches English directly in English without mother tongue." },
        { id: "eng-fc27", subjectId: "english", chapterId: "eng-ch6", topicId: "eng-t9", front: "Who created the Bilingual Method?", back: "C.J. Dodson." },
        { id: "eng-fc28", subjectId: "english", chapterId: "eng-ch6", topicId: "eng-t9", front: "What is TPR?", back: "Total Physical Response (James Asher) — learning through physical commands." },
        { id: "eng-fc29", subjectId: "english", chapterId: "eng-ch6", topicId: "eng-t9", front: "What is Realia?", back: "Real everyday objects used as TLM in class." },
        { id: "eng-fc30", subjectId: "english", chapterId: "eng-ch6", topicId: "eng-t9", front: "What is a Rubric?", back: "A scoring guide with clear performance-level descriptors." }
      ]
    }
  });
})(window);
