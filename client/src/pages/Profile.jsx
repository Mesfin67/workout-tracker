import React from 'react';
import Navbar from '../components/Navbar';
import ProfileForm from '../components/ProfileForm';

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h2>Profile</h2>
        <ProfileForm />
      </div>
    </>
  );
};

export default Profile;
