import React from 'react';
import { connect } from 'react-redux';
import MoviePreview from './movie-preview';

function MovieList(props) {
    const {movies} = props
    return (
        <React.Fragment>
            {!!movies.length &&
            <div className="movie-list">
                    {
                        movies.map((movie) =>
                            <MoviePreview movie={movie} key={movie.id} />
                    )}
            </div>
            }
        </React.Fragment>
    )
}


function mapStateToProps(state) {
    return {
        movies: state.movies,
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MovieList)