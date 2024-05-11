import {Button, Text} from '@rneui/base';
import React, {memo} from 'react';
import Sound from 'react-native-sound';

const pressSound = new Sound('press-sound.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
});

interface DecksProps {
  title: string;
}

const Decks = memo(({title}: DecksProps) => {
  return (
    <Button
      type="outline"
      onPress={() => {
        pressSound.play();
      }}>
      <Text>{title}</Text>
    </Button>
  );
});

export default Decks;
