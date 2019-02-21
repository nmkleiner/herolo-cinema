import React, { Component } from 'react';
import MovieList from '../cmps/movie-list.js'
import TitleList from '../cmps/title-list.js'
import MovieEdit from '../cmps/movie-edit.js'
import store from '../store/store';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import * as actionCreator from '../store/actions/actions'
import Fab from '@material-ui/core/Fab';
import { MyContext } from '../store/provider';
import SwitchButtons from '../cmps/switch-buttons';

class MoviesPage extends Component {
  scrollUp() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }


  render() {
    const { onAddMovieClick, selectedMovie } = this.props
    return (
      <MyContext.Consumer>
        {(context) => {
          const { toggleTitleList } = context
          return (

            <div className="movies-page">
              <div className="container">
                <div className={selectedMovie.id ? 'top-wrapper' : 'top-wrapper sticky'}>
                  <h3 onClick={toggleTitleList} className="capitalize pointer">
                    <i className="fas fa-bars"></i>
                  </h3>
                  <div className={'buttons-wrapper'}>
                    <SwitchButtons store={store} />
                    <Button color="primary" variant="outlined" onClick={onAddMovieClick}>
                      <i className="fas fa-plus"></i>&nbsp;Add Movie
                    </Button>
                  </div>
                </div>

                <TitleList store={store} />

                <div className="position-sticky">
                  <Fab
                    size="small"
                    onClick={this.scrollUp}
                    color="primary"
                  >
                    <i className="fas fa-angle-double-up"></i>
                  </Fab>
                </div>

                <MovieList store={store} />

                {
                  selectedMovie.id &&
                  <MovieEdit store={store} />
                }
              </div>
            </div>
          )
        }}
      </MyContext.Consumer>

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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage)

