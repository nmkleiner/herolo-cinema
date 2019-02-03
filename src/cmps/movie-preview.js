import React from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../store/actions/actions'
import Button from '@material-ui/core/Button';
import DetailLine from './detail-line';
import utilService from '../services/util.service';

const MoviePreview = ({ movie, borderless, onEditClick, onDeleteMovieClick }) => {

    const details = [
        { label: 'year released:', item: movie.year, items: '' },
        { label: 'genre:', item: '', items: movie.genres },
        { label: 'runtime:', item: movie.runtime + 'min', items: '' },
        { label: 'director:', item: movie.director, items: '' },
    ]

    return (
        <div
        className={'movie-preview inner-container capitalize' + (borderless ? ' borderless' : '')}
        >
        <a name={movie.title} className="anchor hidden" href="#as">anchor</a>
            <h4 name={movie.title}>{movie.title}</h4>
            <img
                src={`https://via.placeholder.com/300x200/${utilService.makeColor()}/FFFFFF/?text=placeholder`}
                alt="movie"
                className="mx-auto d-block"
            />
            <div className="details-wrapper">
                {details.map((detail, idx) =>
                    <DetailLine label={detail.label} item={detail.item} items={detail.items} key={idx} />
                )}
            </div>

            <div className="button-wrapper flex justify-end mt-20">
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

export default connect(null, mapDispatchToProps)(MoviePreview)
