// src/components/Create.js

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Create() {
  const [name, setName] = useState('');
  const [place, setPlace] = useState('');
const navigate=useNavigate();
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePlaceChange = (e) => {
    setPlace(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/post', { name, place })
      .then((res) => {
    
        console.log(res);
        navigate('/view') 
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <input type="text" placeholder="name" value={name} onChange={handleNameChange} /><br></br>
      <input type="text" placeholder="place" value={place} onChange={handlePlaceChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Create;
