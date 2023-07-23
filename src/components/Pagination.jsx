import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {
  const { page, totalPages, pageChangeHandler } = useContext(AppContext);
  return (
    <div className="w-full flex justify-center items-center border-2 fixed bottom-0 bg-white">
      <div className="flex justify-between w-11/12 max-w-[670px] py-2">
        <div className="flex gap-x-2">
          {page > 1 && (
            <button
              className="rounded-md border-2 px-4 py-1"
              onClick={() => pageChangeHandler(page - 1)}
            >
              prev
            </button>
          )}
          {page < totalPages && (
            <button
              className="rounded-md border-2 px-4 py-1"
              onClick={() => pageChangeHandler(page + 1)}
            >
              next
            </button>
          )}
        </div>
        <p className="font-bold text-sm">
          page <span>{page}</span> of <span>{totalPages}</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Pagination;