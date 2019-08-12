import {
	GET_INGREDIENTS,
	GET_FORMULATIONS_REQUEST,
	GET_FORMULATIONS_SUCCESS,
	GET_FORMULATIONS_ERROR
} from '../constants';

const initialState = {
	error: null,
	loading: true,
	data: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_FORMULATIONS_REQUEST:
			return {
				...state,
				loading: true
			};
		case GET_FORMULATIONS_SUCCESS:
			return {
				...state,
				...action.payload,
				selectedFormulation: action.payload.data[0],
				loading: false
			};
		case GET_FORMULATIONS_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			};
		case GET_INGREDIENTS:
			return {
				...state,
				...action.payload,
				selectedFormulation: action.payload.formulations.data.filter(
					(formulation) => formulation.id === action.payload.id
				)[0],
				loading: false
			};

		default:
			return state;
	}
};
