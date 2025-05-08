import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from '../components/Login/Login';
import Register from '../components/Login/Register';
import MyForm from '../components/MyForm';

const Myroutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<MyForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Myroutes;