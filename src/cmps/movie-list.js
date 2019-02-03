import React, { Component } from 'react';
import MoviePreview from './movie-preview';
import Fab from '@material-ui/core/Fab';

class MovieList extends Component {
    scrollUp() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    render() {
        const { movies, selectedMovie } = this.props
        return (
            <div className="movie-list">
                {
                    movies.map((movie, idx) =>
                        <React.Fragment key={movie.id}>
                            {
                                idx === 2 &&
                                <div className="position-sticky">
                                    <Fab
                                        size="small"
                                        onClick={this.scrollUp}
                                        color="primary"
                                    ><i className="fas fa-angle-double-up"></i></Fab>
                                </div>
                            }
                            <MoviePreview
                                movie={movie}
                                borderless={idx === movies.length - 1}
                            />
                        </React.Fragment>
                    )
                }
            </div>
        )
    }
}

export default MovieList