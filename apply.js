export { applyFIlter }

function applyFIlter(variation) {
  for (const [key, value] of Object.entries(variation)) {
    document.querySelector(`[name="${key}"][value="${value}"]`).checked = true
  }
}
