import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 24,
    borderBottomWidth: 0.5,
    borderBottomColor: '#dadada'
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2,
    marginBottom: 8
  },
  date: {
    color: '#bbb',
    fontWeight: 'bold'
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  skeleton: {
    marginTop: 8,
    width: 80,
    height: 12,
    backgroundColor: '#dadada',
    borderRadius: 8
  }
});