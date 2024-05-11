# React Native Hamburgur Button Animation

This project demonstrates how to create an animated hamburgur button component in React Native. The button animates into an X-shaped icon when clicked, providing a visually appealing user interaction.

## Getting Started

To get started with the animation, follow these steps:

1. Install dependencies:

   ```bash
   yarn install
   ```

2. Run the project:

   ```bash
   yarn start
   ```

## Component Description

<b>"component located in src/components/BurgurButton"</b>

The BurgurButton component is composed of three horizontal lines, resembling a hamburger menu icon. When clicked, these lines animate into an X-shaped icon using React Native's Animated API.

The animation is achieved by interpolating between two states: the initial state (hamburger icon) and the final state (X-shaped icon). This interpolation is done using the interpolate method of the Animated API, mapping input ranges to output ranges for various animated properties.

The component utilizes React's state management (useState hook) to toggle between the two states when the button is clicked. The Animated.timing and Animated.spring methods are used to animate the position and rotation of the lines, creating a smooth and visually appealing transition.

## Credits

https://medium.com/cheesecake-labs/first-steps-with-react-native-animations-1bfdb10d3770
