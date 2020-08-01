import {
  ADD_EDUCATION,
  DELETE_EDUCATION,
  EDIT_EDUCATION,
  FETCH_EDUCATIONS,
  LOADING_EDUCATIONS
} from "constants/educationActionTypes";

export const fetchEducations = (educations: Object[]): Object => ({
  type: FETCH_EDUCATIONS,
  payload: educations,
});

export const loadingEducations = (): Object => ({
  type: LOADING_EDUCATIONS,
});

export const addEducation = (education: Object): Object => ({
  type: ADD_EDUCATION,
  payload: education,
});

export const editEducation = (updatedEducation: Object): Object => ({
  type: EDIT_EDUCATION,
  payload: updatedEducation,
});

export const deleteEducation = (educationId: Number): Object => ({
  type: DELETE_EDUCATION,
  payload: educationId,
});
