import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="panel">
                <div className="panel-heading">
                    <h2 className="text-center">Hangman Pie</h2>
                    <p><a href="https://hangmanpie.herokuapp.com/">https://hangmanpie.herokuapp.com/</a></p>
                    <div className="row">
                    <div className="col-xs-12">
                        <Link className="btn btn-success menu" to="/">Home</Link>
                        <Link className="btn btn-success menu" to="/tutorial">Tutorial</Link>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;    