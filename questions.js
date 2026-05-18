// =============================================
//  QUESTIONS DATA
//  Each question object has:
//    section    — display label for the header
//    type       — "text" | "notation" | "image"
//    text       — the question prompt
//    notation   — (optional) VexFlow config passed to notation.js
//    choices    — array of { label, correct, feedback }
//    wideChoices — (optional) true = single-column layout
// =============================================

const SECTIONS = {
  NOTE_READING:  "Note Reading",
  RHYTHM:        "Rhythm",
  METER:         "Meter",
  KEY_SIG:       "Key Signatures",
  ENHARMONIC:    "Enharmonic Equivalents",
  RHYTHM_ID:     "Rhythm Identification",
  KEYBOARD:      "Keyboard",
  STRETCH:       "Bonus Questions"
};

const questions = [

  // ── NOTE READING ──────────────────────────────────────────

  {
    section: SECTIONS.NOTE_READING,
    type: "notation",
    text: "What is the name of this note?",
    notation: {
      clef: "treble",
      timeSignature: null,
      notes: [{ keys: ["b/4"], duration: "w" }]
    },
    choices: [
      { label: "A", correct: false },
      { label: "B", correct: true,  feedback: "Correct! The third line of the treble clef is B." },
      { label: "C", correct: false },
      { label: "D", correct: false }
    ]
  },

  {
    section: SECTIONS.NOTE_READING,
    type: "notation",
    text: "What is the name of this note?",
    notation: {
      clef: "treble",
      timeSignature: null,
      notes: [{ keys: ["e/4"], duration: "w" }]
    },
    choices: [
      { label: "D", correct: false },
      { label: "F", correct: false },
      { label: "E", correct: true,  feedback: "Correct! The first line of the treble clef is E." },
      { label: "G", correct: false }
    ]
  },

  {
    section: SECTIONS.NOTE_READING,
    type: "notation",
    text: "What is the name of this note?",
    notation: {
      clef: "bass",
      timeSignature: null,
      notes: [{ keys: ["g/2"], duration: "w" }]
    },
    choices: [
      { label: "E", correct: false },
      { label: "F", correct: false },
      { label: "A", correct: false },
      { label: "G", correct: true,  feedback: "Correct! The second line of the bass clef is G." }
    ]
  },

  {
    section: SECTIONS.NOTE_READING,
    type: "notation",
    text: "What is the name of this note?",
    notation: {
      clef: "treble",
      timeSignature: null,
      notes: [{ keys: ["d/5"], duration: "w" }]
    },
    choices: [
      { label: "C", correct: false },
      { label: "E", correct: false },
      { label: "D", correct: true,  feedback: "Correct! D sits just above the top line of the treble clef." },
      { label: "B", correct: false }
    ]
  },

  {
    section: SECTIONS.NOTE_READING,
    type: "notation",
    text: "What is the name of this note?",
    notation: {
      clef: "bass",
      timeSignature: null,
      notes: [{ keys: ["b/2"], duration: "w" }]
    },
    choices: [
      { label: "G", correct: false },
      { label: "A", correct: false },
      { label: "C", correct: false },
      { label: "B", correct: true,  feedback: "Correct! The middle line of the bass clef is B." }
    ]
  },

  // ── RHYTHM ────────────────────────────────────────────────

  {
    section: SECTIONS.RHYTHM,
    type: "notation",
    text: "In 4/4 time, how many beats does this note receive?",
    notation: {
      clef: "treble",
      timeSignature: "4/4",
      notes: [{ keys: ["b/4"], duration: "h" }]
    },
    choices: [
      { label: "1 beat",  correct: false },
      { label: "2 beats", correct: true, feedback: "Correct! A half note receives 2 beats in 4/4 time." },
      { label: "3 beats", correct: false },
      { label: "4 beats", correct: false }
    ]
  },

  {
    section: SECTIONS.RHYTHM,
    type: "notation",
    text: "In 4/4 time, how many beats does this note receive?",
    notation: {
      clef: "treble",
      timeSignature: "4/4",
      notes: [{ keys: ["b/4"], duration: "q" }]
    },
    choices: [
      { label: "½ beat", correct: false },
      { label: "1 beat", correct: true, feedback: "Correct! A quarter note receives 1 beat in 4/4 time." },
      { label: "2 beats", correct: false },
      { label: "4 beats", correct: false }
    ]
  },

  {
    section: SECTIONS.RHYTHM,
    type: "notation",
    text: "In 4/4 time, how many beats does this note receive?",
    notation: {
      clef: "treble",
      timeSignature: "4/4",
      notes: [{ keys: ["b/4"], duration: "w" }]
    },
    choices: [
      { label: "1 beat",  correct: false },
      { label: "2 beats", correct: false },
      { label: "3 beats", correct: false },
      { label: "4 beats", correct: true, feedback: "Correct! A whole note receives 4 beats in 4/4 time." }
    ]
  },

  {
    section: SECTIONS.RHYTHM,
    type: "notation",
    text: "This measure is in 4/4. Which single note would complete it?",
    notation: {
      clef: "treble",
      timeSignature: "4/4",
      notes: [
        { keys: ["b/4"], duration: "q" },
        { keys: ["b/4"], duration: "q" },
        { keys: ["b/4"], duration: "q" }
      ]
    },
    choices: [
      { label: "Whole note (4 beats)",     correct: false },
      { label: "Half note (2 beats)",      correct: false },
      { label: "Quarter note (1 beat)",    correct: true, feedback: "Correct! Three quarter notes use 3 beats, so one more quarter note completes the measure." },
      { label: "Eighth note (½ beat)",     correct: false }
    ],
    wideChoices: true
  },

  // ── METER ─────────────────────────────────────────────────

  {
    section: SECTIONS.METER,
    type: "text",
    text: "In a time signature, what does the TOP number tell you?",
    choices: [
      { label: "The tempo (speed) of the piece",        correct: false },
      { label: "How many beats are in each measure",    correct: true, feedback: "Correct! The top number tells you how many beats fit in each measure." },
      { label: "What kind of note gets one beat",       correct: false },
      { label: "The key of the piece",                  correct: false }
    ],
    wideChoices: true
  },

  {
    section: SECTIONS.METER,
    type: "text",
    text: "In a time signature, what does the BOTTOM number tell you?",
    choices: [
      { label: "How many measures are in the piece",    correct: false },
      { label: "How many beats are in each measure",    correct: false },
      { label: "What kind of note gets one beat",       correct: true, feedback: "Correct! The bottom number identifies the note that receives one beat (4 = quarter note, 8 = eighth note)." },
      { label: "The dynamic level",                     correct: false }
    ],
    wideChoices: true
  },

  {
    section: SECTIONS.METER,
    type: "text",
    text: "In 6/8 time, how many beats are in each measure, and what note gets one beat?",
    choices: [
      { label: "6 beats; the eighth note gets one beat",    correct: true, feedback: "Correct! In 6/8, there are 6 beats and the eighth note (bottom 8) gets one beat." },
      { label: "8 beats; the sixth note gets one beat",     correct: false },
      { label: "6 beats; the quarter note gets one beat",   correct: false },
      { label: "3 beats; the quarter note gets one beat",   correct: false }
    ],
    wideChoices: true
  },

  {
    section: SECTIONS.METER,
    type: "notation",
    text: "What time signature best fits this excerpt? (Look at how the notes group naturally.)",
    notation: {
      clef: "treble",
      timeSignature: null,
      notes: [
        { keys: ["b/4"], duration: "q" },
        { keys: ["b/4"], duration: "q" },
        { keys: ["b/4"], duration: "q" }
      ],
      showBarline: false
    },
    choices: [
      { label: "2/4", correct: false },
      { label: "4/4", correct: false },
      { label: "3/4", correct: true, feedback: "Correct! Three quarter notes group naturally into 3/4." },
      { label: "6/8", correct: false }
    ]
  },

  // ── KEY SIGNATURES ────────────────────────────────────────

  {
    section: SECTIONS.KEY_SIG,
    type: "text",
    text: "How many sharps are in the key of G major?",
    choices: [
      { label: "0", correct: false },
      { label: "1", correct: true, feedback: "Correct! G major has one sharp: F#." },
      { label: "2", correct: false },
      { label: "3", correct: false }
    ]
  },

  {
    section: SECTIONS.KEY_SIG,
    type: "text",
    text: "How many flats are in the key of F major?",
    choices: [
      { label: "0", correct: false },
      { label: "1", correct: true, feedback: "Correct! F major has one flat: Bb." },
      { label: "2", correct: false },
      { label: "3", correct: false }
    ]
  },

  {
    section: SECTIONS.KEY_SIG,
    type: "text",
    text: "How many sharps or flats are in C major?",
    choices: [
      { label: "None — C major has no sharps or flats", correct: true, feedback: "Correct! C major uses only the white keys on the piano — no sharps or flats." },
      { label: "1 sharp",                               correct: false },
      { label: "1 flat",                                correct: false },
      { label: "2 sharps",                              correct: false }
    ],
    wideChoices: true
  },

  // ── ENHARMONIC EQUIVALENTS ────────────────────────────────

  {
    section: SECTIONS.ENHARMONIC,
    type: "notation",
    text: "Which note sounds exactly the same pitch as F#?",
    notation: {
      clef: "treble",
      timeSignature: null,
      notes: [{ keys: ["f#/4"], duration: "w" }]
    },
    choices: [
      { label: "Fb", correct: false },
      { label: "Gb", correct: true, feedback: "Correct! F# and Gb are enharmonic — the same pitch, spelled two different ways." },
      { label: "G#", correct: false },
      { label: "F",  correct: false }
    ]
  },

  {
    section: SECTIONS.ENHARMONIC,
    type: "text",
    text: "Which note sounds exactly the same pitch as Bb?",
    choices: [
      { label: "Ab", correct: false },
      { label: "B#", correct: false },
      { label: "A#", correct: true, feedback: "Correct! Bb and A# are the same pitch on the piano keyboard." },
      { label: "Cb", correct: false }
    ]
  },

  {
    section: SECTIONS.ENHARMONIC,
    type: "text",
    text: "Which note sounds exactly the same pitch as C#?",
    choices: [
      { label: "Cb", correct: false },
      { label: "Db", correct: true, feedback: "Correct! C# and Db name the same black key on the piano." },
      { label: "D#", correct: false },
      { label: "B#", correct: false }
    ]
  },

  // ── RHYTHM IDENTIFICATION ─────────────────────────────────

  {
    section: SECTIONS.RHYTHM_ID,
    type: "text",
    text: "A teacher claps this pattern (in 4/4): LONG — short short — LONG. Which description matches?",
    choices: [
      { label: "Half note, two eighth notes, half note",   correct: true, feedback: "Correct! Half (2 beats) + two eighths (1 beat total) + half (2 beats) = 5 beats — wait, check the barline context. For this question the pattern spans two measures." },
      { label: "Whole note, quarter note, half note",      correct: false },
      { label: "Quarter, quarter, quarter, quarter",       correct: false },
      { label: "Dotted quarter, eighth, whole note",       correct: false }
    ],
    wideChoices: true
  },

  {
    section: SECTIONS.RHYTHM_ID,
    type: "notation",
    text: "Which description best matches this rhythm?",
    notation: {
      clef: "treble",
      timeSignature: "4/4",
      notes: [
        { keys: ["b/4"], duration: "q" },
        { keys: ["b/4"], duration: "q" },
        { keys: ["b/4"], duration: "q" },
        { keys: ["b/4"], duration: "8" },
        { keys: ["b/4"], duration: "8" }
      ]
    },
    choices: [
      { label: "Quarter, quarter, quarter, two eighths",    correct: true,  feedback: "Correct! Three quarter notes plus two eighth notes = 4 beats in 4/4." },
      { label: "Quarter, quarter, quarter, two sixteenths", correct: false },
      { label: "Half, quarter, two eighths",                correct: false },
      { label: "Four quarter notes",                        correct: false }
    ],
    wideChoices: true
  },

  // ── STRETCH QUESTIONS ─────────────────────────────────────

  {
    section: SECTIONS.STRETCH,
    type: "notation",
    text: "BONUS: What is the quality of this triad?",
    notation: {
      clef: "treble",
      timeSignature: null,
      notes: [{ keys: ["c/4", "e/4", "g/4"], duration: "w" }]
    },
    choices: [
      { label: "Major",      correct: true,  feedback: "Correct! C–E–G is a C major triad (major third + perfect fifth)." },
      { label: "Minor",      correct: false },
      { label: "Diminished", correct: false },
      { label: "Augmented",  correct: false }
    ]
  },

  {
    section: SECTIONS.STRETCH,
    type: "notation",
    text: "BONUS: What interval is this?",
    notation: {
      clef: "treble",
      timeSignature: null,
      notes: [{ keys: ["c/4", "g/4"], duration: "w" }]
    },
    choices: [
      { label: "3rd", correct: false },
      { label: "4th", correct: false },
      { label: "5th", correct: true, feedback: "Correct! C to G spans a perfect 5th." },
      { label: "6th", correct: false }
    ]
  }

];
