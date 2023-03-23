import Child1 from "./components/Child1";
import Child2 from "./components/Child2";

import ThemeProvider from "./context/ThemeProvider";

import "./styles/App.css";

export default function App() {

    return (
        <ThemeProvider>
            <h1>This is the app component</h1>
            <Child1 />
            <br />
            <Child2 />
        </ThemeProvider>
    )
}