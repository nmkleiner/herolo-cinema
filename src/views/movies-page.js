import React, { Component } from 'react';
import MovieList from '../cmps/movie-list.js'
import TitleList from '../cmps/title-list.js'
import MovieEdit from '../cmps/movie-edit.js'
import store from '../store/store';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import * as actionCreator from '../store/actions/actions'

class MoviesPage extends Component {
  render() {
    const { 
      onAddMovieClick, 
      selectedMovie, 
      movies, 
      openTitleList 
    } = this.props

    return (
      <div className="movies-page">
        <div className="container">
          <div className={selectedMovie.id ? 'top-wrapper' : 'top-wrapper sticky'}>
            <h4 onClick={openTitleList} className="capitalize pointer">
              <i className="fas fa-list-ul"></i>&nbsp;
              your movie library
            </h4>
            <Button color="primary" variant="outlined" onClick={onAddMovieClick}>
              <i className="fas fa-plus"></i>&nbsp;Add Movie
            </Button>
          </div>
          <TitleList store={store} />
          <MovieList movies={movies} />
          {
            selectedMovie.id &&
            <MovieEdit store={store} />
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    selectedMovie: state.selectedMovie,
    movies: state.movies,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAddMovieClick: () => {
      dispatch(actionCreator.selectMovie(null))
    },
    openTitleList: () => {
      dispatch(actionCreator.openTitleList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage)

