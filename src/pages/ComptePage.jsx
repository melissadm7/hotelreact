import React, {useState, useEffect} from 'react'
import usersAPI from "../services/usersAPI"
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'



const ComptePage = (props) => {
    const [user, setUser] = useState([])
    
    const fetchUser= async id => {
        try{
            const data = await usersAPI.find(id)
            setUser(data)
        }catch(error){
         
        }
    }

    useEffect(()=>{
        fetchUser()
    }, []);
return (   
 
  <>  
<div className="slide">
    <div className="container">
        <div className="pt-5 text-center"><h1>Mon compte</h1></div>
        
        <div className="row pt-5 text-center">
            <div className="col-md-3 pt-4 square1 ">
                <Link to="/myaccount" className="btn mr-1 mb-1" style={{backgroundColor:"white;"}}>Modifier vos informations</Link>
            </div>
            <div className="col-md-3 pt-4 square2">
                <Link to="/passwordupdate" className="btn mb-1">Modifier votre mot de passe</Link>
            </div>
            <div className="col-md-3 pt-4 square3">
                <Link to="/myBooking" className="btn mb-1">Vos réservations </Link>
            </div>               
        </div>         
    </div>
</div>

</>
);
}

export default ComptePage;