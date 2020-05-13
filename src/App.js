import React, {useState, useEffect} from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

  const[poke, setPoke] =useState([]);
  const[reveal, setReveal] = useState(false);

  const handlePoke = () => {
    setReveal(true);
    axios.get(`https://pokeapi.co/api/v2/pokemon/`)
    .then(response => {setPoke(response.data.results)})
    
  }

  
  
  const pokeArray = () => {
    var array = [];
    for(var l=1; l<152; l++){
      array.push(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${l}.png`)
    }
    return array; 
  }

  return (
    
    <div className="App">
      <div className="row">
      <button onClick={handlePoke}>Click </button>
      </div>
      <div>
      
      {reveal ? pokeArray().map((src, i) => {
          return (
        <img src={src} key={i} alt="pokemon"/>)
        }): "Click the button to check out pokemon images"}
        </div>

      
        
    </div>
  );
}

export default App;
