import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../../theme/appTheme';
import { ImputComponent } from '../components/ImputComponent';


export const Screen4 = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleComparison = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (number1 > number2) {
      setResult(`El número ${num1} es mayor que ${num2}.`);
    } else if (number1 < number2) {
      setResult(`El número ${num2} es mayor que ${num1}.`);
    } else {
      setResult(`Los números ${num1} y ${num2} son iguales.`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Comparar Números</Text>
      <ImputComponent 
        placeholder="Ingrese el primer número" 
        value={num1} 
        onChangeText={setNum1} 
      />
      <ImputComponent 
        placeholder="Ingrese el segundo número" 
        value={num2} 
        onChangeText={setNum2} 
      />
      <TouchableOpacity style={styles.button} onPress={handleComparison}>
        <Text style={styles.textButton}>{'>='}</Text>
      </TouchableOpacity>
      {result ? <Text style={styles.result}>{result}</Text> : null}
    </View>
  );
};
