import React, {useEffect} from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const App = () => {

  useEffect(()=>{
    SplashScreen.hide();
  },[]);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Welcome to Enrich!</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;
