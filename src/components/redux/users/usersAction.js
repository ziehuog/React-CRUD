import { LIST_USERS, EDIT_USER, DELETE_USER, ADD_USERS } from "../constant"

export const listUsers = (type, payload) => {
    return {
        type: LIST_USERS, 
        payload
    }
}

export const addUsers = (payload) => {
    return {
        type: ADD_USERS, 
        payload
    }
}

export const editUsers = (type, payload) => {
    return {
        type: EDIT_USER, 
        payload
    }
}

export const deleteUsers = (payload) => {
    return {
        type: DELETE_USER, 
        payload
    }
}