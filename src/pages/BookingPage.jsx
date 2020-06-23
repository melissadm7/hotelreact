import React, {useState, useEffect,useContext} from 'react'
import Field from '../components/forms/Field';
import bookingsAPI from "../services/bookingAPI"
import {Link} from "react-router-dom"
import Axios from "axios"
import { toast } from 'react-toastify'
import moment from 'moment'
import Comments from '../components/Comments';
import AuthContext from '../contexts/AuthContext'


const BookingPage = (props) => {
    var {id} = props.match.params
    const {isAuthenticated } = useContext(AuthContext)
    const [booking, setBooking] = useState({
        id: "",
        startDate: "",
        endDate: "",
        amount: "",
        room: "",
        comment: "",

    })
    
    const fetchBooking= async id => {
        try{
            const data = await bookingsAPI.find(id)
            setBooking(data)
        }catch(error){
           toast.error("Impossible de charger la confirmation de votre réservation ")
        }
    }


    useEffect(()=>{
        fetchBooking(id)
    }, []);

   const formatDate = (str) => moment(str).format('DD/MM/YYYY')
return (


<>  
<div className="slide" style={{height:"100vh"}}>
    <div className="container">
        <h1>Votre réservation (n°{booking.id})</h1>
        
            <div className="alert alert mt-5 p-3" style={{backgroundColor:"#deb666"}}>
                <h4 className="alert-heading">Bienvenue à l'hotel Marquise des anges!</h4>
                <p>Votre réservation pour la chambre <strong></strong> a bien été prise en compte ! </p>
            </div>

        <div className="row">
            <div className="col-md-6 detailAvis p-4">
                <div className="">
                    <h2 style={{color:"white"}}>Détails</h2>
                    <div className="row pt-4">
                        <dt className="col-md-4">Numéro</dt>
                        <dd className="col-md-8">{booking.id}</dd>
                        <dt className="col-md-4">Date d'arrivée</dt>
                        <dd className="col-md-8">{formatDate(booking.startDate)}</dd>
                        <dt className="col-md-4">Date de départ</dt>
                        <dd className="col-md-8">{formatDate(booking.endDate)}</dd>
                        <dt className="col-md-4">Montant total</dt>
                        <dd className="col-md-8">{booking.amount}&euro;</dd>
                        <dt className="col-md-4">Commentaire</dt>
                        <dd className="col-md-8">{booking.comment}</dd>
                    </div>

                </div>

                <div className="pt-2" id="comment">
                    <h2 className="alert-heading">Votre avis compte!</h2>
                    {/* {% if date() > date(booking.endDate) %}
                      {% set comment = booking.room.commentFromAuthor(app.user) %}  
                      {% if comment is not null %}
                        <blockquote>
                            {{comment.content}}
                        </blockquote>
                        <strong>Note: </strong>{% include 'partials/rating.html.twig' with {'rating':comment.rating} %}
                      {% else %}
                        {{ form_start(myForm) }}
                            {{form_widget(myForm)}}
                            <button type="submit" className="btn btn-success">Confirmer</button>
                        {{ form_end(myForm) }}
                      {% endif %}
                    {% else %}
                        <p>Vous ne pourrez pas noter cette annonce tant que votre voyage ne sera pas terminé.</p>
                    {% endif %} */}
                {(isAuthenticated) ?
           ( <> <Comments id={id} /> </>) : ( 
           <> 
         
         <div className="error-message"> Vous devez vous connecter pour pouvoir commenter</div> 
           
           </>

           )     }
                </div> 
            </div>
            <div className="col-md-6">
                <div className="alert alert-light">
                <h2 className="alert-heading"> Votre "{booking.room.title}"<Link to="#"></Link></h2>

                    <img  src={"http://marquisedesanges.melissadm.net/uploads/" + booking.room.cover}  alt="image de" className="img-fluid"/>
                    <Link to="" className="btn btn-primary mt-4">Plus d'informations</Link>
                </div>
            </div>
        </div>
    </div>
</div>

</>
);
}

export default BookingPage;