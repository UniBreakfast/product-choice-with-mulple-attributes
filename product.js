export { product }

const product = {
  attributes: [
    {name: 'color', values: ['red', 'green', 'blue']},
    {name: 'size', values: ['small', 'medium', 'large']},
    {name: 'material', values: ['glass', 'plastic', 'metal']},
    {name: 'shape', values: ['round', 'square', 'triangular']},
  ],
  variations: [
    
  ],
}

fillVariations(0.4)

function fillVariations(probability = 0.5) {
  const { attributes, variations } = product
  
  for (const attribute of attributes) {
    const { name, values } = attribute
    const newVariations = []
    
    if (variations.length === 0) {
      for (const value of values) {
        newVariations.push({[name]: value})
      }
    } else {
      for (const variation of variations) {
        for (const value of values) {
          newVariations.push({...variation, [name]: value})
        }
      }
    }
    
    variations.length = 0
    variations.push(...newVariations)
  }

  variations.push(...variations.splice(0).filter(() => Math.random() < probability))
}
