import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from "./types";
import axios from "axios";

export const getItems = id => dispatch => {
  dispatch(setItemsLoading());
  axios.get(`api/items/${id}`).then(res =>
    dispatch({
      type: GET_ITEMS,
      payload: res.data
    })
  );
};

export const deleteItem = (id, idItem) => dispatch => {
  axios.delete(`/api/items/${id}/${idItem}`).then(res =>
    dispatch({
      type: DELETE_ITEM,
      payload: id
    })
  );
};

export const addItem = (id, item) => dispatch => {
  axios.post(`/api/items/${id}`, item).then(res =>
    dispatch({
      type: ADD_ITEM,
      payload: res.data
    })
  );
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};
