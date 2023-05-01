import React from 'react';
import PropTypes from 'prop-types';

import { Text, View, TouchableOpacity } from 'react-native';
import { config } from '@constants';

import styles from './styles';

const { buttons, common } = config;

const Button = ({ disabled, containerStyle, label, onPress, color }) => {
  const onPressHandler = () => {
    if (!disabled) {
      onPress && onPress();
    }
  };

  const containerColorStyle =
    color === 'primary' ? styles.buttonContainerPrimary : color === 'accent' ? styles.buttonContainerAccent : false;
  const containerDisabledColorStyle = disabled ? styles.buttonContainerDisabled : false;

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
    <TouchableOpacity
      activeOpacity={disabled ? common.activeOpacity : buttons.activeOpacity}
      onPress={onPressHandler}
      style={{
        ...styles.buttonContainer,
        ...containerColorStyle,
        ...containerDisabledColorStyle,
        ...(Boolean(containerStyle) && containerStyle)
      }}
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
