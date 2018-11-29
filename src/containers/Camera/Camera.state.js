import { connect } from 'react-redux';

import { doCameraCapture, selectMediaUri } from '../../redux/branches/entities/cameraCapture';
import Camera from '../../components/Camera/Camera';

export const mapDispatchToProps = dispatch => ({
  takePicture: ({ hasCaptured, mediaUri }) => dispatch(doCameraCapture({ hasCaptured, mediaUri })),
});

export const mapStateToProps = state => ({
  imageuri: selectMediaUri(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Camera);
