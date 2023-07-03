import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {

    const {page, totalPages, pageChangeHandler} = useContext(AppContext);
    return(
        <div>
            <div>
                {
                    page > 1  && 
                    <button  onClick={() => (pageChangeHandler(page - 1))}>prev</button>
                }
            </div>
            <div>
                {
                    page < totalPages &&
                    <button onClick={() => (pageChangeHandler(page + 1))}>next</button>
                }
            </div>
            <div>
                <p>page <span>{page}</span> of <span>{totalPages}</span> </p>
            </div>
        </div>  
    )
}

export default Pagination;