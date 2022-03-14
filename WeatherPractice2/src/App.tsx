
import './App.css';
import {Provider} from "react-redux"
import store from './store';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Details from './components/Details';
import Home from './components/Home';
import CapitalWeather from './components/CapitalWeather';

function App() {
  return (
    <Provider store = {store}>
    <div className="App">
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/countryInfo" element={<Details/>} />
      <Route path="/capitalweather" element={<CapitalWeather/>} />
    </Routes>
    </div>
    </Provider>
  );
}

export default App;
