import React, { useContext } from 'react'
import authAPI from '../services/authAPI'
import AuthContext from '../contexts/AuthContext'
import { toast } from 'react-toastify'
import {Link} from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';



const Footer = (props) => {

    const {isAuthenticated, setIsAuthenticated, isAdmin, setIsAdmin } = useContext(AuthContext)
  
    const handleLogout = () => {
        authAPI.logout()
        setIsAuthenticated(false)
        setIsAdmin(false)
        toast.info("Vous êtes déconnecté")
        props.history.push("/")
    }

    return (

        <footer className="py-5 footer" style={{position:"relative"}}>
        <div className="container">
       <div className="row">
        <div className="col-md-4 col-xs-12 text-center">
            <div className="footer-title mb-5">
                <h4>Marquise des anges</h4>
                <p className="pt-2" >
                    L'hôtel Marquise des anges, un hôtel cinq étoiles situé sur la plus grande des îles Nuku Hiva, sompteuse et surprenante et vous repartirez conquis et émerveillé!
                    
                </p>
                
            </div>
        </div>
        <div className="col-md-4 col-xs-12 text-center">
            <div className="footer-title pb-5">
                <h4>Liens</h4>
                <ul className="navbar-nav mr-auto">
                    <Link href="/" className="pt-2">Accueil</Link>
                    <Link href="/rooms"className="pt-2">Les chambres</Link>
                    <Link href="/restaurant"className="pt-2">Restaurant</Link>
                    <Link href="/activity"className="pt-2">Les activités</Link>
                </ul>
            </div>
        </div>
        <div className="col-md-4 col-xs-12 text-center">
            <div className="footer-title pb-5">
                <h4>Compte</h4>
                {(isAuthenticated) ? (
                    <>
                    {(isAdmin) && (
                    <>
                      <Link to="#!"><p>Administration</p> </Link>
                    </>
                    )}
                    <Link to="/compte"><p>Mon compte</p></Link>
                    <Link to="#!" onClick={handleLogout}><p>Déconnexion</p> </Link>
                    </>

                    ) : (
                    <Link to="/login"><p>Connexion</p></Link>
                    )}

            </div>
        </div>
       </div>
       </div>
    </footer>
     );
}
 
export default Footer;