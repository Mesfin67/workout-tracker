import React, { useState, useEffect } from 'react';
import api, { setAuthToken } from '../utils/api';
import { useAuth } from '../context/AuthContext';

const ProfileForm = () => {
  const { token, user } = useAuth();
  setAuthToken(token);

  const [profile, setProfile] = useState({
    name: '',
    age: '',
    gender: '',
    weight: '',
    height: '',
    fitnessGoal: '',
    profilePicture: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get('/profile');
        setProfile({
          name: res.data.name || '',
          age: res.data.age || '',
          gender: res.data.gender || '',
          weight: res.data.weight || '',
          height: res.data.height || '',
          fitnessGoal: res.data.fitnessGoal || '',
          profilePicture: res.data.profilePicture || ''
        });
      } catch (err) {
        console.error(err);
      }
    };
    fetchProfile();
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    try {
      const res = await api.put('/profile', profile);
      setProfile({
        name: res.data.name,
        age: res.data.age,
        gender: res.data.gender,
        weight: res.data.weight,
        height: res.data.height,
        fitnessGoal: res.data.fitnessGoal,
        profilePicture: res.data.profilePicture
      });
      setMessage('Profile updated successfully.');
    } catch (err) {
      setError(err.response?.data?.error || 'Error updating profile');
    }
  };

  return (
    <div className="card p-4 shadow">
      <h3 className="card-title text-center mb-3">Update Profile</h3>
      {message && <div className="alert alert-success">{message}</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="profileName" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="profileName"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="profileAge" className="form-label">Age</label>
          <input
            type="number"
            className="form-control"
            id="profileAge"
            value={profile.age}
            onChange={(e) => setProfile({ ...profile, age: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="profileGender" className="form-label">Gender</label>
          <input
            type="text"
            className="form-control"
            id="profileGender"
            value={profile.gender}
            onChange={(e) => setProfile({ ...profile, gender: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="profileWeight" className="form-label">Weight</label>
          <input
            type="number"
            className="form-control"
            id="profileWeight"
            value={profile.weight}
            onChange={(e) => setProfile({ ...profile, weight: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="profileHeight" className="form-label">Height</label>
          <input
            type="number"
            className="form-control"
            id="profileHeight"
            value={profile.height}
            onChange={(e) => setProfile({ ...profile, height: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="profileGoal" className="form-label">Fitness Goal</label>
          <input
            type="text"
            className="form-control"
            id="profileGoal"
            value={profile.fitnessGoal}
            onChange={(e) => setProfile({ ...profile, fitnessGoal: e.target.value })}
          />
        </div>
        
        <button type="submit" className="btn btn-primary w-100">Update Profile</button>
      </form>
    </div>
  );
};

export default ProfileForm;
