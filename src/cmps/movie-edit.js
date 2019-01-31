import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../store/actions/actions'
import RenderMovieEdit from './render-movie-edit';

class MovieEdit extends Component {

    constructor(props) {
        super()
        this.state = {
            selectedMovie: props.selectedMovie,
            isClosing: false,
            isWorking: false
        }

        if (!props.selectedMovie.title) {
            this.state.addMovie = true
        }

        this.state.textFields = [
            {
                type: 'text',
                name: 'title',
                placeholder: 'Movie title',
                label: 'Invalid title.',
                value: props.selectedMovie.title,
                error: false,
                onChange: this.handleInputChange
            },
            {
                type: 'text',
                name: 'director',
                placeholder: 'Director',
                label: 'Invalid director.',
                value: props.selectedMovie.director,
                error: false,
                onChange: this.handleInputChange
            },
            {
                type: 'number',
                name: 'runtime',
                placeholder: 'Runtime',
                label: 'Invalid runtime.',
                value: props.selectedMovie.runtime,
                error: false,
                onChange: this.handleInputChange
            },
            {
                type: 'number',
                name: 'year',
                placeholder: 'Year released',
                label: 'Invalid year.',
                value: props.selectedMovie.year,
                error: false,
                onChange: this.handleInputChange
            },
            {
                type: 'select',
                name: 'genres',
                placeholder: 'Genres',
                label: 'Please choose genres.',
                value: props.selectedMovie.genres,
                error: false,
                onChange: this.handleInputChange,
                genres: ['War', 'Sci-Fi', 'Adventure', 'Drama', 'Comedy', 'Romantic', 'Action', 'Fantasy']
            }
        ]
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

    validate = function() {
        const { title, director, genres, year, runtime, id } = this.state.selectedMovie
        const { textFields } = this.state
        const { movies } = this.props
        let idx = 0
        let isError = false

        const setError = (idx) => {
            isError = true
            textFields[idx].error = true
        }
        const setErrorAndState = (idx) => {
            isError = true
            textFields[idx].error = true
            this.setState({ textFields })
        }

        if (title.trim() === '') {
            setError(idx)
            textFields[idx].label = 'Invalid title.'
            this.setState({ textFields })
        }
        else if (movies.find(movie => { return movie.id !== id && movie.title.toLowerCase() === title.toLowerCase() })) {
            setError(idx)
            textFields[idx].label = 'A movie with the same title already exists.'
            this.setState({ textFields })
        }

        idx++
        if (director.trim() === '') {
            setErrorAndState(idx)
        }

        idx++
        if (+runtime < 1) {
            setErrorAndState(idx)
        }

        idx++
        if (+year < 1888 || +year > 2020) {
            setErrorAndState(idx)
        }

        idx++
        if (!genres.length || !genres[0]) {
            setErrorAndState(idx)
        }
        return isError
    }

    render() {
        const movie = this.state.selectedMovie
        const { isWorking, isClosing, addMovie, textFields } = this.state
        const {onSubmit, onClose} = this.props
        const renderProps = {movie,isWorking,isClosing,addMovie,textFields,onSubmit: onSubmit.bind(this),onClose: onClose.bind(this)}
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
            const isError = this.validate()

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
