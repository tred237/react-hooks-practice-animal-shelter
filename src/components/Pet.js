import { React, useState } from "react";

function Pet({ pet, onAdoptPet }) {
  const [adopted,setAdopted] = useState(pet.isAdopted)

  function handleAdoptClick(){
    onAdoptPet(pet.id)
    setAdopted(!adopted)
  }

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {pet.gender === 'female' ? '♀' : '♂'}
          {pet.name}
        </span>
        <div className="meta">
          <span className="date">{pet.type}</span>
        </div>
        <div className="description">
          <p>Age: {pet.age}</p>
          <p>Weight: {pet.weight}</p>
        </div>
      </div>
      <div className="extra content">
        <button className={adopted ? "ui disabled button" : "ui primary button"} onClick={!adopted ? handleAdoptClick : null}>{adopted ? 'Already adopted' : 'Adopt pet'}</button>
      </div>
    </div>
  );
}

export default Pet;
