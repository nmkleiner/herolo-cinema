import React from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../store/actions/actions'
import Button from '@material-ui/core/Button';
import utilService from '../services/util.service';
import StarRatingComponent from './StarRatingComponent';

const MovieDetails = ({ movie, onEditClick, onDeleteMovieClick }) => {
    
    return (
        <div className='movie-preview details flex capitalize'>

            <a name={movie.title} className="anchor hidden" href="#as" id={movie.id}>anchor</a>

            <img
                src={movie.imgUrl ? movie.imgUrl : `https://via.placeholder.com/200x300/${utilService.makeColor()}/FFFFFF/?text=placeholder`}
                alt="movie"
                className="movie-img d-block"
            />
            <div className="details-buttons-wrapper">
                <div className="details-wrapper">
                    <h4 className="title" name={movie.title} title={movie.title} >{movie.title}</h4>
                    <span>({movie.year})</span>
                    <p className="bold">{movie.runtime}min</p>
                    <p className="capitalize bold">by {movie.director}</p>
                    <p className="capitalize">Stars: {movie.actors}</p>
                    <p>Genres: {movie.genres.map((genre, i) => i === movie.genres.length - 1 ? <span key={i}>{genre}</span> : <span key={i}>{genre}, </span>)}.</p>
                    <div title={`${movie.reviewCount} people ranked gave this movie an average rank of ${movie.rank} stars.`} >
                        <StarRatingComponent value={movie.rank} />
                    </div>
                </div>



                <div className="button-wrapper flex justify-center mt-10 pb-10">
                    <Button onClick={onEditClick.bind({}, movie.id)}>
                        edit&nbsp;
                            <i className="fas fa-edit"></i>
                    </Button>
                    <Button onClick={onDeleteMovieClick.bind({}, movie.id)}>
                        delete&nbsp;
                            <i className="fas fa-trash"></i>
                    </Button>
                </div>
            </div>
        </div>
    )
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

export default connect(null, mapDispatchToProps)(MovieDetails)
