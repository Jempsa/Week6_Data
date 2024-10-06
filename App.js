import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useCatFact } from './hooks/Facts';
import { useBreeds } from './hooks/Breeds';

export default function App() {
  const { catFact, loading, fetchCatFact } = useCatFact();
  const { breeds, loading: breedsLoading } = useBreeds();

  const [showImage, setShowImage] = useState(false);
  const [showBreeds, setShowBreeds] = useState(false);

  const toggleImage = () => {
    setShowImage(!showImage);
  };

  const toggleBreeds = () => {
    setShowBreeds(!showBreeds);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Facts about CATS!</Text>
      {loading ? <Text>Loading facts...</Text> : <Text style={styles.fact}>{catFact}</Text>}

      <TouchableOpacity style={styles.button} onPress={fetchCatFact}>
        <Text style={styles.buttonText}>Press for random cat fact</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.button} onPress={toggleBreeds}>
        <Text style={styles.buttonText}>
          {showBreeds ? 'Hide Cat Breeds' : 'Press to see Cat Breeds'}
        </Text>
      </TouchableOpacity>


      {showBreeds && (
        <>
          <Text style={styles.title}>Cat Breeds</Text>
          {breedsLoading ? (
            <Text>Loading cat breeds...</Text>
          ) : (
            <ScrollView style={styles.breedsList}>
              {breeds.map((breed, index) => (
                <Text key={index} style={styles.breedItem}>
                  {breed.breed} - {breed.country}
                </Text>
              ))}
            </ScrollView>
          )}
        </>
      )}


      <TouchableOpacity style={styles.button} onPress={toggleImage}>
        <Text style={styles.buttonText}>
          {showImage ? 'Hide Image' : 'Press to see developer`s cats! :)'}
        </Text>
      </TouchableOpacity>

      {showImage && (
        <Image
          source={require('./img/developerCats.png')}
          style={styles.image}
        />
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe6e6', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#ff4d4d', 
  },
  fact: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: '#800000', 
  },
  button: {
    backgroundColor: '#ff9999', 
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff', 
    fontSize: 18,
    fontWeight: 'bold',
  },
  breedsList: {
    width: '100%',
    marginTop: 20,
  },
  breedItem: {
    fontSize: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ffcccc',
    textAlign: 'center',
  },
  image: {
    width: 400,
    height: 300,
    marginTop: 20,
    resizeMode: 'contain',
  },
});
