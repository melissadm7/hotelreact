import React,{ useState }  from 'react';
import './App.css';
import { BrowserRouter, Switch, Route , withRouter} from "react-router-dom"
import PrivateRoute from './components/PrivateRoute'
import { ToastContainer, toast } from 'react-toastify';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ComptePage from './pages/ComptePage'
import LoginPage from './pages/LoginPage'
import RestaurantPage from './pages/RestaurantPage'
import ActivityPage from './pages/ActivityPage'
import RoomsPage from './pages/RoomsPage'
import RoomPage from './pages/RoomPage'
import BookPage from './pages/BookPage'
import BookingPage from './pages/BookingPage'
import RegisterPage from './pages/RegisterPage'
import MyBookingPage from './pages/MyBookingPage'
import AuthContext from './contexts/AuthContext'
import MonComptePage from './pages/MonComptePage'
import ModifPasswordPage from './pages/ModifPasswordPage'
import authAPI from './services/authAPI'


import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';

authAPI.setup() //permet de garder le token au rechargement

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(authAPI.isAuthenticated())
  const [isAdmin, setIsAdmin] = useState(authAPI.isAdmin())
  const NavbarWithRouter = withRouter(Navbar)
    
    // on donne les informations à la forme de notre context
    const contextValue = {
      isAuthenticated: isAuthenticated,
      setIsAuthenticated : setIsAuthenticated,
      isAdmin : isAdmin,
      setIsAdmin : setIsAdmin
  }
  return (
<>
<AuthContext.Provider value={contextValue}>
    <BrowserRouter>
      <NavbarWithRouter />
        <Switch>
          <Route path="/login" component={LoginPage}/>
          <Route path="/Register" component={RegisterPage}/>    
          <PrivateRoute path="/passwordupdate" component={ModifPasswordPage}/>
          <PrivateRoute path="/myaccount" component={MonComptePage}/>      
          <PrivateRoute path="/rooms/:id/book" component={BookPage} />
          <PrivateRoute path="/booking/:id" component={BookingPage} />
          <PrivateRoute path="/myBooking" component={MyBookingPage}/>  
          <PrivateRoute path="/compte" component={ComptePage}/>          
          <Route path="/rooms/:id" component={RoomPage} />
          <Route path="/rooms" component={RoomsPage}/>
          <Route path="/restaurant" component={RestaurantPage}/>
          <Route path="/activity" component={ActivityPage}/>   
          <Route path="/" component={HomePage} />
        </Switch>
        <Footer />
    </BrowserRouter>
    <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
    </AuthContext.Provider>
 
</>  );
}

export default App;
