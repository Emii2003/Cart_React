// import React from "react";
import CartButton from "../CartButton/CartButton"
import Search from "../Search/Search"
import "./Header.css"
function Header(){
    return(
        <header className="header">
            <div className="container">
                <Search></Search>
                <CartButton></CartButton>
            </div>
        </header>
    )
}

export default Header