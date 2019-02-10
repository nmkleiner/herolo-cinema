import movieService from '../../services/movie.service';

export const loadMoviesAsync = movies => ({ type: 'LOAD_MOVIES', movies })

export const loadMovies = () => {
    return async (dispatch) => {
        const movies = await movieService.query()
        dispatch(loadMoviesAsync(movies))
        return Promise.resolve()
    }
}

export const addMovie = (addedMovie) => {
    addedMovie.title = movieService.handleTitle(addedMovie.title)
    return { type: 'ADD_MOVIE', addedMovie }
}

export const updateMovie = (updatedMovie) => {
    updatedMovie.title = movieService.handleTitle(updatedMovie.title)
    return { type: 'UPDATE_MOVIE', updatedMovie }
}


export const selectMovie = (id) => ({ type: 'SELECT_MOVIE', id })

export const unSelectMovie = () => ({ type: 'UNSELECT_MOVIE' })

export const deleteMovie = () => ({ type: 'DELETE_MOVIE' })

export const closeDeleteMsg = () => ({ type: 'CLOSE_DELETE_MSG' })

export const openDeleteMsg = () => ({ type: 'OPEN_DELETE_MSG' })

export const setDeletedMovie = (deletedMovieId) => ({ type: 'SET_DELETED_MOVIE', deletedMovieId })

export const openTitleList = () => ({ type: 'OPEN_TITLE_LIST' })

export const closeTitleList = () => ({ type: 'CLOSE_TITLE_LIST' })

export const openMovieDetails = () => ({ type: 'OPEN_MOVIE_DETAILS' })

export const closeMovieDetails = () => ({ type: 'CLOSE_MOVIE_DETAILS' })