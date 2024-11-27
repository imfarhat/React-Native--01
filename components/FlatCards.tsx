import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCard</Text>
      <View style={[styles.cardContainer]}>
        <View style={[styles.card, {backgroundColor: 'red'}]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, {backgroundColor: 'green'}]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, {backgroundColor: 'maroon'}]}>
          <Text>Maroon</Text>
        </View>
        <View style={[styles.card, {backgroundColor: 'yellow'}]}>
          <Text>Yellow</Text>
        </View>
        <View style={[styles.card, {backgroundColor: 'pink'}]}>
          <Text>Pink</Text>
        </View>
        <View style={[styles.card, {backgroundColor: 'violet'}]}>
          <Text>Violet</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    height: 100,
    width: 100,
    borderRadius: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
    gap: 8
  },
});
