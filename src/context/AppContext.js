import { createContext,  useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({children}){

    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)


    const value = {
        page,
        setPage,

    }

    
return <AppContext.Provider value={value}>
{children}
</AppContext.Provider>
}
