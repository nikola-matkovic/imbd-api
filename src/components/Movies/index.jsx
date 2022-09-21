import axios from "axios";
import { useParams } from "react-router";
import Api from "../api/key.json";
import { useEffect, useState } from "react";
import Layout from "../Layout";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";
import { Splide } from "@splidejs/react-splide";
import PeopleCard from "../PeopleCard";
const Movies = () => {
    let apiKey = Api.key3;
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
                        <div className={stlye.image}>
                            <img src={image} alt={fullTitle} />
                        </div>
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
    return <Layout>{actorCards}</Layout>;
};

export default Movies;
