import React, { useState } from "react";
import data from "./../../data.json";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {

    const [eCodesData, setECodesData] = useState([]);

    const splitToList = (txt) => {
        return txt.split(",").map((item) => item.trim());
    };

    const getECodeData = (eCodesList) => {
        return eCodesList.map((key) => data[key]).filter(Boolean);
    };

    const displaySideEffects = () => {
        if (eCodesData.length === 0) {
            return (
                <div className="center-stuff">
                    Please search to display results<br></br>
                </div>
            );
        } else {
            return eCodesData.map((item) => (
                <li key={item.code} className="list-item">
                    <h2>
                        {item.code} ({item.name})
                    </h2>
                    <p>{item.more_info.side_effects}</p>
                </li>
            ));
        }
    };

    const displayAdditionalInformation = () => {
        if (eCodesData.length === 0) {
            return (
                <div className="data-curved-box">
                    <p className="center-stuff">Please search to display results</p>
                </div>
            );
        } else {
            return eCodesData.map((item) => (
                <>
                    <li key={item.code} className="data-curved-box">
                        <h2 className="sub-title">
                            {item.name} - {item.code}
                        </h2>
                        <h3>Side Effects</h3>
                        <p>{item.more_info.side_effects}</p>

                        <h3>Functions</h3>
                        <p>{item.more_info.side_effects}</p>

                        <h3>Characteristics</h3>
                        <p>{item.more_info.characteristics}</p>

                        <h3>Origin</h3>
                        <p>{item.more_info.origin}</p>

                        <h3>Products</h3>
                        <p>{item.more_info.products}</p>

                        <h3>Daily Intake</h3>
                        <p>{item.more_info.daily_intake}</p>

                        <h3>Dietary Restrictions</h3>
                        <p>{item.more_info.dietary_restrictions}</p>
                    </li>
                    <br></br>
                    <br></br>
                </>
            ));
        }
    };

    const handleSearch = () => {
        const inputText = document.getElementById("searchInput").value;
        const eCodesList = splitToList(inputText);
        const eCodes = getECodeData(eCodesList);
        setECodesData(eCodes);
    };

    return (
        <>
            <div className="center-stuff">
                <FastfoodIcon
                    style={{
                        width: "30%",
                        height: "30%",
                        color: "#9c27b0"
                    }}
                />
            </div>

            <div className="search-container center-stuff">
                <h1 className="main-title">Search INS Codes</h1>

                <TextField
                    id="searchInput"
                    type="text"
                    className="search-input"
                    placeholder="Enter INS Codes"
                    sx={{ height: "50px", width: "80%" }} // Set the desired height
                />
                <Button
                    id="searchButton"
                    variant="contained"
                    className="search-button"
                    onClick={handleSearch}
                    sx={{ height: "55px" }} // Set the same height as TextField
                >
                    <SearchIcon />
                </Button>
            </div>

            <br></br>
            <h1 className="main-title">Side Effects</h1>
            <div className="data-curved-box">
                <ul id="mainSideEffectsList" className="list">
                    {displaySideEffects()}
                </ul>
            </div>

            <br></br>
            <h1 className="main-title">Additional Information</h1>
            <div>
                <ul id="additionalEffectsList">
                    {displayAdditionalInformation()}
                </ul>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </>
    );
};

export default Search;
