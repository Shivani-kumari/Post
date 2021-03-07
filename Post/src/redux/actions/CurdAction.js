import {FETCHPOST , LIKEEPOST } from '../type'
import axios from 'axios'

export const fetchPost = () => async dispatch => {
    await axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
        if (res) {
            dispatch({
                type: FETCHPOST,
                payload: res.data
            })
        }
    }).catch(err => console.log(err))
}

export const likePost = (number) => async dispatch => {
    
    await axios.get(`https://jsonplaceholder.typicode.com/posts?id=${number}`).then(res => {
        if (res) {
            dispatch({
                type: LIKEEPOST,
                payload: res.data[0],
            })
        }
    }).catch(err => console.log(err))
}





