import React from 'react'
import '../index.css'

export default function SoccerCardsMaker(props) {

    if (!props.player) {return null}
    return (
        <div className="soccerCard">
            <p className="names">Name: {props.player.name}</p>
            <p className="names2">Country: {props.player.country}</p>
            <p className="names3">Searches: {props.player.searches}</p>
        </div>
    )
    
}
export const Add = (num1, num2) => num1 + num2;