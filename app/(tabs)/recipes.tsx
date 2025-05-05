import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../../constants/theme';
import { Link } from 'expo-router';
import { useAuth } from '../../contexts/AuthContext';
import React, { useState } from 'react';
import { RECIPES } from './recipesData';

export default function RecipesScreen() {
  const { user } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState('Tümü');

  const filteredRecipes = selectedCategory === 'Tümü'
    ? RECIPES
    : RECIPES.filter(recipe => recipe.category === selectedCategory || recipe.tags.includes(selectedCategory));

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Tarifler</Text>
        <Text style={styles.subtitle}>Tüm tariflerimiz</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <FontAwesome name="search" size={20} color={colors.textLight} />
          <TextInput
            style={styles.searchInput}
            placeholder="Tarif ara..."
            placeholderTextColor={colors.textLight}
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <FontAwesome name="filter" size={20} color={colors.primary} />
        </TouchableOpacity>
      </View>

      <View style={styles.filtersContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {['Tümü', 'Kahvaltı', 'Öğle', 'Akşam', 'Tatlı', 'Vejetaryen', 'İçecekler', 'Glutensiz'].map((cat) => (
            <TouchableOpacity
              key={cat}
              style={[styles.filterChip, selectedCategory === cat && styles.filterChipActive]}
              onPress={() => setSelectedCategory(cat)}
            >
              <Text style={[styles.filterChipText, selectedCategory === cat && styles.filterChipTextActive]}>{cat}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {user && (
        <Link href="/recipes/add" asChild>
          <TouchableOpacity style={styles.addButton}>
            <FontAwesome name="plus" size={20} color="#fff" />
            <Text style={styles.addButtonText}>Yeni Tarif Ekle</Text>
          </TouchableOpacity>
        </Link>
      )}

      <View style={styles.recipesGrid}>
        {filteredRecipes.map((recipe) => (
          <Link key={recipe.id} href={`/recipes/${recipe.id}`} asChild>
            <TouchableOpacity style={styles.recipeCard}>
              <Image
                source={{ uri: recipe.image }}
                style={styles.recipeImage}
              />
              <View style={styles.recipeInfo}>
                <Text style={styles.recipeName}>{recipe.name}</Text>
                <View style={styles.recipeTags}>
                  {recipe.tags.map((tag, idx) => (
                    <Text key={idx} style={styles.recipeTag}>{tag}</Text>
                  ))}
                </View>
                <View style={styles.recipeStats}>
                  <Text style={styles.recipeStat}>
                    <FontAwesome name="clock-o" size={14} color={colors.textLight} /> {recipe.time}
                  </Text>
                  <Text style={styles.recipeStat}>
                    <FontAwesome name="fire" size={14} color={colors.textLight} /> {recipe.calories}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </Link>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    padding: 20,
    backgroundColor: colors.primary,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.8,
    marginTop: 5,
  },
  searchContainer: {
    flexDirection: 'row',
    padding: 20,
    marginTop: -30,
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background,
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: colors.text,
  },
  filterButton: {
    width: 50,
    height: 50,
    backgroundColor: colors.background,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  filtersContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  filterChip: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#FFF8E1',
    marginRight: 10,
  },
  filterChipActive: {
    backgroundColor: colors.primary,
  },
  filterChipText: {
    fontSize: 14,
    color: colors.textLight,
  },
  filterChipTextActive: {
    color: '#fff',
  },
  addButton: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  recipesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
  },
  recipeCard: {
    width: '48%',
    backgroundColor: colors.background,
    borderRadius: 15,
    margin: '1%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  recipeImage: {
    height: 150,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  recipeInfo: {
    padding: 15,
  },
  recipeName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 5,
  },
  recipeTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  recipeTag: {
    fontSize: 12,
    color: colors.primary,
    backgroundColor: '#FFF8E1',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    marginRight: 5,
    marginBottom: 5,
  },
  recipeStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recipeStat: {
    fontSize: 12,
    color: colors.textLight,
  },
}); 