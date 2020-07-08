import {HELLO_WORLD} from './api'

export function initialData() {
    return (dispatch) => {
        return {
            dispatch
        }
    }
}