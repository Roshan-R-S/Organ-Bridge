
import { Fragment, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getAllProduct } from "../../admin/products/FetchApi";
import { HomeContext } from "./index";

const apiURL = process.env.REACT_APP_API_URL;

const SingleProduct = (props) => {
  const { data, dispatch } = useContext(HomeContext);
  const { products } = data;
  const history = useHistory();



  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    dispatch({ type: "loading", payload: true });
    try {
      let responseData = await getAllProduct();
      setTimeout(() => {
        if (responseData && responseData.Products) {
          dispatch({ type: "setProducts", payload: responseData.Products });
          dispatch({ type: "loading", payload: false });
        }
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  if (data.loading) {
    return (
      <div className="col-span-2 md:col-span-3 lg:col-span-4 flex items-center justify-center py-24">
        <svg
          className="w-12 h-12 animate-spin text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          ></path>
        </svg>
      </div>
    );
  }
  return (
    <Fragment>
      {products && products.length > 0 ? (
        products.map((item, index) => {
          return (
            <Fragment key={index}>
              <div className="relative col-span-1 m-2 group">
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <div className="relative overflow-hidden" onClick={(e) => history.push(`/products/${item._id}`)}>
                    <img
                      className="w-full h-48 object-cover object-center cursor-pointer transition-transform duration-500 group-hover:scale-110"
                      src={`${apiURL}/uploads/products/${item.pImages[0]}`}
                      alt={item.pName}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer">
                       <span className="bg-white text-gray-800 px-4 py-2 rounded-full font-semibold text-sm shadow-lg">View Details</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                       <h3 className="text-lg font-bold text-gray-800 truncate" title={item.pName}>{item.pName}</h3>
                    </div>
                     <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500 font-medium">PIN: {item.pPrice}</div>
                        {/* Display New Medical Logic if available */}
                        {item.pBloodType && (
                           <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-bold ring-1 ring-red-200">{item.pBloodType}</span>
                        )}
                     </div>
                     {item.pOrganCondition && (
                        <div className="mt-2 text-xs text-gray-400">Condition: {item.pOrganCondition}</div>
                     )}
                  </div>
                </div>
              </div>
            </Fragment>
          );
        })
      ) : (
        <div className="col-span-2 md:col-span-3 lg:col-span-4 flex items-center justify-center py-24 text-2xl">
          No Organ found
        </div>
      )}
    </Fragment>
  );
};

export default SingleProduct;
