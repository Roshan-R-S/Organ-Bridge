import { Fragment, useContext } from "react";
import { DashboardUserContext } from "./Layout";

const SearchFilter = (props) => {
  const { data, dispatch } = useContext(DashboardUserContext);
  return (
    <Fragment>
      <div className="w-full my-4 md:my-0 flex items-start justify-end">
        <div className="bg-white border w-full md:w-6/12 lg:w-4/12 shadow-lg rounded-r flex items-center">
          <span className="py-2 px-3">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <input
            placeholder="Find orders..."
            className="w-full py-2 px-2 focus:outline-none"
            type="text"
            value={data.searchTerm}
            onChange={(e) =>
              dispatch({ type: "searchTerm", payload: e.target.value })
            }
          />
        </div>
      </div>
    </Fragment>
  );
};

export default SearchFilter;
