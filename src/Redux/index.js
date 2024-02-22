import { combineReducers } from "redux";
import tablereducer from "./Reducer";
import filterreducer from "./FilterReducer"
import orderreducer from "./orderreducer";

const reducer = combineReducers({
    tablereducer : tablereducer,
    filterreducer : filterreducer,
    orderreducer : orderreducer
})
export default reducer