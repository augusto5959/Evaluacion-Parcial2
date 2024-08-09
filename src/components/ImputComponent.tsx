import React from 'react';
import { TextInput } from 'react-native';
import { styles } from '../../theme/appTheme';

interface Props {
  placeholder: string,
  value: string,
  onChangeText: (text: string) => void
}

export const ImputComponent = ({ placeholder, value, onChangeText }: Props) => {
  return (
    <TextInput 
    style={styles.imput}
      value={value} 
      keyboardType='numeric' 
      placeholder={placeholder} 
      onChangeText={onChangeText} 
    />
  );
};
