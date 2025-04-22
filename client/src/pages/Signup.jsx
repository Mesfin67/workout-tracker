import React from 'react';
import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import SignupForm from '../components/SignupForm';

const Signup = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5 d-flex justify-content-center">
        <div className="col-md-6">
          <SignupForm />
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Signup;
