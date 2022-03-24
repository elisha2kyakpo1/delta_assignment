import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import './App.css';
// import SignIn from './components/users_register/SignIn';
import SignUp from './components/users_register/SignUp';
// import Members from './components/members/Members';
import { store } from "./redux/ConfigureStore";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <SignUp />
      </div>
    </Provider>
  );
}

export default App;
