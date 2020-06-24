import React, {useState, useEffect} from 'react'
import roomsAPI from "../services/roomsAPI"
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import roomsLoader from '../components/loaders/roomsLoader'

const RoomsPage = (props) => {
  const [rooms, setRooms] = useState([])
  
  const [loading, setLoading] = useState(true)
    const fetchRooms= async () => {
        try{
            const data = await roomsAPI.findAll()
            setRooms(data)
            setLoading(false) // j'ai fini de charger
        }catch(error){
           toast.error("Impossible de charger les chambres")
        }
    }
    useEffect(()=>{
        fetchRooms()
    }, []);
return (   
  <> 
<div className="slide">
{(!loading) ? (
    <div className="container pb-5">
        <h1 className="mb-5">Les chambres</h1>
        {rooms.map(rooms =>
          <div className="card mb-3" style={{maxwidth: "1200px"}} key={rooms.id}>
            <div className="row no-gutters">
                <div className="col-md-4" style={{objectfit:"cover",position:"relative"}}>
                <img src={"http://marquisedesanges.melissadm.net/uploads/"+rooms.cover} className="card-img" alt={rooms.title} />
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                    <div className="card-title" style={{fontSize:"25px"}}>{rooms.title}</div>
                    <div className="intro">{rooms.presentation}</div>
                        <div className="row footercard">
                            <div className="col-6"><i className="far fa-square"></i>{rooms.metrecarre} Size m2</div>
                            <div className="col-6"><i className="fas fa-male"></i>{rooms.personns} Adultes</div>                
                        </div>
                    </div>
                </div>
                <div className="col-md-2 prix">
                <div>
                    <div>
                        <span className="price-number">{rooms.price}€</span>
                        <p><span className="per-night-text">par nuit</span></p>
                    </div>
                   <Link to={`/rooms/${rooms.id}`}><div className="bouton">Plus de détails <i className="fas fa-chevron-circle-right"></i></div></Link>
              </div>
                </div>
            </div>
        </div>
        )}
    </div>
     ) : (
        <roomsLoader />
    )}
</div>
</>
);
}
export default RoomsPage;