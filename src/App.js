import './App.css';
import React, {useState} from 'react'
import MoviesBackground from './MoviesBackground';
import MoviePoster from './MoviePoster';
import {
  BrowserRouter as Router,
  Switch,
  Route

  
} from "react-router-dom";


function App() {

  const [idArr, setIdArr] = useState(localStorage.getItem('fav')?localStorage.getItem('fav'):[])

  console.log(idArr)
  
  return (

    <Router>

        <Switch>
         <Route exact path="/">
            <MoviesBackground idArr={idArr} setIdArr={setIdArr}/>
         </Route>
         <Route path="/movie/:id">
            <MoviePoster idArr={idArr} setIdArr={setIdArr}/>
          </Route>
        </Switch>
    </Router>

  );
}

export default App;
