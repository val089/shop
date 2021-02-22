import axios from 'axios';

const FETCH_BOOKS_REQUESTED = 'FETCH_BOOKS_REQUESTED';
const FETCH_BOOKS_SUCCEEDED = 'FETCH_BOOKS_SUCCEEDED';
const FETCH_BOOKS_FAILED = 'FETCH_BOOKS_FAILED';

export const fetchBooks = () => {
  return (dispatch) => {
    dispatch(fetchRequested());
      axios.get('http://localhost:3001/api/book')
      .then(({ data }) => {
        dispatch(fetchSucceeded(data.data));
      })
        .catch(error => {
          dispatch(fetchFailed(error));
        });
    };
};

export const fetchRequested = () => ({
  type: FETCH_BOOKS_REQUESTED
});

export const fetchFailed = () => ({
  type: FETCH_BOOKS_FAILED
});

export const fetchSucceeded = (data) => ({
  type: FETCH_BOOKS_SUCCEEDED,
  payload: data
});

const INITIAL_STATE = {
  books: [],
  isLoading: false,
  isError: false
};

const booksReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case FETCH_BOOKS_REQUESTED:
        return {
          ...state,
          isLoading: true,
          isError: false
        };
      case FETCH_BOOKS_SUCCEEDED:
        return {
          ...state,
          isLoading: false,
          isError: false,
          books: action.payload
        };
      case FETCH_BOOKS_FAILED:
        return {
          ...state,
          isLoading: false,
          isError: true
        };
      default:
        return state;
    }
  };

  export default booksReducer;