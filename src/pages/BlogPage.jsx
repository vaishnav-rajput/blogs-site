import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigation } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { baseUrl } from '../baseUrl'
import Header from '../components/Header'
import BlogDetails from '../components/BlogDetails'

const BlogPage = () => {

  const [blog, setBlog] = useState(null)
  const [relatedBlogs, setRelatedBlogs] = useState([])
  const location = useLocation()
  const navigation = useNavigation()
  const {setLoading, loading} = useContext(AppContext)

  const blogId = location.pathname.split("/").at(-1)

  async function fetchBlogPosts() {
    setLoading(true)
    let url = `${baseUrl}?blogId=${blogId}`
    try {
      const res = await fetch(url)
      const data = await res.json()
      setBlog(data.blog)
      setRelatedBlogs(data.relatedBlogs)
    } catch (error) {
         console.log("error in blog page api call")
         setBlog(null)
         setRelatedBlogs([])
    }
    setLoading(false)
  }  

  useEffect(() => {
    if(blogId){
      fetchBlogPosts()
    }
  }, [location.pathname])

  return (
    <div>
        <div>
            <Header/>
        </div>
        <div>
          <button onClick={() => navigation(-1)}>
            Back
          </button>
        </div>
        {
          loading ? (<div>
          Loading            
          </div>) : 
          blog ? 
          (<div>
            <BlogDetails post = {blog} />
            <h2>Related Blogs</h2>
            {
              relatedBlogs.map((post) => (
               <div key={post.id} >
                <BlogDetails post={post}/>
               </div> 
              ))
            }
          </div>) :
          (<div> 
            <p>No Blogs Found</p>
          </div>)
        }
    </div>
        
  )
}

export default BlogPage