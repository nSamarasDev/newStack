import axios from "axios";
import { setAlert } from "./alert";

import { GET_CONTACT, CONTACT_ERROR } from "./types";

// Create or update contact
export const createContact =
  (formData, history, edit = false) =>
  async (dispatch) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await axios.post("/api/contact", formData, config);

      dispatch({
        type: GET_CONTACT,
        payload: res.data,
      });
      return true;
      dispatch(
        setAlert(edit ? "Contact Updated" : "Contact Created", "success")
      );

      if (!edit) {
        history.push("/contact");
      }
    } catch (error) {
      const errors = error.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }

      dispatch({
        type: CONTACT_ERROR,
        payload: {
          msg: error.response.statusText,
          status: error.response.status,
        },
      });
    }
  };
