import React from "react";
import Logo from "../Logo/Logo";
import { Box } from "@mui/material";
import "./Navbar.css";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";
import { useState } from "react";

const Navbar = () => {
    const [buttonId, setButtonId] = useState("giveFeedbackButton");

    return (
        <Box className="navbar">
            <Logo />
            <SearchBar />
            <Button btnid={buttonId} />
        </Box>
    );
}

export default Navbar;