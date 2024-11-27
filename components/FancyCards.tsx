import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Fancy Cards</Text>
      <View>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s',
          }}
          style={styles.cardImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>Cute Cat</Text>
          <Text style={styles.cardLabel}>The cat is so cute!</Text>
          <Text style={styles.cardDescription}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
            similique eius doloribus!
          </Text>
          <Text style={styles.cardFooter}>Lorem, ipsum dolor</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    padding: 8,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {},
  cardElevated: {},
  cardImage: {
    height: 180,
  },
  cardBody: {},
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardLabel: {
    fontSize: 16,
    color: 'grey',
  },
  cardDescription: {},
  cardFooter: {
    backgroundColor: 'green',
    padding: 4,
    color: 'white',
    textAlign: 'center',
    marginTop: 8,
    borderRadius: 4,
  },
});
