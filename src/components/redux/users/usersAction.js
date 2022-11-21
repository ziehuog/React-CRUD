import { LIST_USERS } from "../constant"

export const listUsers = (type, payload) => {
    return {
        type: LIST_USERS, 
        payload
    }
}

