import axios from 'axios'


export const FETCH_DATA = 'FETCH_DATA'
export const fetchData = () => {
  return {
    type: FETCH_DATA
  }
}



export const FETCH_MOVIES_ONE = 'FETCH_MOVIES_ONE'
export const fetchMoviesOne = () => {
  return {
    type: FETCH_MOVIES_ONE,
    payload: getMoviesOne()
  }
}

const getMoviesOne = () => {
  const url = 'http://172.104.50.9:3000/api/movie_lists?filter[where][rating]=5'
  return axios.get(url)
    .then(res => {
      return res.data
    })
    .catch(err => {
      console.log(err)
    })
}

