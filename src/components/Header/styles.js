import { StyleSheet, StatusBar } from 'react-native';
import { theme } from '../../global/styles/theme';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    paddingTop: statusBarHeight,
    flexDirection: 'row',
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 44,
  }, 
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  username: {
    fontSize: 18,
    color: theme.colors.primary,
    fontWeight: 'bold'
  },
  buttonUser: {
    width: 44,
    height: 44,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22
  }
});