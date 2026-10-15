const LAYERS = [['L', 'R'], ['D', 'U'], ['B', 'F']];

export function pointerDragMode(pointerType, button, { desktop, swapMouseButtons, touchMode, paintable }) {
  if (pointerType === 'touch') return touchMode;
  if (pointerType !== 'mouse' || !desktop) return 'rotate';
  if (button !== 0 && button !== 2) return null;
  if (paintable) return button === 0 ? 'rotate' : null;
  return button === (swapMouseButtons ? 0 : 2) ? 'move' : 'rotate';
}

export function layerTurn(spec, slot, axis, direction) {
  const coordinate = spec.cubies[spec.stickers[slot].cubie].pos[axis];
  const [negative, positive] = LAYERS[axis];
  if (coordinate === spec.m) return positive + (direction > 0 ? "'" : '');
  if (coordinate === -spec.m) return negative + (direction > 0 ? '' : "'");
  return `${positive}${direction > 0 ? '' : "'"} ${negative}${direction > 0 ? "'" : ''}`;
}

// Candidates are the screen-projected tangents of positive turns about the two
// axes in the touched face. Pick the one that follows the finger most closely.
export function swipeTurn(spec, slot, candidates, dx, dy) {
  if (Math.hypot(dx, dy) < 24) return null;
  let best = null;
  for (const { axis, x, y } of candidates) {
    const length = Math.hypot(x, y);
    if (length < 1e-6) continue;
    const dot = (x * dx + y * dy) / length;
    if (!best || Math.abs(dot) > best.score) best = { axis, direction: Math.sign(dot), score: Math.abs(dot) };
  }
  if (!best || best.score < Math.hypot(dx, dy) * 0.65) return null;
  return layerTurn(spec, slot, best.axis, best.direction);
}
