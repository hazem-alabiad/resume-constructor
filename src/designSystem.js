import DeleteConfirmationModal from "components/DeleteConfirmationModal";
import WithTrans from "components/WithTrans";
import { ROUTE_NAMES } from "constants/routeNames";
import React from "react";
import { Button, Popup } from "semantic-ui-react";

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
  experienceRoleStyle: (
    str: String,
    experienceId: String,
    deleteExperienceAction: Function
  ): HTMLDivElement => {
    return (
      <div style={{ color: "black", fontWeight: "bold" }}>
        {str}
        {/* If edit profile page show `edit` and `delete` buttons else, hide them */}
        {window.location.pathname !== ROUTE_NAMES.editProfile ? (
          <></>
        ) : (
          <Button.Group size="mini">
            <Popup
              content={<WithTrans keyword={"experience.edit"} />}
              trigger={
                <Button
                  icon="edit outline"
                  className="ml-5"
                  color="vk"
                ></Button>
              }
            />
            <DeleteConfirmationModal
              itemId={experienceId}
              deleteExperienceAction={deleteExperienceAction}
            />
          </Button.Group>
        )}
      </div>
    );
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
