import './Genres.css'
import React from 'react'

const Genres = (props) =>{
    const {genres}=props

   
    return (
        <div className='genres'>
            {  genres.map((genre, index)=>{
                return(
                <div className='genre' key={index}>
                    {genre }
                </div>
                )
            })}
        </div>
    )
}
export default Genres