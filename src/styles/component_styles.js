import {StyleSheet, Dimensions} from 'react-native';
const deviceSize = Dimensions.get('window');

const custom_button_styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'tomato',
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 15,
  },
});
const posts_input_style = StyleSheet.create({
  container: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  input: {
    backgroundColor: 'white',
    padding: 5,
    margin: 5,
  }
});

export {custom_button_styles, posts_input_style};
