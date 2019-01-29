import utilService from '../../services/util.service';


const initialState = {
    movies: [],
    selectedMovie: {},
}

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_MOVIES':
            return {
                ...state,
                movies: [...action.movies]
            }
            case 'SELECT_MOVIE':

            if (action.id) {
                const selectedMovie = state.movies.find((movie) => movie.id === action.id)
                return {
                    ...state,
                    selectedMovie
                }
            }
            else {
                return {
                    ...state,
                    selectedMovie: {
                        id: utilService.makeId(6),
                        title: '',
                        year: '',
                        director: '',
                        runtime: '',
                        genres: ['']
                    }
                }
            }
            case 'UNSELECT_MOVIE':
            return {
                ...state,
                selectedMovie: {}
            }
            case 'UPDATE_MOVIE':
            return {
                ...state,
                movies: state.movies.map((movie) => {
                    if (movie.id === action.updatedMovie.id) return {
                        ...action.updatedMovie,
                        Runtime: action.updatedMovie.Runtime + ' min'
                    }
                    else return movie
                })
            }
        case 'ADD_MOVIE':
            return {
                ...state,
                movies: [
                    ...state.movies,
                    action.addedMovie
                ]

            }
        case 'DELETE_MOVIE':
            return {
                ...state,
                movies: state.movies
                    .filter((movie) => movie.id !== action.deletedMovieId)
            }
        default:
            return state
    }
}

export default movieReducer