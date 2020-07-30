import { SET_EXPERIENCE_BEING_EDITED } from "constants/experienceBeingEditedActionTypes";

export const setExperienceBeingEdited = (experience) => ({
  type: SET_EXPERIENCE_BEING_EDITED,
  payload: experience,
});
