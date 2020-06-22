import React, {useState, useEffect} from 'react'
import Field from '../components/forms/Field';
import commentsAPI from "../services/commentAPI"
import {Link} from "react-router-dom"
import Axios from "axios"
import { toast } from 'react-toastify'
import moment from 'moment'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const BookPage = (props) => {
    var {id} = props.match.params

    const [comment, setComment] = useState({
        rooms: "",
        content: "",


    })
    
    const fetchComment= async id => {
        try{
            const data = await commentsAPI.find(id)
            setComment(data)
        }catch(error){
           toast.error("Impossible de charger la réservation ")
        }
    }


    useEffect(()=>{
        fetchComment(id)
    }, []);

//     const handleSubmit = async (event) => {
//         event.preventDefault()
//         //console.log(user)
//         const apiErrors= {}
//         if(comment.startDate > comment.endDate){
//             apiErrors="Date invalide"
//             setErrors(apiErrors)
//             toast.error("Date invalide!")
//             // on arrete si ce n'est pas bon 
//             return
//         }
//         try{
//             await Axios.post("http://marquisedesanges.melissadm.net/api/comments", comment)
//             setErrors({})
//             history.replace("/")
//         }catch({response}){
//             const {violations} = response.data
//             if(violations){

//                 violations.forEach(({propertyPath, message}) => {
//                     apiErrors[propertyPath] = message
//                 })
//                 setErrors(apiErrors)
//                 toast.error("Vous devez remplir les champs !")
//             }
//         }
//     }
//    const formatDate = (str) => moment(str).format('DD/MM/YYYY')

  
return (   
 
<>  
<div className="slide">
    <div className="container pt-5">
<h1 className="mb-3">Réservation pour la chambre : <i></i></h1>
       
        <div className="row pt-5">
            <div className="col-md-7 col-xs-12">
                <h5>Quelles sont les dates qui vous intéressent</h5>
                <h6 className="mt-4">Vous avez un commentaire?</h6>
                <Field 
                    name="Comment"
                    label="Commentaire"
                    placeholder="Votre commentaire"
                    // error={errors.firstName}
                    // value={comment.content}
                    // onChange={handleChange}
                />
                <h5>Montant du séjour: <span id="amount">...</span> &euro;</h5>
                <span id="days">0</span> nuit(s) à  / nuit
            </div>
            <div className=" offset-1 col-md-4 col-xs-12 pt-3">
                <div className="card text-white bg-dark mb-3 p-2" style={{maxWidth: "18rem" }}>
                    <div className="card-body">
                    <p>Date d'arrivée</p>
                    <DatePicker
                        // onChange={this.onChange}
                        // value={this.state.date}
                        />
                        <br/><br/>
                    <p>Date de départ</p>
                    <DatePicker
                        // onChange={this.onChange}
                        // value={this.state.date}
                       />
                    </div>
                </div>
                   
            </div>
        </div>
        <button type="submit" className="btn btn-light">Réserver</button>
    </div>
</div>

</>
);
}

export default BookPage;