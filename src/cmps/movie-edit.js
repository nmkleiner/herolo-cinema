import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../store/actions/actions'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
// import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
// import Input from '@material-ui/core/Input';

class MovieEdit extends Component {
    
    constructor(props) {
        super()
        this.state = {
            selectedMovie: props.selectedMovie,
            isClosing: false
        }

        this.state.textFields = [{
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
                label: 'Choose genres',
                value: props.selectedMovie.genres,
                error: false,
                onChange: this.handleInputChange,
                genres: ['War','Sci-Fi','Adventure','Drama','Comedy','Romantic','Action']
            },
            ]
        
        if (!props.selectedMovie.title) {
            this.state.addMovie = true
        }
        
    }

    handleInputChange = (field,ev) => {
        const {value} = ev.target
        if (value.length && !value[0]) {
            value.shift()
        }
        const selectedMovie = { ...this.state.selectedMovie}
        selectedMovie[field] = value
        this.setState({selectedMovie})
    }

    resetErrors = () => {
        let textFields = this.state.textFields
        textFields.forEach(textField => {
            textField.error = false
        })
        this.setState({textFields})
    }

    validate = () => {
        const {title,director,genres,year,runtime} = this.state.selectedMovie
        const {textFields} = this.state
        let num = 0
        let isError = false
        if (title.trim() === '') {
            isError = true
            textFields[num].error = true
            this.setState({textFields})
        }
        num++
        if (director.trim() === '') {
            isError = true
            textFields[num].error = true
            this.setState({textFields})
        }
        num++
        if (+runtime < 1) {
            isError = true
            textFields[num].error = true
            this.setState({textFields})
        }
        num++
        if (+year < 1888 || +year > 2020) {
            isError = true
            textFields[num].error = true
            this.setState({textFields})
        }
        num++
        if (!genres.length || !genres[0]) {
            isError = true
            textFields[num].error = true
            this.setState({textFields})
        }
        return isError
    }
    
    render() {
        const movie = this.state.selectedMovie
        return (
                <div 
                    className={
                        this.state.isClosing?
                        'movie-edit capitalize animated fadeOut' :  
                        'movie-edit capitalize animated fadeIn'
                    }
                >
                <div className="modal-screen"></div>
                <form onSubmit={this.props.onSubmit.bind(this)}
                    className={
                        this.state.isClosing?
                        'animated fadeOutRight' :  
                        'animated fadeInRight'
                    }
                >
                    {
                        this.state.addMovie? 
                        <h3>Add new movie</h3>:
                        <h3>Update movie</h3>
                    }
                    <div className="wrapper">
                        {this.state.textFields.map((field,idx) => {
                            if (field.type !== 'select') {

                                return <TextField
                                            type={field.type}
                                            value={movie[field.name]}
                                            onChange={field.onChange.bind(this,field.name)}
                                            placeholder={field.placeholder}
                                            helperText={field.error && field.label}
                                            error={field.error}
                                            key={idx}
                                            >
                                        </TextField>
                            } 
                            else return <FormControl key={idx} error={field.error}>
                                            <Select
                                            value={movie[field.name]}
                                            onChange={field.onChange.bind(this,field.name)}
                                            multiple
                                            inputProps={{
                                                        name: 'genre',
                                                        id: 'genre',
                                                      }}
                                            >
                                            <MenuItem value="" disabled>
                                                Genre
                                            </MenuItem>
                                            {field.genres.map(genre => (
                                                <MenuItem key={genre} value={genre}>
                                                    {genre}
                                                </MenuItem>
                                            ))}
                                            </Select>
                                            {
                                                field.error && 
                                                <FormHelperText>Choose genre.</FormHelperText>
                                            }
                                        </FormControl> 
                        })}
                        <div className="flex justify-center">
                            <Button variant="outlined" size="large" color="primary" type="submit">save</Button>
                            <Button variant="outlined" size="large" color="default" type="button" onClick={this.props.onClose.bind(this)}>close</Button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
    
}

function mapStateToProps(state) {
    return {
        selectedMovie: state.selectedMovie
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
                await this.setState({isClosing: true})
                setTimeout(() => {
                    dispatch(actionCreator.unSelectMovie())
                },700)
            }
        },
        onClose: async function() {
            await this.setState({isClosing: true})
            setTimeout(() => {
                dispatch(actionCreator.unSelectMovie())
            },700)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieEdit)
