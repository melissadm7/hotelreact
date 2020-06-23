import React, {useState, useEffect,useContext} from 'react'
import Field from '../components/forms/Field';
import bookingsAPI from "../services/bookingAPI"
import {Link} from "react-router-dom"
import Axios from "axios"
import { toast } from 'react-toastify'
import moment from 'moment'
import Comments from '../components/Comments';
import AuthContext from '../contexts/AuthContext'


const MyBookingPage = (props) => {
const [bookings, setBookings] = useState([])
  
  const [loading, setLoading] = useState(true)
    const fetchBookings= async () => {
        try{
            const data = await bookingsAPI.findAll()
            setBookings(data)
            setLoading(false) // j'ai fini de charger
        }catch(error){
           toast.error("Impossible de charger vos réservations")
        }
    }

    useEffect(()=>{
        fetchBookings()
    }, []);

   const formatDate = (str) => moment(str).format('DD/MM/YYYY')
return (


<>  
<div class="slide">
    <div class="container">
        <h1>Mes réservations</h1>
        <div class="alert alert-secondary mt-4">
            <p>Retrouvez ci-dessous tous vos voyages passés et à venir</p>
        </div>
        {bookings.map(book =>
            <div className="row p-3">
                <div className="col-4">
                    <img src={"http://marquisedesanges.melissadm.net/uploads/"+book.room.cover} style={{height:"300px"}} alt={book.room.title} className="img-fluid" />
                    
                </div>
                <div className="col-8">
                    <h4>{book.room.title}</h4>
                    <p>
                        Réservation <strong>n°{book.id}</strong><br/>
                        du {formatDate(book.startDate) } au {formatDate(book.endDate)} ({book.amount} &euro;)
                    </p>
                    <Link to={`/booking/${book.id}`} className="btn btn-info">Plus d'informations</Link>

                </div>
            </div>
         )}
     
    </div>
</div>

</>
);
}

export default MyBookingPage;