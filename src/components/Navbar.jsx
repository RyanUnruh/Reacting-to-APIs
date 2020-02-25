import React from 'react';

let Navbar = (props) => {

  return (
    <div>
      <button onClick={props.loadFilms}>Load Films</button>
      <button onClick={props.loadPeople}>Load People</button>
    </div>
  )

}

export default Navbar;