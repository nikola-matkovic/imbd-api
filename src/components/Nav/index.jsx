import { Context } from "../../App";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import style from "./style.module.css";

const Nav = () => {
    let context = useContext(Context);
    let url = context.url;
    let setUrl = context.setUrl;
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        setUrl(0);
    }, []);
    let navigate = useNavigate();
    const searchFunction = () => {
        navigate(`/search/:${searchText}`, { replace: false });
    };

    return (
        <nav>
            <div className={style.left}>
                <button onClick={() => setUrl(0)}>MOVIES</button>
                <button onClick={() => setUrl(1)}>SERIES</button>
            </div>
            <div className={style.center}>IMDB API</div>
            <div className={style.right}>
                <input
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    type="text"
                />
                <button
                    className="btn btn-dark"
                    onClick={(e) => searchFunction()}
                >
                    Search
                </button>
            </div>
        </nav>
    );
};

export default Nav;
