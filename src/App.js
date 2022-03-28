import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SignIn from './components/users_register/SignIn';
import SignUp from './components/users_register/SignUp';
import Members from './components/members/Members';
import { store } from "./redux/ConfigureStore";
import NavBar from './components/NavBar';

 const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Members />} />
            <Route path="/sign_in" element={<SignIn />} />
            <Route path="/sign_up" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
