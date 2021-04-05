import './Show.css'
import React from 'react'

const Show = (props) =>{
    const{single}=props
    return(
        <>
            <img src={single.image.medium}/>
            <div className= 'rating'>{single.rating.average}</div>
            <h3>{single.name}</h3>
       </>
    )
}
export default Show