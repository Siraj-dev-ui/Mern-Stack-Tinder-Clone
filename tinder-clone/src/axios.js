import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://nodebac1.herokuapp.com'
})

export default instance