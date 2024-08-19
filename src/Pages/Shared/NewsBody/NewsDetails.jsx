import { Link, useLoaderData, useParams } from "react-router-dom"
import Header from "../Header/Header"
import NavBar from "../NavBar/NavBar"
import RightSideNav from "../RightSideNav/RightSideNav"


function NewsDetails() {
  const {id} = useParams()
  const newsDetails = useLoaderData()
  return (
    <div>
      <Header />
      <NavBar />
      <div className="grid md:grid-cols-4">
        <div className="col-span-3">
          <h1 className="text-3xl">Dragon News</h1>
          {
            newsDetails.map(news =>
                <div key={news._id} className={` p-10 ${news._id === id ? '' : 'hidden'}`}>
                  <div className="card card-compact bg-base-100 shadow-xl">
                    <figure>
                      <img
                        src={news.image_url}
                        alt="img" />
                    </figure>
                    <div className="card-body">
                      <h1 className="text-2xl font-semibold">{news.title}</h1>
                      <p className="text-sm mb-3">{news.details}</p>
                      <div className="card-actions">
                        <Link to="/"><button className="btn btn-error">All news in this category</button></Link>
                      </div>
                    </div>
                  </div>
                </div>
                 
            )
          }
        </div>
        <div>
          <RightSideNav />
        </div>
      </div>
    </div>
  )
}

export default NewsDetails
