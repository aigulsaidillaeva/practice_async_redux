import { BASE_URL, GUN_ACTION_TYPES } from "./constants";

function createGun() {
  return { type: GUN_ACTION_TYPES.CREATE_GUN };
}

function loadingGun(boo) {
  return { type: GUN_ACTION_TYPES.IS_PANDING, payload: boo };
}
function errorHandler(error) {
  return { type: GUN_ACTION_TYPES.ERROR, payload: error };
}
function getGunData(data) {
  return { type: GUN_ACTION_TYPES.GET_GUN, payload: data };
}

function getGunById(data) {
  return { type: GUN_ACTION_TYPES.GET_GUN_BY_ID, payload: data };
}

export const createGunThunk = (data) => {
  return async (dispatch) => {
    dispatch(loadingGun(true));
    try {
      const response = await fetch(BASE_URL, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "Application/json",
        },
      });
      if (!response.ok) {
        throw new Error(response);
      }
      dispatch(loadingGun(false));
    } catch (error) {
      dispatch(errorHandler(error));
      dispatch(loadingGun(false));
    }
  };
};

export const getGunsThunk = () => {
  return async (dispatch) => {
    dispatch(loadingGun(true));
    try {
      const response = await fetch(BASE_URL);
      if (!response.ok) {
        throw new Error(response);
      }
      const data = await response.json();
      dispatch(getGunData(data));
    } catch (error) {
      dispatch(errorHandler(error));
      dispatch(loadingGun(false));
    }
  };
};

export const getGunByIdThunk = (id) => {
  return async (dispatch) => {
    dispatch(loadingGun(true));
    try {
      const response = await fetch(`${BASE_URL}/${id}`);
      if (!response.ok) {
        throw new Error(response);
      }
      const data = await response.json();
      dispatch(getGunById(data));
    } catch (error) {
      dispatch(errorHandler(error));
      dispatch(loadingGun(false));
    }
  };
};
