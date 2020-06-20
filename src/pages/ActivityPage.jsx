import React, {useState, useEffect} from 'react'
import activityAPI from "../services/activityAPI"
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'



const ActivityPage = (props) => {
  const [activities, setActivities] = useState([])
    
  const fetchActivities= async () => {
      try{
          const data = await activityAPI.findAll()
          setActivities(data)
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
</div>
</>
);
}

export default ActivityPage;