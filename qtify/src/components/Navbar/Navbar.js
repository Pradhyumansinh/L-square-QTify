import React from "react";
import Logo from "../Logo/Logo";
import { Box } from "@mui/material";
import "./Navbar.css";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";

const Navbar = () => {
    return (
        <Box className="navbar">
            <Logo />
            <SearchBar />
            <Button />
        </Box>
    );
}

export default Navbar;