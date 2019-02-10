import React from 'react';
// import Button from '@material-ui/core/Button';
import utilService from '../services/util.service';
import StarRatingComponent from './StarRatingComponent';

const MoviePreview = ({ movie, }) => {
    const title = utilService.capitalizeStr(movie.title)
    return (
        <div className='movie-preview inner-container capitalize'>
        
            <a name={movie.title} className="anchor hidden" href="#as">anchor</a>


            <div className="img-wrapper">
                <img
                    src={movie.imgUrl ? movie.imgUrl : `https://via.placeholder.com/200x300/${utilService.makeColor()}/FFFFFF/?text=placeholder`}
                    alt="movie"
                    className="movie-img d-block"
                />
            </div>
            
            <div className="text-wrapper" title={title + ' (' + movie.year + ')'}>
                <span className="title" name={movie.title} >{movie.title}&nbsp;</span>
                <span>({movie.year})</span>
            </div>

            <div className="text-wrapper">
                <div title={`${movie.reviewCount} people ranked gave this movie an average rank of ${movie.rank} stars.`} >
                    <StarRatingComponent value={movie.rank} />
                </div>
            </div>
        </div>
    )
}


export default MoviePreview
