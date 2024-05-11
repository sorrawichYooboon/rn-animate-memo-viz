import React, {useState} from 'react';
import {View, TouchableWithoutFeedback, Animated} from 'react-native';
import {burgurButtonStyle} from './style';

const BurgurButton = () => {
  const styles = burgurButtonStyle();
  const [active, setActive] = useState(false);
  const [animation] = useState(new Animated.Value(0));
  const [rotation, setRotation] = useState(new Animated.Value(0));

  const startAnimation = () => {
    const toValue = active ? 0 : 1;

    setActive(!active);
    Animated.parallel([
      Animated.timing(animation, {
        toValue,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.spring(rotation, {
        toValue,
        friction: 2,
        tension: 140,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const animatedStyles = {
    lower: {
      transform: [
        {
          translateY: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -25],
          }),
        },
        {
          rotate: rotation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '45deg'],
          }),
        },
      ],
    },
    middle: {
      height: animation.interpolate({
        inputRange: [0, 1],
        outputRange: [10, 0],
      }),
    },
    upper: {
      transform: [
        {
          translateY: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 25],
          }),
        },
        {
          rotate: rotation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '-45deg'],
          }),
        },
      ],
    },
    burgerButton: {
      backgroundColor: animation.interpolate({
        inputRange: [0, 1],
        outputRange: ['#E2E9E8', '#50D8C5'],
      }),
    },
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          startAnimation();
        }}>
        <Animated.View
          style={[styles.burgerButton, animatedStyles.burgerButton]}>
          <Animated.View style={[styles.inner, animatedStyles.upper]} />
          <Animated.View style={[styles.inner, animatedStyles.middle]} />
          <Animated.View style={[styles.inner, animatedStyles.lower]} />
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default BurgurButton;
