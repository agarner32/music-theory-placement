// =============================================
//  QUIZ.JS — Main quiz controller
// =============================================

let currentIndex = 0;
let score        = 0;
let answered     = false;

// Per-section score tracking
const sectionScores = {};

function getScreen(id) { return document.getElementById(id); }

// ── START ─────────────────────────────────────────────────
document.getElementById("btn-start").addEventListener("click", () => {
  getScreen("screen-intro").classList.remove("active");
  getScreen("screen-quiz").classList.add("active");
  loadQuestion(0);
});

// ── LOAD QUESTION ─────────────────────────────────────────
function loadQuestion(idx) {
  answered = false;
  const q = questions[idx];
  const total = questions.length;

  // Progress
  document.getElementById("progress-bar").style.width = `${(idx / total) * 100}%`;
  document.getElementById("question-counter").textContent = `${idx + 1} of ${questions.length}`;
  document.getElementById("section-label").textContent = q.section;

  // Question text
  document.getElementById("question-text").textContent = q.text;

  // Notation
  const notationWrap = document.getElementById("notation-wrap");
  if (q.notation) {
    notationWrap.style.display = "flex";
    notationWrap.innerHTML = '<div id="vf-target"></div>';
    setTimeout(() => {
      try {
        renderNotation("vf-target", q.notation);
      } catch (e) {
        console.warn("VexFlow render error:", e);
        notationWrap.innerHTML = '<p style="color:#999;font-size:0.85rem;">[Notation unavailable]</p>';
      }
    }, 30);
  } else if (q.keysig) {
    notationWrap.style.display = "flex";
    notationWrap.innerHTML = '<div id="vf-target"></div>';
    setTimeout(() => {
      try {
        renderKeySignature("vf-target", q.keysig);
      } catch (e) {
        console.warn("VexFlow keysig render error:", e);
        notationWrap.innerHTML = '<p style="color:#999;font-size:0.85rem;">[Notation unavailable]</p>';
      }
    }, 30);
  } else {
    notationWrap.style.display = "none";
    notationWrap.innerHTML = "";
  }

  // Choices
  const choicesEl = document.getElementById("choices");
  choicesEl.innerHTML = "";
  choicesEl.className = "choices" + (q.wideChoices ? " single-col" : "");

  q.choices.forEach((choice, i) => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = choice.label;
    btn.addEventListener("click", () => handleAnswer(choice, btn));
    choicesEl.appendChild(btn);
  });

  // Reset feedback + next button
  const feedbackEl = document.getElementById("feedback");
  feedbackEl.style.display = "none";
  feedbackEl.textContent = "";
  feedbackEl.className = "feedback";

  const nextBtn = document.getElementById("btn-next");
  nextBtn.style.display = "none";
  nextBtn.textContent = idx < total - 1 ? "Next Question →" : "See My Results →";
}

// ── HANDLE ANSWER ─────────────────────────────────────────
function handleAnswer(choice, clickedBtn) {
  if (answered) return;
  answered = true;

  const q = questions[currentIndex];

  // Disable all choices immediately to prevent double-clicks
  document.querySelectorAll(".choice-btn").forEach(b => { b.disabled = true; });

  // Initialize section tracking
  if (!sectionScores[q.section]) {
    sectionScores[q.section] = { correct: 0, total: 0 };
  }
  sectionScores[q.section].total++;

  // Highlight correct answer
  document.querySelectorAll(".choice-btn").forEach(b => {
    const matchedChoice = q.choices.find(c => c.label === b.textContent);
    if (matchedChoice && matchedChoice.correct) b.classList.add("correct");
  });

  if (choice.correct) {
    clickedBtn.classList.add("correct");
    score++;
    sectionScores[q.section].correct++;
  } else {
    clickedBtn.classList.add("wrong");
  }

  // Feedback
  const feedbackEl = document.getElementById("feedback");
  if (choice.correct && choice.feedback) {
    feedbackEl.textContent = choice.feedback;
    feedbackEl.className = "feedback correct";
    feedbackEl.style.display = "block";
  } else if (!choice.correct) {
    const correctChoice = q.choices.find(c => c.correct);
    const msg = correctChoice && correctChoice.feedback
      ? `The correct answer is "${correctChoice.label}." ${correctChoice.feedback}`
      : `The correct answer is "${correctChoice ? correctChoice.label : '—'}."`;
    feedbackEl.textContent = msg;
    feedbackEl.className = "feedback wrong";
    feedbackEl.style.display = "block";
  }

  document.getElementById("btn-next").style.display = "inline-block";
}

// ── NEXT BUTTON ───────────────────────────────────────────
document.getElementById("btn-next").addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < questions.length) {
    loadQuestion(currentIndex);
  } else {
    showResults();
  }
});

// ── RESULTS ───────────────────────────────────────────────
function showResults() {
  getScreen("screen-quiz").classList.remove("active");
  getScreen("screen-results").classList.add("active");

  const total = questions.length;
  const pct   = Math.round((score / total) * 100);

  document.getElementById("score-number").textContent = score;
  document.getElementById("score-total").textContent  = `/ ${total}`;
  document.getElementById("score-pct").textContent    = `${pct}%`;

  // Readiness message
  let icon, heading, message;
  if (pct >= 90) {
    icon    = "✓";
    heading = "Strong Readiness";
    message = "You appear well prepared for Music 38A. Your foundational skills are solid. The course will introduce new concepts quickly — you're in a good position to keep up.";
  } else if (pct >= 75) {
    icon    = "◈";
    heading = "Likely Ready";
    message = "You may be prepared for Music 38A, but review of some fundamentals is strongly recommended before the semester begins. Pay attention to any sections below where you lost points.";
  } else if (pct >= 60) {
    icon    = "△";
    heading = "Borderline";
    message = "Students scoring in this range sometimes struggle in Music 38A. Consider reviewing note reading, rhythm, and meter carefully before the course begins. Office hours in Week 1 are strongly encouraged.";
  } else {
    icon    = "◻";
    heading = "Additional Preparation Recommended";
    message = "Students scoring in this range typically find Music 38A very difficult. You may want to consider taking Music Fundamentals before beginning the theory sequence — that course is designed to build exactly the skills this exam assesses.";
  }

  document.getElementById("results-icon").textContent   = icon;
  document.getElementById("results-heading").textContent = heading;
  document.getElementById("readiness-message").textContent = message;

  // Section breakdown
  const breakdownEl = document.getElementById("section-breakdown");
  breakdownEl.innerHTML = "<h3>Score by Section</h3>";

  // Dedupe section order
  const sectionOrder = [...new Set(questions.map(q => q.section))];
  sectionOrder.forEach(sec => {
    const data = sectionScores[sec] || { correct: 0, total: 0 };
    const row = document.createElement("div");
    row.className = "breakdown-row";
    row.innerHTML = `
      <span>${sec}</span>
      <span class="breakdown-score">${data.correct} / ${data.total}</span>
    `;
    breakdownEl.appendChild(row);
  });
}
