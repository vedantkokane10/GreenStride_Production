import React from 'react'
import {useState,useContext} from 'react'
import API from '../utils/api.js';
import { useNavigate } from 'react-router-dom';
import './loginStyles.css'
import {AuthContext} from '../context/AuthContext';



const Login = () => {
  const {setAuthenticated} = useContext(AuthContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const emailChange = (event) =>{
    setEmail(event.target.value);
  }

  const passwordChange = (event) =>{
    setPassword(event.target.value);
  }

  const handleLogin = async (event) =>{
    event.preventDefault();
    try{
        const response = await API.post('/authentication/login',{email,password});
        console.log(response.data.accessToken);
        localStorage.setItem('accessToken',response.data.accessToken);
        // after successful authentication the used will be directed to the userHome component 
        setAuthenticated(true);
        navigate('/userHome');
    }
    catch(error){
        console.error(error);
        alert('Failed to login');
    }  // end try catch block
    
  }
  return (
    <div className='loginPage'>
        
        <form onSubmit={handleLogin}>
            <h1>Login!</h1>
            <input type="email" placeholder='email' value={email} onChange={emailChange} />
            <input type="password" placeholder='password' value={password} onChange={passwordChange} />

            <button type="submit" className='formButton'>Login</button>
        </form>
    </div>
  )
};

export default Login;