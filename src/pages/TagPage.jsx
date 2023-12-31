import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate, useNavigation } from 'react-router-dom'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'
const TagPage = () => {
  const location = useLocation()
  const navigation = useNavigate()
  const tag = location.pathname.split("/").at(-1);


  return (
    <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
      <Header/>
      <div>
        <button onClick={() => navigation(-1)}>
          back 
        </button>
        <h2>
          Blogs Tagged <span>#{tag}</span>
        </h2>
      </div>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default TagPage