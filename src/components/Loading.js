import React from 'react';
import {SafeAreaView} from 'react-native';
import {animation_style} from '../styles/component_styles';
import LottieView from 'lottie-react-native';
function Loading() {
  return (
    <SafeAreaView style={animation_style.loading}>
      <LottieView
        source={require('../assets/loading-spinner.json')}
        style={animation_style.lottieView}
        autoPlay
      />
    </SafeAreaView>
  );
}
export {Loading};
