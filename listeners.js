export { assignListeners }

function assignListeners(product) {
  const variationSelect = document.getElementById('variations')
  const filterForm = document.getElementById('filters')

  variationSelect.onchange = () => {
    const variation = JSON.parse(variationSelect.value)

    applyFIlter(variation)
    updateFilterSelection(product, variation)
  }

  filterForm.onchange = () => {
    const variation = {}
    const checkedRadios = filterForm.querySelectorAll(':checked')

    for (const radio of checkedRadios) {
      variation[radio.name] = radio.value
    }

    applyFIlter(variation)
    updateFilterSelection(product, variation)
  }
}

import { applyFIlter } from './apply.js'
import { updateFilterSelection } from './update.js'
