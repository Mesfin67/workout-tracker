import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import api, { setAuthToken } from '../utils/api';
import { useAuth } from '../context/AuthContext';
import WorkoutCard from '../components/WorkoutCard';
import ProgressChart from '../components/ProgressChart';
import Stopwatch from '../components/Stopwatch';

const Dashboard = () => {
  const { token } = useAuth();
  setAuthToken(token);
  const [workouts, setWorkouts] = useState([]);

  const fetchWorkouts = async () => {
    try {
      const res = await api.get('/workouts');
      setWorkouts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => { fetchWorkouts(); }, [token]);

  const handleDelete = (id) => {
    setWorkouts(workouts.filter(w => w._id !== id));
  };

  const handleUpdate = (updatedWorkout) => {
    setWorkouts(workouts.map(w => (w._id === updatedWorkout._id ? updatedWorkout : w)));
  };

  return (
    <>
      <Navbar />

      <div className="container my-5">
      <Stopwatch />

        <h2>Your Workouts</h2>
        {workouts.length === 0 ? (
          <p>No workouts added.</p>
        ) : (
          workouts.map(workout => (
            <WorkoutCard key={workout._id} workout={workout} onDelete={handleDelete} onUpdate={handleUpdate} />
          ))
        )}
        <ProgressChart />
      </div>
    </>
  );
};

export default Dashboard;
