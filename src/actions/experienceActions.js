import {
  ADD_EXPERIENCE,
  CLEAR_EXPERIENCES_CACHE,
  DELETE_EXPERIENCE,
  EDIT_EXPERIENCE,
  FETCH_EXPERIENCES,
  LOADING_EXPERIENCES
} from "constants/experienceActionTypes";

export const fetchExperiences = (experiences: Object[]): Object => ({
  type: FETCH_EXPERIENCES,
  payload: experiences,
});

export const loadingExperiences = (): Object => ({
  type: LOADING_EXPERIENCES,
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

export const clearExperiencesCache = (): Object => ({
  type: CLEAR_EXPERIENCES_CACHE,
});
