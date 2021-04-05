import './Main.css'
import React from 'react'
import ShowPage from '../ShowPage/ShowPage'
import ShowList from '../ShowList/ShowList'
import Animation from '../Animation/Animation'


const Main = (props) =>{
    const [page,setPage]=React.useState(1)
    const [id, setId]=React.useState(null)
    const [data, setData]=React.useState([])
    const [inputValue, setInputValue]=React.useState('')
   
    const filteredData=data.filter(user => (user.name.toLowerCase().includes(inputValue)))
    
    React.useEffect(() => {
        fetch('http://api.tvmaze.com/shows')
        .then(res => res.json())
        .then(data => setData(data.splice(0,50)))
     },[])    
    return(
        data.length ? 

        <div className='main'>
            {
                page ===1 ?
                <>
                <input onChange={((e)=> setInputValue(e.target.value))} className='input' type='text'placeholder='search'/>
                <ShowList setPage={setPage} data={filteredData} setId={setId} />
                </>:
                <ShowPage id={id} />
            }
        </div>:
        <Animation />
    )

}

export default Main