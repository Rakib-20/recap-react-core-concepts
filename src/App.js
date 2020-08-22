import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [nayoks, setNayoks] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setNayoks(data))
  }, [])

  //var nayoks = [{name:'Shuvo', age: 56}, {name:'Bappy', age: 54}, {name:'BappaRaz', age: 35}, {name:'Shakib', age: 32}, {name:'Omar Sanny', age:30}]
  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      {
        nayoks.map(nk => <Nayok name={nk.name} key={nk.id} age={nk.age}></Nayok>)
      }
      {/* <Nayok name={nayoks[3]} age="15"></Nayok>
      <Nayok name={nayoks[0]}></Nayok>
      <Nayok name={nayoks[2]}></Nayok>
      <Nayok></Nayok> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

function MovieDisplay(props){
return <h4>Movie i have acted: {props.movies}</h4>
}

function MovieCounter(){
  const [count, setCount] = useState(0);

const handleClick = () => setCount(count + 1);

  return (
    <div>
      <button onClick = {handleClick}>Add Movie</button>
      <h5>Numbers of movies: {count}</h5>
      <MovieDisplay movies ={count}></MovieDisplay>
      <MovieDisplay movies ={count + 10}></MovieDisplay>
      <MovieDisplay movies ={count + 5}></MovieDisplay>
      <MovieDisplay movies ={count}></MovieDisplay>
    </div>
  )
}

function Nayok(props){
  const nayokStyle = {
    border: "2px solid purple",
    margin: "20px"
  }
  return (
    <div style = {nayokStyle}>
    <h1>Ami Nayok: {props.name}</h1>
    <h3>I have done 5 movies in {props.age} years</h3>
    </div>
  )
}

export default App;
