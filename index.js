import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [doctors, setDoctors] = useState([]);
  const [location, setLocation] = useState('');

  useEffect(() => {
    fetchDoctors();
  }, [location]);

  const fetchDoctors = async () => {
    const res = await axios.get(`http://localhost:5000/api/doctors?location=${location}`);
    setDoctors(res.data);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Doctor Listing</h1>
      <input
        type="text"
        placeholder="Filter by location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        style={{ marginBottom: '10px', padding: '5px' }}
      />
      <ul>
        {doctors.map((doc, index) => (
          <li key={index}>
            <strong>{doc.name}</strong> - {doc.specialty} ({doc.location})
          </li>
        ))}
      </ul>
    </div>
  );
}
