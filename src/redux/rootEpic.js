import { ReduxObservable } from './utils/';
import incidentReportsEpic from './features/incidentReports';
import cameraCaptureEpic from './features/cameraCapture'
// import geoCoordinatesEpic from './features/geoCoordinates'


export default ReduxObservable.combineEpics(
  incidentReportsEpic,
  cameraCaptureEpic,
  // geoCoordinatesEpic
);
