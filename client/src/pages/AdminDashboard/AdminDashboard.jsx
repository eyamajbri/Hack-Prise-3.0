import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminDashboard() {
  const [participants, setParticipants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <div>
      {isLoading ? (
        <p>Loading participants...</p>
      ) : (
        <ul>
          {participants.map((participant) => (
            <li key={participant._id}>
              <hr></hr>
              <p>Name: {participant.nom}</p>
              <p>Email: {participant.email}</p>
              <p>Phone: {participant.tel}</p>
              <p>Profession: {participant.profession}</p>
              <hr></hr>
              <br />
            </li>
           
          ))}
        </ul>
      )}
    </div>
  );
}


export default AdminDashboard;