import React from 'react';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import CircularProgress from '@material-ui/core/CircularProgress';

function RenderMovieEdit({props}) {
    const {movie,isWorking,isClosing,addMovie,textFields,onSubmit,onClose} = props
    return (
        <div className={'movie-edit capitalize animated ' + (isClosing ? 'fadeOut' : 'fadeIn')} >
            <div className="modal-screen" onClick={onClose}></div>
            <form
                onSubmit={onSubmit.bind(this)}
                className={'animated container ' + (isClosing ? 'fadeOutRight' : 'fadeInRight')}
            >

                <h3>{addMovie ? 'Add new movie' : 'Update movie'}</h3>

                <div className="wrapper">
                    {textFields.map((field, idx) => (field.type !== 'select') ?

                        <TextField
                            type={field.type}
                            value={movie[field.name]}
                            onChange={field.onChange.bind(this, field.name)}
                            error={field.error}
                            helperText={field.error && field.label}
                            key={idx}
                            placeholder={field.placeholder}
                        >
                        </TextField>
                        :
                        <FormControl key={idx} error={field.error}>
                            <Select
                                value={movie[field.name]}
                                onChange={field.onChange.bind(this, field.name)}
                                multiple
                                inputProps={{
                                    name: 'genre',
                                }}
                            >
                                <MenuItem value="" disabled>
                                    Genre
                                    </MenuItem>
                                {field.genres.map(genre =>
                                    <MenuItem key={genre} value={genre}>
                                        {genre}
                                    </MenuItem>
                                )}
                            </Select>
                            {
                                field.error &&
                                <FormHelperText>Choose genre.</FormHelperText>
                            }
                        </FormControl>
                    )}
                </div>


                <div className="buttons-wrapper flex justify-center">
                    <Button
                        variant="contained"
                        size="large" color="primary"
                        type="submit"
                    >
                        {isWorking ? <CircularProgress color="inherit" /> : 'save'}
                    </Button>

                    <Button
                        variant="contained"
                        size="large"
                        type="button"
                        onClick={onClose.bind(this)}
                    >
                        cancel
                        </Button>
                </div>
            </form>
        </div>

    )
}

export default RenderMovieEdit

