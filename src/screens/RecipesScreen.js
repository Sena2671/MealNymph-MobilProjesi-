import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';

const DUMMY_RECIPES = [
  {
    id: '1',
    title: 'Sağlıklı Kahvaltı Tabağı',
    calories: 350,
    time: '15 dk',
    image: require('../assets/breakfast.png'),
    category: 'Kahvaltı',
  },
  {
    id: '2',
    title: 'Akdeniz Salatası',
    calories: 250,
    time: '20 dk',
    image: require('../assets/salad.png'),
    category: 'Salata',
  },
  {
    id: '3',
    title: 'Izgara Somon',
    calories: 450,
    time: '25 dk',
    image: require('../assets/salmon.png'),
    category: 'Ana Yemek',
  },
];

const RecipeCard = ({ recipe }) => (
  <TouchableOpacity style={styles.recipeCard}>
    <Image source={recipe.image} style={styles.recipeImage} />
    <View style={styles.recipeInfo}>
      <Text style={styles.recipeTitle}>{recipe.title}</Text>
      <View style={styles.recipeDetails}>
        <Text style={styles.recipeDetail}>{recipe.calories} kcal</Text>
        <Text style={styles.recipeDetail}>{recipe.time}</Text>
      </View>
      <Text style={styles.recipeCategory}>{recipe.category}</Text>
    </View>
  </TouchableOpacity>
);

const RecipesScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Tarifler</Text>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>Filtrele</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={DUMMY_RECIPES}
        renderItem={({ item }) => <RecipeCard recipe={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.recipeList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#4CAF50',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  filterButton: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  filterButtonText: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  recipeList: {
    padding: 10,
  },
  recipeCard: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    overflow: 'hidden',
  },
  recipeImage: {
    width: '100%',
    height: 200,
  },
  recipeInfo: {
    padding: 15,
  },
  recipeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
  },
  recipeDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  recipeDetail: {
    color: '#666666',
    fontSize: 14,
  },
  recipeCategory: {
    color: '#4CAF50',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default RecipesScreen; 