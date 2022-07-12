import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa'
  },
  headerList: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },  
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14
  },
  secretIcon: {
    margin: 14,
    marginEnd: 40,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  }
});