import axios from '../../axios';
import React, { useEffect, useState } from 'react';
import './Banner.css';
import requests from '../../requests';

const Banner = () => {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
            )
            return request;
        }
        fetchData();
    }, []);
    console.log(movie);
    const truncate = (string, n) => {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }
    return (
        <header className='banner' style={{
            backgroundSize: 'cover',
            backgroundImage: `url(https://image.tmdb.org/t/p/originals/${movie?.backdrop_path})`,
            backgroundPosition: 'center'
        }}
        >
            <div className="banner_contents">
                <h1 className="banner_title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner_buttons">
                    <button className='banner_button'>Play</ button>
                    <button className='banner_button'>To List</button>
                </div>
                <h1 className="banner_description">
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>
            <div className="banner--fadeBottom">

            </div>
        </header>
    )
}

export default Banner