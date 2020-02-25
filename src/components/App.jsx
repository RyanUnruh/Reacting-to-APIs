import React, { Component } from "react";
import Card from "./FilmCard";
import Navbar from './Navbar'
// import * as GhibiLogo from '../images';
import PeopleCard from './PeopleCard';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

      films: [],
      people: [],
      filmsLoaded: false,
      peopleLoaded: false
    };

    this.loadFilms = this.loadFilms.bind(this)
    this.loadPeople = this.loadPeople.bind(this)
  }

  loadFilms() {
    fetch('https://ghibliapi.herokuapp.com/films')
      .then(res => res.json())
      .then(films => this.setState({ films: films, filmsLoaded: true, peopleLoaded: false }))
      .catch(err => console.log(err))
  }
  loadPeople() {
    fetch('https://ghibliapi.herokuapp.com/people')
      .then(res => res.json())
      .then(people => this.setState({ people: people, peopleLoaded: true, filmsLoaded: false }))
      .catch(err => console.log(err))

  }

  render() {
    if (this.state.filmsLoaded) {
      return (
        <div className='App'>
          <Navbar loadFilms={this.loadFilms} loadPeople={this.loadPeople} />
          <div className='container-sm'>

            {this.state.films.map(film => {
              return <Card film={film} />
            })}
          </div>
        </div>
      );
    } else if (this.state.peopleLoaded) {

      return (
        <div className='App'>
          <Navbar loadFilms={this.loadFilms} loadPeople={this.loadPeople} />
          <div className='container-sm'>

            {this.state.people.map(person => {
              return <PeopleCard person={person} />
            })}
          </div>
        </div>
      );

    } else {
      return <Navbar loadFilms={this.loadFilms} loadPeople={this.loadPeople} />
    }
  }
}
export default App;
