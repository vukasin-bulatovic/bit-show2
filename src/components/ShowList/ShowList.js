import './ShowList.css'
import React from 'react'
import Show from '../Show/Show'





const ShowList = (props) =>{
    const {setPage, data, setId}=props
    const [background, setBackground ]=React.useState({zuta:'zuta',bela:'bela'})
    return(
        <div className='showList'>
            {
                data.map(single =>{
                    return(
                    <div className={
                        `show ${single.rating.average >8.5 ? background.zuta :background.bela}`
                    } key={single.id} onClick={()=>{
                        setId(single.id)
                        setPage(2)
                    }}>
                        <Show single={single} />


                    </div>
                    )
                } )
            }
        </div>
    )
}

export default ShowList