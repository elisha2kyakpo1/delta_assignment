import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Members from './components/Members';
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
