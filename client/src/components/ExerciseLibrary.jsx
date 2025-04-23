import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ExerciseLibrary = () => {
  // State to hold the exercises fetched from the backend.
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch exercises when the component mounts.
  useEffect(() => {
    const fetchExercises = async () => {
      try {
        // Ensure that the base URL in your Axios instance (or here) matches your backend
        const response = await axios.get('/api/exercises');
        setExercises(response.data);
      } catch (err) {
        setError('Failed to fetch exercises.');
      } finally {
        setLoading(false);
      }
    };

    fetchExercises();
  }, []);

  if (loading) {
    return (
      <div className="container my-5">
        <p>Loading exercises...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container my-5">
        <p className="text-danger">{error}</p>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2>Exercise Library</h2>
      <div className="row">
        {exercises.map((exercise) => (
          <div className="col-md-4 mb-4" key={exercise.id}>
            <div className="card h-100">
              <img
                src={exercise.imageUrl}
                className="card-img-top"
                alt={exercise.name}
              />
              <div className="card-body">
                <h5 className="card-title">{exercise.name}</h5>
                <p className="card-text">{exercise.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExerciseLibrary;
