import { handleActions } from 'redux-actions';
import { createSelector } from 'reselect';

import { createActionWithPayload } from '../../utils/';

export const initialState = {
  hasCaptured:false,
  mediaUri:null,
  created: '',
  dataImage: '',
};

const createActionName = name => `takePicture/${name}`;

/* eslint-disable no-underscore-dangle */
// Actions
export const DO_CAMERA_CAPTURE = createActionName('DO_CAMERA_CAPTURE');
export const _REQUEST_SUCCESS = createActionName('REQUEST_SUCCESS');
export const _REQUEST_ERROR = createActionName('REQUEST_ERROR');


// Action creators
export const doCameraCapture = createActionWithPayload(DO_CAMERA_CAPTURE);
export const _requestSuccess = createActionWithPayload(_REQUEST_SUCCESS);
export const _requestError = createActionWithPayload(_REQUEST_ERROR);

// Selectors
const cameraCaptureSelector = state =>
  state.entities.cameraCapture;

export const selectMediaUri = createSelector(
  cameraCaptureSelector,
  (cameraCapture) => {
    console.log(' cameraCapture',cameraCapture);
    return cameraCapture.mediaUri;
  }
)

// Reducer
export const reducer = handleActions(
  {
    [_REQUEST_SUCCESS]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    [DO_CAMERA_CAPTURE]: (state, { payload: { hasCaptured, mediaUri } }) => {
      console.log('DO_CAMERA_CAPTURE', hasCaptured, mediaUri);
      return ({
        ...state,
        ...{
          hasCaptured,
          mediaUri,
          created: new Date(),
        },
      });
    },
  },
  initialState
);
