import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import restaurantAPI from "../services/restaurantAPI"
import commentAPI from "../services/commentAPI"
import imageRoomsAPI from "../services/imageRoomsAPI"
import { toast } from 'react-toastify'
import ShowHomeComment from '../components/ShowHomeComment'
import ShowHomeImage from '../components/ShowHomeImage'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';




const HomePage = (props) => {


    const [restaurants, setRestaurants] = useState([])

    const fetchRestaurants = async () => {
    try{
    const data = await restaurantAPI.findAll()
    setRestaurants(data)
    
    }catch(error){
    toast.error("Impossible de charger la carte")
    }
    }
    
    useEffect(()=>{
        fetchRestaurants()
    }, []);

    const [imageRooms, setImageRooms] = useState([])

    const fetchImageRooms = async () => {
    try{
    const data = await imageRoomsAPI.findAll()
    setImageRooms(data)
    
    }catch(error){
    toast.error("Impossible de charger la carte")
    }
    }
    
    useEffect(()=>{
        fetchImageRooms()
    }, []);


    const [comments, setcomments] = useState([])

    const fetchcomments = async () => {
    try{
    const data = await commentAPI.findAll()
    setcomments(data)
    
    }catch(error){
    toast.error("Impossible de charger les commentaires")
    }
    }
    
    useEffect(()=>{
        fetchcomments()
    }, []);

    const commentH = Object.keys(comments).map(key => {
        return (
            <ShowHomeComment key={key} commentH={comments[key]} />
        )
    })

    const imageH = Object.keys(imageRooms).map(key => {
        return (
            <ShowHomeImage key={key} imageH={imageRooms[key]} />
        )
    })
    
return (   
  <>   
<div className="slide1">
    <div className="logo">
        <img src="images/logogrand.png" alt="" />
        <div className="text-center">
            <i className="fa fa-star fa-2x p-2"></i><i className="fa fa-star fa-2x  p-2"></i><i className="fa fa-star fa-2x  p-2"></i><i className="fa fa-star fa-2x  p-2"></i><i className="fa fa-star fa-2x  p-2"></i>
        </div>
    </div>
</div>
<div class="slide room">
    <div className="container">
        <div className="image-grid">
            <h1 className="image-grid__title">Découvrez nos chambres<Link to="/rooms"> <svg id="Layer_1" enable-background="new 0 0 42 42" height="42" viewBox="0 0 512 512" width="42" xmlns="http://www.w3.org/1000/svg"><path d="m256 0c-141.385 0-256 114.615-256 256s114.615 256 256 256 256-114.615 256-256-114.615-256-256-256zm59.313 267.314-72 72c-3.124 3.124-7.219 4.687-11.313 4.687-14.126 0-21.421-17.206-11.313-27.313l60.686-60.687-60.686-60.687c-6.249-6.248-6.249-16.379 0-22.627 6.248-6.248 16.379-6.248 22.627 0l72 72c6.248 6.249 6.248 16.379-.001 22.627z"/></svg></Link></h1>
                    {imageRooms.slice(1,2).map((imageRooms,key) =>
                       <>
                             {imageH} 
                        </>
                    )}
        </div>
    </div>
    </div>
    <div className="slide resto">
        <div className="container">
            <div className="row" >
                <div className="col-lg-6">
                    {restaurants.slice(0,1).sort((b,a)=> a.title - b.image).map((restaurant,key) =>
                        <img src={"http://marquisedesanges.melissadm.net/uploads/"+restaurant.image} alt={restaurant.title} class="coverimg"style={{position:"relatif"}} />
                    )}
                    {restaurants.slice(2,3).sort((b,a)=> a.title - b.image).map((restaurant,key) =>
                        <img src={"http://marquisedesanges.melissadm.net/uploads/"+restaurant.image} alt={restaurant.title} class="image-Act-left"style={{position:"relatif"}} />
                    )}
     
                </div>
                <div className=" carteresto offset-1 col-lg-5 pt-5">
                    <h1 className="title">Notre carte.. <Link to="/restaurant"><svg id="Layer_1" enable-background="new 0 0 42 42" height="42" viewBox="0 0 512 512" width="40" xmlns="http://www.w3.org/1000/svg" style={{marginLeft: "-10px"}}><path d="m256 0c-141.385 0-256 114.615-256 256s114.615 256 256 256 256-114.615 256-256-114.615-256-256-256zm59.313 267.314-72 72c-3.124 3.124-7.219 4.687-11.313 4.687-14.126 0-21.421-17.206-11.313-27.313l60.686-60.687-60.686-60.687c-6.249-6.248-6.249-16.379 0-22.627 6.248-6.248 16.379-6.248 22.627 0l72 72c6.248 6.249 6.248 16.379-.001 22.627z"/></svg>  </Link></h1>   
                    {restaurants.slice(0,2).sort((b,a)=> a.title - b.content ).map((restaurant,key) =>
                        <div>
                        <h3><strong>{restaurant.title}</strong></h3>
                        <p>{restaurant.content}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
    <div className="slide commentaire">
        <div className="container">
                <div className="row justify-content-end">
                    <div className="bloc col-lg-6 col-md-12 ">
                     <div className="carousel slides" data-ride="carousel" id="quote-carousel">

                    <div className="carousel-inner">        
                        
                        <Carousel>
                        {comments.slice(0,4).sort((b,a)=> a.title - b.content ).map((comments,key) =>
                       <>
                             {commentH} 
                        </>
                             )}
                         </Carousel>                    
                    </div>
                </div>
            </div>
        </div>
        </div></div>
        <div className="activity">
            <div className="container">
              <h1 className="title">Activités...</h1><h1 className="ml"> et détente... <Link to="/Activity"><svg id="Layer_1" enable-background="new 0 0 42 42" height="42" viewBox="0 0 512 512" width="42" xmlns="http://www.w3.org/1000/svg"><path d="m256 0c-141.385 0-256 114.615-256 256s114.615 256 256 256 256-114.615 256-256-114.615-256-256-256zm59.313 267.314-72 72c-3.124 3.124-7.219 4.687-11.313 4.687-14.126 0-21.421-17.206-11.313-27.313l60.686-60.687-60.686-60.687c-6.249-6.248-6.249-16.379 0-22.627 6.248-6.248 16.379-6.248 22.627 0l72 72c6.248 6.249 6.248 16.379-.001 22.627z"/></svg> </Link></h1>

            </div>
        </div>
        <div className="galeriePhoto owl-carousel">

        </div>      
                        
    </>
);
}

export default HomePage;