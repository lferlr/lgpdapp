import React from 'react';
import {  
  View, 
  Text
} from 'react-native';

import { styles } from './styles';

export function Cadastre() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cadastre-se</Text>
    </View>
  );
}