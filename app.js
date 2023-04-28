import { fillVariationSelect } from './variations.js'
import { showFilters } from './filters.js'
import { product } from './product.js'
import { assignListeners } from './listeners.js'

fillVariationSelect(product.variations)
showFilters(product)

assignListeners()
