import './App.css';
import Header from './components/Header.jsx'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MovieScreen from './components/MovieScreen.jsx'
import WatchList from './components/Watchlist.jsx'


function App() {

  const [movieList, setMovieList] = useState([])
  const [watchList, setWatchList] = useState([])
  const [page, setPage] = useState(1)


  const addMovie = (movie) => {
    setWatchList([...watchList, movie])
  }


  const removeMovie = (movie) => {
    const newState = watchList.filter((mov) => {
      return mov !== movie;
    });
    setWatchList(newState)
  }

  const getData = () => {
    axios
      .get(` https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
      .then((res) => {
        console.log(res.data.results);
        setMovieList(res.data.results);
      });
  };

  useEffect(() => {
    getData();
  }, [page])


  return (
    <div className="App">
      <Header />
      <main>
        <MovieScreen List={watchList} Page={page} setPage={setPage} MovieList={movieList} addMovie={addMovie} removeMovie={removeMovie}/>
        <WatchList List={watchList} removeMovie={removeMovie} />
      </main>
    </div>
  );
}

export default App;
