import { LIST_POSTS } from "../constant"

export const listPosts = (type, payload) => {
    return {
        type: LIST_POSTS, 
        payload
    }
}

