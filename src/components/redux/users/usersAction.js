import { ADD_USER, DELETE_USER, LIST_USERS, UPDATE_USER } from "../constant"

export const listUsers = (payload) => {
    return {
        type: LIST_USERS, 
        payload
    }
}

export const addUser = (payload) => {
    return {
        type: ADD_USER, 
        payload
    }
}

export const updateUser = ( payload) => {
    return {
        type: UPDATE_USER, 
        payload
    }
}

export const deleteUser = ( payload) => {
    return {
        type: DELETE_USER, 
        payload
    }
}

