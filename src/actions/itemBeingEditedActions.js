import { SET_ITEM_BEING_EDITED } from "constants/itemBeingEditedActionTypes";

export const setItemBeingEdited = (item) => ({
  type: SET_ITEM_BEING_EDITED,
  payload: item,
});
