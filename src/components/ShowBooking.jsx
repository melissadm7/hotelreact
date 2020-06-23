import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import moment from 'moment'

const ShowBooking = ({book}) => {
    const formatDate = (str) => moment(str).format('DD/MM/YYYY')
    console.log(book)
    const [mybook, setMyBook] = useState({
        id:"",
        startDate: "",
        endDate: "",
        amount: "",
        comment:"",
        room:{}

    })

    useEffect(()=>{
        setMyBook(book)
    }, []);

    return ( 
        <>
         <div className="row p-3">
                <div className="col-4">
                    <img src={"http://marquisedesanges.melissadm.net/uploads/"+myBook.room.cover} style={{height:"300px"}} alt={myBook.room.title} className="img-fluid" />
                    
                </div>
                <div className="col-8">
                    <h4>{myBook.room.title}</h4>
                    <p>
                        Réservation <strong>n°{myBook.id}</strong><br/>
                        du {formatDate(myBook.startDate) } au {formatDate(myBook.endDate)} ({myBook.amount} &euro;)
                    </p>
                    <Link to={`/booking/${myBook.id}`} className="btn btn-info">Plus d'informations</Link>

                </div>
            </div> 
        </>
    );
}
 
export default ShowBooking;