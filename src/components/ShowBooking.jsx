import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import moment from 'moment'


const ShowBooking = (props) => {
    const formatDate = (str) => moment(str).format('DD/MM/YYYY')

    

    return ( 
        <>
           
            <div className="row p-3">
                <div className="col-4">
                {props.book && props.book.room && 
                    <img src={"http://marquisedesanges.melissadm.net/uploads/"+props.book.room.cover} style={{height:"300px"}} alt={props.book.room.title} className="img-fluid" />
                } 
                   
                    
                </div>
                <div className="col-8">
                    {props.book && props.book.room && 
                        <h4>{props.book.room.title}</h4>
                    } 
                    <p>
                        Réservation <strong>n°{props.book.id}</strong><br/>
                        du {formatDate(props.book.startDate) } au {formatDate(props.book.endDate)} ({props.book.amount} &euro;)
                    </p>
                    <Link to={`/booking/${props.book.id}`} className="btn btn-info">Plus d'informations</Link>

                </div>
            </div>  
        </>
    );
}
 
export default ShowBooking;