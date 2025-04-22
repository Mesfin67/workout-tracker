import React, { useState, useEffect, useRef } from 'react';

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    } else if (!running && intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [running]);

  const formatTime = (sec) => {
    const mins = Math.floor(sec / 60);
    const secs = sec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="card p-3 text-center">
      <h4>Stopwatch</h4>
      <h2>{formatTime(seconds)}</h2>
      <div>
        <button className="btn btn-success me-2" onClick={() => setRunning(true)}>Start</button>
        <button className="btn btn-warning me-2" onClick={() => setRunning(false)}>Stop</button>
        <button className="btn btn-danger" onClick={() => setSeconds(0)}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
