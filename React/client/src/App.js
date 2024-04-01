import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('/api/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  const shift= () =>{
    axios.post('http://localhost:5000/api/shift')
    .then(response => {
      console.log("Response-->",response);
      window.location.href = '/name';
  }) 
  .catch(error => { 
      console.error('EducationDetails Error fetching data:', error); 
  });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to React</h1>
        <p>{data.message}</p>
        <button onClick={shift}>Shift</button>
      </header>
    </div>
  );
}

export default App;

