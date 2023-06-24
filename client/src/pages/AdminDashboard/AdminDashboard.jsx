import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminDashboard.css';

function AdminDashboard() {
  const [participants, setParticipants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [newParticipant, setNewParticipant] = useState({
    nom: '',
    email: '',
    tel: '',
    profession: ''
  });

  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("http://localhost:3000/participants/");
        const data = response.data;
        setParticipants(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchParticipants();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/participants/${id}`);
      setParticipants((prevParticipants) =>
        prevParticipants.filter((participant) => participant._id !== id)
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    setNewParticipant({
      ...newParticipant,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/participants/", newParticipant);
      const createdParticipant = response.data;
      setParticipants([...participants, createdParticipant]);
      setNewParticipant({
        nom: '',
        email: '',
        tel: '',
        profession: ''
      });
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div className="admin-dashboard">
      <p className="participant-count">Total Participants: {participants.length}</p>
      {isLoading ? (
        <p>Loading participants...</p>
      ) : (
        <table className="participants-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Profession</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {participants.map((participant) => (
              <tr key={participant._id}>
                <td>{participant.nom}</td>
                <td>{participant.email}</td>
                <td>{participant.tel}</td>
                <td>{participant.profession}</td>
                <td>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(participant._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      
      <form className="add-participant-form" method='post' onSubmit={handleSubmit}>
        <h3>Add Participant</h3>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="nom"
            value={newParticipant.nom}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={newParticipant.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input
            type="tel"
            name="tel"
            value={newParticipant.tel}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Profession:</label>
          <input
            type="text"
            name="profession"
            value={newParticipant.profession}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AdminDashboard;
