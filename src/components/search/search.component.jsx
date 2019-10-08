import React from 'react';

export const SearchBox = (props)=>{
    return (
        <input type="search" className="form-control mt-2 mb-2 w-50 m-auto" placeholder={props.placeholder} onChange={props.changeHandler}/>
    )
}


