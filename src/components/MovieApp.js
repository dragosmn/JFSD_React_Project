import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';



const MovieApp = () => {

    const [year, setYear] = useState('');


    const myType = useSelector(state => state.type.path);
    const dispath = useDispatch();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [movies, setMovies] = useState([]);



    const fetchMovies = async (searchTerm) => {

        if (year.length === 0 || (!isNaN(year)) && year.length === 4) {         


            setLoading(true);
            setError(null);

            const API_KEY = process.env.REACT_APP_API_KEY;

            try {

                const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}${myType}&y=${year}`);

                if (response.data.Response === "True") {
                    //console.log(response.data);
                    setMovies(response.data.Search);
                } else {
                    setError(response.data.Error);
                }
            } catch (error) {
                setError('An Error Occured While Fetching the Data:', error);
            } finally {
                setLoading(false);
            }
        }else{alert('Year inserted is not correct')}
    }

    return (
        <div className='container-fluid ' >


            <div className='row ' style={{ width: '400px', height: '90px' }}>


                <div className='col' style={{ paddingTop: '10px' }}>
                    <Form.Label className='bg-dark text-light' style={{ padding: '8px', borderRadius: '8px' }}>
                        Filter by Year
                    </Form.Label>
                    <Form.Control style={{ width: '107px' }} placeholder='Insert Year' on
                        onChange={(e) => setYear(e.target.value)}
                    />
                </div>


                <div className='col' >
                    <DropdownButton title="Filter by Type" variant='dark' style={{ paddingTop: '10px', paddingLeft: '15px' }}>
                        <Dropdown.Item as="button" onClick={() => dispath({ type: "ALL" })}>All</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={() => dispath({ type: "MOVIES" })}>Movies</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={() => dispath({ type: "SERIES" })}>Series</Dropdown.Item>
                    </DropdownButton>

                </div>



            </div>

            <div className='col text-center'  >
                <h1 >Streamify</h1>
            </div>


            <div className='text-center' >
                <SearchBar onSearch={fetchMovies} />

                {loading && <p>Loading....</p>}
                {error && <p>{error}</p>}

                <MovieList movies={movies} />
            </div>
        </div>);
}

export default MovieApp;