import { createStore } from "redux";
import WeatherReducer from "./redux/WeatherReducer";

const store = createStore(WeatherReducer);

export default store;
