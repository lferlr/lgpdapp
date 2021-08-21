import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  
  container: {
    width: '100%',
    height: 56,
    //backgroundColor: '#000',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#0F70F5',
    borderWidth: 1

  },

  iconWrapper: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: '#0F70F5'
  },

  icon: {

  },

  tittle: {
    flex: 1,
    color: '#0F70F5',
    fontSize: 15,
    textAlign: 'center'
  }

});