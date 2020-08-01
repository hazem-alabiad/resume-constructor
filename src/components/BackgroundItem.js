import { ROUTE_NAMES } from "constants/routeNames";
import { DESIGN_SYSTEM } from "designSystem";
import PropTypes from "prop-types";
import React from "react";
import { Button, Label } from "semantic-ui-react";

/**
 * ##################   Main Component    ##################
 * @param {object} props
 * @param {string} props.header
 * @param {string} props.metadata
 * @param {string} props.extra
 * @param {string} props.content
 * @param {boolean} props.isSkill
 * @param {React.Component} props.EditItemModal
 * @param {React.Component} props.DeleteItemModal
 */
const BackgroundItem = ({
  header,
  metadata,
  extra,
  content,
  EditItemModal,
  DeleteItemModal,
  isSkill = false,
}) => {
  const { setHeaderStyle, setMetadataStyle, setExtraStyle } = DESIGN_SYSTEM;
  const isEditProfile = window.location.pathname === ROUTE_NAMES.editProfile;
  return (
    <>
      {/* If edit profile page show `edit` and `delete` buttons else, hide them */}
      {isEditProfile ? (
        <Button.Group size="mini" className="mb-3">
          {EditItemModal}
          {DeleteItemModal}
        </Button.Group>
      ) : (
        <></>
      )}
      {/* If the caller component is (Education || Experience) */}
      {!isSkill ? (
        <>
          <div style={setHeaderStyle()}>{header}</div>
          <div style={setMetadataStyle()}>{metadata}</div>
          <div style={setExtraStyle()}>{extra}</div>
          <p className="mt-3" style={{ whiteSpace: "pre" }}>
            {content}
          </p>
        </>
      ) : (
        <div>
          {/* If the caller component is (Skill) */}
          <Label>{header}</Label>
        </div>
      )}
    </>
  );
};

export default BackgroundItem;

// ################   Types   ################
BackgroundItem.propTypes = {
  header: PropTypes.string.isRequired,
  metadata: PropTypes.string,
  extra: PropTypes.string,
  content: PropTypes.string,
  EditItemModal: PropTypes.element.isRequired,
  DeleteItemModal: PropTypes.element.isRequired,
  isSkill: PropTypes.bool.isRequired,
};
