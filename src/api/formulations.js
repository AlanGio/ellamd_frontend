import axios from 'axios';

export const getFormulations = () => axios.get(`https://ellamdapi.herokuapp.com/formulations`);

export default { getFormulations };
