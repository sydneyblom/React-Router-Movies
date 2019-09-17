import React, { useState } from 'react';
import { Route } from 'react-router-dom'

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    const savedMovies = savedList.find(
      savedMovie => savedMovie.title === movie.title
    );
    if (!savedMovies) {
      setSavedList([...savedList, movie]);
    }
  };

  return (
    <div>
      <SavedList list={savedList} />
<Route exact path='/' component={MovieList}></Route>
      <Route
        path='/movies/:id'
        render={props => <Movie {...props} addToSavedList={addToSavedList} />}
      ></Route>
    </div>
  );
};

export default App;
