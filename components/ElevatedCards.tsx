import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, {backgroundColor: '#ccc'}]}>
          <Text>Grey</Text>
        </View>
        <View style={[styles.card, {backgroundColor: 'lightgrey'}]}>
          <Text>Grey</Text>
        </View>
        <View style={[styles.card, {backgroundColor: '#dddaaa'}]}>
          <Text>Grey</Text>
        </View>
        <View style={[styles.card, {backgroundColor: '#abcabc'}]}>
          <Text>Grey</Text>
        </View>
        <View style={[styles.card, {backgroundColor: '#bbaacc'}]}>
          <Text>Grey</Text>
        </View>
        <View style={[styles.card, {backgroundColor: '#aabbcc'}]}>
          <Text>Grey</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    padding: 8,
    flex: 1,
    flexDirection: 'row',
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 8,
    marginHorizontal: 4,
  },
});
