import {
  ADD_SKILL,
  DELETE_SKILL,
  EDIT_SKILL,
  FETCH_SKILLS,
  LOADING_SKILLS
} from "constants/skillActionTypes";

export const fetchSkills = (skills: Object[]): Object => ({
  type: FETCH_SKILLS,
  payload: skills,
});

export const loadingSkills = (): Object => ({
  type: LOADING_SKILLS,
});

export const addSkill = (skill: Object): Object => ({
  type: ADD_SKILL,
  payload: skill,
});

export const editSkill = (updatedSkill: Object): Object => ({
  type: EDIT_SKILL,
  payload: updatedSkill,
});

export const deleteSkill = (skillId: Number): Object => ({
  type: DELETE_SKILL,
  payload: skillId,
});
