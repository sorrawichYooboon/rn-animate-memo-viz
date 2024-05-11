import React from 'react';
import {decksScreenStyle} from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import BurgurButton from '../../components/BurgurButton/BurgurButton';

function DecksScreen() {
  const styles = decksScreenStyle();

  return (
    <SafeAreaView style={styles.container}>
      <BurgurButton />
    </SafeAreaView>
  );
}

export default DecksScreen;
