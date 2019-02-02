import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../store/actions/actions'
import RenderMovieEdit from './render-movie-edit';
import movieService from '../services/movie.service';

class MovieEdit extends Component {

    constructor(props) {
        super()
        this.state = {
            selectedMovie: props.selectedMovie,
            isClosing: false,
            isWorking: false,
            textFields: movieService.textFields,
            addMovie: !props.selectedMovie.title
        }

        this.state.textFields.forEach(textField => {
            textField.error = false
            textField.onChange = this.handleInputChange
        })
    }

    handleInputChange = (field, ev) => {
        const { value } = ev.target
        if (value.length && !value[0]) {
            value.shift()
        }
        const selectedMovie = { ...this.state.selectedMovie }
        selectedMovie[field] = value
        this.setState({ selectedMovie })
    }

    resetErrors = () => {
        let textFields = this.state.textFields
        textFields.forEach(textField => {
            textField.error = false
        })
        this.setState({ textFields })
    }

    render() {
        const movie = this.state.selectedMovie
        const { isWorking, isClosing, addMovie, textFields } = this.state
        const { onSubmit, onClose } = this.props
        const renderProps = { movie, isWorking, isClosing, addMovie, textFields, onSubmit: onSubmit.bind(this), onClose: onClose.bind(this) }
        return (
            <RenderMovieEdit props={renderProps}></RenderMovieEdit>
        )
    }
}

function mapStateToProps(state) {
    return {
        selectedMovie: state.selectedMovie,
        movies: state.movies
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSubmit: async function (ev) {
            ev.preventDefault();
            this.resetErrors()
            const isError = movieService.validate.apply(this)

            if (!isError) {
                if (this.state.addMovie) {
                    dispatch(actionCreator.addMovie(this.state.selectedMovie))
                }
                else {
                    dispatch(actionCreator.updateMovie(this.state.selectedMovie))
                }
                await this.setState({ isWorking: true })
                await setTimeout(async () => {
                    await this.setState({ isClosing: true })
                }, 700)
                setTimeout(() => {
                    dispatch(actionCreator.unSelectMovie())
                }, 1400)
            }
        },
        onClose: async function () {
            await this.setState({ isClosing: true })
            setTimeout(() => {
                dispatch(actionCreator.unSelectMovie())
            }, 700)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieEdit)
