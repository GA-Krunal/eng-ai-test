
import './App.css';
import {Provider} from "react-redux"
import store from './redux/store';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AsteroidInfo from './components/AsteroidInfo';
import Home from './components/Home';

function App() {
  return (
    <Provider store = {store}>
    <div className="App">
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/asteroidinfo" element={<AsteroidInfo />} />
    </Routes>
    </div>
    </Provider>
  );
}

export default App;
