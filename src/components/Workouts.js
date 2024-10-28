import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import '../styles/Workouts.css';
import image from '../images/image2.png'

function Workouts() {
  const [workouts, setWorkouts] = useState([
    { id: 1, name: 'Arms Exercise', rating: 4.5, image: image },
    { id: 2, name: 'Legs Exercise', rating: 4.3, image: image },
    { id: 3, name: 'Back Exercise', rating: 4.8, image: image },
  ]);
  
  const navigate = useNavigate();

  // Load new workouts from localStorage when the component mounts
  useEffect(() => {
    const savedWorkouts = Object.keys(localStorage)
      .filter((key) => key.startsWith("workout-"))
      .map((key) => JSON.parse(localStorage.getItem(key)));
    setWorkouts((prevWorkouts) => [...prevWorkouts, ...savedWorkouts]);
  }, []);

  const handleAddWorkout = () => {
    navigate("/add-workout"); // Adjust route as necessary
  };

  return (
    <div className="workouts-container">
      <Sidebar />
      <div className="workouts-content">
        <h2>Workouts</h2>
        <button onClick={handleAddWorkout} className="add-workout-button">
          Add New Workout
        </button>
        <div className="workout-grid">
          {workouts.map((workout, index) => (
            <div key={index} className="workout-card">
              <img src={workout.image || image} alt={workout.name} className="workout-image" />
              <div className="workout-info">
                <h3>{workout.name}</h3>
                <p>Rating: {workout.rating || 'N/A'} ⭐</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Workouts;
