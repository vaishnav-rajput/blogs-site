import { createContext,  useEffect,  useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export default function AppContextProvider({children}){

    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [totalPages, setTotalPages] = useState(null);
    const navigate = useNavigate()


    async function fetchBlogPosts(page = 1, tag = null, category){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        if(tag){
            url += `&tag=${tag}`;
        }
        if(category){
            url += `&category=${category}`;
        }
        try {
            console.log(url)
            const response = await fetch(url);
            const output = await response.json();
            if (!output.posts || output.posts.length === 0)
            throw new Error("Something Went Wrong");
            setPage(output.page);
            setPosts(output.posts)
            setTotalPages(output.totalPages)
        } catch (error) {
            console.log("api call failed")
            setPage(1)
            setPosts([])
            setTotalPages(null) 
        }
        setLoading(false)
    }


    
     function pageChangeHandler(page){
        navigate({search: `?page=${page}`})
        setPage(page)
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
