import React, { useState } from "react";

const Object = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    hobby: "read books",
  });
  //   const [name, setName] = useState("Vatsal");
  //   const [age, setAge] = useState(20);
  //   const [hooby, setHooby] = useState("Play Cricket");
  const displayPerson = () => {
    setPerson({ name: "john", age: 28, hobby: "scream at the computer" });
    // setName("Golu");
    // setAge(10);
    // setHooby("Collect Money");
  };
  return (
    <div>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>Enjoys: {person.hooby}</h3>
      <button className="btn" onClick={displayPerson}>
        Show Golu
      </button>
    </div>
  );
};

export default Object;
