import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import requests from '../requests.js'

const baseURL = 'https://api.themoviedb.org/3'

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {

        async function fetchData() {

            const request = await Axios.get(`${baseURL}${requests.fetchTrending}`)

            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );

            return request;
        }
        fetchData();
    }, [])


    console.log(movie)


    function truncateString(str, num) {
        // If the length of str is less than or equal to num
        // just return str--don't truncate it.
        if (str?.length <= num) {
            return str
        } else {

            // Return str truncated with '...' concatenated to the end of str.
            return str?.slice(0, num) + '...'
        }

    }

    return (
        <div className='banner'
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
                backgroundPosition: 'center center',
            }}>



            <div className='bannerContents'>

                <h1 className='bannerTitle'>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>

                <div className='bannerBtns'>
                    <button className="bannerBtn">Play</button>
                    <button className="bannerBtn">My List</button>
                </div>


                <h1 className='bannerDescription'>{movie?.overview}
                    {truncateString(movie?.overview, 150)}
                </h1>
            </div>

            <div className='bannerFadeBottom' />

        </div>
    )
}

export default Banner
