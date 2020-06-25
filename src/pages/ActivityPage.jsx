import React, {useState, useEffect} from 'react'
import activityAPI from "../services/activityAPI"
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'



const ActivityPage = (props) => {
  const [activities, setActivities] = useState([])
   // loading 
    const [loading, setLoading] = useState(true)
    
  const fetchActivities= async () => {
      try{
          const data = await activityAPI.findAll()
          setActivities(data)
          setLoading(false) // j'ai fini de charger 
      }catch(error){
         toast.error("Impossible de charger les activités")
      }
  }

  useEffect(()=>{
      fetchActivities()
  }, []);
return (   
  <> 
    <div className="slide">
    {(!loading) ? (
    <div className="container">
        <h1>Les activités</h1>
        <div className="row pb-5">
        {activities.map(activity =>
                <div className="col-md-6 col-xs-12" key={activity.id}>
                    <div className="row restaurant mt-5">
                        <div className="col-lg-5 col-md-12 imageresto">
                            <img src={"http://marquisedesanges.melissadm.net/uploads/"+activity.image} alt={activity.title} style={{height:"200px",width:"200px"}} />
                        </div>
                        <div className="col-lg-7 col-md-12 mt-3 ">
                            <div className="info">
                                <div className="title">
                                    <h5>{activity.title}</h5>
                                    <div className="price"></div>
                                    <div className="mt-4">{activity.description}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )}
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

export default ActivityPage;