import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import { AddEditModal } from "./AddEditModal";
import EditExperienceForm from "./EditExperience";
import WithTrans from "./WithTrans";

/**
 * #################   Main Component    #################
 * @typedef {object} Props
 * @typedef {number} Props.experienceId
 * @typedef {Function} Props.setExperienceBeingEdited
 * @typedef {Function} Props.handleEditExperience
 * @extends {Component<Props>}
 */
const EditExperienceModal = ({
  experience,
  setExperienceBeingEdited,
  handleEditExperience,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setExperienceBeingEdited(experience);
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Button
        icon="edit outline"
        className="ml-5"
        color="vk"
        onClick={toggle}
      ></Button>
      <AddEditModal
        isOpen={isOpen}
        toggle={toggle}
        header={<WithTrans keyword="experience.edit" />}
        onClose={() => setIsOpen(false)}
      >
        <EditExperienceForm
          experience={experience}
          closeOnSubmit={() => setIsOpen(false)}
          onSubmit={handleEditExperience}
        />
      </AddEditModal>
    </>
  );
};

export default EditExperienceModal;
