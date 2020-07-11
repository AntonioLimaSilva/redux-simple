import { 
    EDIT_NUMBER_MIN, 
    EDIT_NUMBER_MAX
} from './ActionType'

// Action creator
export function editNumberMin(newValue) {
    return {
        type: EDIT_NUMBER_MIN,
        payload: newValue
    }
}

// Action creator
export function editNumberMax(newValue) {
    return {
        type: EDIT_NUMBER_MAX,
        payload: newValue
    }
}