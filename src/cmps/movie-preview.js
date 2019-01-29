import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../store/actions/actions'
import Button from '@material-ui/core/Button';

class MoviePreview extends Component {

    render() {
        const {movie} = this.props
        return (
            <div className="movie-preview capitalize">
                <p>title: {movie.title}</p>
                <p>year: {movie.year}</p>
                <p>runtime: {movie.runtime}</p>
                <p>genre: {movie.genres.map((genre,idx) => {
                    if (idx === movie.genres.length - 1) {
                        return <span key={idx}>{genre}.</span>
                    }
                    return <span key={idx}>{genre}, </span>
                })}</p>
                <p>director: {movie.director}</p>
                <Button
                    onClick={this.props.onEditClick.bind({},movie.id)}
                >
                edit
                </Button>   
                <Button
                    onClick={this.props.onDeleteMovieClick.bind({},movie.id)}
                >
                delete
                </Button>   
            </div>
        )
    }
    
}

function mapDispatchToProps(dispatch) {
    return {
        onDeleteMovieClick: (id) => {
            dispatch(actionCreator.deleteMovie(id))
        },
        onEditClick: (id) => {
            dispatch(actionCreator.selectMovie(id))
        }
    }
}

export default connect(null, mapDispatchToProps)(MoviePreview)
