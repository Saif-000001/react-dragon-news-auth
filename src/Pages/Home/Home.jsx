import React, { useEffect, useState } from 'react'
import Header from '../Shared/Header/Header'
import NavBar from '../Shared/NavBar/NavBar'
import RightSideNav from '../Shared/RightSideNav/RightSideNav'
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav'
import BreakingNews from './BreakingNews'
import NewsBody from '../Shared/NewsBody/NewsBody'
import { useLoaderData } from 'react-router-dom'

function Home() {
  const news = useLoaderData()
  // const [news, setNews] = useState([])
  const [newsLength, setNewsLength] = useState(3)
  // useEffect(() =>{
  //     fetch('news.json')
  //     .then(res => res.json())
  //     .then(data => setNews(data))
  // },[])
  return (
    <div>
         <Header />
         <BreakingNews />
         <NavBar />
         <div className="grid md:grid-cols-4 gap-6">
            <div className=''>
            <LeftSideNav />
            </div>
            <div className='md:col-span-2 text-center'>
            <h2 className="text-2xl">Dragon News Home: </h2>
             {
              news.slice(0,newsLength).map(updateNews => <NewsBody key = {updateNews.category_id} updateNews={updateNews} />)
             }
             <div className={`${newsLength === news.length ? 'hidden': ''}`}>
             <button onClick={() => setNewsLength(news.length)} className='btn btn-error py-3 px-5 m-5'>See More</button> 
             </div>
            </div>
            <div className=''>
            <RightSideNav />
            </div>
         </div>           
    </div>
  )
}

export default Home
