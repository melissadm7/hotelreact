import React, { useState,  useContext } from 'react'
import Field from '../components/forms/Field';
import {Link} from "react-router-dom"
import { Redirect } from "react-router-dom"
import AuthContext from '../contexts/AuthContext'
import Axios from "axios"
import { toast } from 'react-toastify'

const RegisterPage = ({history}) => {

    const [user, setUser] = useState({
       firstName: "",
       lastName: "",
       email: "",
       password: "",
       passwordConfirm: ""

    })

    const [errors, setErrors] = useState({
       firstName: "",
       lastName: "",
       email: "",
       password: "",
       passwordConfirm: "" 
    })

    // Gestion des changements des inputs dans le formulaire
    const handleChange = (event) => {
        const {name, value} = event.currentTarget
        setUser({...user, [name]: value})
    }

    const {isAuthenticated} = useContext(AuthContext)
    // gestion de la soumission du formulaire 
    const handleSubmit = async (event) => {
        event.preventDefault()
        //console.log(user)
        const apiErrors= {}
        if(user.password !== user.passwordConfirm){
            apiErrors.passwordConfirm="Votre confirmation de mot de passe n'est pas conforme à l'original"
            setErrors(apiErrors)
            toast.error("Votre confirmation de mot de passe n'est pas conforme à l'original !")
            // on arrete si ce n'est pas bon 
            return
        }
        try{
            await Axios.post("http://marquisedesanges.melissadm.net/api/users", user)
            setErrors({})
            toast.success("Bienvenue à l'hôtel Marquise des anges")
            history.replace("/")
        }catch({response}){
            const {violations} = response.data
            if(violations){

                violations.forEach(({propertyPath, message}) => {
                    apiErrors[propertyPath] = message
                })
                setErrors(apiErrors)
                
            }
        }
    }

    return isAuthenticated ? ( 
        <Redirect to="/" /> 
     ) : (
        <>
<div className="slide">
    <div className="container p-5">
        <div className="row inscription">
            <div className="col-md-8 cadreinscription">
			    <h1>Inscription</h1>
            <form onSubmit={handleSubmit}>
                <Field 
                    name="firstName"
                    label="Prénom"
                    placeholder="Votre prénom"
                    error={errors.firstName}
                    value={user.firstName}
                    onChange={handleChange}
                />
                <Field 
                    name="lastName"
                    label="Nom de famille"
                    placeholder="Votre nom de famille"
                    error={errors.lastName}
                    value={user.lastName}
                    onChange={handleChange}
                />
                <Field 
                    name="email"
                    label="Adresse E-mail"
                    type="email"
                    placeholder="Votre adresse e-mail"
                    error={errors.email}
                    value={user.email}
                    onChange={handleChange}
                />
                <Field 
                    name="password"
                    label="Mot de passe"
                    type="password"
                    placeholder="Votre mot de passe"
                    error={errors.password}
                    value={user.password}
                    onChange={handleChange}
                />
                <Field 
                    name="passwordConfirm"
                    label="Confirmation de mot de passe"
                    type="password"
                    placeholder="Confirmez votre mot de passe"
                    error={errors.passwordConfirm}
                    value={user.passwordConfirm}
                    onChange={handleChange}
                />
                 <div className="form-group">
                    <button type="submit" className="btn btn-success">Confirmation</button>
                    <Link to="/login" className="btn btn-secondary">Retour</Link>
                </div>
            </form>
            </div>
            <div className="col-md-4 cadreimage">
            </div>
	    </div>
    </div>
</div>
        </>
     );
}
 
export default RegisterPage; 