import { apiDeleteExperience } from "api/apis";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Confirm, Popup } from "semantic-ui-react";
import WithTrans from "./WithTrans";

/**
 * #################   Main Component    #################
 * @typedef {object} Props
 * @typedef {number} Props.experienceId
 * @extends {Component<Props>}
 */
const DeleteConfirmationModal = ({ itemId, deleteExperienceAction }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Popup
        content={<WithTrans keyword={"experience.delete"} />}
        trigger={<Button icon="delete" color="red" onClick={toggle}></Button>}
      />
      <Confirm
        open={isOpen}
        closeIcon
        header={t("Deletion")}
        content={t("deletionConfirm")}
        onCancel={toggle}
        confirmButton={t("Delete")}
        onConfirm={() =>
          apiDeleteExperience(
            itemId,
            () => setIsOpen(false),
            deleteExperienceAction
          )
        }
      />
    </>
  );
};

export default DeleteConfirmationModal;
