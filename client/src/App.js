import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <Router>
      <div>
        <SavedList list={savedList} />
        <Switch>
          <Route path='/movies/:id'>
            <Movie />
          </Route>
          <Route path='/'>
            <MovieList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
