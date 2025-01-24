import React, { useState } from 'react'
import '../App.css'
import Axios from 'axios'
const SignUp = () => {
    const [userName, setUserName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const data={userName,email,password}
    const handleSubmit=(e)=>{
        e.preventDefault()
        Axios.post('http://localhost:3000/auth/signup',data).then(response=>{
            console.log(response)
        }).catch(err=>{console.log(err)})

    }
  return (
    <div className='sign-up-container'>
        <form className='sign-up-form' onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
            <label htmlFor="username">Username:</label>
            <input onChange={(e)=>setUserName(e.target.value)}type='text' placeholder='Username'/>

            <label htmlFor='email'>Email:</label>
            <input onChange={(e)=>setEmail(e.target.value)}type='email' placeholder='Email' autoComplete='off'/>
            
            <lable htmlFor='password'>Password:</lable>
            <input onChange={(e)=>setPassword(e.target.value)}type='password' placeholder='**********'/>

            <button type='submit'>Sign Up</button>
        </form>
    </div>
  )
}

export default SignUp
