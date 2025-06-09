import {
  View,
  Text,
  StyleSheet,
  Pressable,
  useColorScheme,
  Switch,
  Alert,
} from 'react-native';
import { useNotes } from '@/contexts/NotesContext';
import { Trash } from 'lucide-react-native';
import { sittingStyles } from '@/styles/sitting.styles';
export default function SettingsScreen() {
  const { clearAllNotes } = useNotes();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const handleClearNotes = () => {
    Alert.alert(
      'Clear All Notes',
      'Are you sure you want to delete all notes? This action cannot be undone.',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Clear All',
          onPress: clearAllNotes,
          style: 'destructive',
        },
      ]
    );
  };

  return (
    <View
      style={[sittingStyles.container, isDark && sittingStyles.containerDark]}
    >
      <View style={sittingStyles.header}>
        <Text style={[sittingStyles.title, isDark && sittingStyles.textDark]}>
          Settings
        </Text>
      </View>

      <View
        style={[sittingStyles.section, isDark && sittingStyles.sectionDark]}
      >
        <Text
          style={[sittingStyles.sectionTitle, isDark && sittingStyles.textDark]}
        >
          Data Management
        </Text>
        <Pressable
          style={[sittingStyles.button, sittingStyles.dangerButton]}
          onPress={handleClearNotes}
        >
          <Trash size={20} color="#fff" />
          <Text style={sittingStyles.buttonText}>Clear All Notes</Text>
        </Pressable>
      </View>

      <View
        style={[sittingStyles.section, isDark && sittingStyles.sectionDark]}
      >
        <Text
          style={[sittingStyles.sectionTitle, isDark && sittingStyles.textDark]}
        >
          About
        </Text>
        <Text
          style={[sittingStyles.versionText, isDark && sittingStyles.textDark]}
        >
          Version 1.0.0
        </Text>
      </View>
    </View>
  );
}
