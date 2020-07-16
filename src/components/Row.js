import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'


const baseURL = 'https://api.themoviedb.org/3'
const baseImgURL = 'https://image.tmdb.org/t/p/original'

function Row({ title, url }) {

    const [movies, setMovies] = useState([]);

    useEffect(() => {

        axios.get(baseURL + url)
            .then((res) => {
                console.log(res.data.results)
                setMovies(res.data.results)
            })

            .catch(err => console.log(err));

    }, [url]);



    return (
        <div className='row'>

            <h2>{title}</h2>

            <div className='rowContainer'>

                {movies.map(movie => (

                    <img className='rowPoster' src={`${baseImgURL}${movie.poster_path}`} alt={movie.name} key={movie.id} />

                ))}


            </div>

        </div>

    )
}

export default Row