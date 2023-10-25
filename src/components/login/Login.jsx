import React, { useState } from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom';


const Login = () => {
const[un,setUn] =useState('');
const[pwd,setPwd] =useState('');
const[error,seterror]=useState(false);
const navigate=useNavigate();

const readusername =(event) => {
    setUn(event.target.value);
}
const readpassword =(event) => {
    setPwd(event.target.value);
}
const readalldata =(event) =>{
    event.preventDefault();
    if(un.trim()===''|| pwd.trim ()==='')
    {
     seterror(true);
     return;
    }
    else
    {
      seterror(false);
      navigate('/home')
    }
}

  return (
    <div>
      <h1 className='aa'>SIGN-IN</h1>
      <form className='user'>
        USER NAME<input type="text" onChange={readusername}/><br/>
        PASSWORD<input type="password" onChange={readpassword}/><br/>
        <button className='button' type="submit" onClick={readalldata}>LOG IN</button><br/>
        {error && 'error occurs'}
      </form>
    </div>
  )
}

export default Login
