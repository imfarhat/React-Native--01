import React from 'react';

import {
  SafeAreaView,
  View,
  Text,
  useColorScheme,
  StyleSheet,
} from 'react-native';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={isDarkMode ? styles.lightText : styles.darkText}>
          Hey there!
        </Text>
        <Text>Hey there!</Text>
        <Text>Hey there!</Text>
        <Text>Hey there!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  darkText: {
    color: 'red',
  },
  lightText: {
    color: '#ffffff',
  },
});

export default App;
