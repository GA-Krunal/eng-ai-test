import './App.css';
import {Provider} from "react-redux"
// import store from './redux/store';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Quiz from './components/Quiz';
import store from './redux/store';
import Result from './components/Result';

function App() {
  return (
    <Provider store = {store}>
   <div className="App" style={{ display:"flex" , alignItems:"center" , justifyContent :"center" ,flexDirection:'column', margin:"50px" }}>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/quiz" element={<Quiz/>} />
      <Route path="/result" element={<Result/>} />
    </Routes>
    </div>
    </Provider>
  );
}

export default App;

