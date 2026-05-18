# Music Theory Placement Exam
**Music 38A · Readiness Check**

A lightweight, self-scoring placement assessment for incoming Music 38A students. Runs entirely in the browser — no server, no database, no login required.

---

## Features
- 23 questions across 7 sections
- VexFlow-rendered music notation (no image files needed)
- Instant feedback after each answer
- Progress bar and section tracking
- Final readiness recommendation with section-by-section breakdown
- Mobile-friendly

---

## Sections
| Section | Questions |
|---|---|
| Note Reading (treble + bass) | 5 |
| Rhythm Values | 4 |
| Meter | 4 |
| Key Signatures | 3 |
| Enharmonic Equivalents | 3 |
| Rhythm Identification | 2 |
| Bonus (intervals + triads) | 2 |

---

## Readiness Thresholds
| Score | Message |
|---|---|
| 90–100% | Strong Readiness |
| 75–89% | Likely Ready |
| 60–74% | Borderline |
| Below 60% | Additional Preparation Recommended |

---

## Project Structure
```
music-theory-placement/
├── index.html          ← Main page
├── css/
│   └── style.css       ← All styles
├── js/
│   ├── questions.js    ← Question data (edit this to add/change questions)
│   ├── notation.js     ← VexFlow rendering helper
│   └── quiz.js         ← Quiz controller logic
└── README.md
```

---

## Deploying to GitHub Pages

1. Create a new repo: `agarner32/music-theory-placement`
2. Push this folder's contents to the `main` branch
3. Go to **Settings → Pages → Source → main branch / root**
4. Your exam will be live at:
   `https://agarner32.github.io/music-theory-placement/`

---

## Adding or Editing Questions
All questions live in `js/questions.js`. Each question follows this structure:

```js
{
  section: SECTIONS.NOTE_READING,   // section label
  type: "notation",                 // "text" or "notation"
  text: "What is the name of this note?",
  notation: {
    clef: "treble",
    timeSignature: null,            // e.g. "4/4", "3/4", or null
    notes: [
      { keys: ["b/4"], duration: "w" }  // VexFlow key format
    ]
  },
  choices: [
    { label: "A", correct: false },
    { label: "B", correct: true, feedback: "Correct! B is on the third line." },
    { label: "C", correct: false },
    { label: "D", correct: false }
  ]
}
```

### VexFlow Note Keys
- Middle C = `"c/4"`, D above = `"d/4"`, etc.
- Sharps: `"f#/4"` · Flats: `"bb/4"`
- Bass clef uses same format: `"g/2"` = G below the bass staff

### Durations
| Symbol | Note |
|---|---|
| `"w"` | Whole |
| `"h"` | Half |
| `"q"` | Quarter |
| `"8"` | Eighth |

---

## Dependencies
- [VexFlow 4.2.2](https://github.com/0xfe/vexflow) — loaded via CDN, no install needed
- [Google Fonts](https://fonts.google.com) — Playfair Display + Source Sans 3

No build step. No npm. Open `index.html` directly in a browser or push to GitHub Pages.
