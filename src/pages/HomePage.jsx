import React from 'react'
import {Link} from "react-router-dom"




const HomePage = (props) => {
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
            <h1 className="image-grid__title">Découvrez nos chambres<Link to="#"> <i className="fas fa-chevron-circle-right"></i></Link></h1>

        </div>
    </div>
    </div>
    <div className="slide resto">
        <div className="container">
            <div className="row" >
                <div className="col-lg-6">
                    
                </div>
                <div className=" carteresto offset-1 col-lg-5 pt-5">
                    
                        <h1 className="title">Notre carte... <Link to="#"><i className="fas fa-chevron-circle-right inverse"></i>  </Link></h1>
                </div>
            </div>
        </div>
    </div>
    <div className="slide commentaire">
        <div className="container">
                <div className="row justify-content-end">
                    <div className="bloc col-lg-6 col-md-12 ">
                     <div className="carousel slides" data-ride="carousel" id="quote-carousel">
                        <ol className="carousel-indicators">
                            
                        </ol>
                        <div className="carousel-inner">        
                        
                            
                                 
                        </div>
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
            </div>
        </div>
        <div className="activity">
            <div className="container">
              <h1 className="title">Activités...</h1><h1 className="ml"> et détente... <Link to="{{ path('activité') }}"><i className="fas fa-chevron-circle-right"></i> </Link></h1>

            </div>
        </div>
        <div className="galeriePhoto owl-carousel">
           
        </div>      
     
    </>
);
}

export default HomePage;