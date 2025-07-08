export const SET_TOYS = 'SET_TOYS'
export const SET_FILTER = 'SET_FILTER'
export const EDIT_TOY = 'EDIT_TOY'

const initialState = {
  toys: [],
  filterBy: {
    txt: '',
    inStock: '',
    labels: [],
    sortBy: ''
  }
}

export function toyReducer(state = initialState, cmd) {
  switch (cmd.type) {
    case SET_TOYS:
          return {
              ...state,
              toys: cmd.toys
          }
    case EDIT_TOY:
      return {
          ...state,
          toys: state.toys.map(toy => toy.id === cmd.toy.id ? cmd.toy : toy),
      }
    case SET_FILTER:
      return { 
        ...state,
        filterBy: { ...state.filterBy, ...cmd.filterBy }
       }
    default:
      return state
  }
}
