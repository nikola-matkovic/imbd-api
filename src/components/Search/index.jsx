import Layout from "../Layout";
import axios from "axios";
import key from "../api/key.json";
import { useState, useEffect, useContext } from "react";
import style from "./style.module.css";
import { Context } from "../../App";
import { useParams } from "react-router";
import Stars from "../Stars/Stars";

const Search = () => {
    const [found, setFound] = useState({});
    let { expression } = useParams();
    let context = useContext(Context);
    let url = context.url;
    let setUrl = context.setUrl;
    let apiKey = key.key;
    const urls = [
        "https://imdb-api.com/en/API/SearchMovie",
        "https://imdb-api.com/en/API/SearchSeries",
    ];
    useEffect(() => {
        axios
            .get(urls[url], { params: { apiKey, lang: "en", expression } })
            .then((result) => {
                setFound(result.data.results);
                console.log(found, "heeej");
            })
            .catch((e) => console.log(e));
    }, [url, expression]);
    return (
        <Layout>
            {/* {found?.map((title, index) => {
                return (
                    <div key={index} className={style.card}>
                        <img src={title.image} alt={title.title} />
                        <h3>{title.title}</h3>
                    </div>
                );
            })} */}
        </Layout>
    );
};

export default Search;
