// importar todos los reducers
import {
    combineReducers
} from "redux";
import counterReducer from './counterReducer'

// exportar todos los reducers
export default combineReducers({
    counterReducer
    // sumar todos los reducers más que haya.
})