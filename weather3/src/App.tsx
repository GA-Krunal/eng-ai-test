import React from 'react';
import Home from './components/Home'

import WeatherInfo from "./components/WeatherInfo"
import CountryInfo from "./components/CountryInfo"
import {Provider} from "react-redux"
import {Routes , Route} from "react-router-dom"
import store from "./redux/Store"

function App() {
  return (
     <Provider store = {store}>
    <div className="App">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/countryInfo" element={<CountryInfo/>}/>
      <Route path="/weatherInfo" element={<WeatherInfo/>}/>
      </Routes>
    </div>
     </Provider>
  );
}

export default App;
