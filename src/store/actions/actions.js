import movieService from '../../services/movie.service';

export const loadMoviesAsync = movies => ({ type: 'LOAD_MOVIES', movies })

export const loadMovies = () => {
    return async (dispatch) => {
        const movies = await movieService.query()
        dispatch(loadMoviesAsync(movies))
        return Promise.resolve()
    }
}

export const addMovie = (addedMovie) => ({ type: 'ADD_MOVIE', addedMovie })

export const deleteMovie = (deletedMovieId) => ({ type: 'DELETE_MOVIE', deletedMovieId })

export const updateMovie = (updatedMovie) => ({ type: 'UPDATE_MOVIE', updatedMovie })

export const selectMovie = (id) => ({ type: 'SELECT_MOVIE', id })

export const unSelectMovie = () => ({ type: 'UNSELECT_MOVIE'})



