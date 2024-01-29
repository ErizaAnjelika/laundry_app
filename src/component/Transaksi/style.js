import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card:{
    margin: 20,
    padding: 20,
    borderRadius: 10,
    borderWidth: 0,
  },
  header:{
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 20,
    marginLeft: 20
  },
  container: {
    margin: 10,
    height: 660,
  },
  transactionContainer: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#fff',
    elevation: 2,
    borderRadius: 8,
  },
  transactionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  transactionDetails: {
    marginVertical: 5,
  },
  transactionDetail: {
    fontSize: 16,
    marginBottom: 5,
    color: 'black',
  },
});
