import HomeReducer from "./HomeReducer"
import {createStore} from "redux"

const store = createStore(HomeReducer)

export default store;