import uuid from "uuid";

const authorsReducer = (state = [], action) => {
	let index;
	switch (action.type) {
		case "ADD_AUTHOR":
			return [...state, action.author];
		case "REMOVE_AUTHOR":
			index = state.findIndex(author => author.id === action.id);
			return [...state.slice(0, index), ...state.slice(index + 1)];
		case "ADD_BOOK":
			let existingAuthor = state.filter(
				author => author.authorName === action.book.authorName
			)
			if (existingAuthor.length > 0) {
				return state;
			} else {
				return [...state, {authorName: action.book.authorName, id: uuid()}];
			}
		default:
			return state;
	};
};

export default authorsReducer;