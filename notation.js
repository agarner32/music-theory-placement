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
    if (n.dots) Dot.buildAndAttach([sn], { all: true });
    return sn;
  });

  // Beaming
  let beams = [];
  if (config.beamGroups) {
    beams = config.beamGroups.map(group => new Beam(group.map(i => staveNotes[i])));
  } else {
    const eighths = staveNotes.filter(n => ["8","16","8d"].includes(n.getDuration()));
    if (eighths.length >= 2) beams = [new Beam(eighths)];
  }

  let numBeats = 4, beatValue = 4;
  if (config.timeSignature) {
    const parts = config.timeSignature.split("/");
    numBeats  = parseInt(parts[0]);
    beatValue = parseInt(parts[1]);
  } else {
    const durMap = { w: 1, h: 2, q: 4, qd: 2.67, "8": 8 };
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
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";

  const WW = 36;
  const WH = 110;
  const BW = 22;
  const BH = 68;
  const whites = ["C","D","E","F","G","A","B","C"];
  const totalW = WW * whites.length + 2;

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

  whites.forEach((note, i) => {
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
    rect.se