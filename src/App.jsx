import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api')
      .then(res => setMessage(res.data.message))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>React + Node.js Dynamic Website</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
