import { 
    EDIT_NUMBER_MIN, 
    EDIT_NUMBER_MAX 
} from '../actions/ActionType'

const initialState = {
    min: 1,
    max: 10
}

export default function(state = initialState, action) {
    switch(action.type) {
        case EDIT_NUMBER_MIN:
            return { ...state, min: action.payload }
        case EDIT_NUMBER_MAX:
            return { ...state, max: action.payload }
        default:
            return state
    }
}