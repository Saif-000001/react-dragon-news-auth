import { CiShare2 } from "react-icons/ci";
import { MdContentCopy } from "react-icons/md";
import ReactStars from "react-rating-stars-component";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";





function NewsBody({updateNews}) {
  const {_id, author, title, image_url, details, total_view, rating} = updateNews;
  return (
    <div className="border-b-2">
       <div className=" flex bg-[#F3F3F3] p-2 my-5 items-center justify-between">
        <div className="flex items-center">
            <img className="w-10 rounded-full mr-3" src={author.img} alt="img" />
             <div className="text-sm">
             <h2>{author.name}</h2>
             <p>{author.published_date}</p>
             </div>
        </div>
        <div className="flex items-center space-x-5">
          <CiShare2  />
           <MdContentCopy />
        </div>
       </div>
       <div className="pb-5">
        <h1 className="text-xl font-semibold pb-3">
          {title}
        </h1>
        <img src={image_url} alt="" />
        {
          details.length > 200 ? <p>{details.slice(0, 200)}...<Link to={`/news/${_id}`}><span className="text-[#FF8C47]">Read More</span></Link></p>:
          <p>{details}</p>
        }
        
       </div>
       <hr />
       <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
            <ReactStars
              count={5}
              size={24}
              activeColor="#FF8C47"
            /><span>{rating.number}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEye />
              <span>{total_view}</span>
            </div>
       </div>
    </div>
  )
}

export default NewsBody
