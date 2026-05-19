// =============================================
//  QUESTIONS DATA
// =============================================

const SECTIONS = {
  NOTE_READING:  "Note Reading",
  RHYTHM:        "Rhythm",
  METER:         "Meter",
  KEY_SIG:       "Key Signatures",
  ENHARMONIC:    "Enharmonic Equivalents",
  RHYTHM_ID:     "Rhythm Identification",
  STRETCH:       "Bonus Questions"
};

const questions = [

  // ── NOTE READING ──────────────────────────────────────────

  {
    section: SECTIONS.NOTE_READING,
    type: "notation",
    text: "What is the name of this note?",
    notation: { clef: "treble", timeSignature: null, notes: [{ keys: ["b/4"], duration: "w" }] },
    choices: [
      { label: "A", correct: false },
      { label: "B", correct: true, feedback: "Correct! B sits on the third line of the treble clef." },
      { label: "C", correct: false },
      { label: "D", correct: false }
    ]
  },

  {
    section: SECTIONS.NOTE_READING,
    type: "notation",
    text: "What is the name of this note?",
    notation: { clef: "treble", timeSignature: null, notes: [{ keys: ["e/4"], duration: "w" }] },
    choices: [
      { label: "D", correct: false },
      { label: "F", correct: false },
      { label: "E", correct: true, feedback: "Correct! E sits on the first line of the treble clef." },
      { label: "G", correct: false }
    ]
  },

  {
    section: SECTIONS.NOTE_READING,
    type: "notation",
    text: "What is the name of this note?",
    notation: { clef: "bass", timeSignature: null, notes: [{ keys: ["g/2"], duration: "w" }] },
    choices: [
      { label: "E", correct: false },
      { label: "F", correct: false },
      { label: "A", correct: false },
      { label: "G", correct: true, feedback: "Correct! G sits on the second line of the bass clef." }
    ]
  },

  {
    section: SECTIONS.NOTE_READING,
    type: "notation",
    text: "What is the name of this note?",
    notation: { clef: "treble", timeSignature: null, notes: [{ keys: ["d/5"], duration: "w" }] },
    choices: [
      { label: "C", correct: false },
      { label: "E", correct: false },
      { label: "D", correct: true, feedback: "Correct! D sits just above the top line of the treble clef." },
      { label: "B", correct: false }
    ]
  },

  {
    section: SECTIONS.NOTE_READING,
    type: "notation",
    text: "What is the name of this note?",
    notation: { clef: "bass", timeSignature: null, notes: [{ keys: ["b/2"], duration: "w" }] },
    choices: [
      { label: "G", correct: false },
      { label: "A", correct: false },
      { label: "C", correct: false },
      { label: "B", correct: true, feedback: "Correct! B sits on the middle line of the bass clef." }
    ]
  },

  {
    section: SECTIONS.NOTE_READING,
    type: "notation",
    text: "This note sits below two ledger lines below the bass clef. What is its name?",
    notation: { clef: "bass", timeSignature: null, notes: [{ keys: ["c/2"], duration: "w" }] },
    choices: [
      { label: "A", correct: false },
      { label: "B", correct: false },
      { label: "C", correct: true, feedback: "Correct! C2 sits on two ledger lines below the bass staff." },
      { label: "D", correct: false }
    ]
  },

  {
    section: SECTIONS.NOTE_READING,
    type: "notation",
    text: "This note sits on top of two ledger lines above the treble clef. What is its name?",
    notation: { clef: "treble", timeSignature: null, notes: [{ keys: ["d/6"], duration: "w" }] },
    choices: [
      { label: "B", correct: false },
      { label: "C", correct: false },
      { label: "D", correct: true, feedback: "Correct! D6 sits on top of two ledger lines above the treble staff." },
      { label: "E", correct: false }
    ]
  },

  {
    section: SECTIONS.NOTE_READING,
    type: "notation",
    text: "This note sits in the space below two ledger lines below the treble clef. What is its name?",
    notation: { clef: "treble", timeSignature: null, notes: [{ keys: ["g/3"], duration: "w" }] },
    choices: [
      { label: "E", correct: false },
      { label: "F", correct: false },
      { label: "G", correct: true, feedback: "Correct! G3 sits below two ledger lines below the treble staff — well into bass clef territory." },
      { label: "A", correct: false }
    ]
  },

  // ── RHYTHM ────────────────────────────────────────────────

  {
    section: SECTIONS.RHYTHM,
    type: "notation",
    text: "In 4/4 time, how many beats does this note receive?",
    notation: { clef: "treble", timeSignature: "4/4", notes: [{ keys: ["b/4"], duration: "h" }] },
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
    notation: { clef: "treble", timeSignature: "4/4", notes: [{ keys: ["b/4"], duration: "q" }] },
    choices: [
      { label: "½ beat",  correct: false },
      { label: "1 beat",  correct: true, feedback: "Correct! A quarter note receives 1 beat in 4/4 time." },
      { label: "2 beats", correct: false },
      { label: "4 beats", correct: false }
    ]
  },

  {
    section: SECTIONS.RHYTHM,
    type: "notation",
    text: "In 4/4 time, how many beats does this note receive?",
    notation: { clef: "treble", timeSignature: "4/4", notes: [{ keys: ["b/4"], duration: "w" }] },
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
    text: "In 6/8 time, how many beats does this note receive?",
    notation: { clef: "treble", timeSignature: "6/8", notes: [{ keys: ["b/4"], duration: "q" }] },
    choices: [
      { label: "½ beat",  correct: false },
      { label: "1 beat",  correct: false },
      { label: "2 beats", correct: true, feedback: "Correct! In 6/8 the eighth note gets one beat, so a quarter note (= 2 eighths) gets 2 beats." },
      { label: "3 beats", correct: false }
    ]
  },

  {
    section: SECTIONS.RHYTHM,
    type: "notation",
    text: "In 6/8 time, how many beats does this note receive?",
    notation: { clef: "treble", timeSignature: "6/8", notes: [{ keys: ["b/4"], duration: "8" }] },
    choices: [
      { label: "½ beat",  correct: false },
      { label: "1 beat",  correct: true, feedback: "Correct! In 6/8, the eighth note is the beat unit — it gets exactly one beat." },
      { label: "2 beats", correct: false },
      { label: "3 beats", correct: false }
    ]
  },

  {
    section: SECTIONS.RHYTHM,
    type: "notation",
    text: "This measure is in 4/4. Which single REST would complete it?",
    notation: {
      clef: "treble", timeSignature: "4/4",
      notes: [
        { keys: ["b/4"], duration: "q" },
        { keys: ["b/4"], duration: "q" },
        { keys: ["b/4"], duration: "q" }
      ]
    },
    choices: [
      { label: "Whole rest (4 beats)",  correct: false },
      { label: "Half rest (2 beats)",   correct: false },
      { label: "Quarter rest (1 beat)", correct: true, feedback: "Correct! Three quarter notes use 3 beats, so a quarter rest completes the measure." },
      { label: "Eighth rest (½ beat)",  correct: false }
    ],
    wideChoices: true
  },

  {
    section: SECTIONS.RHYTHM,
    type: "notation",
    text: "This measure is in 4/4. Which single note would complete it?",
    notation: {
      clef: "treble", timeSignature: "4/4",
      notes: [
        { keys: ["b/4"], duration: "q" },
        { keys: ["b/4"], duration: "q" },
        { keys: ["b/4"], duration: "q" }
      ]
    },
    choices: [
      { label: "Whole note (4 beats)",  correct: false },
      { label: "Half note (2 beats)",   correct: false },
      { label: "Quarter note (1 beat)", correct: true, feedback: "Correct! Three quarter notes use 3 beats, so one more quarter note completes the measure." },
      { label: "Eighth note (½ beat)",  correct: false }
    ],
    wideChoices: true
  },
  {
    section: SECTIONS.RHYTHM,
    type: "notation",
    text: "In 4/4 time, how many beats does this rest receive?",
    notation: {
      clef: "treble", timeSignature: "4/4",
      notes: [{ keys: ["b/4"], duration: "qdr" }]
    },
    choices: [
      { label: "1 beat",   correct: false },
      { label: "1½ beats", correct: true, feedback: "Correct! A dotted quarter rest gets 1½ beats in 4/4 — the dot adds half the value of the quarter rest." },
      { label: "2 beats",  correct: false },
      { label: "3 beats",  correct: false }
    ]
  },

  {
    section: SECTIONS.RHYTHM,
    type: "notation",
    text: "In 3/4 time, how many beats does this rest receive?",
    notation: {
      clef: "treble", timeSignature: "3/4",
      notes: [{ keys: ["b/4"], duration: "hr" }]
    },
    choices: [
      { label: "1 beat",  correct: false },
      { label: "2 beats", correct: true, feedback: "Correct! A half rest receives 2 beats in 3/4 time — the same as a half note." },
      { label: "3 beats", correct: false },
      { label: "4 beats", correct: false }
    ]
  },

  // ── METER ─────────────────────────────────────────────────

  {
    section: SECTIONS.METER,
    type: "text",
    text: "In a time signature, what does the TOP number tell you?",
    choices: [
      { label: "The tempo (speed) of the piece",     correct: false },
      { label: "How many beats are in each measure", correct: true, feedback: "Correct! The top number tells you how many beats fit in each measure." },
      { label: "What kind of note gets one beat",    correct: false },
      { label: "The key of the piece",               correct: false }
    ],
    wideChoices: true
  },

  {
    section: SECTIONS.METER,
    type: "text",
    text: "In a time signature, what does the BOTTOM number tell you?",
    choices: [
      { label: "How many measures are in the piece", correct: false },
      { label: "How many beats are in each measure", correct: false },
      { label: "What kind of note gets one beat",    correct: true, feedback: "Correct! The bottom number identifies the beat unit: 2 = half note, 4 = quarter note, 8 = eighth note." },
      { label: "The dynamic level",                  correct: false }
    ],
    wideChoices: true
  },

  {
    section: SECTIONS.METER,
    type: "text",
    text: "In 6/8 time, how many beats are in each measure, and what note gets one beat?",
    choices: [
      { label: "6 beats; the eighth note gets one beat",  correct: true, feedback: "Correct! In 6/8, there are 6 beats and the eighth note gets one beat." },
      { label: "8 beats; the sixth note gets one beat",   correct: false },
      { label: "6 beats; the quarter note gets one beat", correct: false },
      { label: "3 beats; the quarter note gets one beat", correct: false }
    ],
    wideChoices: true
  },

  {
    section: SECTIONS.METER,
    type: "text",
    text: "In 3/8 time, what note gets one beat?",
    choices: [
      { label: "The whole note",   correct: false },
      { label: "The quarter note", correct: false },
      { label: "The eighth note",  correct: true, feedback: "Correct! The bottom number 8 means the eighth note gets one beat — just like in 6/8." },
      { label: "The half note",    correct: false }
    ],
    wideChoices: true
  },

  {
    section: SECTIONS.METER,
    type: "text",
    text: "In 4/2 time, what note gets one beat?",
    choices: [
      { label: "The whole note",   correct: false },
      { label: "The quarter note", correct: false },
      { label: "The eighth note",  correct: false },
      { label: "The half note",    correct: true, feedback: "Correct! The bottom number 2 means the half note gets one beat. There are 4 half notes per measure." }
    ],
    wideChoices: true
  },

  {
    section: SECTIONS.METER,
    type: "notation",
    text: "What time signature best fits this excerpt? (Each group of notes fills one measure.)",
    notation: {
      clef: "treble", timeSignature: "4/4",
      notes: [
        { keys: ["b/4"], duration: "q" },
        { keys: ["b/4"], duration: "q" },
        { keys: ["b/4"], duration: "h" }
      ]
    },
    choices: [
      { label: "3/4", correct: false },
      { label: "4/4", correct: true, feedback: "Correct! Quarter + quarter + half = 4 beats per measure, fitting 4/4." },
      { label: "2/4", correct: false },
      { label: "6/8", correct: false }
    ]
  },

  // ── KEY SIGNATURES ────────────────────────────────────────

  {
    section: SECTIONS.KEY_SIG,
    type: "keysig",
    text: "What major key does this key signature represent?",
    keysig: { clef: "treble", key: "G" },
    choices: [
      { label: "C major", correct: false },
      { label: "G major", correct: true, feedback: "Correct! One sharp (F#) means G major." },
      { label: "D major", correct: false },
      { label: "F major", correct: false }
    ]
  },

  {
    section: SECTIONS.KEY_SIG,
    type: "keysig",
    text: "What major key does this key signature represent?",
    keysig: { clef: "treble", key: "F" },
    choices: [
      { label: "C major",  correct: false },
      { label: "G major",  correct: false },
      { label: "Bb major", correct: false },
      { label: "F major",  correct: true, feedback: "Correct! One flat (Bb) means F major." }
    ]
  },

  {
    section: SECTIONS.KEY_SIG,
    type: "keysig",
    text: "What major key does this key signature represent?",
    keysig: { clef: "treble", key: "D" },
    choices: [
      { label: "A major", correct: false },
      { label: "G major", correct: false },
      { label: "D major", correct: true, feedback: "Correct! Two sharps (F# and C#) mean D major." },
      { label: "E major", correct: false }
    ]
  },

  {
    section: SECTIONS.KEY_SIG,
    type: "keysig",
    text: "What major key does this key signature represent?",
    keysig: { clef: "treble", key: "Bb" },
    choices: [
      { label: "F major",  correct: false },
      { label: "Eb major", correct: false },
      { label: "Ab major", correct: false },
      { label: "Bb major", correct: true, feedback: "Correct! Two flats (Bb and Eb) mean Bb major." }
    ]
  },

  {
    section: SECTIONS.KEY_SIG,
    type: "keysig",
    text: "What major key does this key signature represent?",
    keysig: { clef: "bass", key: "Eb" },
    choices: [
      { label: "Bb major", correct: false },
      { label: "Eb major", correct: true, feedback: "Correct! Three flats (Bb, Eb, Ab) mean Eb major." },
      { label: "Ab major", correct: false },
      { label: "F major",  correct: false }
    ]
  },

  {
    section: SECTIONS.KEY_SIG,
    type: "keysig",
    text: "What major key does this key signature represent?",
    keysig: { clef: "treble", key: "A" },
    choices: [
      { label: "D major", correct: false },
      { label: "E major", correct: false },
      { label: "A major", correct: true, feedback: "Correct! Three sharps (F#, C#, G#) mean A major." },
      { label: "B major", correct: false }
    ]
  },

  {
    section: SECTIONS.KEY_SIG,
    type: "keysig",
    text: "What major key does this key signature represent?",
    keysig: { clef: "treble", key: "Ab" },
    choices: [
      { label: "Db major", correct: false },
      { label: "Eb major", correct: false },
      { label: "Bb major", correct: false },
      { label: "Ab major", correct: true, feedback: "Correct! Four flats (Bb, Eb, Ab, Db) mean Ab major." }
    ]
  },

  {
    section: SECTIONS.KEY_SIG,
    type: "keysig",
    text: "What major key does this key signature represent?",
    keysig: { clef: "treble", key: "B" },
    choices: [
      { label: "E major",  correct: false },
      { label: "F# major", correct: false },
      { label: "B major",  correct: true, feedback: "Correct! Five sharps (F#, C#, G#, D#, A#) mean B major." },
      { label: "A major",  correct: false }
    ]
  },
  {
    section: SECTIONS.KEY_SIG,
    type: "keysig",
    text: "What minor key does this key signature represent?",
    keysig: { clef: "treble", key: "Db" },
    choices: [
      { label: "G minor",  correct: false },
      { label: "Bb minor", correct: true, feedback: "Correct! Bb minor has 5 flats — the same key signature as Db major." },
      { label: "Eb minor", correct: false },
      { label: "F minor",  correct: false }
    ]
  },

  {
    section: SECTIONS.KEY_SIG,
    type: "keysig",
    text: "What minor key does this key signature represent?",
    keysig: { clef: "treble", key: "E" },
    choices: [
      { label: "F# minor", correct: false },
      { label: "B minor",  correct: false },
      { label: "C# minor", correct: true, feedback: "Correct! C# minor has 4 sharps — the same key signature as E major." },
      { label: "G# minor", correct: false }
    ]
  },

  // ── ENHARMONIC EQUIVALENTS ────────────────────────────────

  {
    section: SECTIONS.ENHARMONIC,
    type: "notation",
    text: "Which note sounds exactly the same pitch as F#?",
    notation: { clef: "treble", timeSignature: null, notes: [{ keys: ["f#/4"], duration: "w" }] },
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
    text: "A teacher claps this pattern in 4/4: LONG — short short — LONG. Which description matches?",
    choices: [
      { label: "Half note, two eighth notes, half note", correct: true, feedback: "Correct! Half (2 beats) + two eighths (1 beat) + half (2 beats) spans two measures of 4/4." },
      { label: "Whole note, quarter note, half note",    correct: false },
      { label: "Quarter, quarter, quarter, quarter",     correct: false },
      { label: "Dotted quarter, eighth, whole note",     correct: false }
    ],
    wideChoices: true
  },

  {
    section: SECTIONS.RHYTHM_ID,
    type: "notation",
    text: "Which description best matches this rhythm?",
    notation: {
      clef: "treble", timeSignature: "4/4",
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
    section: SECTIONS.METER,
    type: "notation",
    text: "What time signature best fits this two measure excerpt?  Note: a barline is missing.",
    notation: {
      clef: "treble", timeSignature: null,
      notes: [
        { keys: ["b/4"], duration: "8" },
        { keys: ["b/4"], duration: "8" },
        { keys: ["b/4"], duration: "8" },
        { keys: ["b/4"], duration: "qd" },
        { keys: ["b/4"], duration: "8d" },
        { keys: ["b/4"], duration: "16" },
        { keys: ["b/4"], duration: "8" },
        { keys: ["b/4"], duration: "8r" },
        { keys: ["b/4"], duration: "q" }
      ],
      beamGroups: [[0,1,2],[4,5,6]]
    },
    choices: [
      { label: "6/8", correct: true,  feedback: "Correct! Each measure has 6 eighth-note beats, fitting 6/8." },
      { label: "3/4", correct: false },
      { label: "4/4", correct: false },
      { label: "3/8", correct: false }
    ]
  },

  {
    section: SECTIONS.STRETCH,
    type: "notation",
    text: "BONUS: What is the quality of this triad?",
    notation: { clef: "treble", timeSignature: null, notes: [{ keys: ["c/4", "e/4", "g/4"], duration: "w" }] },
    choices: [
      { label: "Major",      correct: true,  feedback: "Correct! C–E–G is a C major triad." },
      { label: "Minor",      correct: false },
      { label: "Diminished", correct: false },
      { label: "Augmented",  correct: false }
    ]
  },

  {
    section: SECTIONS.STRETCH,
    type: "notation",
    text: "BONUS: What interval is this?",
    notation: { clef: "treble", timeSignature: null, notes: [{ keys: ["c/4", "g/4"], duration: "w" }] },
    choices: [
      { label: "3rd", correct: false },
      { label: "4th", correct: false },
      { label: "5th", correct: true, feedback: "Correct! C to G spans a perfect 5th." },
      { label: "6th", correct: false }
    ]
  }

];
