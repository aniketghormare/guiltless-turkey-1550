import { CART_SUCC, GAMES_FAIL, GAMES_REQ, GAMES_SUCC, MOVIES_SUCC } from "./actionTypes"


const init = {
    isLoading: false,
    isError: false,
    Games: [],
    Movies: [],
    CART: []
}
export const reducer = (state = init, { type, payload }) => {
    switch (type) {
        case GAMES_REQ:
            return { ...state, isLoading: true }
        case GAMES_SUCC:
            return { ...state, isLoading: false, Games: payload }
        case GAMES_FAIL:
            return { ...state, isLoading: false, isError: true }
        case MOVIES_SUCC:
            return { ...state, isLoading: false, Movies: payload }
        case CART_SUCC:
            return { ...state, isLoading: false, CART: payload }
        default:
            return state
    }
}