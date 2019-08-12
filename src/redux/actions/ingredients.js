import { GET_INGREDIENTS } from '../constants';

export const getIngredients = (payload) => (dispatch) => {
	dispatch({
		type: GET_INGREDIENTS,
		payload: {
			...payload
		}
	});
};

export default getIngredients;
