import React, {useState, useEffect, useContext} from 'react'
import roomsAPI from "../services/roomsAPI"
import AuthContext from '../contexts/AuthContext'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import ShowIR from '../components/ShowIR'
import ShowComment from '../components/ShowComment'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';





const RoomPage = (props) => {


    const {isAuthenticated } = useContext(AuthContext)

    var {id} = props.match.params
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
    
    const fetchRoom= async id => {
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

    const imageRoom = Object.keys(room.imageRooms).map(key => {
        return (
            <ShowIR key={key} imageR={room.imageRooms[key]} />
        )
    })
    
    const comments = Object.keys(room.comments).map(key => {
        return (
            <ShowComment key={key} comment={room.comments[key]} />
        )
    })
    
return (   
 
  <>  
<div className="slide_couverture" style={{height:"20rem", overflow:"hidden"}}>
  <img src={"http://marquisedesanges.melissadm.net/uploads/"+ room.cover} alt={room.title}  style={{objectFit:"cover",position:"relative"}}/>
  {room.title}
</div>
<div className="slide">       
    <div className="container">
        <div className="row pt-5">
            <div className="col-md-8 col-12">
            <Carousel>
                {imageRoom}
            </Carousel>
            </div>
            <div className="col-md-4 col-12">
                <div className="card mb-3" style={{maxWidth:"38rem",position:"relative",backgroundImage: "url(https://livedemo00.template-help.com/wt_prod-20821/images/bg-price-1920x1128.png)",backgroundColor:"#2C2C2C"}}>
                    <div className="card-header">
                        <h3 className="card-title mt-3" style={{textAlign:"center"}}><i>{room.title}</i></h3>
                    </div>
                    <div className="card-body">
                        <p className="card-text mt-2"><i>De</i></p>
                        <p style={{fontSize: "4rem",textAlign:"center",color:"white"}}>{room.price}€</p>
                        <p class="card-text" style={{position:"absolute",right:"13%"}}><i>/Nuit</i></p>
                       
                    </div>
                    <div className="card-body">
                        <div className="card-title"style={{textAlign:"center"}}>
                            <Link to={`/rooms/${room.id}/book`}>
                            <h5 className="bouton">RESERVER<i className="fas fa-chevron-circle-right"></i></h5></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-5">
                <nav className="mt-5">
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true"><h5>Description</h5></a>
                        <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false"><h5>Informations</h5></a>
                        <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false"><h5>Commentaire(s)</h5></a>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div className="intro p-4">{room.introduction}</div>
                </div>
                <div className="tab-pane fade p-4" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                    <div className="row justify-content-center">
                        <div className="col-6">
                            <li>Mètre carré : {room.metrecarre}m2</li>
                            <li>{room.bain}</li>
                            <li>Piscine privée : {room.pool}</li>
                            <li>Wifi : {room.wifi}</li>
                        </div>  
                        <div className="col-6">
                            <li>Sauna privé : {room.sauna}</li>
                            <li>All in : {room.allin}</li>
                            <li>Climatisation : {room.clim}</li>
                            <li>Cuisine : {room.kitchen}</li>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                <div className="alert alert-info" style={{backgroundColor:"#343434", color:'#f7efeb'}}>
                
                     <div className="row align-items-center">
                     <h2 className="mb-3">Commentaires</h2>
                       
                     </div>
               
             </div>
            {( room.comments.length  > 0) ? (
              <>
            {comments}
           </> ): (
           <> 
           
           <h3>Cette chambre n'a pas encore reçu de commentaire ...</h3>
           
           </> )}
           
               
  
       

</div>

                </div>
            </div>
            </div>
            </div>
        </div>
    


</>
);
}

export default RoomPage;