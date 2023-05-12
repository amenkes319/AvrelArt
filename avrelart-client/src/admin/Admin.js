import React, { useState } from 'react';
import PaintingsAdmin from './Paintings';
import PhotographsAdmin from './Photographs';
import AchievementsAdmin from './Achievements';
import './Admin.css';

const Admin = () => {
  const [selectedType, setSelectedType] = useState('');

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  return (
    <div className="admin">
      <h2>Admin Panel</h2>
      <select onChange={handleTypeChange} value={selectedType}>
        <option value="">Select Type</option>
        <option value="paintings">Paintings</option>
        <option value="photographs">Photographs</option>
        <option value="achievements">Achievements</option>
      </select>
      {selectedType === 'paintings' && <PaintingsAdmin />}
      {selectedType === 'photographs' && <PhotographsAdmin />}
      {selectedType === 'achievements' && <AchievementsAdmin />}
    </div>
  );
};

export default Admin;
