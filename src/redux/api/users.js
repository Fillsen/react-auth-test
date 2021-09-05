import {UserAction} from "../usersReducer";
import axios from "axios";

const user = axios.create({
  baseURL: 'https://trello.backend.tests.nekidaem.ru/api/v1/'
})

export function registration(username, email, password) {
  return async (dispatch) => {
    try {
      const request = await user.post('users/create/', {
        username,
        email,
        password
      })
      localStorage.setItem('token', `JWT ${request.data.token}`) && dispatch(UserAction.setUser())
      console.log('REG COMPLETE', request.data.token)
    } catch (e) {
      e.request.status === 400 && console.log('400 ERROR')
      console.log('REG ERROR', e.request.response);
    }
  }
}

export function login(username, password) {
  return async (dispatch) => {
    try {
      const request = await user.post('users/login/', {
        username,
        password
      })
      localStorage.setItem('token', `JWT ${request.data.token}`) && dispatch(UserAction.setUser())
      console.log('LOGIN SUCCESS', request.data)
    } catch (e) {
      console.log('LOGIN ERROR', e.request)
    }
  }
}

export function auth() {
  return async (dispatch) => {
    try {
      localStorage.getItem('token') ? dispatch(UserAction.setUser()) : dispatch(UserAction.setLogout())
    } catch (e) {
      console.log('AUTH ERROR')
    }
  }
}