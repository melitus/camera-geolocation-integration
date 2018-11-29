import { combineReducers } from 'redux';

import { reducer as incidentReports } from './incidentReports';
import { reducer as geoCoordinates } from './geoCoordinates';
import { reducer as cameraCapture } from './cameraCapture';

/* eslint-disable import/prefer-default-export */
export const reducer = combineReducers({
  incidentReports,
  geoCoordinates,
  cameraCapture,
});
/* eslint-disable import/prefer-default-export */
