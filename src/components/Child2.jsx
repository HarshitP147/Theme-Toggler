import { useContext } from "react";

import { ThemeContext } from "../context/ThemeProvider";

const Child2 = () => {
    const themeCtx = useContext(ThemeContext);

    return (
        <div className="center-div">
            <h1>This is the child2 component</h1>
            <button onClick={themeCtx.toggleDarkTheme} style={{
                backgroundColor: themeCtx.darkTheme ? "white" : "black",
                color: themeCtx.darkTheme ? "black" : "white",
                height: 50,
                borderRadius: 20,
                paddingRight: 20,
                paddingLeft: 20,
            }}>Set theme to {themeCtx.darkTheme ? "light" : "dark"}</button>
        </div>
    )
}
export default Child2;