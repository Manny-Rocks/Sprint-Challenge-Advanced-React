import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import NavBar from './components/NavBar'
import SoccerCardsMaker from './components/SoccerCardsMaker'



export default class App extends React.Component {
  constructor() {  
    super()
    this.state = { soccerPlayers: [] }
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/api/players`)
      .then( (res) => {
        console.log(res)
        this.setState( {soccerPlayers: res.data})
        console.log(this.state)
      })
  }
  

  render() {
    return (
      <>
       <NavBar />
       <div className="rex">
      {this.state.soccerPlayers.map( (player) => {
        return <SoccerCardsMaker key={player.id} player={player} />
      })}
      </div>
      </>
    )
  }
}
