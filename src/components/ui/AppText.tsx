import React from 'react';
import { Text, StyleSheet, TextProps } from 'react-native';

interface AppTextProps extends TextProps {
  dark?: boolean;
  style?: any;
  children: React.ReactNode;
}

export function AppText({ dark, style, children, ...props }: AppTextProps) {
  return (
    <Text
      style={[styles.text, dark ? styles.textDark : styles.textLight, style]}
      {...props}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Inter-Regular',
  },
  textLight: {
    color: '#000000',
  },
  textDark: {
    color: '#ffffff',
  },
});
