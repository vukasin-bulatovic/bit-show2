import './ShowPage.css'
import React from 'react'
import Genres from '../Genres/Genres'
import Cast from '../Cast/Cast'




const ShowPage = (props) =>{
    const [genres, setGenres]=React.useState([])
    const {id} = props
    const[show, setShow]=React.useState({})
    const [cast, setCast]=React.useState([])



    React.useEffect(()=>{
        fetch(`http://api.tvmaze.com/shows/${id}`)
        .then(res => res.json())
        .then(data=>{setShow(data)
                    setGenres(data.genres)})


      fetch(`http://api.tvmaze.com/shows/${id}/cast`) 
        .then(res=>res.json())
        .then (data=>setCast(data.splice(0,15)))  
             
                 
    },[])
    
    return(
        <>
        <div className='show1'>
          {show.image !==undefined &&<img className='showImage' src ={show.image.medium}/>}  
          <div className='showInfo'>
                <h1>{show.name}</h1>
                <Genres genres={genres}/>
                {show.summary}
          </div>  
        </div>
        <Cast cast={cast} />
        </>

    )
}

export default ShowPage