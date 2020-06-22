import React, { useState } from 'react'
import moment from "moment"

const ShowComment = ({comment}) => {

    const formatDate = (str) => moment(str).format('DD/MM/YYYY')

    return ( 
        <>
        {(comment) && (
  <div class=" rounded mb-3 py-3 px-3">
  <strong>{ comment.author.firstName } { comment.author.lastName}</strong>, le  {formatDate(comment.createdAt)} a dit: 
  <br/>
                              <blockquote>
                                  {comment.content}
                              </blockquote>
                         
                              {/* {% include 'partials/rating.html.twig' with {'rating': comment.rating} %} */}
                          </div>
        )}
  
                          
                

        </>

     );
}
 
export default ShowComment; 