import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import { AuthContextProvider } from './context/AuthContext';
import Login from './pages/Login';
import Account from './pages/Account';
import SignUp from './pages/SignUp';
import ProtectedRoute from './component/ProtectedRoute';

function App() {
  return (
    <>
      <AuthContextProvider>
      <Navbar/>
      <Routes>
        <Route path ='/' element={<Home/>} />
        <Route path ='/login' element={<Login/>} />
        <Route path ='/account' element={<ProtectedRoute>
          <Account/>
        </ProtectedRoute>} />
        <Route path ='/signup' element={<SignUp/>} />
      </Routes>
      </AuthContextProvider>
    </>
   
  );
}

export default App;
