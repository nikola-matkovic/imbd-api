import Layout from "../Layout";
import axios from "axios";
import key from "../api/key.json";
import { useState, useEffect, useContext } from "react";
import style from "./style.module.css";
import { Context } from "../../App";
import { useNavigate } from "react-router";
import Stars from "../Stars/Stars";

const Home = () => {
    let navigate = useNavigate();
    const goToShow = (id) => {
        navigate(`/show/${id}`, { replace: false });
    };
    let context = useContext(Context);
    let url = context.url;
    let setUrl = context.setUrl;
    let apiKey = key.key3;
    const urls = [
        "https://imdb-api.com/en/API/Top250Movies",
        "https://imdb-api.com/en/API/Top250TVs",
    ];
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios
            .get(urls[url], { params: { apiKey, lang: "en" } })
            .then((result) => {
                setMovies(result.data.items);
                console.log(result);
            })
            .catch((e) => console.log(e));
    }, [url]);
    let movieElements = movies.map((movie) => {
        const {
            id,
            rank,
            title,
            fullTitle,
            crew,
            imDbRating,
            imDbRatingCount,
            image,
            year,
        } = movie;
        return (
            <div className={style.card} onClick={(e) => goToShow(id)}>
                <img src={image} alt={movie.title} />
                <h3>{movie.title}</h3>
                <Stars number={imDbRating} />
                <div key={1} className={style.rating}>
                    <span key={2}>{imDbRating} / 10</span>
                    <span key={3}>{imDbRatingCount} Vrotes</span>
                </div>
                <div key={4} className={style.footer}>
                    <span key={5}>{rank}</span>
                    <span key={6}>{year}</span>
                </div>
            </div>
        );
    });
    return (
        <Layout>
            <main className={style.main}>{movieElements}</main>
        </Layout>
    );
};

export default Home;
