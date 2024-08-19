import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className='text-center '>
      <h1 className='m-5'>4040 Error!</h1>
      <button className='btn'><Link to='/'>Go to Home</Link></button>
    </div>
  )
}

export default ErrorPage
