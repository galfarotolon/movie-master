import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'

import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer';


const baseURL = 'https://api.themoviedb.org/3'
const baseImgURL = 'https://image.tmdb.org/t/p/original'

function Row({ title, url, largeRow }) {

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState(" ");

    useEffect(() => {

        axios.get(baseURL + url)
            .then((res) => {
                console.log(res.data.results)
                setMovies(res.data.results)
            })

            .catch(err => console.log(err));

    }, [url]);

    // const opts = {
    //     height: '390',
    //     width: '100%',
    //     playerVars: {
    //         // https://developers.google.com/youtube/player_parameters
    //         autoplay: 1,
    //     },
    // };

    //http://api.themoviedb.org/3/movie/550/videos?api_key=daf944dbda9ec159caba37ccd02e1a54  - to get the actual key, do a call here and 
    // what comes back from the api call, do a .key 
    // the number 550 is the movie id, make it dynamic to target the id of the given movie


    // const handleClick = (movie) => {

    //     if (trailerUrl) {
    //         setTrailerUrl('');
    //     } else {
    //         movieTrailer(movie?.name || "")
    //             .then(url => {
    //                 const urlParams = new URLSearchParams(new URL(url).search);
    //                 setTrailerUrl(urlParams.get('v'));
    //             })
    //             .catch(err => console.log(err))
    //     }

    // }


    return (
        <div className='row'>

            <h2>{title}</h2>

            <div className='rowContainer'>

                {movies.map(movie => (

                    <img className={`rowPoster ${largeRow && "rowPosterLarge"}`}
                        src={`${baseImgURL}${largeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name} key={movie.id}
                    // onClick={() => handleClick(movie)}

                    />

                ))}


            </div>
            {/* 
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />} */}

        </div>

    )
}

export default Row