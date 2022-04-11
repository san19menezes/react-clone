import React from 'react';
import requests from '../../requests';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';
import './Homescreen.css';
import Row from '../Row/Row';

const Homescreen = () => {
    return (
        <div className='homeScreen'>
            <Navbar />
            <Banner />
            <Row
                title='NETFLIX ORIGINALS'
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow />
            <Row
                title='Trending Now'
                fetchUrl={requests.fetchTrending}
                isLargeRow />
            <Row
                title='Top Rated'
                fetchUrl={requests.fetchTopRated}
                isLargeRow />
            <Row
                title='Action Movies'
                fetchUrl={requests.fetchActionMovies}
                isLargeRow />
            <Row
                title='Comedy Movies'
                fetchUrl={requests.fetchComedyMovies}
                isLargeRow />
            <Row
                title='Horror Movies'
                fetchUrl={requests.fetchHorrorMovies}
                isLargeRow />
            <Row
                title='Romance Movies'
                fetchUrl={requests.fetchRomanceMovies}
                isLargeRow />
            <Row
                title='Documentaries'
                fetchUrl={requests.fetchDocumentaries}
                isLargeRow />
        </div>
    )
}

export default Homescreen