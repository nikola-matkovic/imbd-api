import { Context } from "../../App";
import { useContext, useEffect } from "react";
import style from "./style.module.css";
const Nav = () => {
    let context = useContext(Context);
    let url = context.url;
    let setUrl = context.setUrl;
    useEffect(() => {
        setUrl(0);
    }, []);
    return (
        <nav>
            <div className={style.left}>
                <button onClick={() => setUrl(0)}>MOVIES</button>
                <button onClick={() => setUrl(1)}>SERIES</button>
            </div>
            <div className={style.center}>IMDB API</div>
            <div className={style.right}>
                <input type="text" />
                <button className="btn btn-dark">Search</button>
            </div>
        </nav>
    );
};

export default Nav;
