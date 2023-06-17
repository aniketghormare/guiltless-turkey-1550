import {
  GET_FAILURE_MOVIE,
  GET_REQUEST_MOVIE,
  GET_SUCCESS_MOVIE,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  movies: [],
  // singleproduct: []
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_REQUEST_MOVIE: {
      return { ...state, isLoading: true, isError: false };
    }
    case GET_SUCCESS_MOVIE: {
      return { ...state, isLoading: false, isError: false, movies: payload };
    }
    case GET_FAILURE_MOVIE: {
      return { ...state, isLoading: false, isError: true };
    }
    // case GET_PRODUCT_ID_SUCCESS_MOVIE: {
    //   return { ...state, isLoading: false, singleproduct: payload };
    // }
    default:
      return state;
  }
};
