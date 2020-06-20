import React, { useState } from 'react'


const ShowComment = ({comment}) => {

    

    return ( 
        <>
        {/* {% if room.comments | length > 0 %}
                        <div class="alert alert" style={{backgroundColor:"white"}}>
                            <h4 class="alert-heading text-center">
                                <div class="row align-items-center">
                                    <div class="col">
                                        {/* {% include 'partials/rating.html.twig' with {'rating': room.avgRatings }%}                                      
                                        <br/><small>(Cette moyenne est calculée sur la base de {{ comments.id | length }} avis)</small>
                                    </div>
                                </div>
                            </h4>
                        </div>
                        {% for comment in room.comments %} */}
                            <div class="bg-light rounded mb-3 py-3 px-3">
                                <strong>{ comment.author.firstName } { comment.author.lastName} </strong> a dit: 
                                <blockquote>
                                    {comment.content  }
                                </blockquote>
                                <strong>Note donnée:{comment.rating } </strong>
                                {/* {% include 'partials/rating.html.twig' with {'rating': comment.rating} %} */}
                            </div>
                        {/* {% endfor %}

                    {% else %}
                        <h4>Cette chambre n'a pas encore reçu de commentaire ...</h4>
                    {% endif %} */}

        </>
     );
}
 
export default ShowComment; 