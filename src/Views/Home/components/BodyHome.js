import {
  Dimensions, FlatList, StyleSheet, View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator, Button, Card, Text,
} from 'react-native-paper';
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
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedEntries, setPaginatedEntries] = useState([]);
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
  useEffect(() => {
    // Calcula el rango de los elementos a mostrar
    const startIndex = (currentPage - 1) * 70;
    const endIndex = startIndex + 70;
    setPaginatedEntries(entries.slice(startIndex, endIndex));
  }, [entries, currentPage]);
  const loadMore = () => {
    setCurrentPage(currentPage + 1);
  };
  const loadPrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    !isLoading ? (
      <>
        <FlatList
          data={paginatedEntries}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        <View style={styles.paginationContainer}>
          <Button
            icon="arrow-left"
            mode="contained"
            onPress={loadPrevious}
            disabled={currentPage < 2}
          >
            Anterior

          </Button>
          <Button
            icon="arrow-right"
            mode="contained"
            onPress={loadMore}
            disabled={paginatedEntries.length < 70}
          >
            Siguiente
          </Button>
        </View>
      </>
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
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
});
