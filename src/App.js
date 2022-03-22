import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import './App.css';
import Members from './components/members/Members';
import { store } from "./redux/ConfigureStore";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Members />
      </div>
    </Provider>
  );
}

export default App;
