import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Car from './components/Car'
import Login from './components/Login'
import cookie from 'cookie'

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie);
    return cookies["loggedIn"] ? true : false;
  };

const ProtectedRoute = (props) => {

    const { component: Component, ...rest } = props;
  
    return (
      checkAuth() === true ? ( <Component {...rest} /> ) : ( <Navigate to="/login" /> )
    );
  };

const Router = () => {
   
    return (
        <Routes>
            <Route exact path="/" element={<ProtectedRoute component={ Home } /> } />
            <Route path="/login" element={<Login/>} />
                <Route path="/about" element={<ProtectedRoute component={ About } /> } />
            <Route path="/car/:id" element={<ProtectedRoute component={ Car } /> } />
        </Routes>
    );
};

export default Router;