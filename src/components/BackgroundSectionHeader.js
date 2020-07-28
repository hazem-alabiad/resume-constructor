import React, { useState } from "react";
import { Button, Icon, Popup } from "semantic-ui-react";
import { ActionModal } from "./ActionModal";
import AddNewExperience from "./AddNewExperience";
import WithTrans from "./WithTrans";

// #####################   Globals    ######################

// ##################   Main Component    ##################
const BackgroundSectionHeader = ({
  sectionIcon,
  sectionName,
  sectionAddHeader,
  handleSubmit,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="mb-4">
      <Icon name={sectionIcon} size="large" className="mr-3" />
      <span className="text-secondary">
        {<WithTrans keyword={sectionName} />}
      </span>
      <span className="ml-5">
        <Popup
          content={<WithTrans keyword={sectionAddHeader} />}
          trigger={
            <Button icon size="mini" circular color="teal" onClick={toggle}>
              <Icon name="plus" />
            </Button>
          }
        />
      </span>
      <ActionModal
        isOpen={isOpen}
        toggle={toggle}
        header={<WithTrans keyword={sectionAddHeader} />}
        onClose={() => setIsOpen(false)}
      >
        <AddNewExperience />
      </ActionModal>
    </div>
  );
};

export default BackgroundSectionHeader;
