import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  function handleFilterChange(filter){
    setFilters({...filters, type: filter})
  }

  function handleFindPets(){
    const url = filters.type === 'all' ? 'http://localhost:3001/pets' : `http://localhost:3001/pets?type=${filters.type}`

    fetch(url)
    .then(res => res.json())
    .then(data => setPets(data))
  }

  function handleAdoption(id){
    fetch(`http://localhost:3001/pets/${id}`,{
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({isAdopted: true})
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={handleFilterChange} onFindPetsClick={handleFindPets} />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={handleAdoption} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
