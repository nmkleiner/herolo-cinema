import React from 'react';
import MoviePreviewCard from './movie-preview-card';
import MoviePreviewRow from './movie-preview-row';
import { MyContext } from '../store/provider';
import { connect } from 'react-redux';

const MovieList = ({ movies }) => {
    return (
        <MyContext.Consumer>
            {(context) => {
                const { showMoviesDetails } = context.state
                return (
                    <div className="movie-list">
                        {
                            movies.map((movie, idx) =>
                                showMoviesDetails ?
                                    <MoviePreviewRow movie={movie} key={idx} />
                                    :
                                    <MoviePreviewCard movie={movie} key={idx} />
                            )
                        }
                    </div>
                )
            }}
        </MyContext.Consumer>
    )
}



function mapStateToProps(state) {
    return {
        movies: state.movies,
        showMoviesDetails: state.showMoviesDetails
    }
}


export default connect(mapStateToProps, {})(MovieList)