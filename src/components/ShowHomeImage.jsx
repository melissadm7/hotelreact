import React, { useState } from 'react'


const ShowHomeImage = ({imageH}) => {

    

    return ( 
        <>
           <figure className="image-grid__item image-grid__item--1">
                <img src={"http://marquisedesanges.melissadm.net/uploads/" + imageH.image}  alt="Example"/>
            </figure>
            <figure className="image-grid__item image-grid__item--2">
                <img src={"http://marquisedesanges.melissadm.net/uploads/" + imageH.image}  alt="Example"/>
            </figure>
            <figure className="image-grid__item image-grid__item--3">
                <img src={"http://marquisedesanges.melissadm.net/uploads/" + imageH.image}  alt="Example"/>
            </figure>
            <figure className="image-grid__item image-grid__item--4">
                <img src={"http://marquisedesanges.melissadm.net/uploads/" + imageH.image}  alt="Example"/>
            </figure>

            <figure className="image-grid__item image-grid__item--5">
                <img src={"http://marquisedesanges.melissadm.net/uploads/" + imageH.image}  alt="Example"/>
            </figure>
        </>
     );
}
 
export default ShowHomeImage; 