import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../store/actions/actions'
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';

class MoviePreview extends Component {

    render() {
        const { movie, borderless } = this.props
        return (
            <div className={
                borderless ?
                    'movie-preview inner-container capitalize borderless' :
                    'movie-preview inner-container capitalize'
            }>
                <h4>{movie.title}</h4>
                <div className="chips-wrapper">
                    <Chip label={'year: ' + movie.year} variant="outlined" />
                    <Chip
                        label={'genre: ' + movie.genres.map((genre, idx) => {
                            if (idx === movie.genres.length - 1) {
                                return ' ' + genre + '.'
                            }
                            return ' ' + genre
                        })} variant="outlined"
                    />
                    <Chip label={'runtime: ' + movie.runtime + 'min'} variant="outlined" />
                    <Chip label={'director: ' + movie.director} variant="outlined" />
                </div>
                {/* <p>year: {movie.year}</p> */}
                {/* <p>genre: {movie.genres.map((genre, idx) => {
                    if (idx === movie.genres.length - 1) {
                        return <span key={idx}>{genre}.</span>
                    }
                    return <span key={idx}>{genre}, </span>
                })}</p> */}
                {/* <p>runtime: {movie.runtime}min</p>
                <p>director: {movie.director}</p> */}
                <div className="button-wrapper flex justify-end mt-20">
                    <Button
                        variant="text"
                        color="default"
                        onClick={this.props.onEditClick.bind({}, movie.id)}
                    >
                        <i className="fas fa-edit"></i> 
                        &nbsp;edit
                    </Button>
                    <Button
                        variant="text"
                        color="default"
                        onClick={this.props.onDeleteMovieClick.bind({}, movie.id)}
                    >
                        <i className="fas fa-trash"></i> 
                        &nbsp;delete
                    </Button>
                </div>
            </div>
        )
    }

}

function mapDispatchToProps(dispatch) {
    return {
        onDeleteMovieClick: (id) => {
            dispatch(actionCreator.openDeleteMsg())
            dispatch(actionCreator.setDeletedMovie(id))
        },
        onEditClick: (id) => {
            dispatch(actionCreator.selectMovie(id))
        }
    }
}

export default connect(null, mapDispatchToProps)(MoviePreview)
