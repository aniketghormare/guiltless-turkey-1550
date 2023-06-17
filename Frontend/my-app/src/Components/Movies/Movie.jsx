import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../Redux/MovieReducer/action";
import "../Movies/movie.css"
const MoviesPoster=()=>{
    const {isLoading,movies,isError}=useSelector((store)=>{
        return {
        isLoading:store.movieReducer.isLoading,
        movies:store.movieReducer.movies,
        isError:store.movieReducer.isError
        }
    });
    console.log(movies)
    const dispatch=useDispatch();

   
    useEffect(()=>{
        dispatch(getMovies())
    },[])
    return <div>
        <br />
        <div></div>
        <div className="movies">
            {isLoading?<h1>loading...</h1>:isError?<h1>something went wrong</h1>:movies.map((item)=>{
                return <div key={item.id}>
                    <img src={item.Poster} alt={item.Title} />
                    <h4>{item.Title}</h4>
                    <p>Price: $ 9.99</p>
                    <br />
                    <br />
                    <button>START FREE TRIAL</button>
                </div>
            })}

        </div>

    </div>
}

export default MoviesPoster