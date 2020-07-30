import { apiDeleteExperience } from "api/apis";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Confirm } from "semantic-ui-react";

/**
 * #################   Main Component    #################
 * @typedef {object} Props
 * @typedef {number} Props.experienceId
 * @extends {Component<Props>}
 */
const DeleteExperienceModal = ({ itemId, deleteExperienceAction }) => {
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
        confirmButton={t("experience.delete")}
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

export default DeleteExperienceModal;
