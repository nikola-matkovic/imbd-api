import axios from "axios";
import { useParams } from "react-router";
import Api from "../api/key.json";
import { useEffect, useState } from "react";
import Layout from "../Layout";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import PeopleCard from "../PeopleCard";
import style from "./style.module.css";
import Stars from "../Stars/Stars";

const Movies = () => {
    let apiKey = Api.key5;
    let { movie } = useParams();
    const [info, setInfo] = useState({});
    const [numberOfSlides, setNumberOfSlides] = useState(4);
    useEffect(() => {
        axios
            .get("https://imdb-api.com/en/API/Title", {
                params: {
                    apiKey,
                    id: movie,
                    lang: "en",
                    options:
                        "FullActor, FullCast, Posters, Images, Trailer, Ratings, Wikipedia",
                },
            })
            .then((res) => {
                setInfo(res.data);
                console.log(res);
            })
            .catch((rej) => console.log(rej));
    }, [movie]);

    useEffect(() => {
        const resizeListener = () => {
            let x = window.innerWidth;
            setNumberOfSlides(Math.floor(x / 300));
            console.log(numberOfSlides, "here");
        };
        window.addEventListener("resize", resizeListener);
        return () => document.removeEventListener("resize", resizeListener());
    }, [numberOfSlides]);

    let {
        actorList,
        awards,
        directors,
        fullTitle,
        genres,
        imDbRating,
        imDbRatingVotes,
        image,
        plot,
        releaseDate,
        runtimeStr,
        stars,
        writers,
        posters,
        wikipedia,
    } = info;
    console.log(posters);
    let actorCards = (
        <Splide
            options={{
                type: "loop",
                perPage: numberOfSlides,
                perMove: Math.floor(numberOfSlides / 2),
            }}
            aria-label="actorcards"
        >
            {actorList?.map((actor) => {
                return (
                    <>
                        <PeopleCard
                            name={actor.name}
                            asCharacter={actor.asCharacter}
                            image={actor.image}
                        />
                    </>
                );
            })}
        </Splide>
    );
    posters = posters?.posters;
    let postersElement = (
        <Splide
            options={{
                type: "loop",
                perPage: 2,
                perMove: 1,
            }}
            aria-label="actorcards"
        >
            {posters?.map((poster) => {
                return (
                    <SplideSlide>
                        <img src={poster.link} alt="" />
                    </SplideSlide>
                );
            })}
        </Splide>
    );
    return (
        <Layout>
            <div className={style.info}>
                <div className={style.left}>
                    <img src={image} alt={fullTitle} />
                </div>
                <div className={style.right}>
                    <i className={style.awards}>{awards}</i>
                    <h1>{fullTitle}</h1>
                    <h4>Directed by : {directors}</h4>

                    <div className={style.footer}>
                        <div className={style.rating}>
                            {imDbRating} ({imDbRatingVotes} vrotes)
                        </div>
                        <Stars number={imDbRating} />

                        <div className={style.genres}>{genres}</div>
                    </div>
                </div>
            </div>

            {actorCards}
            {postersElement}
        </Layout>
    );
};

export default Movies;
