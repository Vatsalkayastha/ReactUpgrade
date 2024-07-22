import React, { useState } from "react";
import { data } from "../../data";

const Array = () => {
  const [people, setPeople] = useState(data);
  const removeItem = (id) => {
    const newPeople = people.filter((person)=>  person.id !== id);
    setPeople(newPeople);
  };
  const clearAllItems = () => {
    setPeople([]);
  };
  return (
    <div>
      {people.map((person) => {
        console.log(person);
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
            <button type="button" onClick={()=> removeItem(person.id)}>Remove</button>
          </div>
        );
      })}
      <button className="btn" type="button" onClick={clearAllItems}>
        Clear All Items
      </button>
    </div>
  );
};

export default Array;
