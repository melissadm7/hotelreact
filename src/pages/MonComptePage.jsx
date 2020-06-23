import React, { useState, useEffect } from 'react'
import {Link} from "react-router-dom"
import Field from '../components/forms/Field'
import usersAPI from '../services/usersAPI'
import { toast } from 'react-toastify'
import jwtDecode from "jwt-decode"

const MonComptePage = ({history}) => {

    const token = window.localStorage.getItem("authToken")
    const jwtData = jwtDecode(token)
    var id= jwtData.id

    const [user, setUser] = useState({
    
        email: "",
        firstName:'',
        lastName:'',
   

    })
    
    const [errors, setErrors ] = useState({

        email: "",
        firstName:'',
        lastName:'',
     
    })

    const fetchUser = async id => {
        try{
           const {email, firstName, lastName} = await usersAPI.find(id)
           setUser({email, firstName, lastName})
        }catch(error){
         // notif
         history.replace("/") 
          
          toast.error("Une erreur est survenue !")
        }
    }

    useEffect(()=>{
        fetchUser(id)
    },[id])


    const handleChange = (event) => {
        //const value = event.currentTarget.value 
        //const name = event.currentTarget.name
        const {name, value} = event.currentTarget
        setUser({...user, [name]:value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const apiErrors = {}
       
        //console.log(user)
        try{
            await usersAPI.update(id, user)
            toast.success("Votre profil a bien été modifié")
            history.replace("/") // redirection
        }catch({response}){
            //console.log(response)
            const {violations} = response.data
            // console.log(violations)
            if(violations){
                const apiErrors = {}
                violations.forEach(({propertyPath, message}) => {
                    apiErrors[propertyPath] = message
                })
                setErrors(apiErrors)
            }
        }

    }

    return ( 
        <>
        <div className="slide">
        <div className="container">
            <h1>Modification de l'utilisateur</h1>   
            
            <form onSubmit={handleSubmit}>
                <Field 
                    name="firstName"
                    label="Prénom"
                    placeholder="Prénom"
                    type="text"
                    value={user.firstName}
                    onChange={handleChange}
                    error={errors.firstName}
                />
                <Field 
                name="lastName"
                label="Nom"
                placeholder="Nom de famille"
                type="text"
                value={user.lastName}
                onChange={handleChange}
                error={errors.lastName}
            />
            <Field 
                    name="email"
                    label="Adresse e-mail"
                    placeholder="Adresse e-mail"
                    type="email"
                    value={user.email}
                    onChange={handleChange}
                    error={errors.email}
                />
                <div className="form-group">
                    <button type="submit" className="btn btn-success">Enregistrer</button>
                    <Link to="/compte" className="btn btn-secondary ml-3">Retour</Link>
                </div>
            </form>
           
            </div>
            </div>
        
        </>
     );
}


 export default MonComptePage;