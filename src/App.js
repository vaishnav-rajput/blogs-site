import React, { useContext } from "react"
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination"
import "./App.css"
import Spinner from "./components/Spinner";
import { AppContext } from "./context/AppContext";

function App() {

  const {loading} = useContext(AppContext)

  return (
    <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
      <Header/>
     <Blogs/>
      <Pagination/>
    </div>
  )
}

export default App;
