import React, { useContext } from 'react'
import authAPI from '../services/authAPI'
import {NavLink} from "react-router-dom"
import AuthContext from '../contexts/AuthContext'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



const Navbar = (props) => {

    const {isAuthenticated, setIsAuthenticated, isAdmin, setIsAdmin } = useContext(AuthContext)
  
    const handleLogout = () => {
        authAPI.logout()
        setIsAuthenticated(false)
        setIsAdmin(false)
        toast.info("Vous êtes déconnecté")
        props.history.push("/login")
    }

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <NavLink className="navbar-brand" to="/"><img src="/images/logo.png" alt=""/></NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbar">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Accueil</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/rooms">Les chambres</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/restaurant">Restaurant</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/activity">Les activités</NavLink>
                    </li>

                </ul>
                <ul className="navbar-nav ml-auto">
            
                {(isAuthenticated) ? (
           
             
           <>
               {(isAdmin) && (
                 <>
                    <li className="nav-item dropdown">
                        <NavLink to="#" className="nav-link dropdown-toggle" data-toggle="dropdown" id="accountDropdownLink"  style={{color:"#deb666"}}>
                          
                        </NavLink>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="accountDropdownLink">
                            <div className="dropdown-divider"></div>
                            <NavLink to="/compte" className="dropdown-item">Mon compte</NavLink>
                            <NavLink to="#" className="dropdown-item">Admin Panel</NavLink>
                            <div className="dropdown-divider"></div>
                            <button onClick={handleLogout} className="btn btn-danger">Déconnexion</button>
                        </div>
                    </li>
                </>
                    )}
                  <li className="nav-item dropdown">
                        <NavLink to="#" className="nav-link dropdown-toggle" data-toggle="dropdown" id="accountDropdownLink"  style={{color:"#deb666"}}>
                           
                        </NavLink>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="accountDropdownLink">
                            <div className="dropdown-divider"></div>
                            <NavLink to="#" className="dropdown-item">Mon compte</NavLink>
                            <NavLink to="#" className="dropdown-item">Mes réservations</NavLink>
                            <div className="dropdown-divider"></div>
                            <button onClick={handleLogout} className="btn btn-danger">Déconnexion</button>
                        </div>
                    </li>
                   
          </>
    
                ) : (
                        <li className="nav-item">
                        <NavLink to="/login" className="nav-link"  style={{color:"#deb666"}}>Connexion</NavLink>
                    </li> 
                    
                    )}
                </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;