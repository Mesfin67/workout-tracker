import React from 'react';
import Navbar from '../components/Navbar';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5 d-flex justify-content-center">
        <div className="col-md-6">
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default Login;
