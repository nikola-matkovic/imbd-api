import RouterPage from "./components/RouterPage";
import style from './App.css'
import { createContext, useState } from "react";

export let Context = createContext("");

const App = () => {
    const [url, setUrl] = useState("");
    return (
        <Context.Provider value={{url, setUrl}}>
            <RouterPage/> 
        </Context.Provider>
    );
}

export default App;