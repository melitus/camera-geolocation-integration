import { Observable } from 'rxjs';

import { makeGeoCoordinates } from '../../api';
import { ReduxObservable } from '../utils';

import {
  _requestSuccess,
  _requestError,
  DO_GEO_COORDINATES,
} from '../branches/entities/geoCoordinates';

const doGeoCoordinatesEpic = action$ =>
  action$
    .ofType(DO_GEO_COORDINATES)
    .switchMap(action =>
      makeGeoCoordinates(action.payload)
      .switchMap(response =>
        Observable.concat(
          Observable.of(_requestSuccess(response)),
      ))
      .catch(error => Observable.of(_requestError({
        error,
      })))
    );

const geoCoordinatesEpic = ReduxObservable.combineEpics(
  doGeoCoordinatesEpic
);

export default geoCoordinatesEpic;
