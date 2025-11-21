import React, { useEffect, useState } from "react";
import { data, Route, useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import logo from '../../Projectlogo.jpg';
import  Login  from "../Login/Login.css";

const Log = () => {
    const [name, setname] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();
  
    const checkdata = () => {
      const dt = JSON.parse(localStorage.getItem("Login_details"));
      const finddt = dt?.find((fd) => fd.name === name);
      if (finddt && finddt.password === password) {
        localStorage.setItem("Login_user", JSON.stringify(finddt));
        navigate("/dashboard");
      } else {
        alert("Invalid Credentials");
      }
    };
  
      return (
      <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#e8f5e9' }}>
        <div className="d-flex p-4 shadow-lg rounded" style={{ backgroundColor: '#f1f8e9', borderRadius: '15px' }}>
      <div className="p-4" style={{ minWidth: '300px' }}>
            <h2 className="login-title">Login</h2>
            <p className="login-subtitle">Sign In to your account</p>
            <div className="input-group">
              <FaUser className="input-icon" />
              <input
                onChange={(e) => setname(e.target.value)}
                className="form-control"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="input-group">
              <FaLock className="input-icon" />
              <input
                onChange={(e) => setpassword(e.target.value)}
                className="form-control"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="col-md-4 d-flex">
              <button onClick={checkdata} className="btn login-btn">Login</button>
              <button onClick={()=>navigate('/Register')} className="btn register-btn mx-2">Register</button>
            </div>
          </div>
          <div className="login-right">
            <img style={{height:"100%",width:"100%"}} src={logo} alt="Logo" className="logo" />
          </div>
        </div>
      </div>
    );
  };
  
  export default Log;
  