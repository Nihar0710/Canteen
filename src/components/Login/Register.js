import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../../Projectlogo.jpeg';
import  Login  from "../Login/Login.css";

const Register = () => {
  const [name, setname] = useState('');
  const [password, setpassword] = useState('');
  const navigate = useNavigate();

  const savedata = () => {
    if (name === '' || password === '') {
      alert('Bhai Form Bhar');
      return false;
    }

    const dt = localStorage.getItem('Login_details');
    if (dt) {
      const parsedata = JSON.parse(dt);
      const checkdata = parsedata.find((dt) => dt.name === name);
      if (checkdata === undefined) {
        parsedata.push({ name: name, password: password });
        localStorage.setItem('Login_details', JSON.stringify(parsedata));
      } else {
        alert('User already exists');
        return false;
      }
    } else {
      localStorage.setItem('Login_details', JSON.stringify([{ name: name, password: password }]));
    }

    navigate('/');
  };

  return (
<div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#f4a9a3' }}>
    <div className="d-flex p-4 shadow-lg rounded" style={{ backgroundColor: '#f7b3ae', borderRadius: '15px' }}>
        <div className="p-4" style={{ minWidth: '300px' }}>
          <h2 style={{ fontWeight: 'bold', color: '#800000' }}>Register</h2>
          <p className="mb-4" style={{ color: '#5a2d2d' }}>Create your new account</p>

          <input
            onChange={(event) => setname(event.target.value)}
            className="form-control mb-3"
            type="text"
            placeholder="Username"
          />

          <input
            onChange={(event) => setpassword(event.target.value)}
            className="form-control mb-3"
            type="password"
            placeholder="Password"
          />

          <div className="col-md-4 d-flex">
            <button onClick={savedata} className="btn" style={{ backgroundColor: '#8B0000', color: 'white', fontWeight: 'bold' }}>
              Register
            </button>
            <button onClick={() => navigate('/')} className="btn btn-Login mx-2" style={{ backgroundColor: '#8B0000', color: 'white', fontWeight: 'bold' }}>
              Login
            </button>
          </div>
        </div>
        <div className="login-right">
            <img style={{height:"100%",width:"100%"}} src={logo} alt="Logo" className="logo" />
        </div>
    </div>
</div>
  );
};

export default Register;