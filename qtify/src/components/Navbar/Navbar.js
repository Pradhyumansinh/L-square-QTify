import React from "react";
import Logo from "../Logo/Logo";
import "./Navbar.css";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";

const Navbar = () => {

    return (
        <div className="navbar">
            <Logo altText="LogoImage" />
            <SearchBar />
            <Button buttonText="Give Feedback" />
        </div>
    );
}

export default Navbar;