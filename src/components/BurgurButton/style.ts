import {StyleSheet} from 'react-native';

export const burgurButtonStyle = (theme?: any) =>
  StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    burgerButton: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: 100,
      height: 100,
      paddingVertical: 20,
      borderRadius: 50,
      backgroundColor: 'lightgray',
    },
    inner: {
      width: '60%',
      height: 10,
      borderRadius: 10,
      backgroundColor: 'black',
    },
  });
