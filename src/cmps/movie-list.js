import React from 'react';
import MoviePreviewCard from './movie-preview-card';
import MoviePreviewRow from './movie-preview-row';
import { connect } from 'react-redux';

const MovieList = ({ movies,showMoviesDetails }) => {

        return (
            <div className="movie-list">
                {
                    movies.map((movie, idx) => 
                            showMoviesDetails? 
                            <MoviePreviewRow movie={movie} key={idx} /> 
                            :
                            <MoviePreviewCard movie={movie} key={idx} />
                    )
                }
            </div>
        )
}



function mapStateToProps(state) {
    return {
      movies: state.movies,
      showMoviesDetails: state.showMoviesDetails
    }
  }
  

  export default connect(mapStateToProps, {})(MovieList)