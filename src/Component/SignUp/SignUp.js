import React, { useState } from "react";
import "../SignUp/SignUp.css"
import { Link, useNavigate } from "react-router-dom";


export default function SignUp(){

const [email,setEmail] = useState()
const [password,setPassword] = useState()
const [Confirmpassword , setConfirmpassword] = useState()
const navigate = useNavigate()


const submithandler = (e)=>{
   e.preventDefault()
    console.log(email,password,Confirmpassword)

    fetch("/SIGNUP",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({
            email,password,Confirmpassword
        })
        
    }).then(res=>res.json()).then(data=>{
        console.log(data)
       if(data.err){
        alert (data.err)
       }else{
        alert (data.message)
        navigate("/")
       }
    })
}
    return (
        <>
        <div className="container">
           <form className="SignUp" onSubmit={submithandler}>
            <h1>SignUp</h1>
            <div className="input">
                <input id="email" type="text" placeholder="Enter youe email" value={email} onChange={(e)=>setEmail(e.target.value)} name="email"/>
                <input id="pwd" type="password" placeholder="Enter youe password" value={password} onChange={(e)=>setPassword(e.target.value)} name="password" />
                <input id="confpwd" type="password" placeholder="Enter youe Confirmpassword" value={Confirmpassword} onChange={(e)=>setConfirmpassword(e.target.value)} name="conformpassword" />
           
            </div>
            <div className="btn">
                <button id="button" >SignUp</button>
            </div>
            <div className="tag">
               <Link  to="/" ><h2>SignIn</h2></Link>
            </div>
           </form>
        </div>
        </>
    )
}