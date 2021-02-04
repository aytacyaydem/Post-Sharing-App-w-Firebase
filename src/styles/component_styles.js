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
    color: '#ffffff',
  },
});
const posts_input_style = StyleSheet.create({
  container: {
    backgroundColor: '#e0e0e0',
    padding: 5,
    margin: 10,
    borderRadius: 5,
    elevation: 10,
    borderWidth: 0.4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    backgroundColor: 'white',
    padding: 5,
    margin: 5,
    borderWidth: 0.2,
    borderRadius: 5,
    elevation: 10,
    width: deviceSize.width * 0.82,
  },
  sendIcon:{
    justifyContent: 'center',
  }
});
const posts_item_style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    borderWidth: 0.3,
    elevation: 10,
  },
  header: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: 'row',
    backgroundColor: '#5472d3',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  postContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  usernameText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    fontStyle: 'italic',
  },
  time: {
    color: '#ffffff',
  },
});
const posts_header_style = StyleSheet.create({
  container: {
    backgroundColor: '#0d47a1',
    padding: 5,
    marginBottom: 15,
    borderWidth: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export {
  custom_button_styles,
  posts_input_style,
  posts_item_style,
  posts_header_style,
};
