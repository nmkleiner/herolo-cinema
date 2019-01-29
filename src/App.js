import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from './cmps/Navbar';
import store from './store/store';
import * as actionCreator from './store/actions/actions'
import './App.css';
import MoviesPage from './views/movies-page.js';
// import {Router} from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    this.props.onLoad()
  }

  render() {
    return (
      <React.Fragment>
      {this.props.movies &&
        // <Router>
          <div className="App">
              <Navbar store={store}/>
              <MoviesPage store={store}/>
          </div>
        // </Router>
      }
    </React.Fragment>
    );
  }
}


function mapStateToProps(state) {
  return {
      movies: state.movies
  }
}

function mapDispatchToProps(dispatch) {
  return {
      onLoad: () => {
          dispatch(actionCreator.loadMovies())
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
