import React from "react";
import { BiSearch } from "react-icons/bi";

const Search = ({ handleSearchNote }) => {
    return <div className="search">
        <BiSearch className="search-icons" size="1.3em" />
        <input
            onChange={(event) =>
                 handleSearchNote(event.target.value)
            }
            type="text"
            placeholder="Wyszukaj notatke..."
         />
    </div>;
};

export default Search;