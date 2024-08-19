import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { MdOutlineDateRange } from "react-icons/md";
import moment from 'moment';
import img1 from '../../../assets/1.png'
import img2 from '../../../assets/2.png'
import img3 from '../../../assets/3.png'

function LeftSideNav() {
  const [categories, setCategories] = useState([])
  useEffect( () =>{
    fetch('categories.json')
    .then(res => res.json())
    .then(data => setCategories(data))
  } ,[])
  return (
    <div>
      <h1 className="text-2xl p-3">All Caterogy</h1>
      <button className="btn bg-neutral-400 w-full text-xl">National News</button>
      <div className="space-y-8 mt-3">
        {
          categories.map(category => <Link 
          to={`/category/${category.id}`} 
          key={category.id}
          className="block text-center text-xl text-[#9F9F9F] font-semibold"
          >
          {
             category.name
          }
          </Link>)
        }
      </div>
      <div className="mt-5">
      <div className="mt-3">
          <figure>
            <img
              src={img1}
              alt="Shoes" />
          </figure>
          <div className="mt-4">
          <p className="text-[#403F3F] text-xl">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
            <div className="flex mt-5">
            <h2 className="mr-6">Sports</h2>
            <p className="flex text-[#403F3F]"><MdOutlineDateRange className="mr-2 text-xl"/>{moment().format(" MMMM DD, YYYY")}</p>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <figure>
            <img
              src={img2}
              alt="Shoes" />
          </figure>
          <div className="mt-4">
          <p className="text-[#403F3F] text-xl">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
            <div className="flex mt-5">
            <h2 className="mr-6">Sports</h2>
            <p className="flex text-[#403F3F]"><MdOutlineDateRange className="mr-2 text-xl"/>{moment().format(" MMMM DD, YYYY")}</p>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <figure>
            <img
              src={img3}
              alt="Shoes" />
          </figure>
          <div className="mt-4">
          <p className="text-[#403F3F] text-xl">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
            <div className="flex mt-5">
            <h2 className="mr-6">Sports</h2>
            <p className="flex text-[#403F3F]"><MdOutlineDateRange className="mr-2 text-xl"/>{moment().format(" MMMM DD, YYYY")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftSideNav
