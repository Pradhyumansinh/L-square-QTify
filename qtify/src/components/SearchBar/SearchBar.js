// import { TextField, IconButton } from '@mui/material';
// import { SearchOutlined } from '@mui/icons-material';
import React from "react";
import "./SearchBar.css";
import searchIconUrl from "../../assets/Search icon.png";

const SearchBar = () => {
    return (
        <div className="search-box">
            <input
                type="search"
                className="search-input"
                placeholder="Search a album of your choice"
            />
            <img className="search-icon" src={searchIconUrl} alt="Search Icon" />
            {/* <TextField
                className="search-input"

                id="standard-bare"
                variant="outlined"
                defaultValue="Search a album of your choice"
                InputProps={{
                    endAdornment: (
                        <IconButton>
                            <SearchOutlined />
                        </IconButton>
                    ),
                }}
            /> */}
        </div>
    );
}

export default SearchBar;