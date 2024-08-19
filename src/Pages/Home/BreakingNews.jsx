import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

function BreakingNews() {
  return (
    <div className="flex bg-stone-300 text-black m-10">
      <button className='btn btn-error text-white'>Latest</button>
      <Marquee pauseOnHover={true} speed={100} >
         <Link to = '/'>Match Highlights: Germany vs Spain — as it happened   !</Link>
         <Link to = '/'>Match Highlights: Germany vs Spain — as it happened   !</Link>
         <Link to = '/'>Match Highlights: Germany vs Spain — as it happened   !</Link>
      </Marquee>
    </div>
  )
}

export default BreakingNews
