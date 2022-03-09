
import './App.css';
import {Provider} from "react-redux"
import store from './redux/Store';
import Home from './components/Home';

function App() {
  return (
    <Provider store = {store}>
    <div className="App">
     <Home/>
    </div>
    </Provider>
  );
}

export default App;
