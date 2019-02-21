import React from 'react';
import utilService from '../services/util.service';
import StarRatingComponent from './StarRatingComponent';
import { MyContext } from '../store/provider';

const MoviePreview = ({ movie }) => {
    const title = utilService.capitalizeStr(movie.title)
    return (
        <MyContext.Consumer>
            {(context) => {
                const { openMovieDetails } = context
                return (
                    <div className='movie-preview inner-container capitalize pointer'>
                        <a name={movie.title} className="anchor hidden" href="#as">anchor</a>
                        <div className="img-wrapper"
                            onClick={openMovieDetails.bind(this, movie.id)}
                        >
                            <img
                                src={movie.imgUrl ? movie.imgUrl : `https://via.placeholder.com/200x300/000000/FFFFFF/?text=placeholder`}
                                alt="movie"
                                className="movie-img d-block"
                            />
                        </div>
                        <div className="text-wrapper" title={title + ' (' + movie.year + ')'}>
                            <span className="title" name={movie.title} >{movie.title}&nbsp;</span>
                            <span>({movie.year})</span>
                        </div>
                        {
                            movie.rank &&
                            <div className="text-wrapper">
                                <div title={`${movie.reviewCount} people ranked gave this movie an average rank of ${movie.rank} stars.`} >
                                    <StarRatingComponent value={movie.rank} />
                                </div>
                            </div>
                        }
                    </div>
                )
            }}
        </MyContext.Consumer>

    )
}



export default MoviePreview
