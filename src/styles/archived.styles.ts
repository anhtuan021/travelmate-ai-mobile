import { StyleSheet } from 'react-native';

export const archivedStyles = StyleSheet.create({
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
  },
  notesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    width: '100%',
  },
  noteTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    marginBottom: 8,
  },
  notePreview: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    marginBottom: 12,
    opacity: 0.7,
  },
  noteFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  noteDate: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    opacity: 0.5,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  actionButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  restoreButton: {
    backgroundColor: '#4CAF50',
  },
  deleteButton: {
    backgroundColor: '#FF3B30',
  },
});
