import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, View, Text } from 'react-native';

/*import IllustratedImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';*/

import { ButtonIcon } from '../../components/ButtonIcon';
import { styles } from './styles';

export function SignIn() {
  const navigation = useNavigation();

  // function handleSignIn() {
  //   navigation.navigate('Home');
  // }

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

          <ButtonIcon />
        </View>
      </View>
    
  );
}
