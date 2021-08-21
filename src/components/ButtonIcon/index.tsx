import React from 'react';
import { 
  Text,
  Image,
  View,
  TouchableOpacity
 } from 'react-native';

//import GoogleIcon from './../../../assets/googleIcon.png';
import { styles } from './styles';

export function ButtonIcon() {
  return(
    <TouchableOpacity style={styles.container}>
      <View style={styles.iconWrapper}>
        <Image source={require('../../../assets/googleIcon.png')} style={styles.icon} />
      </View>

      <Text style={styles.tittle}>
        Entrar com Google
      </Text>
    </TouchableOpacity>
  );
}
