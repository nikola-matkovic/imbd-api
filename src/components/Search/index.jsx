import Layout from "../Layout";
import axios from "axios";
import key from "../api/key.json";
import { useState, useEffect, useContext } from "react";
import style from "./style.module.css";
import { Context } from "../../App";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

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
            <main className={style.main}>
                {Array.isArray(found) &&
                    found?.map((title, index) => {
                        return (
                            <div key={index} className={style.card}>
                                <img src={title.image} alt={title.title} />
                                <h3>{title.title + " " + title.description}</h3>
                            </div>
                        );
                    })}
                <div className={style.notFound}>
                    Didn't find the title you were looking for? Try our{" "}
                    <Link to="/Advencedsearch">advanced search.</Link>
                </div>
            </main>
        </Layout>
    );
};

export default Search;
