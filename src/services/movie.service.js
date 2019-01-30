import axios from 'axios';
export default {
    query,
    handleTitle
}

const API_KEY = '5c2e7969'
const URL = 'https://www.omdbapi.com/?'
async function query() {
        const titles = [
            'the empire strikes back',
            'fight club',
            'the matrix',
            'lord of the rings',
            'logan lucky',
            'aladin',
            'saving private ryan'
        ]
        const movies = await Promise.all(titles.map(async (title) => {
            const res = await axios.get(`${URL}t=${title}&apikey=${API_KEY}`)
            res.data = _handleData(res.data)
            return res.data
        }))
    
    return movies
}


function _handleData(data) {
        data.id = data.imdbID
        data.runtime = parseInt(data.Runtime)
        data.genres = data.Genre.split(',')
        data.genres = data.genres.map(genre => genre.trim())
        data.title = handleTitle(data.Title)
        data.year = data.Year
        data.director = data.Director
        for (let prop in data) {
            if (
                    prop !== 'id' &&
                    prop !== 'title' && 
                    prop !== 'year' && 
                    prop !== 'runtime' && 
                    prop !== 'genres' && 
                    prop !== 'director'
                ) {
                    delete data[prop]
                }
        }
    return data
}

function handleTitle(title) {
    title = title.toLowerCase()
    title = title.replace(/[^a-zA-Z0-9 ]/g,'')
    return title
}