import { fillVariationSelect } from './variations.js'
import { showFilters } from './filters.js'
import { product } from './product.js'
import { updateFilterSelection } from './update.js'
import { assignListeners } from './listeners.js'

fillVariationSelect(product.variations)
showFilters(product)
updateFilterSelection(product, product.variations[0])

assignListeners(product)
