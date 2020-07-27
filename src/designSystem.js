import React from "react";

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

  setAzureBgColor: () => {
    document.body.style.backgroundColor = "azure";
  },

  // ##########   Experience Styling   ###########
  experienceRoleStyle: (str: String): HTMLDivElement => {
    return <div style={{ color: "black", fontWeight: "bold" }}>{str}</div>;
  },

  experienceCompanyStyle: (str: String): HTMLDivElement => {
    return <div style={{ color: "dimgrey" }}>{str}</div>;
  },

  experienceDateStyle: (str: String): HTMLDivElement => {
    return <div style={{ color: "grey" }}>{str}</div>;
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
