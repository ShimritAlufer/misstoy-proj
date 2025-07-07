export const SET_TOYS = 'SET_TOYS'
export const SET_FILTER = 'SET_FILTER'

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
    case SET_FILTER:
      return { 
        ...state,
        filterBy: { ...state.filterBy, ...cmd.filterBy }
       }
    default:
      return state
  }
}
