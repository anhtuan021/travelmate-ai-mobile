import { View, useColorScheme } from 'react-native';
import { archivedStyles } from '@/styles/archived.styles';

export default function ArchivedScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View
      style={[archivedStyles.container, isDark && archivedStyles.containerDark]}
    ></View>
  );
}
