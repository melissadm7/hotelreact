import React, { useState } from 'react'


const ShowIR = ({imageR}) => {

    

    return ( 
        <>
           <div className="carousel-item">
                <img src={"http://marquisedesanges.melissadm.net/uploads/"+imageR.image}  className="d-block w-100" alt={ imageR.title } />
                <div className="carousel-caption d-none d-md-block">
                    <p>{ imageR.caption }</p>
                </div>
            </div>

        </>
     );
}
 
export default ShowIR; 