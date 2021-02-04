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
    backgroundColor: '#b6b8c3',
    padding: 5,
    margin: 10,
    borderRadius: 20,
    elevation: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    backgroundColor: 'white',
    padding: 5,
    margin: 5,
    borderRadius: 10,
    width: deviceSize.width * 0.82,
  },
  sendIcon: {
    justifyContent: 'center',
  },
});
const posts_item_style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    elevation: 10,
    flex: 1,
    
  },
  header: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: 'row',
    backgroundColor: '#5472d3',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  postContainer: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  text: {
    flex: 1,
  },
});
const posts_header_style = StyleSheet.create({
  container: {
    backgroundColor: '#0d47a1',
    padding: 5,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
const saved_header_style = StyleSheet.create({
  container: {
    backgroundColor: '#0d47a1',
    padding: 5,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: '#ffffff',
  },
});
const animation_style = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottieView: {
    flex: 1,
  },
});

export {
  custom_button_styles,
  posts_input_style,
  posts_item_style,
  posts_header_style,
  animation_style,
  saved_header_style
};
