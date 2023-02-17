import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const HexagonalButton = ({ color, size, onPress }) => {
  const buttonSize = size || 50;

  const styles = StyleSheet.create({
    hexagon: {
      width: buttonSize,
      height: buttonSize,
      backgroundColor: color || '#000',
      position: 'relative',
      overflow: 'hidden',
    },
    hexagonBefore: {
      position: 'absolute',
      content: '',
      width: 0,
      height: 0,
      borderLeftWidth: buttonSize / 2,
      borderLeftColor: 'transparent',
      borderRightWidth: buttonSize / 2,
      borderRightColor: 'transparent',
      borderBottomWidth: buttonSize / 4,
      borderBottomColor: color || '#000',
      top: -buttonSize / 4,
      left: 0,
    },
    hexagonAfter: {
      position: 'absolute',
      content: '',
      width: 0,
      height: 0,
      borderLeftWidth: buttonSize / 2,
      borderLeftColor: 'transparent',
      borderRightWidth: buttonSize / 2,
      borderRightColor: 'transparent',
      borderTopWidth: buttonSize / 4,
      borderTopColor: color || '#000',
      bottom: -buttonSize / 4,
      left: 0,
    },
  });

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.hexagon}>
        <View style={styles.hexagonBefore} />
        <View style={styles.hexagonAfter} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default HexagonalButton;
