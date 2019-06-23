import axios from 'axios';

// istanbul-ignore-next
const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '';

export const generateAction = (number, callBack, afterSuccess) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}/api/generate`, { count: number });
    afterSuccess();
    dispatch({ type: 'GENERATE_SUCCESSFUL', payload: response.data.numbers, callBack });
  } catch (error) {
    dispatch({ type: 'GENERATE_FAILED', error });
  }
};

export const recentlyGeneratedAction = () => async (dispatch) => {
  try {
    const res = await axios.get(`${baseUrl}/api/recently-generated`);
    dispatch({ type: 'GET_RECENT_SUCCESSFUL', payload: res.data.recentlyGenerated });
  } catch (error) {
    dispatch({ type: 'GET_RECENT_FAILED', error });
  }
};

export const getAllNumbers = url => async (dispatch) => {
  try {
    const res = await axios.get(`${baseUrl}/api/numbers${url}`);
    dispatch({ type: 'GET_SUCCESSFUL', payload: res.data.numbers, pagination: res.data.pagination });
  } catch (error) {
    dispatch({ type: 'GET_FAILED', error });
  }
};
