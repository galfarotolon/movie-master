import React, { useState, useEffect } from 'react';
import axios from 'axios';


const baseURL = 'https://api.themoviedb.org/3'

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
        <div>
            <h2>{title}</h2>


        </div>

    )
}

export default Row