import { Link } from 'react-router-dom';
import NavBar from '../Shared/NavBar/NavBar';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';

function Register() {
    const {createUser} = useContext(AuthContext)

    const handleRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, photo, email, password);

        createUser(email, password)
        .then(res =>{
          console.log(res.user)
        })
        .catch(error =>{
          console.error(error)
        })
     }
  return (
    <div>
      <NavBar />
      <div className="">
        <h1 className="text-3xl text-center my-10">Please Login</h1>
      <form onSubmit={handleRegister} className="lg:w-1/2 md:w-3/4 mx-auto">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
        </div>
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
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Ragister</button>
        </div>
      </form>
      <p className='text-center mt-5'>Already have an account <Link to="/login" className='text-red-600 font-bold'>Login</Link> </p>
      </div>
    </div>
  )
}

export default Register
