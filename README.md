# REET Pathfinder (REET 2027 Level 1)

**REET Pathfinder** ek static, mobile-first, Hindi-first web application hai jo REET Level 1 (Primary: Classes 1–5) ki tayari ke liye banaya gaya hai. Yeh bina kisi backend, database, login ya API key ke sidha **GitHub Pages** par chalta hai.

## GitHub Pages par Deploy kaise karein
1. GitHub par ek naya Public Repository banayein (jaise `reet-pathfinder`).
2. Is project ke saare files aur folders (`index.html`, `css/`, `js/`, `data/`, `assets/`, `README.md`) root directory me upload karein.
3. Repository ke **Settings → Pages** me jaayein.
4. **Source** me `Deploy from a branch`, Branch me `main` aur folder `/ (root)` chunein aur **Save** karein.
5. Kuch hi der me app live ho jaayega: `https://USERNAME.github.io/REPO-NAME/`.

## Folder Structure
- `index.html` — Main HTML shell
- `css/` — Design tokens, layout, components aur study/CBT views
- `js/` — Core state/storage, dynamic loader, practice, leak-free CBT mock test, revision, planner, achievements, PYQ lab, search, charts, views, router
- `data/` — Exam config, syllabus, theory, 1,000 practice questions (200 per subject), revision notes/flashcards/formulas
- `assets/` — Optional custom PNG/JPG illustrations

## Verified PYQs kaise jodein
1. `data/pyq-verified.js` kholein.
2. Keval RBSE ke official question paper aur final answer key se confirm kiye gaye prashn hi `pyqVerified` array me add karein (`category: "verified_pyq"`, `verificationStatus: "verified"`, `year`, `paper`, `source` ke saath).

## Optional Images kaise badlein
`assets/` folder me `hero.jpg`, `logo.png`, `subject-cdp.png`, `subject-hindi.png`, `subject-english.png`, `subject-maths.png`, `subject-evs.png` daalein. App automatic inhe detect karke SVG ki jagah dikha dega.

## Official Notification aane par EXAM_CONFIG kaise update karein
`data/exam-config.js` kholein, `totalQuestions`, `totalMarks`, `durationMinutes`, `negativeMarking`, `sections` ko RBSE ke official notification ke anusaar update karein, aur `provisional: false` tatha `verified: true` set karein.
