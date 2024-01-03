import {
  Dimensions, FlatList, StyleSheet, View,
} from 'react-native';
import React from 'react';
import { ActivityIndicator, Card, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import useEntriesContext from '../../../hooks/useEntriesContext';

const { height } = Dimensions.get('screen');

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return `${text.substring(0, maxLength)}...`;
  }
  return text;
};

function BodyHome() {
  const { entries, isLoading } = useEntriesContext();
  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <Card style={styles.card} onPress={() => navigation.navigate('Details', { item })}>
      <Card.Content>
        <Text variant="titleLarge">{item.title}</Text>
        <Text variant="titleMedium">{item.author}</Text>
        <Text variant="bodyMedium">{truncateText(item.content, 70)}</Text>
      </Card.Content>
    </Card>
  );
  return (
    isLoading ? (
      <FlatList
        data={entries}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    ) : (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator animating size="large" />
      </View>
    )

  );
}

export default BodyHome;

const styles = StyleSheet.create({
  card: {
    marginVertical: height * 0.01,
  },
});
