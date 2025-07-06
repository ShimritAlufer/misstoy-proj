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

export function toyReducer(state = initialState, cmd) {
  switch (cmd.type) {
    case 'SET_FILTER':
      return { ...state, filterBy: cmd.filterBy }
    default:
      return state
  }
}
