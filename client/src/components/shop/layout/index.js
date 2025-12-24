import { Fragment, createContext } from "react";
import LoginSignup from "../auth/LoginSignup";
import { CartModal, Footer, Navber } from "../partials";

export const LayoutContext = createContext();

const Layout = ({ children }) => {
  return (
    <Fragment>
      <div className="flex-grow pt-28">
        <Navber />
        <LoginSignup />
        <CartModal />
        {/* All Children pass from here */}
        {children}
      </div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
