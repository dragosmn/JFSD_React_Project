import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { Button } from "react-bootstrap";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

const MovieItem = ({ movie }) => {

    const [movieInfo, setMovieInfo] = useState([]);

    const API_KEY = process.env.REACT_APP_API_KEY;


    const handleSubmit = async (event) => {
        const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${movie.Title}`);
        setMovieInfo(response.data);
        console.log(movieInfo.Title);
    }

    const popover = (
        <Popover id="popover-basic" className="bg-light"  >
            <Popover.Header as="h3" className="bg-dark text-light">{movieInfo.Title}</Popover.Header>
            <Popover.Body>
                <strong>Runtime:</strong> {movieInfo.Runtime}<br />
                <strong>Genre:</strong> {movieInfo.Genre}<br />
                <strong>Director:</strong> {movieInfo.Director}<br />
                <strong>Actors:</strong> {movieInfo.Actors}<br />
                <strong>IMDB Rating:</strong> {movieInfo.imdbRating}<br />
                <strong>Plot:</strong> {movieInfo.Plot}<br />
                {(movieInfo.Type === 'series') ? <strong>Total Seasons: {movieInfo.totalSeasons}</strong> : null}
            </Popover.Body>
        </Popover>
    );


    return (
        <div className="col" style={{ paddingTop: '10px' }} >
            <Card bg='dark' text='white' style={{ width: '20rem' }}>
                <Card.Img variant="top" src={movie.Poster} />
                <Card.Body>
                    <Card.Title>{movie.Title}</Card.Title>
                    <Card.Text>
                        <strong>Year:</strong> {movie.Year}<br />
                        <strong>Type:</strong> {movie.Type}
                    </Card.Text>
                    <OverlayTrigger trigger="click" placement="top" overlay={popover}  >
                        <Button variant="light" onClick={handleSubmit}>Click for more info</Button>
                    </OverlayTrigger>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MovieItem;