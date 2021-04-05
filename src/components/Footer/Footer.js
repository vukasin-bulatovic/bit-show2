import './Footer.css'
import React from 'react'




const Footer = () =>{
    var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
    return(
        <div className='footer'>
            <h2>CopyRight @ Vukasin Bulatovic   {today}</h2>
        </div>
    )
}

export default Footer