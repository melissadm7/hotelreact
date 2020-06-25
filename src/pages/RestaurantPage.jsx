import React, {useState, useEffect} from 'react'
import restaurantAPI from "../services/restaurantAPI"
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'



const RestaurantPage = (props) => {
    const [restaurants, setRestaurants] = useState([])
 // loading 
    const [loading, setLoading] = useState(true)
    
    const fetchRestaurants= async () => {
        try{
            const data = await restaurantAPI.findAll()
            setRestaurants(data)
            setLoading(false) // j'ai fini de charger 
        }catch(error){
           toast.error("Impossible de charger les menus")
        }
    }

    useEffect(()=>{
        fetchRestaurants()
    }, []);

return (   
  <> 
    <div className="slide">
    {(!loading) ? (
        <div className="container">
          
            <h1>Restaurant</h1>
            <div className="row">
                
                {restaurants.map(restaurant =>
                    <div className="col-md-6 col-xs-12" key={restaurant.id}>
                    <div className="row restaurant mt-5">
                        <div className="col-lg-5 col-md-12 imageresto">
                            <img src={"http://marquisedesanges.melissadm.net/uploads/"+restaurant.image} alt={restaurant.title} style={{height:"200px",width:"200px"}} />
                        </div>
                        <div className="col-lg-7 col-md-12 mt-3 ">
                            <div className="info">
                                <div className="title">
                                    <h5>{restaurant.title}</h5>
                                    <div className="price">{restaurant.price}€</div>
                                    <div className="mt-4">{restaurant.content}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )}
                </div>
           
            <div className="row justify-content-center resotimage p-5">
                <div className="col-md-3 text-center ">
                    <img src="http://www.nicdarkthemes.com/themes/hotel/wp/demo/hotel/wp-content/uploads/sites/2/2017/07/icon-17.png" alt="" />
                    <p>ALL IN</p>
                </div>
                <div className="col-md-3 text-center">
                    <img src="http://www.nicdarkthemes.com/themes/hotel/wp/demo/hotel/wp-content/uploads/sites/2/2017/07/icon-13.png" alt="" />
                    <p>COCKTAILS</p>
                </div>
                <div className="col-md-3 text-center">
                    <img src="http://www.nicdarkthemes.com/themes/hotel/wp/demo/hotel/wp-content/uploads/sites/2/2017/07/icon-14.png" alt="" />
                    <p>NON-FUMEUR</p>
                </div>
                <div className="col-md-3 text-center">
                    <img src="http://www.nicdarkthemes.com/themes/hotel/wp/demo/hotel/wp-content/uploads/sites/2/2017/07/icon-11-1.png" alt="" />
                    <p>VUE SUR MER</p>
                </div>
            </div>
        </div>
) : (
                 <div className="container" style={{position:"absolute",top:"50%",left:"45%",color:"#d2b666"}}>
                <div class="spinner-grow" role="status">
                    <span class="sr-only" >Loading...</span>
                </div>
                <div class="spinner-grow" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
                <div class="spinner-grow" role="status">
                    <span class="sr-only" >Loading...</span>
                </div>
                </div>
            )}
    </div>
</>
);
}

export default RestaurantPage;