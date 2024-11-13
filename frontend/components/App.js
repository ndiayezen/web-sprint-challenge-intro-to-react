import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'



function App() {
  // ❗ Create state to hold the data from the API 
  // ❗ Create effects to fetch the data and put it in state
  const [characters, setCharacters] = useState([])
  const getData = async () => {
    const {data: planets} = await axios.get (urlPlanets);
    const {data: people} = await axios.get (urlPeople);
    const data = people.map(person => {
      return {name: person.name, planet: planets.find(planet => planet.id === person.homeworld).name}
    })
    setCharacters(data)

  }

  useEffect (() => {
    getData();
  }, [])

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
      {characters.map(character => <Character name = {character.name} planet = {character.planet} key= {character.name}/>)}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
