import React, { Component } from 'react';
import MoviePreview from './movie-preview';
import MovieDetails from './movie-details';
import { connect } from 'react-redux';
class MovieList extends Component {


    render() {
        const { movies,showMoviesDetails } = this.props
        return (
            <div className="movie-list">
                {
                    movies.map((movie, idx) => 
                            showMoviesDetails? 
                            <MovieDetails movie={movie} key={idx} /> 
                            :
                            <MoviePreview movie={movie} key={idx} />
                    )
                }
            </div>
        )
    }
}



function mapStateToProps(state) {
    return {
      movies: state.movies,
      showMoviesDetails: state.showMoviesDetails
    }
  }
  

  export default connect(mapStateToProps, {})(MovieList)