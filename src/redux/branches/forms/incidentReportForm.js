import { handleActions } from 'redux-actions';
import {
  getFormValues,
  submit as createSubmit,
  change as changeFieldValue
} from 'redux-form';
import { createSelector } from 'reselect';

import { createActionWithPayload } from '../../utils/';
import { doIncidentReport } from '../entities/incidentReports';

export const getInitialData = () => ({
  person: {
    telephone: ''

  },
  description: '',
  geoCoordinates: {
    address: '',
    image: '',
    latitude: '',
    longitude: '',
  }
});

// Actions
export const FORM_NAME = 'form/DO_INCIDENT_REPORT';

const createActionName = name => `${FORM_NAME}/${name}`;

// Action creators
export const submit = createSubmit(FORM_NAME);
export const change = (field, value) => changeFieldValue(FORM_NAME, field, value);

// Selectors
export const selectIncidentReportForm = getFormValues(FORM_NAME);

export const selectPerson = createSelector(
  selectIncidentReportForm,
  form => form.person
);

export const selectDescription = createSelector(
  selectIncidentReportForm,
  form => form.description
);

export const selectGeoCoordinates = createSelector(
  selectIncidentReportForm,
  form => form.geoCoordinates
);

// Actions
export const _INCIDENT_REPORT_FORM_UPDATE = createActionName('_INCIDENT_REPORT_FORM_UPDATE');

// Action creators
export const incidentReportFormUpdate = createActionWithPayload(_INCIDENT_REPORT_FORM_UPDATE);

// Reducer
export const reducer = handleActions(
  {
    [_INCIDENT_REPORT_FORM_UPDATE]: (state, { person, geoCoordinates, description }) => ({
      ...state,
      ...{ person, geoCoordinates, description },
    }),
  },
  getInitialData()
);

// Dispatch
export const onSubmit = ({ person, geoCoordinates, description }, dispatch) => (
  new Promise((resolve) => {
    resolve();
    dispatch(doIncidentReport({ person, geoCoordinates, description }));
  })
);
