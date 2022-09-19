import axios from "axios";
import { useParams } from "react-router";
import Api from "../api/key.json";
import { useEffect, useState } from "react";
import Layout from "../Layout";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";
import style from "./style.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Movies = () => {
    let apiKey = Api.key3;
    let { movie } = useParams();
    const [info, setInfo] = useState({});
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

    let actorCards = (
        <Splide
            options={{
                type: "loop",
                perPage: 3,
                perMove: 1,
            }}
            aria-label="actorcards"
        >
            {actorList?.map((actor) => {
                return (
                    <SplideSlide aria-label="test">
                        <img src={actor.image} alt={actor.name} />
                        <h4>{actor.name}</h4>
                        <p>{actor.asCharacter}</p>
                    </SplideSlide>
                );
            })}
        </Splide>
    );
    return <Layout>{actorCards}</Layout>;
};

export default Movies;
