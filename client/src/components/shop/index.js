import AboutUs from "./about";
import AdminProtectedRoute from "./auth/AdminProtectedRoute";
import CartProtectedRoute from "./auth/CartProtectedRoute";
import ProtectedRoute from "./auth/ProtectedRoute";
import { isAdmin, isAuthenticate } from "./auth/fetchApi";
import ContactUs from "./contact";
import Home from "./home";
import ProductByCategory from "./home/ProductByCategory";
import { LayoutContext } from "./layout";
import PageNotFound from "./layout/PageNotFound";
import { layoutReducer, layoutState } from "./layout/layoutContext";
import CheckoutPage from "./order/CheckoutPage";
import ProductDetails from "./productDetails";
import WishList from "./wishlist";

export {
    AboutUs, AdminProtectedRoute,
    CartProtectedRoute, CheckoutPage, ContactUs, Home, LayoutContext, PageNotFound, ProductByCategory, ProductDetails, ProtectedRoute, WishList, isAdmin,
    isAuthenticate, layoutReducer, layoutState
};

