import React, { Component } from 'react';
import MovieList from '../cmps/movie-list.js'
import MovieEdit from '../cmps/movie-edit.js'
import store from '../store/store';
import { connect } from 'react-redux';




class MoviesPage extends Component {
  render() {
    return (
        <div className="movies-page">
            <MovieList store={store}/>
            {
              this.props.selectedMovie.id &&
              <MovieEdit store={store}/>
            }
        </div>
    )
  }
}


function mapStateToProps(state) {
  return {
      selectedMovie: state.selectedMovie
  }
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage)

