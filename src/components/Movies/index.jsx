import { useParams } from "react-router";
const Movies = () => {
    let {movie} = useParams()
    console.log(movie);
    return (
        <div>
            Movies
        </div> 
    );
}

export default Movies;