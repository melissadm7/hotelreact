import React, {useState, useEffect} from 'react'
import roomsAPI from "../services/roomsAPI"
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'



const RoomPage = (props) => {

    var {id} = props.match.params
    const [room, setRoom] = useState({})
    
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
                <div className="bd-example">
                    <div id="carouselExampleCaptions" className="carousel slidec" data-ride="carousel">
                        <ol className="carousel-indicators">
                            {/* {imageRooms.map(rooms =>
                                <li data-target="#carouselExampleCaptions" data-slide-to="{{ loop.index0 }}" {% if loop.first %}class="active"{% endif %}></li>
                            )} */}
                        </ol>
                        {/* <div className="carousel-inner">        
                               {room.imageRooms.map(image=>
                                    <li>{image.image}</li>
                                )}
                        </div> */}
                        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
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
                            <Link to="/">
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
                    {/* {% if room.comments | length > 0 %}
                        <div class="alert alert" style="background-color:white;">
                            <h4 class="alert-heading text-center">
                                <div class="row align-items-center">
                                    <div class="col">
                                        {% include 'partials/rating.html.twig' with {'rating': room.avgRatings }%}
                                        <br><small>(Cette moyenne est calculée sur la base de {{ room.comments | length }} avis)</small>
                                    </div>
                                </div>
                            </h4>
                        </div>
                        {% for comment in room.comments %}
                            <div class="bg-light rounded mb-3 py-3 px-3">
                                <strong>{{ comment.author.firstName }}</strong> a dit: 
                                <blockquote>
                                    {{comment.content | nl2br }}
                                </blockquote>
                                <strong>Note donnée: </strong>
                                {% include 'partials/rating.html.twig' with {'rating': comment.rating} %}
                            </div>
                        {% endfor %}

                    {% else %}
                        <h4>Cette chambre n'a pas encore reçu de commentaire ...</h4>
                    {% endif %} */}
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