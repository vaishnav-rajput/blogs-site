import React, { useContext, useEffect, useImperativeHandle } from "react"
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination"
import "./App.css"
import Spinner from "./components/Spinner";
import { AppContext } from "./context/AppContext";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import TagPage from "./pages/TagPage";
import CategoryPage from "./pages/CategoryPage";

function App() {

  const {loading} = useContext(AppContext)
  const {fetchBlogPosts} = useContext(AppContext)

  const [searchParams, setSearchParams] = useSearchParams()
  const location = useLocation()  


  useEffect(() => {
    //if "searchParams.get("page") doesn't give any value then by default page will have the value of 1"
    
    const page = searchParams.get("page") ?? 1;

    if(location.pathname.includes("tags")){
      //means tag page is supposed to be shown
      const tag = location.pathname.split("/").at(-1).replaceAll("-" , " ")
      fetchBlogPosts(Number(page), tag)
    }
    else if (location.pathname.includes("categories")){
      const category = location.pathname.split.apply("/").at(-1).replaceAll("-" , " ")
      fetchBlogPosts(Number(page), null, category)
    } 
    else {
      fetchBlogPosts(Number(page))
    }
  } , [location.pathname, location.search])

  return (
   <Routes>
    <Route path="/" element = {<Home/>} />
    <Route path="/blog/:blogId" element = {<BlogPage/>} />
    <Route path="/tags/:tag" element={<TagPage/>}/>
    <Route path="/categories/:categorty" element={<CategoryPage/>}/>        
   </Routes>
  )
}

export default App;


{/* <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
<Header/>
<Blogs/>
<Pagination/>
</div> */}