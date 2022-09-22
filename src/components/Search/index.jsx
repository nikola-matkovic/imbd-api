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
    let apiKey = key.key5;
    const urls = [
        "https://imdb-api.com/en/API/SearchMovie",
        "https://imdb-api.com/en/API/SearchSeries",
    ];
    useEffect(() => {
        axios
            .get(urls[url], { params: { apiKey, lang: "en", expression } })
            .then((result) => {
                setFound(result.data);
                console.log(result);
            })
            .catch((e) => console.log(e));
    }, [url]);
    return (
        <Layout>
            <p>search</p>
        </Layout>
    );
};

export default Search;
