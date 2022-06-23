import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.scss'


const Login = ({loginUser}) => {
    const INITIAL_STATE = {
        email:"",
        password:""
    };
    const [formUser, setFormUser] = useState(INITIAL_STATE);
    const handleInput = (ev) => {
      const {id, value} =ev.target;
      setFormUser({...formUser, [id]: value});

    };
    const navigate = useNavigate();
    const onSubmit = (ev) => {
      ev.preventDefault();
      const {email, password} = formUser;
      loginUser({email, password});
      navigate('/gallery');
    };
  return (
    <div className='formLogin'>
    <h2>Login</h2>
    <form onSubmit={onSubmit} className='formulario'>
      <label htmlFor='email'>Email</label>
      <input type="text" id='email' value={formUser.email} onChange={handleInput}></input>
      <label htmlFor='password'>Password</label>
      <input type='text' id='password' value={formUser.password} onChange={handleInput}></input>
      <button type='submit'>Login</button>
    </form>

    </div>
  )
}

export default Login