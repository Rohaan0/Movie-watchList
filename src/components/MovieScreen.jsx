import React from 'react'
import MovieCard from './MovieCard.jsx'

const MovieScreen = ({List, MovieList, Page, setPage, addMovie, removeMovie }) => {
    const movieDisplay = MovieList.map((movie, index) => {
        return (
            <MovieCard movie={movie} addMovie={addMovie} removeMovie={removeMovie} List={List}/>
        )
    })


    const decrement = () => {
        setPage(Page - 1)
    }

    const increment = () => {
        setPage(Page + 1)
    }


    return (
        <div className="page">
            <h1>Rohaan's Movie Theatre</h1>
            <h3>Add a movie to your watchlist!</h3>
            <h3 className="btn-container">
                <button onClick={Page !== 1 && decrement}>Previous</button>
                <button onClick={increment}>Next</button>
                
                </h3>
            <div className="movie-container">
                {movieDisplay}
            </div>
        </div>
    )
};


export default MovieScreen;