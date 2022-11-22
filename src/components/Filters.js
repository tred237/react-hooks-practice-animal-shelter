import React from "react";

function Filters({ onChangeType, onFindPetsClick }) {
  function handleSubmit(e){
    e.preventDefault()
    onFindPetsClick()
  }

  return (
    <div className="ui form">
      <form onSubmit={handleSubmit}>
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" aria-label="type" onChange={(e) => onChangeType(e.target.value)}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" type="submit">Find pets</button>
        </div>
      </form>
    </div>
  );
}

export default Filters;
