import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'



const BookingPage = (props) => {
    
return (   
 
  <>  
<div className="slide">
    <div className="container">
        <div className="pt-5 text-center"><h1>Bonjour, { user.lastName }</h1></div>
        
        <div className="row pt-5 text-center">
            <div className="col-md-3 pt-4 square1 ">
                <Link to="#" className="btn btn-primary mr-1 mb-1">Modifier vos informations</Link>
            </div>
            <div className="col-md-3 pt-4 square2">
                <Link to="#" className="btn btn-primary mb-1">Modifier votre mot de passe</Link>
            </div>
            <div className="col-md-3 pt-4 square3">
                <Link to="#" className="btn btn-primary mb-1">Vos réservations </Link>
            </div>               
        </div>         
    </div>
</div>

</>
);
}

export default BookingPage;