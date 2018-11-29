import { handleActions } from 'redux-actions';

import {
 FETCH_REPORTS_SUCCESS,
 FETCH_REPORTS_ERROR
} from '../entities/incidentReports';

import {
  createSuccessLoadDetails,
  createErrorLoadDetails
} from '../../../utils/ioUtils';

export const initialState = {};
export const reducer = handleActions(
  {
    [FETCH_REPORTS_SUCCESS]: (state, { payload }) => ({
      loadDetails: createSuccessLoadDetails(payload),
    }),
    [FETCH_REPORTS_ERROR]: (state, { payload }) => ({
      loadDetails: createErrorLoadDetails(payload.error),
    }),
  },
  initialState
);
