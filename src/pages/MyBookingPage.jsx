import React, {useState, useEffect,useContext} from 'react'
import Field from '../components/forms/Field';
import bookingAPI from "../services/bookingAPI"
import {Link} from "react-router-dom"
import Axios from "axios"
import { toast } from 'react-toastify'
import moment from 'moment'
import jwtDecode from "jwt-decode"
import Comments from '../components/Comments';
import AuthContext from '../contexts/AuthContext'
import ShowBooking from '../components/ShowBooking'


const MyBookingPage = (props) => {

    const token = window.localStorage.getItem("authToken")
    const jwtData = jwtDecode(token)
    var id= jwtData.id

const [bookings, setBookings] = useState({
    id:"",
    startDate: "",
    endDate: "",
    amount: "",
    comment:"",
    room:{}
})
  
  const [loading, setLoading] = useState(true)
    const fetchBookings= async id => {
        try{
            const data = await bookingAPI.find(id)
            setBookings(data)
            setLoading(false) // j'ai fini de charger
        }catch(error){
           toast.error("Impossible de charger vos réservations")
        }
    }

    useEffect(()=>{
        fetchBookings(id)
    }, []);

   const formatDate = (str) => moment(str).format('DD/MM/YYYY')

const myBookings = Object.keys(bookings).map(key => {
        return (
            <ShowBooking key={key} book={bookings[key]} />
        )
    })

return (


<>  
<div class="slide">
    <div class="container">
        <h1>Mes réservations</h1>
        <div class="alert alert-secondary mt-4">
            <p>Retrouvez ci-dessous tous vos voyages passés et à venir</p>
        </div>
        {(myBookings) && (
                  myBookings    
         )
        }
     
    </div>
</div>

</>
);
}

export default MyBookingPage;