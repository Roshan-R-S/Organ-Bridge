import { Fragment, useContext } from "react";
import ProductCategoryDropdown from "./ProductCategoryDropdown";
import { HomeContext } from "./index";

const ProductCategory = (props) => {
  const { data, dispatch } = useContext(HomeContext);

  return (
    <Fragment>
      <div className="flex justify-between items-center bg-gray-100 rounded-lg p-3 my-4 shadow-sm border border-gray-200">
        <div
          onClick={(e) =>
            dispatch({
              type: "categoryListDropdown",
              payload: !data.categoryListDropdown,
            })
          }
          className={`group flex items-center space-x-2 cursor-pointer transition-colors duration-200 ${
            data.categoryListDropdown ? "text-yellow-700" : "text-gray-700 hover:text-yellow-700"
          }`}
        >
          <span className="font-semibold tracking-wide">
            Categories
          </span>
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${
              data.categoryListDropdown ? "transform rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>

        <div className="flex items-center space-x-4">
          <div
            onClick={(e) =>
              dispatch({
                type: "searchDropdown",
                payload: !data.searchDropdown,
              })
            }
            className={`flex items-center space-x-1 cursor-pointer transition-colors duration-200 ${
              data.searchDropdown ? "text-yellow-700" : "text-gray-700 hover:text-yellow-700"
            }`}
          >
            <span className="font-semibold tracking-wide">Search</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <ProductCategoryDropdown />
    </Fragment>
  );
};

export default ProductCategory;
