import {StyleSheet, Dimensions} from 'react-native';
const deviceSize = Dimensions.get('window');

const login_page_styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3f2fd',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  inputContainer: {
    backgroundColor: '#ffffff',
    marginHorizontal: 10,
    marginTop: 20,
    borderRadius: 5,
    borderWidth: 0.2,
  },
  icon: {
    textAlign: 'center',
  },
  loadingContainer:{
    flex: 1
  }
});

export {login_page_styles};
