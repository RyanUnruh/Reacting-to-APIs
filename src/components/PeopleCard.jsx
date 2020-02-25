import React from "react";

let PeopleCard = props => {
  return (
    <div className='msg'>
      <h3>{props.person.name}</h3>
      <p>{props.person.age}</p>
    </div>
  );
}

export default PeopleCard;
