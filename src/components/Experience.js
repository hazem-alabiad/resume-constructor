import * as experienceActions from "actions/experienceActions";
import * as setItemBeingEditedActions from "actions/itemBeingEditedActions";
import { apiAddItem, apiEditItem, apiFetchItems } from "api/apis";
import URLS from "api/urls";
import { getRandomDate } from "helpers/strings";
import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Icon, Message, Placeholder } from "semantic-ui-react";
import { ALL_ICONS_IN_ALL_CONTEXTS } from "semantic-ui-react/src/lib/SUI";
import AddExperience from "./AddExperience";
import BackgroundItem from "./BackgroundItem";
import BackgroundSectionHeader from "./BackgroundSectionHeader";
import DeleteItemModal from "./DeleteItemModal";
import EditExperience from "./EditExperience";
import EditItemModalWrapper from "./EditItemModalWrapper";
import WithTrans from "./WithTrans";

// #################    Globals   #################
const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
  experiences: state.experiences,
});

const mapDispatchToProps = (dispatch) => ({
  fetchExperiences: (experiences) =>
    dispatch(experienceActions.fetchExperiences(experiences)),
  addExperience: (experience) =>
    dispatch(experienceActions.addExperience(experience)),
  loadingExperiences: () => dispatch(experienceActions.loadingExperiences()),
  deleteExperience: (experienceId) =>
    dispatch(experienceActions.deleteExperience(experienceId)),
  setExperienceBeingEdited: (experience) =>
    dispatch(setItemBeingEditedActions.setItemBeingEdited(experience)),
  editExperience: (updatedExperience) =>
    dispatch(experienceActions.editExperience(updatedExperience)),
});

/**
 * #################   Main Component    #################
 * @typedef {object} Props
 * @property {Object} userInfo
 * @property {string} userInfo.token
 * @property {Object[]} experiences
 * @property {Function} fetchExperiences
 * @property {Function} addExperience
 * @property {Function} loadingExperiences
 * @property {Function} deleteExperience
 * @property {Function} editExperience
 * @property {Function} setExperienceBeingEdited
 * @extends {Component<Props>}
 */
class Experience extends Component {
  // ###############   Life-Cycle Methods    ###############
  componentDidMount() {
    this.props.loadingExperiences();
    // Load experiences by making an API call
    apiFetchItems(
      URLS.EXPERIENCE,
      this.props.userInfo.token,
      this.props.fetchExperiences,
      <WithTrans keyword="experience.fetchError" />
    );
  }

  handleAddExperience = (values, reduxDevtoolCbFn, formProps) => {
    const { closeOnSubmit } = formProps;
    apiAddItem(
      URLS.EXPERIENCE,
      values,
      this.props.addExperience,
      closeOnSubmit,
      "experience.success",
      "experience.failure"
    );
  };

  handleEditExperience = (values, reduxDevtoolCbFn, formProps) => {
    const { closeOnSubmit } = formProps;
    apiEditItem(
      URLS.EXPERIENCE,
      values,
      closeOnSubmit,
      this.props.editExperience,
      "experience.editSuccess",
      "experience.editFailure"
    );
  };

  renderExperiences = () => {
    // If experiences not loaded yet, return a Loader
    if (this.props.experiences === null) {
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
    } else if (!this.props.experiences || !this.props.experiences.length) {
      return (
        <Grid.Column>
          <Message info>
            <h3 className="mb-2">
              <WithTrans keyword="experience.noExperience" />
            </h3>
            <WithTrans keyword="experience.howToAddExperiences" />
          </Message>
        </Grid.Column>
      );
    }

    return _.map(
      this.props.experiences,
      /**
       * @param {object} experience
       * @param {number} experience.id
       * @param {string} experience.role
       * @param {string} experience.company
       * @param {string} experience.description
       */
      (experience, index) => {
        const { id, role, company, description } = experience;
        const companyName = company.toLowerCase();
        let icon;
        if (ALL_ICONS_IN_ALL_CONTEXTS.indexOf(companyName) > 0) {
          icon = <Icon name={companyName} floated="right" size="huge" />;
        } else {
          icon = <Icon name="building outline" floated="right" size="huge" />;
        }

        return (
          <Grid key={index}>
            <Grid.Column mobile="12" tablet="13" computer="14">
              <BackgroundItem
                header={role}
                metadata={company}
                extra={getRandomDate()}
                content={description}
                EditItemModal={
                  <EditItemModalWrapper
                    item={experience}
                    setItemBeingEdited={this.props.setExperienceBeingEdited}
                    handleEditItem={this.handleEditExperience}
                    EditItemForm={EditExperience}
                  />
                }
                DeleteItemModal={
                  <DeleteItemModal
                    path={URLS.EXPERIENCE}
                    deleteItemAction={this.props.deleteExperience}
                    itemId={id}
                    successMsg="experience.deleteSuccess"
                    failureMsg="experience.deleteFailure"
                  />
                }
              />
            </Grid.Column>
            <Grid.Column mobile="4" tablet="3" computer="2">
              {icon}
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
          sectionIcon="file alternate"
          sectionName="Experience"
          addItemModalHeader="experience.add"
          onSubmit={this.handleAddExperience}
          AddItemForm={AddExperience}
        />

        {this.renderExperiences()}
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Experience);
