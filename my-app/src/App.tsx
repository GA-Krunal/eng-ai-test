import Home from './Components/Home'
import AsteroidInfo from './Components/AsteroidInfo'
import './App.css';
import {Routes , Route} from "react-router-dom"
import {Provider} from "react-redux"
import store from "./Redux/Store"


function App() {
  return (
    <div className="App">
    <Provider store = {store}>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/asteroidinfo" element={<AsteroidInfo />} />
    </Routes>
    </Provider>
      
    </div>
  );
}

export default App;
