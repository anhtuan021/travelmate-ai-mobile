import React from 'react';
import { Pressable, StyleSheet, ViewStyle, PressableProps } from 'react-native';

interface AppButtonProps extends PressableProps {
  style?: ViewStyle | ViewStyle[];
  children: React.ReactNode;
}

export function AppButton({ style, children, ...props }: AppButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed, style]}
      {...props}
    >
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.7,
  },
});
