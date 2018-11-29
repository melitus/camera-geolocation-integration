import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';


import HomeScreen from './screens/Home';
import CameraScreen from './containers/Camera/Camera.state';
import ReportScreen from './containers/IncidentReport/IncidentReportForm.state';
import LoaderScreen from './screens/LoaderScreen';
import Confirmation from './screens/Confirmation';

const RootStack = createStackNavigator(
  {
    home: HomeScreen,
    capture: CameraScreen,
    report: ReportScreen,
    loader: LoaderScreen,
    confirmation: Confirmation,
  },
  {
    initialRouteName: 'home',
  }
);

export default RootStack;
