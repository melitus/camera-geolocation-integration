import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import {
  FORM_NAME,
  onSubmit,
  submit,
  selectPerson,
  selectDescription,
  selectGeoCoordinates,
  getInitialData,
} from '../../redux/branches/forms/incidentReportForm';
import {
  selectMediaUri,
} from '../../redux/branches/entities/cameraCapture';
import IncidentReportForm from '../../components/IncidentReportForm/IncidentReportForm';

export const mapStateToProps = state => {
  console.log('STATE', state);
  return ({
  person: selectPerson(state),
  description: selectDescription(state),
  geoCoordinates: selectGeoCoordinates(state),
  cameraImage: selectMediaUri(state),
})};

export const mapDispatchToProps = () => ({});

const IncidentReportFormContainer = compose(
  reduxForm({
    form: FORM_NAME,
    pure: false,
    destroyOnUnmount: false,
    onSubmit,
    submit,
  }),
  connect(mapStateToProps, mapDispatchToProps)
)(IncidentReportForm);

IncidentReportFormContainer.defaultProps = {
  get initialValues() {
    return getInitialData();
  },
};

export default IncidentReportFormContainer;
