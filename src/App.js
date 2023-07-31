import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [response, setResponse] = useState('...');

  const onClick = async () => {
    const data = {
      numPeople: document.getElementById('numPeople').value,
      numApps: document.getElementById('numApps').value,
      numMains: document.getElementById('numMains').value,
      numSalads: document.getElementById('numSalads').value,
      additonalInfo: document.getElementById('additonalInfo').value,
    }

    axios.post('http://localhost:8080/api/ask', data, {headers:{"Content-Type" : "application/json"}})
    .then(function (response) {
      setResponse(response.data);
      // console.log(response)
    })
    .catch(function (error) {
      console.log(error.response.data);
    });


  };

  return (
    <div className="App">
     <div className='Form'>
      <p>Number of People</p>
      <input className='numInput' id='numPeople'></input>
      <p>Number of Appetizers</p>
      <input className='numInput' id='numApps'></input>
      <p>Number of Mains</p>
      <input className='numInput' id='numMains'></input>
      <p>Number of Salads</p>
      <input className='numInput' id='numSalads'></input>
      <p>Additonal info</p>
      <input className='txtInput' id='additonalInfo'></input>
      <p>-</p>
      <button onClick={onClick}>Generate</button>
     </div>
     <div className='response'>
        <p>
          {response}
        </p>
     </div>
    </div>
  );
}

export default App;
