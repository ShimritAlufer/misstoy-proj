import { toys } from '../../toy-data.js'

const initialState = {
  toys,
  filterBy: {
    txt: '',
    inStock: '',
    labels: [],
    sortBy: ''
  }
}

export function toyReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_FILTER':
      return { ...state, filterBy: action.filterBy }
    default:
      return state
  }
}
