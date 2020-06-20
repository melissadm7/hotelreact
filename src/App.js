import React,{ useState }  from 'react';

import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom"
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
import RegisterPage from './pages/RegisterPage'
import AuthContext from './contexts/AuthContext'
import authAPI from './services/authAPI'


import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(authAPI.isAuthenticated())
  const [isAdmin, setIsAdmin] = useState(authAPI.isAdmin())


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
      <Navbar />
        <Switch>
          <Route path="/rooms/:id" component={RoomPage} />
          <Route path="/rooms" component={RoomsPage}/>
          <Route path="/restaurant" component={RestaurantPage}/>
          <Route path="/Register" component={RegisterPage}/>
          <Route path="/activity" component={ActivityPage}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/compte" component={ComptePage}/>          
          <Route path="/" component={HomePage} />
        </Switch>
        <Footer />
    </BrowserRouter>
    <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
    </AuthContext.Provider>
 
</>  );
}

export default App;
