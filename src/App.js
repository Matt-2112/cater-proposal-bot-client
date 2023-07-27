import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [response, setResponse] = useState('...');

  const onClick = async () => {
    const data = {
      numPeople: document.getElementById('numPeople').value
    }

    axios.post('https://termite-underwear.cyclic.app/api/ask', data, {headers:{"Content-Type" : "application/json"}})
    .then(function (response) {
      setResponse(response);
    })
    .catch(function (error) {
      console.log(error.response.data);
    });


  };

  return (
    <div className="App">
     <div className='Form'>
      <p>Number of People</p>
      <input className='numPeople' id='numPeople'></input>
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
