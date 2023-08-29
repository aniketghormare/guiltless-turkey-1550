import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Adminlogin = () => {
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const navigate=useNavigate()
     const handleadminlogin=(e)=>{
        e.preventDefault()
        let obj={
            email,
            password
        }
        fetch("https://gamezy-borsejugal23.onrender.com/admins/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(obj)
        }).then((res)=>{
            return res.json()
        }).then((data)=>{
            console.log(data)
            localStorage.setItem("admintoken",JSON.stringify(data.token))
            
            alert("admin login successful")
            navigate("/admin")
        }).catch((err)=>{
            console.log(err)
        })
     }
  return (
    <div style={{height:"100vh",width:"100%"}}>
        <h1>Admin Login</h1>
        <label htmlFor="">Email</label>
        <br />
        <input type="text" name='email'  value={email} onChange={(e)=>setemail(e.target.value)} />
        <br />
        <label htmlFor="">Password</label>
        <br />
        <input type="text" name='password' value={password} onChange={(e)=>setpassword(e.target.value)}  />
        <br />
        <button onClick={handleadminlogin}>
             Admin Login
        </button>
    </div>
  )
}

export default Adminlogin