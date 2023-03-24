import React, { useState } from "react";
import "../SignIn/SignIn.css"
import { json, Link, useNavigate } from "react-router-dom";


export default function SignIn(){

    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const nevigate = useNavigate()

 const signinhandler = (e)=>{
    e.preventDefault()
    console.log(email,password)
    fetch("/SIGNIN",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({
            email,password
        })
    }).then(res=>res.json()).then(data=>{
        console.log(data)
        if(data.err){
           alert (data.err)
        }else{
localStorage.setItem("jwt",data.token)
localStorage.setItem("user",JSON.stringify(data.user))
alert(data.message)
nevigate("/SignUp")
        }
    })
 }


    return (
        <>
        <div className="container">
           <form className="Signin" onSubmit={signinhandler}>
            <h1>LogIn</h1>
            <div className="input">
                <input id="email" type="text" placeholder="Enter youe email" value={email} onChange={(e)=>setEmail(e.target.value)} name="email"/>
                <input id="pwd" type="password" placeholder="Enter youe password" value={password} onChange={(e)=>setPassword(e.target.value)} name="password"/>
            </div>
            <div className="btn">
                <button id="button" >SignIn</button>
            </div>
            <div className="tag">
               <Link  to="/SignUp" ><h2>Signup</h2></Link>
            </div>
           </form>
        </div>
        </>
    )
}