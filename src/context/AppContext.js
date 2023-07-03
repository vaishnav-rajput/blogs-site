import { createContext,  useEffect,  useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext();

export default function AppContextProvider({children}){

    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [totalPages, setTotalPages] = useState(null);



    async function fetchBlogPosts(page = 1){
        setLoading(true);
        try {
            const response = await fetch(`${baseUrl}?page=${page}`);
            const output = await response.json();
            console.log(output)
            setPage(page);
            setPosts(output.posts)
            setTotalPages(output.totalPages)
        } catch (error) {
            console.log("api call failed")
            setPage(1)
            setLoading(true)
            setPosts([])
            setTotalPages(null) 
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchBlogPosts()
    },[])
    
     function pageChangeHandler(page){
        setPage(page)
        fetchBlogPosts(page)
    }

    const value = {
        page,
        setPage,
        loading,
        setLoading,
        posts, 
        setPosts,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        pageChangeHandler
    }


return <AppContext.Provider value={value}>
{children}
</AppContext.Provider>
}
