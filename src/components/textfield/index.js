import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Animated, View, Text, TextInput, TouchableOpacity, Easing } from 'react-native';
import { EyeIcon, EyeOffIcon } from '@images';
import { theme, config } from '@constants';

import styles from './styles';

const {
  colors: { secondaryDarkText, secondaryLightText },
  dimensions: { base }
} = theme;

const {
  buttons: { activeOpacity },
  animation: { duration }
} = config;

const { ease, inOut } = Easing;

const TextField = ({
  autoFocus,
  containerStyle,
  label,
  value,
  placeholder,
  placeholderTextColor,
  onChange,
  onSubmit,
  secure,
  error,
  inputMode,
  keyboardType,
  returnKeyType
}) => {
  const [visible, setVisible] = useState(!secure);
  const [focusIn, setFocusIn] = useState(false);

  const animateStartValue = base * 0.125;
  const animateEndValue = animateStartValue * 1.5;

  const borderWidth = useRef(new Animated.Value(animateStartValue)).current;

  const animateConfig = {
    duration: duration,
    easing: inOut(ease),
    useNativeDriver: false
  };

  const onSubmitHandler = () => {
    onSubmit && onSubmit();
  };

  const onChangeHandler = ({ nativeEvent: { text } }) => {
    onChange && onChange(text);
  };

  const onPress = () => {
    setVisible(!visible);
  };

  const focusInHandler = () => {
    setFocusIn(true);

    Animated.timing(borderWidth, {
      ...animateConfig,
      toValue: animateEndValue
    }).start();
  };

  const focusOutHandler = () => {
    setFocusIn(false);

    Animated.timing(borderWidth, {
      ...animateConfig,
      toValue: animateStartValue
    }).start();
  };

  return (
    <View
      style={{
        ...styles.container,
        ...(Boolean(label) && styles.withLabel),
        ...(Boolean(containerStyle) && containerStyle)
      }}
    >
      {Boolean(label) && (
        <View style={styles.labelContainer}>
          <Text
            style={{
              ...styles.label,
              ...(Boolean(focusIn) && styles.labelFocused)
            }}
          >
            {label}
          </Text>
        </View>
      )}

      <Animated.View
        style={{
          ...styles.inputContainer,
          ...(Boolean(secure) && styles.withSecure),
          ...{
            borderWidth
          }
        }}
      >
        <TextInput
          onFocus={focusInHandler}
          onBlur={focusOutHandler}
          style={styles.input}
          {...(value && { value })}
          onSubmitEditing={onSubmitHandler}
          onChange={onChangeHandler}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          inputMode={inputMode}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          secureTextEntry={!visible}
          autoFocus={autoFocus}
        />
        {secure && (
          <TouchableOpacity style={styles.buttonContainer} activeOpacity={activeOpacity} onPress={onPress}>
            {visible ? (
              <EyeIcon width={base * 3} height={base * 3} color={secondaryDarkText} />
            ) : (
              <EyeOffIcon width={base * 3} height={base * 3} color={secondaryLightText} />
            )}
          </TouchableOpacity>
        )}
      </Animated.View>
      {Boolean(error) && (
        <View style={styles.errorContainer}>
          <Text style={styles.error}>{error}</Text>
        </View>
      )}
    </View>
  );
};

TextField.propTypes = {
  autoFocus: PropTypes.bool,
  containerStyle: PropTypes.object,
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  secure: PropTypes.bool,
  error: PropTypes.string,
  inputMode: PropTypes.oneOf(['none', 'text', 'decimal', 'numeric', 'tel', 'search', 'email', 'url']),
  keyboardType: PropTypes.oneOf([
    'default',
    'number-pad',
    'decimal-pad',
    'numeric',
    'email-address',
    'phone-pad',
    'url'
  ]),
  returnKeyType: PropTypes.oneOf(['done', 'go', 'next', 'search', 'send'])
};

TextField.defaultProps = {
  autoFocus: false,
  containerStyle: {},
  label: '',
  value: '',
  placeholder: '',
  placeholderTextColor: secondaryLightText,
  onChange: (el) => el,
  onSubmit: () => null,
  secure: false,
  error: '',
  inputMode: 'none',
  keyboardType: 'default',
  returnKeyType: 'next'
};

export default TextField;
