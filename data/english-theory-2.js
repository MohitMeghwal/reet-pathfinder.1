(function (global) {
  "use strict";

  global.REET.registerPack({
    theory: {
      "eng-t5": {
        topicId: "eng-t5",
        blocks: [
          {
            type: "intro",
            title: "Introduction: Voice & Narration",
            content: "Active-Passive Voice focuses on whether the subject performs the action or receives it. Direct-Indirect Speech (Narration) reports what someone said either verbatim or in reported form."
          },
          {
            type: "comparisonTable",
            title: "Active to Passive Voice Conversion",
            table: {
              headers: ["Tense / Type", "Active Structure", "Passive Structure (be + V3)"],
              rows: [
                ["Simple Present", "S + V1(s/es) + O", "O + is/am/are + V3 + by S"],
                ["Simple Past", "S + V2 + O", "O + was/were + V3 + by S"],
                ["Present Continuous", "S + is/am/are + V-ing + O", "O + is/am/are + being + V3 + by S"],
                ["Present/Past Perfect", "S + has/have/had + V3 + O", "O + has/have/had + been + V3 + by S"],
                ["Modals", "S + can/must/should + V1 + O", "O + modal + be + V3 + by S"],
                ["Imperative", "Open the door.", "Let the door be opened."]
              ]
            }
          },
          {
            type: "theory",
            title: "Direct to Indirect Speech (Narration) Rules",
            points: [
              "Reporting verb in Past ('said'): Simple Present → Simple Past; Present Continuous → Past Continuous; Present Perfect → Past Perfect; Simple Past → Past Perfect; will → would; can → could; may → might.",
              "Universal truths or habitual facts do NOT change tense ('The teacher said that the earth revolves around the sun').",
              "Time & Place shifts: now → then, today → that day, yesterday → the previous day, tomorrow → the next day, here → there, this → that.",
              "Questions: 'said to' becomes 'asked'; use 'if/whether' for Yes/No questions and the Wh-word itself for Wh-questions; change interrogative order to assertive order (Subject before Verb)."
            ]
          },
          {
            type: "examFacts",
            title: "Exam-Oriented Facts",
            points: [
              "Intransitive verbs (sleep, go, laugh, die) cannot be converted into passive voice because they have no object.",
              "In indirect speech, never use 'that' before 'if/whether' or before a Wh-word."
            ]
          }
        ]
      },
      "eng-t6": {
        topicId: "eng-t6",
        blocks: [
          {
            type: "intro",
            title: "Introduction: Vocabulary, Word Formation & Idioms",
            content: "Strong functional vocabulary helps primary learners comprehend stories, instructions, and unseen passages accurately. In REET Level 1, questions test synonyms, antonyms, one-word substitutes, prefixes/suffixes, and common idioms."
          },
          {
            type: "concept",
            title: "Word Formation: Prefixes & Suffixes",
            points: [
              "Negative Prefixes: un- (unhappy), dis- (dishonest), im- (impossible), in- (incorrect), ir- (irregular), il- (illegal).",
              "Noun Suffixes: -ness (kindness), -ment (achievement), -tion (education), -ity (ability).",
              "Adjective Suffixes: -ful (helpful), -less (careless), -ous (courageous), -able (readable)."
            ]
          },
          {
            type: "comparisonTable",
            title: "High-Utility Synonyms, Antonyms & Idioms",
            table: {
              headers: ["Word / Idiom", "Synonym / Meaning", "Antonym"],
              rows: [
                ["Abundant", "Plentiful, ample", "Scarce, rare"],
                ["Benevolent", "Kind, generous", "Cruel, malevolent"],
                ["Diligent", "Hardworking, industrious", "Lazy, negligent"],
                ["Transparent", "Clear, see-through", "Opaque"],
                ["A piece of cake", "Very easy task", "—"],
                ["Once in a blue moon", "Very rarely", "—"],
                ["Break the ice", "Initiate friendly conversation", "—"],
                ["Blessing in disguise", "Something good hidden in a bad event", "—"]
              ]
            }
          }
        ]
      }
    }
  });
})(window);
