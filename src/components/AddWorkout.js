import React, { useState } from 'react';
import Sidebar from './Sidebar';
import '../styles/AddWorkout.css';

function AddWorkout() {
  const [workout, setWorkout] = useState({
    name: '',
    description: '',
    category: '',
    caloriesBurn: '',
    timePeriod: '',
    level: '',
    equipment: ''
  });
  const [message, setMessage] = useState(""); // State for success message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkout({ ...workout, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Workout Added:', workout);

    // Save workout data (e.g., localStorage or an API call)
    try {
      // Replace this with an actual API call if needed
      localStorage.setItem(`workout-${Date.now()}`, JSON.stringify(workout));
      
      // Set success message
      setMessage("Workout added successfully!");

      // Clear form fields
      setWorkout({
        name: '',
        description: '',
        category: '',
        caloriesBurn: '',
        timePeriod: '',
        level: '',
        equipment: ''
      });
    } catch (error) {
      console.error("Error saving workout:", error);
      setMessage("Error adding workout. Please try again.");
    }
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <h2>Add New Workout</h2>
        {message && <p className="message">{message}</p>} {/* Display success or error message */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Workout Name</label>
            <input
              type="text"
              name="name"
              value={workout.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Workout Description</label>
            <textarea
              name="description"
              value={workout.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Category</label>
            <input
              type="text"
              name="category"
              value={workout.category}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Calories Burn</label>
            <input
              type="text"
              name="caloriesBurn"
              value={workout.caloriesBurn}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Time Period</label>
            <input
              type="text"
              name="timePeriod"
              value={workout.timePeriod}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Level</label>
            <input
              type="text"
              name="level"
              value={workout.level}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Equipment Used</label>
            <input
              type="text"
              name="equipment"
              value={workout.equipment}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
}

export default AddWorkout;
