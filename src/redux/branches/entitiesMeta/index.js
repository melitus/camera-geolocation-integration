import { combineReducers } from 'redux';

import { reducer as incidentReports } from './incidentReports';
/* eslint-disable import/prefer-default-export */
export const reducer = combineReducers({
  incidentReports
});
/* eslint-disable import/prefer-default-export */
