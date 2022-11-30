import React from 'react'
import MovieCard from './MovieCard.jsx'

const WatchList = ({List, removeMovie}) => {

    const movieDisplay = List.map((movie, index) => {
        return <MovieCard movie={movie} removeMovie={removeMovie} List={List}/>
    })

   

    return (
        <div className="watchlist">
            <h1>My WatchList</h1>
            <div className="movie-container">
                {movieDisplay}
            </div>
        </div>

    )
};


export default WatchList;