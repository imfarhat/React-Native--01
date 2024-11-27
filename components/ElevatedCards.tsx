import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.elevatedCard, {backgroundColor: '#ccc'}]}>
          <Text>#CCC</Text>
        </View>
        <View style={[styles.elevatedCard, {backgroundColor: 'lightgrey'}]}>
          <Text>Light Grey</Text>
        </View>
        <View style={[styles.elevatedCard, {backgroundColor: '#dddaaa'}]}>
          <Text>#DDDAAA</Text>
        </View>
        <View style={[styles.elevatedCard, {backgroundColor: '#abcabc'}]}>
          <Text style={{textTransform: 'uppercase'}}>#abcabc</Text>
        </View>
        <View style={[styles.elevatedCard, {backgroundColor: '#bbaacc'}]}>
          <Text style={{textTransform: 'uppercase'}}>#bbaacc</Text>
        </View>
        <View style={[styles.elevatedCard, {backgroundColor: '#aabbcc'}]}>
          <Text style={{textTransform: 'uppercase'}}>#aabbcc</Text>
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
