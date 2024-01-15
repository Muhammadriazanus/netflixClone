import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { AuthContextProvider } from './context/AuthContext';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Account from './pages/Account';
import ProtectedRouting from './component/ProtectedRouting';

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/account'
            element={
              <ProtectedRouting>
                <Account />
              </ProtectedRouting>
            } 
            />

        </Routes>
      </AuthContextProvider>

    </>
  );
}

export default App;
