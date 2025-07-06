import { toyReducer } from './toy.reducer.module'
import { combineReducers, compose, legacy_createStore as createStore } from 'redux'

const rootReducer = combineReducers({
    toyModule: toyReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(rootReducer, composeEnhancers())
