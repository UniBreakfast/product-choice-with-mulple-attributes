export { fillVariationSelect }

function fillVariationSelect(variations) {
  const variationSelect = document.getElementById('variations')
  
  variationSelect.innerHTML = ''
  
  for (const variation of variations) {
    const option = document.createElement('option')
    option.value = JSON.stringify(variation)
    option.textContent = JSON.stringify(variation).replace(/[{}"]/g, '').replace(/([:,])/g, '$1 ')
    variationSelect.appendChild(option)
  }
}
