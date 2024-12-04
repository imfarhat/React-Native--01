import {
  Linking,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(url: string) {
    Linking.openURL(url);
  }

  return (
    <View>
      <Text style={[styles.headerText]}>ActionCard</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={[styles.headerContainer]}>
          <Text style={[styles.headerText]}>
            What's new in JavaScrip 21 - ES12
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s',
          }}
          style={[styles.cardImage]}
        />
        <View style={[styles.bodyContainer]}>
          <Text numberOfLines={3}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
            inventore beatae ex ipsum ipsam deserunt, fugit dolor officiis sit
            explicabo excepturi labore. Vel cumque harum esse optio consequatur,
            quidem mollitia.
          </Text>
        </View>
        <View style={[styles.footerContainer]}>
          <TouchableOpacity
            onPressOut={() => openWebsite('https://google.com')}>
            <Text>Read more...</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPressOut={() => openWebsite('https://instagram.com')}>
            <Text>Instagram</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {},
  card: {},
  elevatedCard: {},
  headerContainer: {},
  cardImage: {
    height: 100,
  },
  bodyContainer: {},
  footerContainer: {},
  socialLink: {},
});
