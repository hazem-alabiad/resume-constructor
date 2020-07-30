import React from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import WithTrans from "./WithTrans";

// #####################   Globals    ######################

// ##################   Main Component    ##################
export const AddEditModal = ({
  isOpen,
  toggle,
  header,
  handleSubmit,
  onClose,
  children,
  icon = "add",
}) => {
  return (
    <Modal open={isOpen} dimmer="blurring" onClose={onClose} closeOnEscape>
      <Header icon={icon} content={header} />
      <Modal.Content>{children}</Modal.Content>
      <Modal.Actions>
        <Button color="red" onClick={toggle}>
          <Icon name="remove" /> {<WithTrans keyword="Cancel" />}
        </Button>
      </Modal.Actions>
    </Modal>
  );
};
