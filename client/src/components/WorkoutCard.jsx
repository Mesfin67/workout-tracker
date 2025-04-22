import React, { useState } from 'react';
import api, { setAuthToken } from '../utils/api';
import { useAuth } from '../context/AuthContext';

const WorkoutCard = ({ workout, onDelete, onUpdate }) => {
  const { token } = useAuth();
  setAuthToken(token);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    title: workout.title,
    load: workout.load,
    reps: workout.reps,
    sets: workout.sets,
    duration: workout.duration
  });
  const [error, setError] = useState('');

  const handleDelete = async () => {
    try {
      await api.delete(`/workouts/${workout._id}`);
      onDelete(workout._id);
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdate = async () => {
    try {
      const res = await api.put(`/workouts/${workout._id}`, formData);
      onUpdate(res.data);
      setEditMode(false);
    } catch (err) {
      setError(err.response?.data?.error || 'Error updating workout');
    }
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        {editMode ? (
          <>
            {error && <div className="alert alert-danger">{error}</div>}
            <input
              type="text"
              className="form-control mb-2"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
            <div className="row">
              <div className="col">
                <input
                  type="number"
                  className="form-control"
                  value={formData.load}
                  onChange={(e) => setFormData({ ...formData, load: Number(e.target.value) })}
                  placeholder="Load (kg)"
                />
              </div>
              <div className="col">
                <input
                  type="number"
                  className="form-control"
                  value={formData.reps}
                  onChange={(e) => setFormData({ ...formData, reps: Number(e.target.value) })}
                  placeholder="Reps"
                />
              </div>
              <div className="col">
                <input
                  type="number"
                  className="form-control"
                  value={formData.sets}
                  onChange={(e) => setFormData({ ...formData, sets: Number(e.target.value) })}
                  placeholder="Sets"
                />
              </div>
              <div className="col">
                <input
                  type="number"
                  className="form-control"
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: Number(e.target.value) })}
                  placeholder="Duration (min)"
                />
              </div>
            </div>
            <div className="mt-2">
              <button className="btn btn-success me-2" onClick={handleUpdate}>Save</button>
              <button className="btn btn-secondary" onClick={() => setEditMode(false)}>Cancel</button>
            </div>
          </>
        ) : (
          <>
            <h5 className="card-title">{workout.title}</h5>
            <p className="card-text">
              Load: {workout.load} kg<br />
              Reps: {workout.reps}<br />
              Sets: {workout.sets}<br />
              Duration: {workout.duration} min
            </p>
            <button className="btn btn-warning me-2" onClick={() => setEditMode(true)}>Update</button>
            <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
          </>
        )}
      </div>
    </div>
  );
};

export default WorkoutCard;
