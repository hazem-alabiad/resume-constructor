import { apiDeleteItem } from "api/apis";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Confirm } from "semantic-ui-react";

/**
 * #################   Main Component    #################
 * @typedef {object} Props
 * @param {number} Props.itemId
 * @param {Function} Props.deleteItemAction
 * @param {string} Props.path
 * @param {string} Props.successMsg
 * @param {string} Props.failureMsg
 */
const DeleteItemModal = ({
  itemId,
  deleteItemAction,
  path,
  successMsg,
  failureMsg,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Button icon="delete" color="red" onClick={toggle}></Button>
      <Confirm
        open={isOpen}
        closeIcon
        header={t("Deletion")}
        content={t("deletionConfirm")}
        onCancel={toggle}
        confirmButton={t("Delete")}
        onConfirm={() =>
          // apiDeleteItem(itemId, () => setIsOpen(false), deleteItemAction)
          apiDeleteItem(
            path,
            itemId,
            () => setIsOpen(false),
            deleteItemAction,
            successMsg,
            failureMsg
          )
        }
      />
    </>
  );
};

export default DeleteItemModal;

// ###############    Types   ###############
DeleteItemModal.propTypes = {
  itemId: PropTypes.number,
  deleteItemAction: PropTypes.func,
  path: PropTypes.string.isRequired,
  successMsg: PropTypes.string.isRequired,
  failureMsg: PropTypes.string.isRequired,
};
