
import './App.css';
import {Provider} from "react-redux"
import store from './redux/Store';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import RawJson from './components/RawJson';

function App() {
  return (
    <Provider store = {store}>
    <div className="App">
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/rawjson" element={<RawJson />} />
    </Routes>
    </div>
    </Provider>
  );
}

export default App;
