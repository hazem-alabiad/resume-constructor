import React from "react";
import { Grid, Label, Segment } from "semantic-ui-react";
import Experience from "./Experience";
import WithTrans from "./WithTrans";

// ###############   Helper Components    ##################

/**
 * ##################   Main Component    ##################
 * @param {object} props
 * @param {object} props.userInfo
 * @param {number} props.userInfo.id
 * @param {string} props.userInfo.username
 * @param {string} props.userInfo.firstName
 * @param {string} props.userInfo.lastName
 */
const Background = () => {
  return (
    <Segment padded>
      <Label color="black" attached="top left">
        {<WithTrans keyword="Background" />}
      </Label>
      <Grid>
        <Grid.Column>
          <Experience />
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default Background;

// ###################    Types   ###################
// ActionModal.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
//   toggle: PropTypes.func.isRequired,
//   header: PropTypes.object.isRequired,
//   content: PropTypes.element.isRequired,
//   handleSubmit: PropTypes.func.isRequired,
//   onClose: PropTypes.func.isRequired,
//   icon: PropTypes.string,
// };

// BackgroundSectionHeader.propTypes = {
//   sectionIcon: PropTypes.string.isRequired,
//   sectionName: PropTypes.string.isRequired,
//   sectionAddHeader: PropTypes.string.isRequired,
//   handleSubmit: PropTypes.func.isRequired,
// };
