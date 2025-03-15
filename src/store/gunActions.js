import { GUN_ACTION_TYPES } from "./constants";

function createGun() {
  return { type: GUN_ACTION_TYPES.CREATE_GUN };
}

function loadingGun() {
  return { type: GUN_ACTION_TYPES.IS_PANDING };
}
function errorHandler(error) {
  return { type: GUN_ACTION_TYPES.ERROR, payload: error };
}
