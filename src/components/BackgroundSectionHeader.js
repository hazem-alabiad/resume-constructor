import React, { useState } from "react";
import { Button, Icon, Popup } from "semantic-ui-react";
import { ActionModal } from "./ActionModal";
import AddExperienceForm from "./AddExperience";
import WithTrans from "./WithTrans";
import { ROUTE_NAMES } from "constants/routeNames";

// #####################   Globals    ######################

// ##################   Main Component    ##################
const BackgroundSectionHeader = ({
  sectionIcon,
  sectionName,
  sectionAddHeader,
  onSubmit,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="mb-4">
      <Icon name={sectionIcon} size="big" className="mr-3" />
      <span className="text-secondary">
        {<WithTrans keyword={sectionName} />}
      </span>
      {/* If edit profile show `add` button else, hide it */}
      {window.location.pathname !== ROUTE_NAMES.editProfile ? (
        <></>
      ) : (
        <span className="ml-5">
          <Popup
            content={<WithTrans keyword={sectionAddHeader} />}
            trigger={
              <Button icon size="mini" color="teal" onClick={toggle}>
                <Icon name="plus" />
              </Button>
            }
          />
        </span>
      )}
      <ActionModal
        isOpen={isOpen}
        toggle={toggle}
        header={<WithTrans keyword={sectionAddHeader} />}
        onClose={() => setIsOpen(false)}
      >
        <AddExperienceForm
          onSubmit={onSubmit}
          onSubmitClose={() => setIsOpen(false)}
        />
      </ActionModal>
    </div>
  );
};

export default BackgroundSectionHeader;
