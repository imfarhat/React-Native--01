import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Card</Text>
      <View style={[styles.cardContainer]}>
        <View style={[styles.card, {backgroundColor: 'red'}]}>
          <Text style={{color: 'white', fontWeight: 'semibold'}}>Red</Text>
        </View>
        <View style={[styles.card, {backgroundColor: 'green'}]}>
          <Text style={{color: 'white', fontWeight: 'semibold'}}>Green</Text>
        </View>
        <View style={[styles.card, {backgroundColor: 'maroon'}]}>
          <Text style={{color: 'white', fontWeight: 'semibold'}}>Maroon</Text>
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
    textAlign: 'center',
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
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    gap: 8,
  },
});
