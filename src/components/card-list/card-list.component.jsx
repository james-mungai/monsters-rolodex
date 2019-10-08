import React from 'react'
import './card-list.styles.css'
import {Card} from '../card/card.component'

export const CardList = (props) => {
    return <div className="card-list container-fluid mt-2">
        
        {
            props.monsters.map((monster)=>{
                return <Card key={monster.id} monster={monster}></Card>
            })
        }
    </div>
}
