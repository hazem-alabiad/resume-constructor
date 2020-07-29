import {
  ADD_EXPERIENCE,
  DELETE_EXPERIENCE,
  EDIT_EXPERIENCE,
  FETCH_EXPERIENCES,
} from "constants/experienceActionTypes.js";

export const fetchExperiences = (experiences: Object[]): Object => ({
  type: FETCH_EXPERIENCES,
  payload: experiences,
});

export const addExperience = (experience: Object): Object => ({
  type: ADD_EXPERIENCE,
  payload: experience,
});

export const editExperience = (updatedExperience: Object): Object => ({
  type: EDIT_EXPERIENCE,
  payload: updatedExperience,
});

export const deleteExperience = (experienceId: Number): Object => ({
  type: DELETE_EXPERIENCE,
  payload: experienceId,
});
