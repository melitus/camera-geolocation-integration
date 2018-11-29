import { Observable } from 'rxjs';

//import { makeGeoCoordinates } from '../../api';
import { ReduxObservable } from '../utils';

import {
  _requestSuccess,
  _requestError,
  DO_CAMERA_CAPTURE,
} from '../branches/entities/cameraCapture';

const doCameraCaptureEpic = action$ =>
  action$
    .ofType(DO_CAMERA_CAPTURE)
      .switchMap(response =>
        Observable.concat(
          Observable.of(_requestSuccess(response)),
      ))
      .catch(error => Observable.of(_requestError({
        error,
      })))


const cameraCaptureEpic = ReduxObservable.combineEpics(
  doCameraCaptureEpic
);

export default cameraCaptureEpic;
