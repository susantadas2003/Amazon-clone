import "./App.css";
import Checkout from "./Checkout";
import Footer from "./Footer";
import Header from "./Header";
import HeaderPanel from "./HeaderPanel";
import Home from "./Home";
import Login from "./Login";
import ShoppingSection from "./ShoppingSection";
import {
  BrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import React,{ useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";


const promise=loadStripe(' pk_test_51NoMGYSAmDu2XrjxX4wP670RD14C73Irwq9tq6gf5EZj3iMXS7iG10twVNS9XtfNbeEsRlGNmwUKylV8vr8b1eQG00l15gc05u')

function App() {


  const[{basket,user},dispatch]=useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

onAuthStateChanged(auth,(user) => {
      // console.log("THE USER IS >>> ", authUser);

      if (user) {
        const uid = user.uid;
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: user,
        });
      } 
      else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
     
        });
      }
   
    })
    
  }, []);


  return (
    <BrowserRouter basename="/Amazon-clone">
      <div className="app">
        <Routes>
          <Route
            exact
            path="/checkout"
            element={
              <>
                {" "}
                <Header />
                <HeaderPanel />
                <Checkout />
                <Footer />
              </>
            }
          ></Route>
          <Route
            exact
            path="/payment"
            element={
              <>
                {" "}
                <Header />
                <HeaderPanel />
                <Elements stripe ={promise}>
                <Payment/>
                </Elements>
               
                <Footer />
              </>
            }
          ></Route>
          <Route
            exact
            path="/login"
            element={
              <>
                {" "}
                
      <Login/>
              </>
            }
          ></Route>
          <Route
            exact
            path="/orders"
            element={
              <>
                {" "}
                <Header />
                <HeaderPanel />   
      <Orders/>
      <Footer />
              </>
            }
          ></Route>
          <Route
            exact
            path="/"
            element={
              <>
                {" "}
                <Header />
                <HeaderPanel /> <Home />
                <ShoppingSection />
                <Footer />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
