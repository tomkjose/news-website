import { fetchData } from "../../../apis";

export const FETCH_NEWS_REQUEST = "FETCH_NEWS_REQUEST";
export const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS";
export const FETCH_NEWS_FAILURE = "FETCH_NEWS_FAILURE";

export const fetchNewsRequest = () => ({
  type: FETCH_NEWS_REQUEST,
});

export const fetchNewsSuccess = (newsList) => ({
  type: FETCH_NEWS_SUCCESS,
  payload: newsList,
});

export const fetchNewsFailure = (error) => ({
  type: FETCH_NEWS_FAILURE,
  payload: error,
});

export const fetchNewsList = () => {
  return async (dispatch) => {
    dispatch(fetchNewsRequest());
    try {
      const response = await fetchData();
      const newsList = response;
      dispatch(fetchNewsSuccess(newsList));
    } catch (error) {
      dispatch(fetchNewsFailure(error.message));
    }
  };
};
