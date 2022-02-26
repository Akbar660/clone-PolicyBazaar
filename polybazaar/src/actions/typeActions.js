import axios from "axios";

export const getAllTypes = () => async (dispatch) => {
  dispatch({
    type: "GET_TYPES_REQUEST",
  });

  try {

    let response = await axios.get("api/types/getAllTypes");
    console.log(response);
    dispatch({ type: "GET_TYPES_SUCCESS", payload: response.data });

  } catch (error) {
    console.log(error)
    dispatch({ type: "GET_TYPES_FAILED", payload: error });
  }

};
