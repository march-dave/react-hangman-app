import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Hangman from "./Hangman";

import Header from './Header';
// import Home from './Home';
import Tutorial from './Tutorial';

class App extends Component {
    render() {
        return (
            // <div>
            //     <Hangman />
            // </div>
            <Router>
                <div className="container">
                <Header />
                    <Route exact path="/" component={Hangman} />
                    <Route path="/tutorial" component={Tutorial}/>
                    {/* <Route path="/members" component={Members} />
                    <Route path="/songs" component={SongList} /> */}
                </div>
            </Router>
        );
    }
}

export default App;