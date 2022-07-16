import React, { useEffect, useState } from 'react'
import axios from "./axios"
import "./Row.css"
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            // this async function gonna do convert the api in fetchUrl : "https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_network-213" 
            setMovies(request.data.results)
            console.log(request)
        }
        fetchData();

    }, [fetchUrl])

    console.log(movies)

    return (
        <div className='row'>
            <h2> {title}</h2>

            <div className='row_posters' id='rowx'>



                {movies.map(movie => (
                    <img key={movie.id} className={`row_poster ${isLargeRow && "posterLarge"} `} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))}

            </div>
        </div>
    )
}

export default Row


