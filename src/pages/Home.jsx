import React from 'react'
import Header from '../components/Header'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
        <Header/>
        <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
            <Blogs/>
            <Pagination/>
        </div>``
    </div>
  )
}

export default Home;