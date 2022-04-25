import React from "react";

const Header = ( { handleToggleDarkMode } ) => {
    return (
        <div className="header">
            <h1>Notatnik</h1>
            <button 
                onClick={() =>
                    handleToggleDarkMode((previousDarkMode) => !previousDarkMode
                    )
                }
                className="save"
            >
                Tryb nocny
            </button>
        </div>
    )
}

export default Header;