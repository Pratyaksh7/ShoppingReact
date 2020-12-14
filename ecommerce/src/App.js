import React, {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import {Elements} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";
import Orders from './Orders';


const promise = loadStripe('pk_test_51Hxa3wEaBirDF3MY5XdgP0vkGx1sJLRhCgh125rA3QyfW769qtjsuSEI7mU01GxB7W1StnddIctcBW3JzwsKQ0L300rjIcofrJ');

function App() {

    const [{}, dispatch] = useStateValue();  
  useEffect(()=>{

    auth.onAuthStateChanged((authUser) => {
      console.log("the user is >>>", authUser);

      if(authUser) {
        // the user is logged in or was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
      
    })

  }, []);

  return (
    <Router >
      <div className="app">
        

          <Switch>
            <Route path="/orders"> 
              <Header />
                <Orders />
             </Route>
             <Route path="/login"> 
                <Login />
             </Route>

             <Route path="/checkout"> 
              <Header />
                <Checkout />
             </Route>

             <Route path="/payment"> 
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
             </Route>

             <Route path="/">
              <Header />
                <Home />
             </Route>
            
          </Switch>
         
      </div>
    </Router>
  );
}

export default App;
