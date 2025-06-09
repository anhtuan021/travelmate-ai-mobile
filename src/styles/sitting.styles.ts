import { StyleSheet } from 'react-native';

export const sittingStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  containerDark: {
    backgroundColor: '#121212',
  },
  header: {
    marginBottom: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 32,
    fontFamily: 'Inter-Bold',
    color: '#000000',
  },
  section: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 4,
    elevation: 3,
  },
  sectionDark: {
    backgroundColor: '#1e1e1e',
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    marginBottom: 16,
    color: '#000000',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 8,
    gap: 8,
  },
  dangerButton: {
    backgroundColor: '#FF3B30',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
  },
  textDark: {
    color: '#ffffff',
  },
  versionText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#666666',
  },
});
