export { showFilters }

function showFilters(product) {
  const { attributes, variations } = product
  const filters = document.getElementById('filters')
  
  for (const attribute of attributes) {
    const filter = document.createElement('fieldset')
    
    filter.innerHTML = `
      <legend>${attribute.name}</legend>

      <ul>${
        attribute.values.map(value => `
          <li>
            <label>
              <input type="radio" name="${attribute.name}" value="${value}" />
              ${value}
            </label>
          </li>
        `).join('')
      }</ul>
    `

    filters.append(filter)
  }
  
  applyFIlter(variations[0])
}

import { applyFIlter } from './apply.js'
