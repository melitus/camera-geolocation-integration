import { postAPI$ /* getAPI$, deleteAPI$, putAPI$ */} from '../utils/ioUtils';
import apiPathsRoot from './apiPaths';

const apiPaths = apiPathsRoot.children;

/* eslint-disable import/prefer-default-export */
const makeGeoCoordinates = incidentReports =>
  postAPI$(apiPaths.submitWasteReports.path, { body: incidentReports });
/* eslint-disable import/prefer-default-export */

// /* eslint-disable import/prefer-default-export */
// const fetchWasteReport$ = () =>
//   getAPI$(apiPaths.wastereports.path, {});
// /* eslint-disable import/prefer-default-export */
export {
  makeGeoCoordinates,
};
