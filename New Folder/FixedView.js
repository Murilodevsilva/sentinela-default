import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

const FixedView = ({ children, fixedIconName = 'ios-pin', unfixedIconName = 'ios-unpin' }) => {
  const [isFixed, setIsFixed] = useState(false);

  const toggleFixed = () => {
    setIsFixed(!isFixed);
  };

  return (
    <Container isFixed={isFixed}>
      <ToggleButton onPress={toggleFixed}>
        <ToggleIcon name={isFixed ? unfixedIconName : fixedIconName} />
      </ToggleButton>
      {children}
    </Container>
  );
};

const Container = styled.View`
  position: ${({ isFixed }) => (isFixed ? 'absolute' : 'relative')};
  top: ${({ isFixed }) => (isFixed ? 0 : 'auto')};
  left: ${({ isFixed }) => (isFixed ? 0 : 'auto')};
  right: ${({ isFixed }) => (isFixed ? 0 : 'auto')};
  bottom: ${({ isFixed }) => (isFixed ? 0 : 'auto')};
`;

const ToggleButton = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const ToggleIcon = styled(Ionicons)`
  font-size: 30px;
  color: white;
`;

export default FixedView;
