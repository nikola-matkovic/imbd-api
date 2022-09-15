import Layout from "../Layout";
import axios from 'axios'
import key from "../api/key.json"
import {useState, useEffect} from 'react'
import style from './style.module.css'

const Home = () => {
    let apiKey = key.key;
    const urls = ["https://imdb-api.com/en/API/Top250Movies", "https://imdb-api.com/en/API/Top250TVs" ]
    const [movies, setMovies] = useState([]);
    const [url, setUrl] = useState(urls[0]);

    useEffect(() => {
        axios.get(url, {params: {apiKey, lang: "en"}})
        .then( (result) => setMovies(result.data.items));
    }, []);
    let movieElements = movies.map((movie) => {
        return <div className={style.card}>
            <img src={movie.image} alt={movie.title} />
            {console.log(movie.image)}
        </div>
    })

    return (

        <Layout>
            <main className={style.main}>
              {movieElements}
              movie
            </main>    
        </Layout>
    );
}

export default Home;