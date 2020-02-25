import React from "react";

let FilmCard = props => {
  return (
    <div className='msg'>
      <h3>{props.film.title}</h3>
      <p>{props.film.description}</p>
    </div>
  );
}

export default FilmCard;
