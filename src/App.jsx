import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail.jsx';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={MovieList} />
                    <Route path="/movie/:title" component={MovieDetail} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
