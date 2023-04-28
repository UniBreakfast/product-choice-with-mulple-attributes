export { assignListeners }

function assignListeners() {
  const variationSelect = document.getElementById('variations')

  variationSelect.onchange = () => {
    const variation = JSON.parse(variationSelect.value)
    
    applyFIlter(variation)
  }
}

import { applyFIlter } from './apply.js'
