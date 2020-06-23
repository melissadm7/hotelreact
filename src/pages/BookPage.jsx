import React, {useState, useEffect} from 'react'
import Field from '../components/forms/Field';
import commentsAPI from "../services/commentAPI"
import {Link} from "react-router-dom"
import Axios from "axios"
import { toast } from 'react-toastify'
import moment from 'moment'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import jwtDecode from "jwt-decode"
import "react-datepicker/dist/react-datepicker.css";
import usersAPI from '../services/usersAPI';
import roomsAPI from '../services/roomsAPI';


const BookPage = (props) => {
    var {id} = props.match.params

    const token = window.localStorage.getItem("authToken")
    const jwtData = jwtDecode(token)
    var myid= jwtData.id
       
    const [myAmount, setMyAmount] = useState() 
    const [myDays, setMyDays] = useState() 

    const [room, setRoom] = useState({
        id: "",
        title: "",
        price: "",
        introduction: "",
        pool: "",
        sauna: "",
        cover: "",
        bain: "",
        wifi: "",
        sauna: "",
        allin: "",
        clim: "",
        kitchen: "",
        imageRooms: "",
        comments: ""


    })
    const [myStartDate, setMyStartDate] = useState() 
    const [myEndDate, setMyEndDate] = useState() 

    const [theStartDate, setTheStartDate] = useState(new Date()) 
    const [theEndDate, setTheEndDate] = useState(new Date()) 

    const [booking, setBooking] = useState({
        startDate: "",
        endDate: "",
        amount: "",
        comment:"",
        booker:`/api/users/${myid}`,
        room:`/api/rooms/${id}`
    })

    const [errors, setErrors ] = useState({
        startDate: "",
        endDate: "",
        amount: "",
        comment:"",
        booker:{},
        room:{}
    })

    const fetchRoom = async id =>{
        try{
            const data = await roomsAPI.find(id)
            setRoom(data)
        }catch(error){
            toast.error("Impossible de charger la chambre")
        }
    }
    useEffect(()=>{
        fetchRoom(id)
    }, []);

    const dateChange = (date)=>{
        let formatDate = moment(date).format("DD/MM/YYYY")
        setTheStartDate(date)
        setMyStartDate(formatDate)
    } 

    const dateChange2 = (date)=>{
        let formatDate = moment(date).format("DD/MM/YYYY")
        setTheEndDate(date)
        setMyEndDate(formatDate)
    } 

    const handleChange = (event) => {
        //const value = event.currentTarget.value 
        //const name = event.currentTarget.name
        const {name, value} = event.currentTarget
        setBooking({...booking, [name]:value})
       
    }

    const calculateAmount= () =>{
        const endDate = theEndDate

        const startDate = theStartDate

        if(startDate && endDate && startDate < endDate){
            const interval = endDate.getTime() - startDate.getTime();
            const days = interval / (24 * 60 * 60 * 1000);
            const amount = days *  room.price ;

            setMyAmount(amount.toLocaleString('fr-FR'))
            setMyDays(days)
            

        }

    }
    useEffect(()=>{
        calculateAmount()
    })

    const handleSubmit = async (event) => {
        event.preventDefault()
        //console.log(user)
        const apiErrors= {}
    
        const newBooking = {
            startDate: moment(theStartDate).format("YYYY-MM-DD"),
            endDate: moment(theEndDate).format("YYYY-MM-DD"),
            amount: parseFloat(myAmount),
            comment:booking.comment,
            booker:`/api/users/${myid}`,
            room:`/api/rooms/${id}`
        }
        if((theStartDate.getTime())>(theEndDate.getTime())){
        
            toast.error("Date invalide!")
            // on arrete si ce n'est pas bon 
            return
        }
        try{
            await Axios.post("http://marquisedesanges.melissadm.net/api/bookings",newBooking )
            setErrors({})
            props.history.replace(`/booking/${booking.id}`)
            toast.success("Merci de votre réservation !")
        }catch({response}){
            const {violations} = response.data
            if(violations){

                violations.forEach(({propertyPath, message}) => {
                    apiErrors[propertyPath] = message
                })
                setErrors(apiErrors)
                toast.error("Vous devez remplir les champs !")
            
            }
            console.log(response)
        }
    }


    const [selectdDatestart, setSelectedDatestart] = useState(null)  
    const [selectdDatend, setSelectedDatend] = useState(null)        
    const mydate = new Date();
return (   
 
<>  
<div className="slide">
    <div className="container pt-5">
        <form onSubmit={handleSubmit}>
<h1 className="mb-3">Réservation pour la chambre : <i></i></h1>
       
        <div className="row pt-5">
            <div className="col-md-7 col-xs-12">
                <h5>Quelles sont les dates qui vous intéressent</h5>
                <h6 className="mt-4">Vous avez un commentaire?</h6>
                <Field 
                    name="comment"
                    label="Commentaire"
                    placeholder="Votre commentaire"
                    // error={errors.firstName}
                    // value={comment.content}
                    onChange={handleChange}
                />
                <h5>Montant du séjour: <span id="amount"> {myAmount} </span> &euro;</h5>
                <span id="days">{myDays}</span> nuit(s) à  / nuit
            </div>
            <div className=" offset-1 col-md-4 col-xs-12 pt-3">
                <div className="card text-white bg-dark mb-3 p-2" style={{maxWidth: "18rem" }}>
                    <div className="card-body">
                    <p>Date d'arrivée</p>
                    <DatePicker                   
                        name="startDate"
                        minDate={mydate}
                        value={myStartDate}
                        onChange={dateChange}
                        />
                        <br/><br/>
                    <p>Date de départ</p>
                    <DatePicker
                        name="endDate"
                        value={myEndDate}
                        minDate={theStartDate}
                        onChange={dateChange2}   
                        disabledDate="22/06/2020"
                       />
                    </div>
                </div>
                   
            </div>
        </div>
        <button type="submit" className="btn btn-light">Réserver</button>
        </form>
    </div>
</div>

</>
);
}

export default BookPage;