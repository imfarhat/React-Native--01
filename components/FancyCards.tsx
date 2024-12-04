import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Fancy Cards</Text>
      <View style={[styles.card, styles.cardElevated]}>
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
  card: {
    width: 375,
    height: 375,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 6,
  },
  cardLabel: {
    fontSize: 14,
    color: 'grey',
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 12,
    marginTop: 6,
    marginBottom: 12,
    flexShrink: 1,
    color: '',
  },
  cardFooter: {
    backgroundColor: 'green',
    padding: 4,
    color: 'white',
    textAlign: 'center',
    marginTop: 8,
    borderRadius: 4,
  },
});
