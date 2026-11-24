(function (global) {
  "use strict";

  global.REET.registerPack({
    theory: {
      "eng-t1": {
        topicId: "eng-t1",
        blocks: [
          {
            type: "intro",
            title: "Introduction: Parts of Speech",
            content: "Every word in an English sentence performs a specific grammatical function. Traditional grammar classifies words into eight Parts of Speech: Noun, Pronoun, Verb, Adjective, Adverb, Preposition, Conjunction, and Interjection."
          },
          {
            type: "concept",
            title: "1. Noun & Pronoun",
            points: [
              "Noun: A naming word for a person, place, thing, quality, or idea. Types: Proper (Jaipur, Gita), Common (city, girl), Collective (team, flock, jury), Material (gold, water), Abstract (honesty, childhood).",
              "Countable vs Uncountable Nouns: Countable nouns have plural forms (books, apples) and take 'many/few'; Uncountable nouns have no plural form (milk, information, furniture, advice) and take 'much/little'.",
              "Pronoun: A word used in place of a noun to avoid repetition. Types: Personal (I, we, you, he, she, it, they), Possessive (mine, ours), Reflexive/Emphatic (myself, themselves), Demonstrative (this, those), Relative (who, which, that), Indefinite (someone, nobody)."
            ]
          },
          {
            type: "concept",
            title: "2. Verb, Adjective & Adverb",
            points: [
              "Verb: Expresses action or state of being. Transitive verbs require an object ('She wrote a letter'); Intransitive verbs do not ('Birds fly'). Finite verbs change with tense and subject; Non-finite verbs (infinitive 'to go', gerund 'swimming', participle 'broken') do not.",
              "Adjective: Modifies a noun or pronoun. Degrees of comparison: Positive (tall), Comparative (taller), Superlative (tallest). Order of adjectives: Opinion → Size → Age → Shape → Colour → Origin → Material.",
              "Adverb: Modifies a verb, adjective, or another adverb. Types: Manner (quickly), Place (here), Time (yesterday), Frequency (always, seldom), Degree (very, too)."
            ]
          },
          {
            type: "examFacts",
            title: "Exam-Oriented Rules",
            points: [
              "Some nouns look plural but are singular in use: news, physics, mathematics, measles, innings.",
              "Some nouns are always plural: scissors, trousers, spectacles, cattle, police.",
              "Between 'each other' (two persons/things) and 'one another' (more than two)."
            ]
          }
        ]
      },
      "eng-t2": {
        topicId: "eng-t2",
        blocks: [
          {
            type: "intro",
            title: "Introduction: Articles & Determiners",
            content: "Articles (a, an, the) are special determiners placed before nouns to indicate whether the noun refers to something specific or general."
          },
          {
            type: "comparisonTable",
            title: "Indefinite (A / An) vs Definite (The)",
            table: {
              headers: ["Article", "Core Rule", "Examples"],
              rows: [
                ["A", "Before singular countable nouns starting with a consonant SOUND", "a book, a university ('yu' sound), a one-rupee note ('wa' sound)"],
                ["An", "Before singular countable nouns starting with a vowel SOUND (a, e, i, o, u)", "an apple, an honest man (silent 'h'), an M.L.A. ('em' sound)"],
                ["The", "Specific/unique nouns, superlatives, rivers, mountain ranges, holy books, newspapers", "the sun, the Ganga, the Himalayas, the best student"]
              ]
            }
          },
          {
            type: "principles",
            title: "Zero Article (Omission of Articles)",
            points: [
              "No article before proper nouns (names of people, cities, countries like India, Jaipur), except plural/united names (the USA, the Netherlands).",
              "No article before languages (English, Hindi), subjects (Mathematics), meals in general (dinner), or games (cricket).",
              "No article before uncountable/abstract nouns used in a general sense ('Honesty is the best policy', 'Gold is precious')."
            ]
          },
          {
            type: "examFacts",
            title: "Exam-Oriented Facts",
            points: [
              "Always check the initial SOUND, not the spelling letter: 'an hour', 'a European', 'an S.P.'",
              "Use 'the' before musical instruments when played ('She plays the sitar') and before comparative pairs ('The higher you go, the cooler it is')."
            ]
          }
        ]
      },
      "eng-t3": {
        topicId: "eng-t3",
        blocks: [
          {
            type: "intro",
            title: "Introduction: Tenses & Subject-Verb Agreement",
            content: "Tense indicates the time of an action (Present, Past, Future) and its state of completion (Simple, Continuous, Perfect, Perfect Continuous). Subject-Verb Agreement (Concord) ensures the verb matches the subject in number and person."
          },
          {
            type: "comparisonTable",
            title: "Quick Reference: 12 Tense Structures",
            table: {
              headers: ["Aspect", "Present", "Past", "Future"],
              rows: [
                ["Simple", "V1 / V1+s/es (habits, universal truths)", "V2 (completed past action)", "will/shall + V1"],
                ["Continuous", "is/am/are + V-ing", "was/were + V-ing", "will be + V-ing"],
                ["Perfect", "has/have + V3", "had + V3 (earlier of two past actions)", "will have + V3"],
                ["Perfect Cont.", "has/have been + V-ing (since/for)", "had been + V-ing", "will have been + V-ing"]
              ]
            }
          },
          {
            type: "principles",
            title: "Key Subject-Verb Agreement Rules",
            points: [
              "Singular subject takes singular verb; plural subject takes plural verb.",
              "Two nouns joined by 'and' expressing ONE single idea take a singular verb ('Bread and butter is his daily breakfast'; 'Slow and steady wins the race').",
              "With 'either...or', 'neither...nor', 'not only...but also', the verb agrees with the NEARER subject ('Neither the teacher nor the students were present').",
              "With 'as well as', 'along with', 'together with', the verb agrees with the FIRST subject ('The captain, along with the players, is ready').",
              "Indefinite pronouns like each, every, everyone, somebody, neither take a SINGULAR verb ('Each of the boys has a pen')."
            ]
          },
          {
            type: "examFacts",
            title: "Exam-Oriented Facts",
            points: [
              "'Since' denotes a point of time (since 2020, since morning); 'For' denotes a period/duration (for two hours, for five days).",
              "In conditional Type 1: 'If + Simple Present, ... will + V1' ('If it rains, we will stay inside')."
            ]
          }
        ]
      },
      "eng-t4": {
        topicId: "eng-t4",
        blocks: [
          {
            type: "intro",
            title: "Introduction: Prepositions & Conjunctions",
            content: "Prepositions show the relationship of a noun or pronoun with other words in terms of time, place, or direction. Conjunctions join words, phrases, or clauses."
          },
          {
            type: "concept",
            title: "Essential Prepositions",
            points: [
              "Time: 'at' (exact clock time: at 5 p.m., at noon), 'on' (days and dates: on Monday, on 15th August), 'in' (months, years, seasons: in July, in 2027).",
              "Place & Movement: 'in' (enclosed space/large city), 'at' (specific point/small place), 'into' (motion inward), 'onto' (motion onto a surface), 'between' (two), 'among' (more than two).",
              "Instrument vs Agent: 'by' for doer/agent ('written by Tagore'), 'with' for instrument ('cut with a knife')."
            ]
          },
          {
            type: "concept",
            title: "Coordinating vs Subordinating Conjunctions",
            points: [
              "Coordinating Conjunctions (FANBOYS: For, And, Nor, But, Or, Yet, So) join equal independent clauses.",
              "Subordinating Conjunctions (because, although, if, unless, until, when, while, since) join a dependent clause to a main clause.",
              "Correlative Pairs (must stay paired accurately): 'Hardly/Scarcely ... when', 'No sooner ... than', 'Both ... and', 'Not only ... but also', 'Although/Though ... yet' (never 'but')."
            ]
          }
        ]
      }
    }
  });
})(window);
