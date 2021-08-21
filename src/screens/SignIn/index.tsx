import React from 'react';
import { 
  Image, 
  View, 
  Text
} from 'react-native';

import { ButtonGoogle } from '../../components/ButtonGoogle';
import { ButtonCadastre } from '../../components/ButtonCadastre';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

export function SignIn() {
  const navigation = useNavigation();

  return (
    
      <View style={ styles.container }>
        {/* <Image
          source={ IllustratedImg }
          style={ styles.image }
          resizeMode='stretch'
        /> */}
        <Image
        style={styles.tinyLogo}
        source={require('../../../assets/iconLgpd.png')}
        />

        <View style={ styles.content }>
          <Text style={ styles.title }>
            Conecte-se{ `\n` }
            e saiba se está{ `\n` }
            seguro
          </Text>

          <Text style={ styles.subtitle }>
          Responda as perguntas e saiba o quão{ `\n` }
          seguro você está de acordo com a{ `\n` }
          LGPD.
          </Text>

          <ButtonGoogle />
          <Text />
          <ButtonCadastre />

        </View>
      </View>
    
  );
}
