import Layout from "../Layout";
import axios from 'axios'
import key from "../api/key.json"
import {useState, useEffect} from 'react'
import style from './style.module.css'

const Home = () => {
    let apiKey = key.key2;
    const urls = ["https://imdb-api.com/en/API/Top250Movies", "https://imdb-api.com/en/API/Top250TVs" ]
    const [movies, setMovies] = useState([]);
    const [url, setUrl] = useState(urls[0]);

    useEffect(() => {
        axios.get(url, {params: {apiKey, lang: "en"}})
        .then( (result) =>setMovies(result.data.items))
        .catch(e => console.log(e))
    }, []);
    let movieElements = movies.map((movie) => {
        const {id, rank, title, fullTitle, crew, imDbRating, imDbRatingCount, image, year} = movie
        let stars = [];
        let i = 1;
        for(i; i <= imDbRating; i++){
            stars.push(<i key={i} className="bi bi-star-fill"></i>)
        }
        if(parseFloat(imDbRating) !== parseInt(imDbRating)){
            stars.push(<i className="bi bi-star-half"></i>)
            i++;
        }
        for(i; i <= 10; i++){
            stars.push(<i key={i} className="bi bi-star"></i>)
        }
        return <div key={key} className={style.card}>
            <img src={image} alt={movie.title} />
            <h3>{movie.title}</h3>
            {stars}
            <div className={style.rating}>
                <span>{imDbRating} / 10</span>
                <span>{imDbRatingCount} Vrotes</span>
            </div>
        </div>
    })

    return (

        <Layout>
            <main className={style.main}>
              {movieElements}
            </main>    
        </Layout>
    );
}

export default Home;