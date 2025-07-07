import { showErrorMsg } from "../../services/event-bus.service.js"
import { toyService } from "../../services/toy.service.js"
import { store } from "../store.js"
import { SET_TOYS, SET_FILTER } from "./toy.reducer.js"
// import { SET_TOYS, REMOVE_TOY, ADD_TOY, EDIT_TOY, SET_FILTER } from "./toy.reducer.js"

export async function loadToys() {
  try {
    const filterBy = store.getState().toyModule.filterBy
    const toys = await toyService.query(filterBy)
    console.log('toys:', toys)
    store.dispatch({ type: SET_TOYS, toys })  
  } catch (err) {
    console.error('Error loading toys:', err)
    showErrorMsg('Cannot load toys')
  }
}

// export async function removeToy(toyId) {
//   try {
//     await toyService.remove(toyId)
//     store.dispatch({ type: REMOVE_TOY, toyId })
//   } catch (err) {
//     console.error('Cannot remove toy', err)
//   }
// }


// export async function saveToy(toyToSave) {
//   try {
//     const type = toyToSave.id ? EDIT_TOY : ADD_TOY
//     const toy = await toyService.save(toyToSave)
//     store.dispatch({ type, toy })
//     return toy
//   } catch (err) {
//     console.error('Cannot save toy', err)
//     throw err
//   }
// }

export function setFilter(filterBy) {
  store.dispatch({ type: SET_FILTER, filterBy })
}

// function onFilterChange(updatedFilter) {
//   dispatch({ type: 'SET_FILTER', filterBy: updatedFilter })
// }


