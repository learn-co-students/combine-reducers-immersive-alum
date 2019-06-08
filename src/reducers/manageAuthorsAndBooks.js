import uuid from 'uuid';
import { combineReducers } from 'redux';

const booksReducer = (state = [], action) => {
  switch (action.type) {

    case "ADD_BOOK":
      return [...state, action.book]

    case "REMOVE_BOOK":
      return state.filter(b => b.id !== action.id)

    default:
      return state
  }
}

const authorsReducer = (state = [], action) => {
  switch(action.type) {
    case "ADD_AUTHOR":
        return [...state, action.author]

    case "REMOVE_AUTHOR":
      return state.filter(a => a.id !== action.id)

    case "ADD_BOOK":
      const existingAuthor = state.find(a => a.authorName === action.book.authorName)
      if (existingAuthor) {
        return state
      } else {
        return [...state, {authorName: action.book.authorName, id: uuid()}]
      }

    default:
      return state;
    }
};

const rootReducer = combineReducers({
  authors: authorsReducer,
  books: booksReducer
})

export default rootReducer
