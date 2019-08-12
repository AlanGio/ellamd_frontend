import api from '../../api';
import { GET_FORMULATIONS_REQUEST, GET_FORMULATIONS_SUCCESS, GET_FORMULATIONS_ERROR } from '../constants';

export const getFormulations = () => (dispatch) => {
	dispatch({
		type: GET_FORMULATIONS_REQUEST,
		meta: api.formulations
			.getFormulations()
			.then((response) => {
				dispatch({
					type: GET_FORMULATIONS_SUCCESS,
					payload: {
						data: response.data
					}
				});
			})
			.catch((error) =>
				dispatch({
					type: GET_FORMULATIONS_ERROR,
					payload: error.response
				})
			)
	});
};

export default getFormulations;
