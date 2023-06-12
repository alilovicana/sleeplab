import "./topbar.css";
import React, { useState } from 'react';
import { SearchContext } from "../../context/SearchContext";
import { useContext } from "react";
export default function Topbar() {
    
   const { searchValue, setSearchValue } = useContext(SearchContext);

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            // Spremi unesenu vrijednost u varijablu ili je obrađujte na drugi način
            console.log(searchValue);
            // handleSearch();
        }
    };

    const handleChange = (event) => {
        setSearchValue(event.target.value);
    };


    // const handleSearch = () => {
    //     // Pozovite funkciju ili proslijedite vrijednost searchValue kao argument roditeljskoj komponenti
    //     // Na primjer, ako želite da se vrijednost prenese u App.js, možete pozvati funkciju props.onSearch i proslijediti searchValue kao argument
    //     props.onSearch(searchValue);
    //   };

    return (
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
            <div className="topbarContainer">
                <div className="topbarLeft">
                    <span className="logo">SleepLab</span>
                </div>
                <div className="topbarCenter">
                    <div className="searchbar">
                        <div className="searchIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </div>
                        <input
                            placeholder="Pretražite pacijenta prema ID broju"
                            className="searchInput"
                            // value={searchValue}
                            onChange={handleChange}
                            onKeyDown={handleKeyPress}
                        />
                    </div>
                </div>
                <div className="topbarRight">

                </div>
            </div>
        </SearchContext.Provider>
    );


}



