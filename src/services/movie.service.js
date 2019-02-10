import axios from 'axios';
import apis from '../assets/keys/apikeys'
import utilService from './util.service';

const API_KEY = apis.omdbKey
const URL = 'https://www.omdbapi.com/?'
async function query() {
    const titles = [
        'fight club',
        'the matrix',
        'logan lucky',
        'aladin',
        'saving private ryan',
        'A Private War',
        'the greatest showman',
        'venom',
        'the wife',
        'robin hood',
        'shazam',
        'miss bala',
        'a simple favor',
        'cold pursuit',
        'aquaman',
        'climax',
        'ocean\'s eight',
        'deadpool',
        'after',
        'wonder woman',
        'the grinch',
        'annihilation',
        'the godfather',
        'the big lebowski',
        'the irishman',
    ]
    const movies = await Promise.all(titles.map(async (title) => {
        const res = await axios.get(`${URL}t=${title}&apikey=${API_KEY}`)
        // console.log(res.data)
        res.data = _handleData(res.data)
        return res.data
    }))

    return movies
}

function _handleData(data) {
    data.id = data.imdbID
    data.title = handleTitle(data.Title)
    data.runtime = parseInt(data.Runtime)
    data.genres = data.Genre.split(',')
    data.genres = data.genres.map(genre => genre.trim())
    data.year = data.Year
    data.director = data.Director
    data.rank = Math.round(+data.imdbRating) / 2
    data.reviewCount = utilService.getRandomInt(100, 1300)
    data.imgUrl = data.Poster
    for (let prop in data) {
        if (
            prop !== 'id' &&
            prop !== 'title' &&
            prop !== 'runtime' &&
            prop !== 'genres' &&
            prop !== 'year' &&
            prop !== 'director' &&
            prop !== 'rank' &&
            prop !== 'reviewCount' &&
            prop !== 'imgUrl' 

        ) {
            delete data[prop]
        }
    }
    return data
}

function handleTitle(title) {
    title = title.toLowerCase()
    title = title.replace(/[^a-zA-Z0-9 ]/g, '')
    return title
}

function validate() {
    const { textFields, selectedMovie } = this.state
    const { title, id } = selectedMovie
    const { movies } = this.props
    let isError = false

    const setError = (prop) => {
        isError = true
        const idx = textFields.findIndex(textField => textField.name === prop)
        textFields[idx].error = true
    }
    const setErrorAndState = (prop) => {
        isError = true
        const idx = textFields.findIndex(textField => textField.name === prop)
        textFields[idx].error = true
        this.setState({ textFields })
    }

    for (let prop in selectedMovie) {
        switch (prop) {
            case 'title':
                const idx = textFields.findIndex(textField => textField.name === prop)
                if (selectedMovie[prop].replace(/[^a-zA-Z0-9 ]/g, '').trim() === '') {
                    setError(prop)
                    textFields[idx].label = 'Invalid title.'
                    this.setState({ textFields })
                }
                else if (movies.find(movie => { return movie.id !== id && movie.title.toLowerCase() === title.toLowerCase() })) {
                    setError(prop)
                    textFields[idx].label = 'A movie with the same title already exists.'
                    this.setState({ textFields })
                }
                break
            case 'director':
                if (selectedMovie[prop].trim() === '') setErrorAndState(prop)
                break
            case 'runtime':
                if (+selectedMovie[prop] < 1) setErrorAndState(prop)
                break
            case 'year':
                if (+selectedMovie[prop] < 1888 || +selectedMovie[prop] > 2100) setErrorAndState(prop)
                break
            case 'genres':
                if (!selectedMovie[prop].length || !selectedMovie[prop][0]) setErrorAndState(prop)
                break
            default:
        }
    }
    return isError
}

const textFields = [
    {
        type: 'text',
        name: 'title',
        placeholder: 'Movie title',
        label: 'Invalid title.',
    },
    {
        type: 'text',
        name: 'director',
        placeholder: 'Director',
        label: 'Invalid director.',
    },
    {
        type: 'number',
        name: 'runtime',
        placeholder: 'Runtime',
        label: 'Invalid runtime.',
    },
    {
        type: 'number',
        name: 'year',
        placeholder: 'Year released',
        label: 'Invalid year.',
    },
    {
        type: 'select',
        name: 'genres',
        placeholder: 'Genres',
        label: 'Please choose genres.',
        genres: ['War', 'Sci-Fi', 'Adventure', 'Drama', 'Comedy', 'Romantic', 'Action', 'Fantasy']
    }
]


export default {
    query,
    handleTitle,
    validate,
    textFields
}