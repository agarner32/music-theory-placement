// =============================================
//  NOTATION.JS — VexFlow rendering helper
// =============================================
//  Renders a single musical example into a
//  given container element using VexFlow 4.
// =============================================

const { Renderer, Stave, StaveNote, Voice, Formatter, Accidental, StaveConnector } = Vex.Flow;

/**
 * renderNotation(containerId, config)
 *
 * config = {
 *   clef:            "treble" | "bass"
 *   timeSignature:   "4/4" | "3/4" | "6/8" | null
 *   notes:           [ { keys: ["b/4"], duration: "w"|"h"|"q"|"8", accidental: "#"|"b"|null } ]
 *   width:           (optional) number
 * }
 */
function renderNotation(containerId, config) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Clear any previous render
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

  // Build VexFlow StaveNotes
  const staveNotes = config.notes.map(n => {
    const sn = new StaveNote({
      keys:          n.keys,
      duration:      n.duration,
      clef:          config.clef || "treble",
      stem_direction: -1
    });
    // Add accidentals if needed — VexFlow requires explicit markup
    n.keys.forEach((key, i) => {
      if (key.includes("#")) sn.addModifier(new Accidental("#"), i);
      else if (key.includes("b") && key.match(/[a-g]b/)) sn.addModifier(new Accidental("b"), i);
    });
    return sn;
  });

  // Determine time signature denominator for voice duration
  let numBeats = 4, beatValue = 4;
  if (config.timeSignature) {
    const parts = config.timeSignature.split("/");
    numBeats  = parseInt(parts[0]);
    beatValue = parseInt(parts[1]);
  } else {
    // No time sig: calculate total duration from notes
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
}
