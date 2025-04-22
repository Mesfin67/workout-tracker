import React from 'react';
import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import ProfileForm from '../components/ProfileForm';

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h2>Profile Management</h2>
        <ProfileForm />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Profile;
