import './Cast.css'
import React from 'react'

const Cast =(props) =>{
        const{cast}=props
        const a = JSON.parse(localStorage.getItem("grid"))=== null || JSON.parse(localStorage.getItem("grid"))=== undefined ? true : JSON.parse(localStorage.getItem("grid"))
        const[grid, setGrid]=React.useState(a)
        
    return (
        <div className='castContainer'>
            <div className='switch'>
                <h2>{grid ? `cast`:`actors`}</h2>
                <button onClick={() =>{
                    localStorage.setItem('grid', JSON.stringify(!grid)) 
                    setGrid(!grid)
                }}>
                    switch
                </button>
            </div>
            <div className={grid ? `cast`:`castGrid`}>
            { cast.map((el,index)=>{
                return(
                <div key={index} className='actor'>
                    <img src ={el.person.image.medium}/> 
                     <p>{el.person.name}</p>
                </div>
                )
            })}
            </div>
        </div>
    )
}
export default Cast