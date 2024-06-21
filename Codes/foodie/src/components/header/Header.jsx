import { NavLink } from "react-router-dom";
import { hideInMobileView, logo_url, navItemCSS } from "../../utils/header";
import "./header.css"
import { useSelector } from "react-redux";

const Header = () => {
    const cartItems = useSelector((state) => state.cartItem);
    return(
        <div className="header flex items-center justify-between px-8 py-3 sticky top-0 z-20 bg-white">
            <NavLink to="/">
                <div className="header_left flex items-center cursor-pointer">
                    <img src={logo_url} className="h-[40px]" alt="app_logo" />
                </div>
            </NavLink>
            <div className="header_right flex items-center gap-x-8">
                <div className={`${navItemCSS} ${hideInMobileView}`}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <span>Search</span>
                </div>
                <div className={`${navItemCSS} ${hideInMobileView}`}>
                    <i className="fa-brands fa-hire-a-helper"></i>
                    <span>Help</span>
                </div>
                <div className={`${navItemCSS} ${hideInMobileView}`}>
                    <i className="fa-solid fa-user"></i>
                    <span>Sign In</span>
                </div>
                <NavLink to="/cart">
                <div className={`${navItemCSS} relative`}>
                    <i className="fa-solid fa-cart-shopping"></i>
                    <span>Cart</span>
                    <div className="rounded-full w-[30px] h-[30px]  bg-[#60B246] flex items-center justify-center">
                        <span className=" text-[#ffffff] font-[600]">{cartItems?.length || 0}</span>
                    </div>
                </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Header;