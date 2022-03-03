import { createStore } from "redux";
import AsteroidReducer from "./AsteroidReducer";

const store = createStore(AsteroidReducer);

export default store;
