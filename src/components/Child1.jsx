import { useContext } from "react";

import { ThemeContext } from "../context/ThemeProvider";


const Child1 = () => {

    const { darkTheme } = useContext(ThemeContext);

    return (
        <div className="center-div">
            <h1>This is the child1 component</h1>
            <h1>Current app theme is {darkTheme ? "dark" : "light"}</h1>
        </div>
    )
}
export default Child1;