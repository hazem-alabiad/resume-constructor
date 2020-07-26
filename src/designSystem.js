import { ROUTE_NAMES } from "constants/routeNames";

export const DESIGN_SYSTEM = {
  // #############################################
  // ##############   Properties   ###############
  // #############################################
  colors: {},

  // #############################################
  // ################   Methods   ################
  // #############################################
  setColor:
    /**
     * @param {boolean} isText
     * @returns {object} if isText true, return text color styling
     * else, returns background color styling object.
     */
    (isText, color) => {
      return isText ? { color } : { backgroundColor: color };
    },

  setTopMargin: (margin = 0) => {
    return { marginTop: margin };
  },

  setAzureBgColor: (route: String = ROUTE_NAMES.home): Object => {
    return route === ROUTE_NAMES.home ? { backgroundColor: "azure" } : {};
  },

  many: (...objects) => {
    return objects.reduce((answer, item) => {
      for (const [key, value] of Object.entries(item)) {
        answer[key] = value;
      }
      return answer;
    }, {});
  },
};
