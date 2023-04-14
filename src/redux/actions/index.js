export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const DELETE = "DELETE";
export const FETCH_RESULTS = "FETCH_RESULTS";
export const RESET_RESULTS = "RESET_RESULTS";

export const resetResultsAction = () => ({ type: RESET_RESULTS });

export const addToFavouritesAction = data => ({ type: ADD_TO_FAVOURITES, payload: data });
export const removeFromFavouritesAction = index => ({ type: DELETE, payload: index });
export const getCompanyAction = params => {
  return async dispatch => {
    const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";
    try {
      const response = await fetch(baseEndpoint + params.companyName);
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: FETCH_RESULTS, payload: data });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getJobsAction = query => {
  return async dispatch => {
    const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: FETCH_RESULTS, payload: data });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
