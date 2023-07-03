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
    <div>
      <Header/>
      {
        loading ? (<Spinner></Spinner>) : (
      <Blogs/>
        )
      }
      <Pagination/>
    </div>
  )
}

export default App;
