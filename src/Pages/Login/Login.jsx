import React, { useContext } from 'react'
import NavBar from '../Shared/NavBar/NavBar'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Providers/AuthProviders'

function Login() {
  const {signIn} = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
  console.log('user in the location',location)

     const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password);
        signIn(email, password)
        .then(res => {
          console.log(res.user)
          navigate(location?.state ? location.state : '/')
        })
        .catch(error => console.error(error))
     }
  return (
    <div>
      <NavBar />
      <div className="">
        <h1 className="text-3xl text-center my-10">Please Login</h1>
      <form onSubmit={handleLogin} className="lg:w-1/2 md:w-3/4 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className='text-center mt-5'>Don't have account <Link to="/register" className='text-red-600 font-bold'>Register</Link> </p>
      </div>
    </div>
  )
}

export default Login
