import * as educationActions from "actions/educationActions";
import * as setItemBeingEditedActions from "actions/itemBeingEditedActions";
import { apiAddItem, apiEditItem, apiFetchItems } from "api/apis";
import URLS from "api/urls";
import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Message, Placeholder } from "semantic-ui-react";
import AddEducation from "./AddEducation";
import BackgroundItem from "./BackgroundItem";
import BackgroundSectionHeader from "./BackgroundSectionHeader";
import DeleteItemModal from "./DeleteItemModal";
import EditEducation from "./EditEducation";
import EditItemModalWrapper from "./EditItemModalWrapper";
import WithTrans from "./WithTrans";

// #################    Globals   #################
const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
  educations: state.educations,
});

const mapDispatchToProps = (dispatch) => ({
  setItemBeingEdited: (experience) =>
    dispatch(setItemBeingEditedActions.setItemBeingEdited(experience)),
  loadingEducations: () => dispatch(educationActions.loadingEducations()),
  fetchEducations: (educations) =>
    dispatch(educationActions.fetchEducations(educations)),
  addEducation: (education) =>
    dispatch(educationActions.addEducation(education)),
  setEducationBeingEdited: (education) =>
    dispatch(setItemBeingEditedActions.setItemBeingEdited(education)),
  editEducation: (updatedEducation) =>
    dispatch(educationActions.editEducation(updatedEducation)),
  deleteEducation: (educationId) =>
    dispatch(educationActions.deleteEducation(educationId)),
});

/**
 * #################   Main Component    #################
 * @typedef {object} Props
 * @property {Object} userInfo
 * @property {string} userInfo.token
 * @property {Object[]} educations
 * @property {Function} loadingEducations
 * @property {Function} fetchEducations
 * @property {Function} addEducation
 * @property {Function} setEducationBeingEdited
 * @property {Function} editEducation
 * @property {Function} deleteEducation
 * @extends {Component<Props>}
 */
class Education extends Component {
  // ###############   Life-Cycle Methods    ###############
  componentDidMount() {
    this.props.loadingEducations();
    // Load educations by making an API call
    apiFetchItems(
      URLS.EDUCATIONS,
      this.props.userInfo.token,
      this.props.fetchEducations,
      "education.fetchError"
    );
  }

  handleAddEducation = (values, reduxDevtoolCbFn, formProps) => {
    const { closeOnSubmit } = formProps;
    apiAddItem(
      URLS.EDUCATIONS,
      values,
      this.props.addEducation,
      closeOnSubmit,
      "education.addSuccess",
      "education.addFailure"
    );
  };

  handleEditEducation = (values, reduxDevtoolCbFn, formProps) => {
    const { closeOnSubmit } = formProps;
    apiEditItem(
      URLS.EDUCATIONS,
      values,
      closeOnSubmit,
      this.props.editEducation,
      "education.editSuccess",
      "education.editFailure"
    );
  };

  renderEducations = () => {
    // If educations not loaded yet, return a Loader
    if (this.props.educations === null) {
      return (
        <Grid.Column>
          <Placeholder>
            <Placeholder.Header image>
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Header>
            <Placeholder.Paragraph>
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Paragraph>
          </Placeholder>
        </Grid.Column>
      );
    } else if (!this.props.educations || !this.props.educations.length) {
      return (
        <Grid.Column>
          <Message info>
            <h3 className="mb-2">
              <WithTrans keyword="education.noEducation" />
            </h3>
            <WithTrans keyword="education.howToAddEducations" />
          </Message>
        </Grid.Column>
      );
    }

    return _.map(
      this.props.educations,
      /**
       * @param {object} education
       * @param {number} education.id
       * @param {string} education.schoolName
       * @param {string} education.degreeType
       * @param {string} education.programName
       * @param {string} education.startYear
       * @param {string} education.endYear
       */
      (education, index) => {
        const {
          id,
          schoolName,
          programName,
          degreeType,
          startYear,
          endYear,
        } = education;
        return (
          <Grid key={index}>
            <Grid.Column>
              <BackgroundItem
                header={`${startYear} ${schoolName}`}
                metadata={`${degreeType}, ${programName}`}
                extra={`${startYear} - ${endYear}`}
                EditItemModal={
                  <EditItemModalWrapper
                    item={education}
                    setItemBeingEdited={this.props.setEducationBeingEdited}
                    handleEditItem={this.handleEditEducation}
                    EditItemForm={EditEducation}
                  />
                }
                DeleteItemModal={
                  <DeleteItemModal
                    path={URLS.EDUCATIONS}
                    deleteItemAction={this.props.deleteEducation}
                    itemId={id}
                    successMsg="education.deleteSuccess"
                    failureMsg="education.deleteFailure"
                  />
                }
              />
            </Grid.Column>
          </Grid>
        );
      }
    );
  };

  render() {
    return (
      <>
        <BackgroundSectionHeader
          sectionIcon="student"
          sectionName="Education"
          addItemModalHeader="education.add"
          onSubmit={this.handleAddEducation}
          AddItemForm={AddEducation}
        />
        {this.renderEducations()}
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Education);
