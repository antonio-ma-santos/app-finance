import { StyleSheet } from "react-native";

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddf',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 22,
    marginHorizontal: 14,
    marginTop: -24,
    borderRadius: 5,
    zIndex: 99,
  },
  containerBalance: {
    width: 120,
    height: 60,
  },
  itemTitle: {
    fontSize: 18,
    color: '#777'
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5
  },
  currencySymbol: {
    color: '#777',
    marginRight: 6,
  },
  Balance: {
    fontSize: 20
  },
  skeleton: {
    marginTop: 5,
    width: 100,
    height: 22,
    backgroundColor: '#ccc',
    borderRadius: 8 
  }
});