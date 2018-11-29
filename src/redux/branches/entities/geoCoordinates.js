import { handleActions } from 'redux-actions';
import { createActionWithPayload } from '../../utils/';

export const initialState = {};

const createActionName = name => `geoCoordinates/${name}`;

/* eslint-disable no-underscore-dangle */
// Actions
export const DO_GEO_COORDINATES = createActionName('DO_GEO_COORDINATES');
export const _REQUEST_SUCCESS = createActionName('REQUEST_SUCCESS');
export const _REQUEST_ERROR = createActionName('REQUEST_ERROR');

// Action creators
export const doGeoCoordinates = createActionWithPayload(DO_GEO_COORDINATES);
export const _requestSuccess = createActionWithPayload(_REQUEST_SUCCESS);
export const _requestError = createActionWithPayload(_REQUEST_ERROR);

// Reducer
export const reducer = handleActions(
  {
    [_REQUEST_SUCCESS]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    [DO_GEO_COORDINATES]: (state, { payload: { latitude, longitude,address } }) => {
      console.log('DO_GEO_COORDINATES', latitude, longitude,address);
      return ({
        ...state,
        ...{
          latitude,
          longitude,
          address,
          created: new Date(),
        },
      });
    },
  },
  initialState
);
