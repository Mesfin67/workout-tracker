import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import api, { setAuthToken } from '../utils/api';
import { useAuth } from '../context/AuthContext';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ProgressChart = () => {
  const { token } = useAuth();
  setAuthToken(token);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const res = await api.get('/workouts');
        // For example: count number of workouts per day
        const data = {};
        res.data.forEach(workout => {
          const date = new Date(workout.createdAt).toLocaleDateString();
          data[date] = (data[date] || 0) + 1;
        });
        const labels = Object.keys(data);
        const counts = Object.values(data);
        setChartData({
          labels,
          datasets: [
            {
              label: 'Workouts per Day',
              data: counts,
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
              borderWidth: 1,
              fill: true
            }
          ]
        });
      } catch (err) {
        console.error(err);
      }
    };
    fetchWorkouts();
  }, [token]);

  if (!chartData) return <p>Loading chart...</p>;

  return (
    <div className="card p-4 mt-3">
      <h4 className="mb-3">Progress Chart</h4>
      <Line data={chartData} />
    </div>
  );
};

export default ProgressChart;
