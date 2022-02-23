import axios from "axios";

export const getAllTypes = () => async (dispatch) => {
  dispatch({
    type: "GET_TYPES_REQUEST",
  });

  try {

    let response = await axios.get("");
    console.log(response);
    dispatch({ type: "GET_TYPES_SUCCESS", payload: response.data });

  } catch (error) {
    dispatch({ type: "GET_TYPES_FAILED", payload: error });
  }

};
