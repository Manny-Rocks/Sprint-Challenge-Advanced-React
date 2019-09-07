import React from 'react'
import axios from 'axios'
import NavBar from './components/NavBar'
import "./App.css";




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
