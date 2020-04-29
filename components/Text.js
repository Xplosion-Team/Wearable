import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'

import * as theme from '../theme';

export default class Typography extends Component {
  render() {
    const {
      h1,
      h2,
      h3,
      title,
      body,
      caption,
      small,
      size,
      // styling
      bold,
      semibold,
      light,
      center,
      right,
      // colors
      color,
      accent,
      primary,
      secondary,
      tertiary,
      black,
      white,
      gray,
      gray2,
      inlineRegular,
      solidRegular,
      inline,
      solidInt,
      style,
      children,
      ...props
    } = this.props;

    const textStyles = [
      styles.text,
      h1 && styles.h1,
      h2 && styles.h2,
      h3 && styles.h3,
      title && styles.title,
      body && styles.body,
      caption && styles.caption,
      small && styles.small,
      size && { fontSize: size, },
      bold && styles.bold,
      semibold && styles.semibold,
      light && styles.light,
      center && styles.center,
      right && styles.right,
      color && styles[color],
      color && !styles[color] && { color },
      // color shortcuts
      accent && styles.accent,
      primary && styles.primary,
      secondary && styles.secondary,
      tertiary && styles.tertiary,
      black && styles.black,
      white && styles.white,
      gray && styles.gray,
      gray2 && styles.gray2,
      inlineRegular && styles.inlineRegular,
      solidRegular && styles.solidRegular,
      inline && styles.inline,
      solidInt && styles.solidInt,
      style // rewrite predefined styles
    ];

    return (
      <Text style={textStyles} {...props}>
        {children}
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  // default style
  text: {
    // fontFamily: "Montserrat-Regular",
    fontSize: theme.sizes.font,
    color: theme.colors.black
  },
  // variations
  bold: {
    fontWeight: "bold",
    fontFamily: "Phosphate-Solid-Regular"
  },
  semibold: {
    fontWeight: "500",
    fontFamily: "Montserrat-SemiBold"
  },
  light: {
    fontWeight: "200",
    fontFamily: "Montserrat-Light"
  },
  inlineRegular: {
    fontFamily: "Phosphate-Inline-Regular"
  },
  solidRegular: {
    fontFamily: "Phosphate-Solid-Regular"
  },
  inline: {
    fontFamily: "PhosphatePro-Inline"
  },
  solidInt: {
    fontFamily: "PhosphatePro-Solid"
  },
  // position
  center: { textAlign: "center" },
  right: { textAlign: "right" },
  // colors
  accent: { color: theme.colors.accent },
  primary: { color: theme.colors.primary },
  secondary: { color: theme.colors.secondary },
  tertiary: { color: theme.colors.tertiary },
  black: { color: theme.colors.black },
  white: { color: theme.colors.white },
  gray: { color: theme.colors.gray },
  gray2: { color: theme.colors.gray2 },
  // fonts
  h1: theme.fonts.h1,
  h2: theme.fonts.h2,
  h3: theme.fonts.h3,
  title: theme.fonts.title,
  body: theme.fonts.body,
  caption: theme.fonts.caption,
  small: theme.fonts.small
});
