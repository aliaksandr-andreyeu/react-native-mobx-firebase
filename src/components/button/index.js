import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Animated, Text, View, TouchableOpacity, Easing } from 'react-native';
import { theme, config } from '@constants';

import styles from './styles';

const {
  dimensions: { base }
} = theme;

const {
  common: { activeOpacity },
  animation: { speed }
} = config;

const { ease, inOut } = Easing;

const Button = ({ disabled, containerStyle, label, onPress, color }) => {
  const animateStartValue = () => base * 0.125;
  const animateEndValue = (opct = false) => animateStartValue() * (opct ? 0.75 : 0.98);

  const animateConfig = {
    speed: speed,
    easing: inOut(ease),
    useNativeDriver: true
  };

  const animateStartConfig = () => ({
    ...animateConfig,
    toValue: animateStartValue()
  });

  const animateEndConfig = (opct = false) => ({
    ...animateConfig,
    toValue: animateEndValue(opct)
  });

  const scale = useRef(new Animated.Value(animateStartValue())).current;
  const opacity = useRef(new Animated.Value(animateStartValue())).current;

  const onPressHandler = () => {
    if (!disabled) {
      onPress && onPress();
    }
  };

  const onPressInHandler = () => {
    if (!disabled) {
      Animated.parallel([
        Animated.spring(scale, animateEndConfig()),
        Animated.spring(opacity, animateEndConfig(true))
      ]).start();
    }
  };

  const onPressOutHandler = () => {
    if (!disabled) {
      Animated.parallel([
        Animated.spring(scale, animateStartConfig()),
        Animated.spring(opacity, animateStartConfig())
      ]).start();
    }
  };

  const containerColorStyle =
    color === 'primary' ? styles.viewContainerPrimary : color === 'accent' ? styles.viewContainerAccent : false;
  const containerDisabledColorStyle = disabled ? styles.viewContainerDisabled : false;

  const boxColorStyle =
    color === 'primary' ? styles.buttonBoxPrimary : color === 'accent' ? styles.buttonBoxAccent : false;
  const boxColorDisabledStyle = disabled
    ? color === 'primary'
      ? styles.buttonBoxDisabledPrimary
      : color === 'accent'
      ? styles.buttonBoxDisabledAccent
      : styles.buttonBoxDisabled
    : false;

  const descColorStyle = color ? styles.buttonDescColor : false;
  const descColorDisabledStyle = disabled
    ? color
      ? styles.buttonDescColorDisabled
      : styles.buttonDescDisabled
    : false;

  return label ? (
    <Animated.View
      style={{
        ...styles.viewContainer,
        ...containerColorStyle,
        ...containerDisabledColorStyle,
        ...(Boolean(containerStyle) && containerStyle),
        ...{
          transform: [{ scale }],
          opacity
        }
      }}
    >
      <TouchableOpacity
        activeOpacity={activeOpacity}
        onPress={onPressHandler}
        onPressIn={onPressInHandler}
        onPressOut={onPressOutHandler}
        style={styles.buttonContainer}
      >
        <View
          style={{
            ...styles.buttonBox,
            ...boxColorStyle,
            ...boxColorDisabledStyle
          }}
        >
          <Text
            style={{
              ...styles.buttonDesc,
              ...descColorStyle,
              ...descColorDisabledStyle
            }}
          >
            {label}
          </Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  ) : null;
};

Button.propTypes = {
  label: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'accent']),
  containerStyle: PropTypes.object,
  disabled: PropTypes.bool,
  onPress: PropTypes.func
};

Button.defaultProps = {
  label: '',
  containerStyle: {},
  disabled: false,
  onPress: () => null
};

export default Button;
