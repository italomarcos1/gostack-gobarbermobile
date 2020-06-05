import React from 'react';
import { TextInputProperties } from 'react-native';
import { Container, TextInput, Icon } from './styles';

interface InputProps extends TextInputProperties {
  name: string;
  icon: string;
}

Icon.loadFont();

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => (
  <Container>
    <Icon name={icon} size={20} color="#666360" />
    <TextInput placeholderTextColor="#666360" {...rest} />
  </Container>
);

export default Input;