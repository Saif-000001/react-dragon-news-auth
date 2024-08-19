import logo from '../../../assets/logo.png'
import moment from 'moment';

function Header() {
  return (
    <div className='text-center m-10'>
        <img className='mx-auto' src={logo} alt="logo" />
        <p>Journalism Without Fear or Favour</p>
        <h2>{moment().format('dddd, MMMM DD, YYYY')}</h2>
    </div>
  )
}

export default Header
