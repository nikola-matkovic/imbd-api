import { Context } from "../../App";
import { useContext, useEffect } from "react";

const Nav = () => {
    let context = useContext(Context);
    let url = context.url;
    let setUrl = context.setUrl;
    useEffect(() => {
        setUrl(0);
    }, []);
    return (
        <nav>
            <button onClick={() => setUrl(0)}>MOVIES</button>
            <button onClick={() => setUrl(1)}>SERIES</button>
        </nav>
    );
};

export default Nav;
