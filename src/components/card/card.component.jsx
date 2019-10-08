import React from 'react'

export const Card = (props) => {
    return <div className="card" >
        <div >
            <img src={`https://robohash.org/${props.monster.id}?set=set2&size=100x100`} className="card-body" alt=""/>
            <h6 className="text-danger card-footer display-6">{props.monster.name}</h6>
        </div>
        
    </div>
}