import { createStore, combineReducers } from 'redux'
import numberReducer from './reducers/NumberReducer'

const reduces = combineReducers({
    numbers : numberReducer
})

function storeConfig() {
    return createStore(reduces)
}

export default storeConfig