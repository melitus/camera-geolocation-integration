import React from 'react';
import { View, Text } from 'react-native';
import { Field, FormSection } from 'redux-form';

import Input from '../Form/Input';


const Person = ({ name }) => (
  <View>
    <Text>Name</Text>
    <Field
      id="incidentReport.person.name"
      name="name"
      component={Input}
      placeholder="Name"
      value={name}
      autoFocus
    />
  </View>
);

Person.defaultProps = {
  name: '',
};

export default Person;
