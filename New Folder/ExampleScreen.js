import React from 'react';
import { Text } from 'react-native';
import FixedView from './FixedView';

const ExampleScreen = () => {
  return (
    <FixedView fixedIconName="ios-lock" unfixedIconName="ios-unlock">
      <Text>Conteúdo da view fixa ou não fixa</Text>
    </FixedView>
  );
};

export default ExampleScreen;
