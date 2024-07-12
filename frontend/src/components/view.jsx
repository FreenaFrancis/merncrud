import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function View() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get('https://merncrud-izwt.onrender.com/getuser')
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete=(id)=>{
  
    axios.delete(`https://merncrud-izwt.onrender.com/deleteuser/${id}`)
    .then((res)=>{
      console.log('deleted');
      window.location.reload()
    }).catch(err=>console.log(err))
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Place</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {user.map((users) => (
            <tr key={users._id}>
              <td>{users.name}</td>
              <td>{users.place}</td>
              <Link to={`/update/${users._id}`}><button>Edit</button></Link>


              <button onClick={(e)=>handleDelete(users._id)}>Delete</button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default View;


