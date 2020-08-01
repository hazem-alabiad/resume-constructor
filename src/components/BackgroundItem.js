import { ROUTE_NAMES } from "constants/routeNames";
import PropTypes from "prop-types";
import React from "react";
import { Button } from "semantic-ui-react";
import { DESIGN_SYSTEM } from "designSystem";

/**
 * ##################   Main Component    ##################
 * @param {object} props
 * @param {string} props.header
 * @param {string} props.metadata
 * @param {string} props.extra
 * @param {string} props.content
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
}) => {
  const { setHeaderStyle, setMetadataStyle, setExtraStyle } = DESIGN_SYSTEM;
  return (
    <>
      {/* If edit profile page show `edit` and `delete` buttons else, hide them */}
      {window.location.pathname !== ROUTE_NAMES.editProfile ? (
        <></>
      ) : (
        <Button.Group size="mini" className="mb-3">
          {EditItemModal}
          {DeleteItemModal}
        </Button.Group>
      )}
      <div style={setHeaderStyle()}>{header}</div>
      <div style={setMetadataStyle()}>{metadata}</div>
      <div style={setExtraStyle()}>{extra}</div>
      <p className="mt-3" style={{ whiteSpace: "pre" }}>
        {content}
      </p>
    </>
  );
};

export default BackgroundItem;

// ################   Types   ################
BackgroundItem.propTypes = {
  header: PropTypes.string.isRequired,
  metadata: PropTypes.string.isRequired,
  extra: PropTypes.string.isRequired,
  content: PropTypes.string,
  EditItemModal: PropTypes.element.isRequired,
  DeleteItemModal: PropTypes.element.isRequired,
};
