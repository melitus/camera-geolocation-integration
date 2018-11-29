import { Observable } from 'rxjs';

import { makeIncidentReport } from '../../api';
import { ReduxObservable } from '../utils';

import {
  transitToConfirmation,
  _requestSuccess,
  _requestError,
  DO_INCIDENT_REPORT
} from '../branches/entities/incidentReports';

const doIncidentReportsEpic = action$ =>
  action$
    .ofType(DO_INCIDENT_REPORT)
    .switchMap(action =>
      makeIncidentReport(action.payload)
      .switchMap(response =>
        Observable.concat(
          Observable.of(_requestSuccess(response)),
          Observable.of(transitToConfirmation({}))
      ))
      .catch(error => Observable.of(_requestError({
        error
      })))
    );

const incidentReportsEpic = ReduxObservable.combineEpics(
  doIncidentReportsEpic
);

export default incidentReportsEpic;
