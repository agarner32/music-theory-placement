// =============================================
//  NOTATION.JS — VexFlow rendering helper
// =============================================
const { Renderer, Stave, StaveNote, Beam, Voice, Formatter, Accidental, Dot } = Vex.Flow;
function renderNotation(containerId, config) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = "";

  const width  = config.width || Math.min(container.offsetWidth || 480, 480);
  const height = 130;

  const renderer = new Renderer(container, Renderer.Backends.SVG);
  renderer.resize(width, height);
  const ctx = renderer.getContext();
  ctx.setFont("Arial", 10);

  const staveX = 20;
  const staveW = width - 40;
  const stave  = new Stave(staveX, 20, staveW);

  stave.addClef(config.clef || "treble");
  if (config.timeSignature) stave.addTimeSignature(config.timeSignature);
  stave.setContext(ctx).draw();

  const staveNotes = config.notes.map(n => {
    const sn = new StaveNote({
      keys:           n.keys,
      duration:       n.duration,
      clef:           config.clef || "treble",
      stem_direction: -1
    });
    n.keys.forEach((key, i) => {
      if (key.includes("#")) sn.addModifier(new Accidental("#"), i);
      else if (key.includes("b") && key.match(/[a-g]b/)) sn.addModifier(new Accidental("b"), i);
    });
    sn._originalDuration = n.duration;
    if (n.duration.endsWith("d") || n.dots) Dot.buildAndAttach([sn], { all: true });
    return sn;
  });

  // Beaming: use explicit beamGroups if provided, otherwise auto-beam all eighths
  let beams = [];
  if (config.beamGroups) {
    beams = config.beamGroups.map(group => new Beam(group.map(i => staveNotes[i])));
  } else {
    const eighths = staveNotes.filter(n => n._originalDuration === "8");
    if (eighths.length >= 2) beams = [new Beam(eighths)];
  }

  let numBeats = 4, beatValue = 4;
  if (config.timeSignature) {
    const parts = config.timeSignature.split("/");
    numBeats  = parseInt(parts[0]);
    beatValue = parseInt(parts[1]);
  } else {
    const durMap = { w: 1, h: 2, q: 4, qd: 2.67, hd: 1.33, "8": 8, "8d": 5.33, "16": 16 };
    let totalQ = 0;
    config.notes.forEach(n => { totalQ += 16 / (durMap[n.duration] || 4); });
    numBeats  = Math.max(4, Math.ceil(totalQ / 4));
    beatValue = 4;
  }

  const voice = new Voice({ num_beats: numBeats, beat_value: beatValue }).setMode(Voice.Mode.SOFT);
  voice.addTickables(staveNotes);
  new Formatter().joinVoices([voice]).format([voice], staveW - 60);
  voice.draw(ctx, stave);
  beams.forEach(b => b.setContext(ctx).draw());
}

function renderKeyboard(containerId, config) {
  // config = { highlight: "F#" | "Bb" | "E" | "F" etc. }
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";

  const WW = 36;  // white key width
  const WH = 110; // white key height
  const BW = 22;  // black key width
  const BH = 68;  // black key height
  const whites = ["C","D","E","F","G","A","B","C"];
  const totalW = WW * whites.length + 2;

  // Black key positions (x offset from left edge of octave)
  // C#, D#, (gap), F#, G#, A#
  const blackKeys = [
    { name: ["C#","Db"], x: WW - BW/2 },
    { name: ["D#","Eb"], x: WW*2 - BW/2 },
    { name: ["F#","Gb"], x: WW*4 - BW/2 },
    { name: ["G#","Ab"], x: WW*5 - BW/2 },
    { name: ["A#","Bb"], x: WW*6 - BW/2 },
  ];

  const highlight = config.highlight;

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", `0 0 ${totalW} ${WH + 20}`);
  svg.setAttribute("width", totalW);
  svg.setAttribute("height", WH + 20);

  // Draw white keys
  whites.forEach((note, i) => {
    const isHighlighted = highlight === note && !highlight.includes("#") && !highlight.includes("b");
    // Special case: highlight could be enharmonic of white key
    const enharmonics = { "E": "Fb", "B": "Cb", "C": "B#", "F": "E#" };
    const isEnharmonicHighlight = enharmonics[note] === highlight || highlight === note;

    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", i * WW + 1);
    rect.setAttribute("y", 1);
    rect.setAttribute("width", WW - 2);
    rect.setAttribute("height", WH - 2);
    rect.setAttribute("rx", "3");
    rect.setAttribute("fill", isEnharmonicHighlight ? "#c8953a" : "white");
    rect.setAttribute("stroke", "#333");
    rect.setAttribute("stroke-width", "1.5");
    svg.appendChild(rect);

    // Note label at bottom
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", i * WW + WW/2);
    text.setAttribute("y", WH - 8);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("font-size", "11");
    text.setAttribute("font-family", "Arial");
    text.setAttribute("fill", isEnharmonicHighlight ? "white" : "#666");
    text.textContent = note;
    svg.appendChild(text);
  });

  // Draw black keys on top
  blackKeys.forEach(bk => {
    const isHighlighted = bk.name.includes(highlight);
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", bk.x);
    rect.setAttribute("y", 1);
    rect.setAttribute("width", BW);
    rect.setAttribute("height", BH);
    rect.setAttribute("rx", "2");
    rect.setAttribute("fill", isHighlighted ? "#c8953a" : "#1a1a2e");
    rect.setAttribute("stroke", "#000");
    rect.setAttribute("stroke-width", "1");
    svg.appendChild(rect);
  });

  container.appendChild(svg);
}

function renderKeySignature(containerId, config) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = "";

  const width  = 260;
  const height = 140;

  const renderer = new Renderer(container, Renderer.Backends.SVG);
  renderer.resize(width, height);
  const ctx = renderer.getContext();

  const stave = new Stave(20, 25, 220);
  stave.addClef(config.clef || "treble");
  stave.addKeySignature(config.key);
  stave.setContext(ctx).draw();
}