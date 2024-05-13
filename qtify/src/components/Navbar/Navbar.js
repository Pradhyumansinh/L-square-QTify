import React from "react";
import Logo from "../Logo/Logo";
import { Box } from "@mui/material";
import "./Navbar.css";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";
import { useState } from "react";

const Navbar = () => {
    const [count, setCount] = useState(0);

    return (
        <Box className="navbar">
            <Logo />
            <SearchBar />
            <Button />
        </Box>
    );
}

export default Navbar;