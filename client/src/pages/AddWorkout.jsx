import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import WorkoutForm from '../components/WorkoutForm';
import WorkoutCard from '../components/WorkoutCard';
import api, { setAuthToken } from '../utils/api';
import { useAuth } from '../context/AuthContext';

const AddWorkout = () => {
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

  const handleWorkoutAdded = (newWorkout) => {
    setWorkouts([newWorkout, ...workouts]);
  };

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
        <div className="row">
          <WorkoutForm onWorkoutAdded={handleWorkoutAdded} />
          <div className="col-md-8">
            <h4>Existing Workouts:</h4>
            {workouts.length === 0 ? (
              <p>No workouts added.</p>
            ) : (
              workouts.map(workout => (
                <WorkoutCard key={workout._id} workout={workout} onDelete={handleDelete} onUpdate={handleUpdate} />
              ))
            )}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default AddWorkout;
