import React, { useState } from 'react'


const ShowIR = ({commentH}) => {

    

    return ( 
        <>
           <div>
                <h3><strong>{commentH.author.firstName}</strong></h3>
                <p>{commentH.content}</p>

            </div>

        </>
     );
}
 
export default ShowIR; 