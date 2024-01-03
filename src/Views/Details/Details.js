import PropTypes from 'prop-types';
import {
  Dimensions, StyleSheet, View,
} from 'react-native';
import React from 'react';
import { Card, Text } from 'react-native-paper';

const { width, height } = Dimensions.get('screen');

function Details({ route }) {
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleLarge">{item.title}</Text>
          <Text variant="titleMedium">{item.author}</Text>
          <Text variant="bodyMedium">{item.content}</Text>
        </Card.Content>
      </Card>

    </View>
  );
}

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width * 0.9,
    alignSelf: 'center',
  },
  card: {
    marginVertical: height * 0.01,
  },
});

Details.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};
