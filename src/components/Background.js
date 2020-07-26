import React from "react";
import { Label, Segment } from "semantic-ui-react";
import WithTrans from "./WithTrans";

const Background = () => {
  return (
    <Segment padded>
      <Label color="black" attached="top left">{<WithTrans keyword="Background" />}</Label>
    </Segment>
  );
};

export default Background;
