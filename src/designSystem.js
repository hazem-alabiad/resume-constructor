export const DESIGN_SYSTEM = {
  // #############################################
  // ##############   Properties   ###############
  // #############################################
  colors: {
    black: "black",
    dimgrey: "dimgrey",
    darkgrey: "darkgrey",
    silver: "silver",
  },

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

  // #################    Styling Item    #################
  setHeaderStyle: (fontSize: String = ""): Object => {
    if (fontSize)
      return {
        color: DESIGN_SYSTEM.colors.black,
        fontWeight: "bold",
        fontSize,
      };
    return { color: DESIGN_SYSTEM.colors.black, fontWeight: "bold" };
  },

  setMetadataStyle: (fontSize: String = ""): Object => {
    if (fontSize) return { color: DESIGN_SYSTEM.colors.dimgrey, fontSize };
    return { color: DESIGN_SYSTEM.colors.dimgrey };
  },

  setExtraStyle: (fontSize: String = ""): Object => {
    if (fontSize) return { color: DESIGN_SYSTEM.colors.darkgrey, fontSize };
    return { color: DESIGN_SYSTEM.colors.darkgrey };
  },

  setSuperLightStyle: (fontSize: String = ""): Object => {
    if (fontSize) return { color: DESIGN_SYSTEM.colors.silver, fontSize };
    return { color: DESIGN_SYSTEM.colors.silver };
  },
  // #######################################################

  // ##################    Font Sizes    ###################
  setFontSize: {
    header: {
      fontSize: "3em",
    },
    metadata: {
      fontSize: "1.8em",
    },
    extra: {
      fontSize: "1.5em",
    },
  },
  // #######################################################

  setFontWeight: (fontWight: String = "normal") => {
    return { fontWight };
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
