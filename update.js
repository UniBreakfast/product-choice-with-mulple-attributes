export { updateFilterSelection }

// disable radio buttons that are not available for 
function updateFilterSelection(product, variation) {
  const { attributes, variations } = product
  const attributesAbove = []

  let variationsLeft = [...variations]

  for (const attribute of attributes) {
    const { name } = attribute
    const radios = document.querySelectorAll(`[name="${name}"]`)

    variationsLeft = variationsLeft.filter(v => {
      return attributesAbove.every(({ name }) => v[name] === variation[name])
    })

    for (const radio of radios) {
      radio.disabled = !variationsLeft.some(variation => {
        return variation[name] === radio.value
      })
    }

    attributesAbove.push(attribute)
  }

  const correctRadios = document.querySelectorAll('#filters :checked:not(:disabled)')

  if (correctRadios.length < attributes.length) {
    const variation = variations.find(variation => {
      return [].every.call(correctRadios, radio => {
        return variation[radio.name] === radio.value
      })
    })

    applyFIlter(variation)
    updateFilterSelection(product, variation)
  }
}

import { applyFIlter } from './apply.js'
