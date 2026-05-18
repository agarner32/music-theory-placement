// =============================================
//  NOTATION.JS — VexFlow rendering helper
// =============================================
const { Renderer, Stave, StaveNote, Beam, Voice, Formatter, Accidental } = Vex.Flow;

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
  const stave = new Stave(staveX, 20, staveW);

  stave.addClef(config.clef || "treble");
  if (config.timeSignature) {
    stave.addTimeSignature(config.timeSignature);
  }
  stave.setContext(ctx).draw();

  // Build StaveNotes
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
    return sn;
  });

  // Manually beam consecutive eighth notes
  const eighths = staveNotes.filter(n => n.getDuration() === "8");
  const beams = eighths.length >= 2 ? [new Beam(eighths)] : [];

  // Voice
  let numBeats = 4, beatValue = 4;
  if (config.timeSignature) {
    const parts = config.timeSignature.split("/");
    numBeats  = parseInt(parts[0]);
    beatValue = parseInt(parts[1]);
  } else {
    const durMap = { w: 1, h: 2, q: 4, "8": 8 };
    let totalQ = 0;
    config.notes.forEach(n => { totalQ += 16 / (durMap[n.duration] || 4); });
    numBeats  = Math.max(4, Math.ceil(totalQ / 4));
    beatValue = 4;
  }

  const voice = new Voice({ num_beats: numBeats, beat_value: beatValue }).setMode(Voice.Mode.SOFT);
  voice.addTickables(staveNotes);

  new Formatter().joinVoices([voice]).format([voice], staveW - 60);
  voice.draw(ctx, stave);

  // Draw beams
  beams.forEach(b => b.setContext(ctx).draw());
}
