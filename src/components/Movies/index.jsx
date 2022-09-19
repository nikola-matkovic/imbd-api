import axios from "axios";
import { useParams } from "react-router";
import Api from "../api/key.json"
import { useEffect, useState } from "react";
import Layout from '../Layout'
import style from './style.module.css'

const Movies = () => {
    let apiKey = Api.key3;
    let {movie} = useParams()
    const [info, setInfo] = useState({});
    useEffect(() => {
        axios.get("https://imdb-api.com/en/API/Title", {params: {
            apiKey,
            id: movie,
            lang: "en",
            options:  "FullActor, FullCast, Posters, Images, Trailer, Ratings, Wikipedia"
        }})
        .then((res) => {
            setInfo(res.data)
            console.log(res);
        })
        .catch( (rej) =>  console.log(rej))
    }, [movie])

    let {actorList, awards, directors, fullTitle, genres, imDbRating, imDbRatingVotes, image, plot,releaseDate, runtimeStr,  stars, writers, posters, wikipedia } = info
    let actorCards = 
            <div className={style.actorcards}>{
                actorList?.map((actor, index) => {
                    return( 
                        <div key={index} className={style.actorCard}>
                            <img src={actor.image} />
                            <h1>{actor.name}</h1>
                            <p>-as {actor.asCharacter}</p>
                        </div>
                    )
                })
            }</div>
    return (
        <Layout>
            {actorCards}
        </Layout> 
    );
}

export default Movies;