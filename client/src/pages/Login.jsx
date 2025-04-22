import React from 'react';
import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
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
      {/* <Footer /> */}
    </>
  );
};

export default Login;
