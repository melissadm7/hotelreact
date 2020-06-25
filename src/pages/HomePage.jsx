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
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'




const HomePage = (props) => {

    const handleOnDragStart = (e) => e.preventDefault()
    
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

    const imageH = Object.keys(imageRooms.slice(1,6)).map(key => {
        return (
            <ShowHomeImage key={key} imageH={imageRooms[key]} id={key} />
        )
    })
    
return (   
  <>   
<div className="slide1">
    <div className="logo">
        <img src="images/logogrand.png" alt="" />
        <div className="text-center">
            
        </div>
    </div>
</div>
<div className="slide room">
    <div className="container">
        <div className="image-grid">
            <h1 className="image-grid__title">Découvrez nos chambres<Link to="/rooms"> <svg id="Layer_1" enable-background="new 0 0 42 42" height="42" viewBox="0 0 512 512" width="42" xmlns="http://www.w3.org/1000/svg"><path d="m256 0c-141.385 0-256 114.615-256 256s114.615 256 256 256 256-114.615 256-256-114.615-256-256-256zm59.313 267.314-72 72c-3.124 3.124-7.219 4.687-11.313 4.687-14.126 0-21.421-17.206-11.313-27.313l60.686-60.687-60.686-60.687c-6.249-6.248-6.249-16.379 0-22.627 6.248-6.248 16.379-6.248 22.627 0l72 72c6.248 6.249 6.248 16.379-.001 22.627z"/></svg></Link></h1>
                    
                             {imageH} 
                    
        </div>
    </div>
    </div>
    <div className="slide resto">
        <div className="container">
            <div className="row" >
                <div className="col-lg-6">
                    {restaurants.slice(2,3).sort((b,a)=> a.title - b.image).map((restaurant,key) =>
                        <img src={"http://marquisedesanges.melissadm.net/uploads/"+restaurant.image} alt={restaurant.title} class="coverimg"style={{position:"relatif"}} />
                    )}
                    {restaurants.slice(3,4).sort((b,a)=> a.title - b.image).map((restaurant,key) =>
                        <img src={"http://marquisedesanges.melissadm.net/uploads/"+restaurant.image} alt={restaurant.title} class="image-Act-left"style={{position:"relatif"}} />
                    )}
     
                </div>
                <div className=" carteresto offset-1 col-lg-5 pt-5">
                    <h1 className="title">Notre carte.. <Link to="/restaurant"><svg id="Layer_1" enable-background="new 0 0 42 42" height="42" viewBox="0 0 512 512" width="40" xmlns="http://www.w3.org/1000/svg" style={{marginLeft: "-10px"}}><path d="m256 0c-141.385 0-256 114.615-256 256s114.615 256 256 256 256-114.615 256-256-114.615-256-256-256zm59.313 267.314-72 72c-3.124 3.124-7.219 4.687-11.313 4.687-14.126 0-21.421-17.206-11.313-27.313l60.686-60.687-60.686-60.687c-6.249-6.248-6.249-16.379 0-22.627 6.248-6.248 16.379-6.248 22.627 0l72 72c6.248 6.249 6.248 16.379-.001 22.627z"/></svg>  </Link></h1>   
                    {restaurants.slice(2,4).sort((b,a)=> a.title - b.content ).map((restaurant,key) =>
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
                     <div className="carousel slides pt-2" data-ride="carousel" id="quote-carousel">
                        <strong><h5>Marquise des Anges est un magnifique hôtel de luxe cinq étoiles situé sur une ile paradisiaque. 
                        Vous y vivrez des vacances inoubliables les pieds dans l'eau. Le rêve polynésien!</h5></strong>
                        
                        <div className="p-4"> 
                        
                        <svg height="16pt" viewBox="0 -10 511.98685 511" width="16pt" xmlns="http://www.w3.org/2000/svg"><path d="m510.652344 185.902344c-3.351563-10.367188-12.546875-17.730469-23.425782-18.710938l-147.773437-13.417968-58.433594-136.769532c-4.308593-10.023437-14.121093-16.511718-25.023437-16.511718s-20.714844 6.488281-25.023438 16.535156l-58.433594 136.746094-147.796874 13.417968c-10.859376 1.003906-20.03125 8.34375-23.402344 18.710938-3.371094 10.367187-.257813 21.738281 7.957031 28.90625l111.699219 97.960937-32.9375 145.089844c-2.410156 10.667969 1.730468 21.695313 10.582031 28.09375 4.757813 3.4375 10.324219 5.1875 15.9375 5.1875 4.839844 0 9.640625-1.304687 13.949219-3.882813l127.46875-76.183593 127.421875 76.183593c9.324219 5.609376 21.078125 5.097657 29.910156-1.304687 8.855469-6.417969 12.992187-17.449219 10.582031-28.09375l-32.9375-145.089844 111.699219-97.941406c8.214844-7.1875 11.351563-18.539063 7.980469-28.925781zm0 0" fill="#ffc107"/></svg>
                        <svg height="16pt" viewBox="0 -10 511.98685 511" width="16pt" xmlns="http://www.w3.org/2000/svg"><path d="m510.652344 185.902344c-3.351563-10.367188-12.546875-17.730469-23.425782-18.710938l-147.773437-13.417968-58.433594-136.769532c-4.308593-10.023437-14.121093-16.511718-25.023437-16.511718s-20.714844 6.488281-25.023438 16.535156l-58.433594 136.746094-147.796874 13.417968c-10.859376 1.003906-20.03125 8.34375-23.402344 18.710938-3.371094 10.367187-.257813 21.738281 7.957031 28.90625l111.699219 97.960937-32.9375 145.089844c-2.410156 10.667969 1.730468 21.695313 10.582031 28.09375 4.757813 3.4375 10.324219 5.1875 15.9375 5.1875 4.839844 0 9.640625-1.304687 13.949219-3.882813l127.46875-76.183593 127.421875 76.183593c9.324219 5.609376 21.078125 5.097657 29.910156-1.304687 8.855469-6.417969 12.992187-17.449219 10.582031-28.09375l-32.9375-145.089844 111.699219-97.941406c8.214844-7.1875 11.351563-18.539063 7.980469-28.925781zm0 0" fill="#ffc107"/></svg>
                        <svg height="16pt" viewBox="0 -10 511.98685 511" width="16pt" xmlns="http://www.w3.org/2000/svg"><path d="m510.652344 185.902344c-3.351563-10.367188-12.546875-17.730469-23.425782-18.710938l-147.773437-13.417968-58.433594-136.769532c-4.308593-10.023437-14.121093-16.511718-25.023437-16.511718s-20.714844 6.488281-25.023438 16.535156l-58.433594 136.746094-147.796874 13.417968c-10.859376 1.003906-20.03125 8.34375-23.402344 18.710938-3.371094 10.367187-.257813 21.738281 7.957031 28.90625l111.699219 97.960937-32.9375 145.089844c-2.410156 10.667969 1.730468 21.695313 10.582031 28.09375 4.757813 3.4375 10.324219 5.1875 15.9375 5.1875 4.839844 0 9.640625-1.304687 13.949219-3.882813l127.46875-76.183593 127.421875 76.183593c9.324219 5.609376 21.078125 5.097657 29.910156-1.304687 8.855469-6.417969 12.992187-17.449219 10.582031-28.09375l-32.9375-145.089844 111.699219-97.941406c8.214844-7.1875 11.351563-18.539063 7.980469-28.925781zm0 0" fill="#ffc107"/></svg>
                        <svg height="16pt" viewBox="0 -10 511.98685 511" width="16pt" xmlns="http://www.w3.org/2000/svg"><path d="m510.652344 185.902344c-3.351563-10.367188-12.546875-17.730469-23.425782-18.710938l-147.773437-13.417968-58.433594-136.769532c-4.308593-10.023437-14.121093-16.511718-25.023437-16.511718s-20.714844 6.488281-25.023438 16.535156l-58.433594 136.746094-147.796874 13.417968c-10.859376 1.003906-20.03125 8.34375-23.402344 18.710938-3.371094 10.367187-.257813 21.738281 7.957031 28.90625l111.699219 97.960937-32.9375 145.089844c-2.410156 10.667969 1.730468 21.695313 10.582031 28.09375 4.757813 3.4375 10.324219 5.1875 15.9375 5.1875 4.839844 0 9.640625-1.304687 13.949219-3.882813l127.46875-76.183593 127.421875 76.183593c9.324219 5.609376 21.078125 5.097657 29.910156-1.304687 8.855469-6.417969 12.992187-17.449219 10.582031-28.09375l-32.9375-145.089844 111.699219-97.941406c8.214844-7.1875 11.351563-18.539063 7.980469-28.925781zm0 0" fill="#ffc107"/></svg>
                        <svg height="16pt" viewBox="0 -10 511.98685 511" width="16pt" xmlns="http://www.w3.org/2000/svg"><path d="m510.652344 185.902344c-3.351563-10.367188-12.546875-17.730469-23.425782-18.710938l-147.773437-13.417968-58.433594-136.769532c-4.308593-10.023437-14.121093-16.511718-25.023437-16.511718s-20.714844 6.488281-25.023438 16.535156l-58.433594 136.746094-147.796874 13.417968c-10.859376 1.003906-20.03125 8.34375-23.402344 18.710938-3.371094 10.367187-.257813 21.738281 7.957031 28.90625l111.699219 97.960937-32.9375 145.089844c-2.410156 10.667969 1.730468 21.695313 10.582031 28.09375 4.757813 3.4375 10.324219 5.1875 15.9375 5.1875 4.839844 0 9.640625-1.304687 13.949219-3.882813l127.46875-76.183593 127.421875 76.183593c9.324219 5.609376 21.078125 5.097657 29.910156-1.304687 8.855469-6.417969 12.992187-17.449219 10.582031-28.09375l-32.9375-145.089844 111.699219-97.941406c8.214844-7.1875 11.351563-18.539063 7.980469-28.925781zm0 0" fill="#ffc107"/></svg></div>

                 
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