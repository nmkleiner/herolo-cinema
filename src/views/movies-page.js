import React, { Component } from 'react';
import MovieList from '../cmps/movie-list.js'
import MovieEdit from '../cmps/movie-edit/movie-edit.js'
import store from '../store/store';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import * as actionCreator from '../store/actions/actions'




class MoviesPage extends Component {
  render() {
    return (
      <div className="movies-page">
        <div className="container">
          <div className={this.props.selectedMovie.id? 'top-wrapper': 'top-wrapper sticky'}>
            <h4 className="capitalize">your movie library</h4>
            <Button color="primary" variant="outlined" onClick={this.props.onAddMovieClick}>
              <i className="fas fa-plus"></i>Add Movie
            </Button>
          </div>
          <MovieList store={store} />
          {
            this.props.selectedMovie.id &&
            <MovieEdit store={store} />
          }

        </div>
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
    onAddMovieClick: () => {
      dispatch(actionCreator.selectMovie(null))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage)

