import React from 'react';
import { 
  Text,
  TouchableOpacity
 } from 'react-native';

import { styles } from './styles';

export function ButtonCadastre() {
  return(
    <TouchableOpacity style={styles.container}>
      <Text style={styles.tittle}>
        Cadastre-se
      </Text>
    </TouchableOpacity>
  );
}
