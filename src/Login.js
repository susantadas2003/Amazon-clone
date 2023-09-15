import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";


function Login() {
    const[email,setEmail]=useState(' ');
    const[password,setPassword]=useState(' ');
    const navigate=useNavigate(); 
   
  
    const SignIn = async(e) => {
        e.preventDefault();

     
            signInWithEmailAndPassword(auth,email, password)
            .then((userCredential)=> {

              const user = userCredential.user;
             
                navigate('/')
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorMessage);
              

            });
    }

    const Register = (e)=> {
        e.preventDefault();

    
         createUserWithEmailAndPassword(auth,email, password)
            .then((userCredential) => {
              const user = userCredential.user;
console.log(user);
                  // it successfully created a new user with email and password

              if (user){
                // console.log(UserCredential);
                navigate('/')
              }
                
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorMessage);
              // ..
            });
    }
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_G3b6jr6x3Ja-iTjvMQwQOOO1Uo_Hsy6Smw&usqp=CAU"
        />
      </Link>
      <div className="login_container
      ">
        <h1>Sign in</h1>
        <form action="" >
          <h6>Email</h6>

          <input type="email" value={email.value } placeholder="Enter your Email" onClick={(e)=> setEmail(e.target.value)}/>
          <h6>Password</h6>
          <input type="password" value={password.value} placeholder="Enter your password" onClick={(e) =>setPassword(e.target.value)}/>
          <button type="submit" onClick={SignIn} className="login_signInButton">Sign In</button>
        </form>
        <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
        <button type="submit" onClick={Register} className="login_registerButton">Create your Amazon Acoount</button>
      </div>
      <div className="footerPanel4_login">
<div className="pages_login">
    <a href="">Conditions of Use</a>
    <a href="">Privacy Notice</a>
    <a href="">Your Ads Privacy Choices</a>
</div>
<div className="copyright_login">
    <p>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
</div>
      </div>
    </div>
  );
}

export default Login;
