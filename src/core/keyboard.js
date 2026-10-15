export function handleUndoKey(event, frame, enabled, undo) {
  const target = event.target;
  if (event.key !== 'Backspace' || event.ctrlKey || event.metaKey || event.altKey
    || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target?.tagName) || target?.isContentEditable
    || !frame?.contains(target)) return false;
  event.preventDefault();
  if (enabled && !event.repeat) undo();
  return true;
}
