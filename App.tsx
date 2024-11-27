import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCard from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>App</Text>
        <FlatCard />
        <ElevatedCards />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
