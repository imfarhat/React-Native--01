import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

export default function ElevatedelevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated elevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.elevatedCard, {backgroundColor: '#ccc'}]}>
          <Text>Grey</Text>
        </View>
        <View style={[styles.elevatedCard, {backgroundColor: 'lightgrey'}]}>
          <Text>Grey</Text>
        </View>
        <View style={[styles.elevatedCard, {backgroundColor: '#dddaaa'}]}>
          <Text>Grey</Text>
        </View>
        <View style={[styles.elevatedCard, {backgroundColor: '#abcabc'}]}>
          <Text>Grey</Text>
        </View>
        <View style={[styles.elevatedCard, {backgroundColor: '#bbaacc'}]}>
          <Text>Grey</Text>
        </View>
        <View style={[styles.elevatedCard, {backgroundColor: '#aabbcc'}]}>
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
  elevatedCard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 8,
    marginHorizontal: 4,
    elevation: 4,
    shadowColor: 'red',
    shadowOpacity: 4,
    shadowRadius: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
});
