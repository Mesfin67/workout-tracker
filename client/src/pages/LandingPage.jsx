import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import LoginForm from '../components/LoginForm';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container my-5 d-flex justify-content-center">
        <div className="col-md-6">
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
