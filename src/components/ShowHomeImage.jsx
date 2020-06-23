import React, { useState } from 'react'


const ShowHomeImage = (props) => {

    const myId = parseInt(props.id) + 1
    console.log(myId)

    return ( 
        <>
           <figure className={"image-grid__item image-grid__item--"+myId}>
                <img src={"http://marquisedesanges.melissadm.net/uploads/" + props.imageH.image}  alt="Example"/>
            </figure>
          
        </>
     );
}
 
export default ShowHomeImage; 