import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminDashboard.css';

function AdminDashboard() {
  const [participants, setParticipants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [newParticipant, setNewParticipant] = useState({
    nom: '',
    profession: '',
    email: '',
    tel: ''
  });
  const [buttonStates, setButtonStates] = useState([]); // Array to track button states

  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("http://localhost:3000/participants/");
        const data = response.data;
        setParticipants(data);
        setButtonStates(new Array(data.length).fill(false)); // Initialize button states array
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchParticipants();
  }, []);

  //for the delete button 
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/participants/${id}`);
      setParticipants((prevParticipants) =>
        prevParticipants.filter((participant) => participant._id !== id)
      );
      setButtonStates((prevStates) =>
        prevStates.filter((_, index) => index !== id)
      );
    } catch (error) {
      console.log(error);
    }
  };

//button de confirmation
  const handleButtonClick = (index) => {
    setButtonStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  //putting the data of the inputs in the variables 
  const handleInputChange = (e) => {
    setNewParticipant({
      ...newParticipant,
      [e.target.name]: e.target.value
    });
  };

  // submit button
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { nom, profession, email, tel } = newParticipant;

    if (nom.trim() === '' || profession.trim() === '' || email.trim() === '' || tel.trim() === '') {
      alert("Veuillez saisir tous les champs requis.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/participants/", {
        nom: nom,
        profession: profession,
        email: email,
        tel: tel
      });

      const newParticipantData = response.data;

      setNewParticipant({
        nom: '',
        profession: '',
        email: '',
        tel: ''
      });

      setParticipants((prevParticipants) => [...prevParticipants, newParticipantData]);
      setButtonStates((prevStates) => [...prevStates, false]);

      alert("Participant ajouté.");
    } catch (error) {
      console.log(error);
      alert("Une erreur s'est produite lors de l'ajout.");
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
              <th>Confirmation</th>
            </tr>
          </thead>
          <tbody>
            {participants.map((participant, index) => (
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
                <td>
                  <button
                    className={`check-button ${buttonStates[index] ? 'green' : ''}`}
                    onClick={() => handleButtonClick(index)}
                  >
                    {buttonStates[index] ? '✓' : 'not yet'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <br />
      <br />
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
        <button type="submit">Add:</button>
      </form>
    </div>
  );
}

export default AdminDashboard;
