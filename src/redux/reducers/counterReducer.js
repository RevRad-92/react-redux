// estado inicial del Reducer
const initialState = {
    value: 0 
}

// variables para ACTIONS
const COUNTER_UP = 'COUNTER_UP'
const COUNTER_DOWN = 'COUNTER_DOWN'
const COUNTER_RESET = 'COUNTER_RESET'
const COUNTER_SET_VALUE = 'COUNTER_SET_VALUE'
const COUNTER_NEW_CUSTOM_INITIAL = 'COUNTER_NEW_CUSTOM_INITIAL'

export const counterUp = () => {
    return {
        type: COUNTER_UP
    }
}

export const counterDown = () => {
    return {
        type: COUNTER_DOWN
    }
}

export const counterReset = () => {
    return {
        type: COUNTER_RESET
    }
}

export const counterSetValue = (newCounterValue) => {
    return {
        type: COUNTER_SET_VALUE,
        payload: newCounterValue 
    }
}

export const counterSetInitial = (newCounterInitial) => {
    return {
        type: COUNTER_NEW_CUSTOM_INITIAL,
        payload: newCounterInitial 
    }
    
}

// switch para que el reducer haga FILTRO
const reducer = (state = initialState, action) => {
    console.log({
        state,
        action
    })
    
    switch(action.type) {
        case COUNTER_UP: { // accion counter up
            return {
                ...state, // mantiene todo el resto igual
                value: state.value + 1 //modifica el value del initial state
            }
        }
        case COUNTER_DOWN: { // accion counter down
            return {
                ...state,
                value: state.value - 1
            }
        }
        case COUNTER_RESET: { // accion counter reset
            return {
                ...state,
                value: initialState.value
            }
        }
        case COUNTER_SET_VALUE: { // accion set value
            return {
                ...state,
                value: action.payload
            }
        }
        case COUNTER_NEW_CUSTOM_INITIAL: {
            return initialState.value = action.payload 
        }
        default: {
            return state
        }
    }
}

export default reducer


