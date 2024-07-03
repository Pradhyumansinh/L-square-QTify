// import { TextField, IconButton } from '@mui/material';
// import { SearchOutlined } from '@mui/icons-material';
import React from "react";
import SearbarStyle from "./SearchBar.module.css";
import searchIconUrl from "../../assets/Search icon.png";

const SearchBar = () => {
    return (
        <div className={SearbarStyle.searchBox}>
            <input
                type="search"
                className={SearbarStyle.searchInput}
                placeholder="Search a album of your choice"
            />
            <img className={SearbarStyle.searchIcon} src={searchIconUrl} alt="Search Icon" />

        </div>
    );
}

export default SearchBar;