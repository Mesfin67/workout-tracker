import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import api, { setAuthToken } from '../utils/api';

const WorkoutForm = ({ onWorkoutAdded }) => {
  const { token } = useAuth();
  setAuthToken(token);

  const [title, setTitle] = useState('');
  const [load, setLoad] = useState('');
  const [reps, setReps] = useState('');
  const [sets, setSets] = useState('');
  const [duration, setDuration] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!title || !load || !reps || !sets || !duration) {
      setError('All fields are required.');
      return;
    }
    try {
      const res = await api.post('/workouts', {
        title,
        load: Number(load),
        reps: Number(reps),
        sets: Number(sets),
        duration: Number(duration)
      });
      onWorkoutAdded(res.data);
      // Reset form
      setTitle('');
      setLoad('');
      setReps('');
      setSets('');
      setDuration('');
    } catch (err) {
      setError(err.response?.data?.error || 'Error adding workout');
    }
  };

  return (
    <div className="col-md-4">
      <h4>Add a New Workout</h4>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Exercise Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            placeholder="Enter exercise name"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Load (kg)</label>
          <input
            type="number"
            className="form-control"
            value={load}
            placeholder="Enter load in kg"
            onChange={(e) => {
              const value = e.target.value;
              if (value >= 0) {
                setLoad(value);
              }
            }}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Reps</label>
          <input
            type="number"
            className="form-control"
            value={reps}
            placeholder="Enter number of reps"
            onChange={(e) => setReps(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Sets</label>
          <input
            type="number"
            className="form-control"
            value={sets}
            placeholder="Enter number of sets"
            onChange={(e) => setSets(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Duration (min)</label>
          <input
            type="number"
            className="form-control"
            value={duration}
            placeholder="Enter duration in minutes"
            onChange={(e) => setDuration(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Workout</button>
      </form>
    </div>
  );
};

export default WorkoutForm;
