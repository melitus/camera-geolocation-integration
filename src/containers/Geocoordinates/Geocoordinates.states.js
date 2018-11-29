import { connect } from 'react-redux';

import { doGeoCoordinates, selectGeoCoordinates } from '../../redux/branches/entities/geoCoordinates';
import GeoCoordinates from '../../components/GeoCoordinates/GeoCoordinates';

export const mapDispatchToProps = dispatch => ({
  getGeoCoordinates: ({ latitude, longitude, address }) => dispatch(doGeoCoordinates({ latitude, longitude,address })),
});

export const mapStateToProps = state => ({
  imageuri: selectGeoCoordinates(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(GeoCoordinates);
