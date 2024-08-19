import { Link, NavLink } from "react-router-dom"
import DefaultUserPicture from '../../../assets/user.png'
import { AuthContext } from "../../../Providers/AuthProviders"
import { useContext } from "react"


function NavBar() {
  const {user, logOut} = useContext(AuthContext)

  const handleSignOut = () =>{
    logOut()
    .then()
    .catch()
  }

  const navLink = <>
  <li><NavLink to = '/'>Home</NavLink></li>
  <li><NavLink to = '/about'>About</NavLink></li>
  <li><NavLink to = '/career'>Career</NavLink></li>

  </>
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {
              navLink
            }
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {
            navLink
          }
        </ul>
      </div>
      <div className="navbar-end">
        <div className="w-10 mr-2">
          <img className="rounded-full"
            src={DefaultUserPicture}
            alt="default-user" />
        </div>
        {
          user ? <button onClick={handleSignOut} className="btn">Sign Out</button> 
          : <Link to='/login'><button className="btn">Login</button></Link>
        }
      </div>
    </div>
  )
}

export default NavBar
