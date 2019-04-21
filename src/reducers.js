import { CHANGE_SEARCH_FIELD } from './constants.js'

const initalState = {
	searchField: '' //intial object//
}

export const searchRobots = (state=initalState, action={}) => {
	switch(action.type){
		case CHANGE_SEARCH_FIELD:
			return Object.assign({}, state, {searchField:action.payload});
		default:
			return state;
	}
}

export default searchRobots