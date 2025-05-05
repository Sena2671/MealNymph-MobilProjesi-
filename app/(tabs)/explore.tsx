import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../../constants/theme';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { useFavorites } from '../../contexts/FavoritesContext';

const RECIPES = [
  {
    id: 1,
    name: 'Avokadolu Tost',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
    category: 'Kahvaltı',
    tags: ['Vejetaryen', 'Sağlıklı'],
    time: '15 dk',
    calories: '350 kcal',
    description: 'Tam buğday ekmeği, avokado, domates ve taze otlarla hazırlanan sağlıklı bir kahvaltı.',
    ingredients: [
      '2 dilim tam buğday ekmeği',
      '1 adet avokado',
      '1 adet domates',
      'Tuz, karabiber',
      'Taze otlar (maydanoz, dereotu vb.)'
    ],
    steps: [
      'Ekmeği kızartın.',
      'Avokadoyu ezin ve ekmeğin üzerine sürün.',
      'Domatesi dilimleyip ekleyin.',
      'Tuz, karabiber ve taze otlarla süsleyin.'
    ]
  },
  {
    id: 2,
    name: 'Kinoa Bowl',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061',
    category: 'Öğle',
    tags: ['Yüksek Protein', 'Glutensiz'],
    time: '20 dk',
    calories: '420 kcal',
    description: 'Kinoa, ızgara tavuk, avokado ve taze sebzelerle hazırlanan besleyici bir öğün.',
    ingredients: [
      '1 su bardağı kinoa',
      '100g ızgara tavuk',
      'Yarım avokado',
      'Karışık taze sebzeler',
      'Zeytinyağı, limon suyu'
    ],
    steps: [
      'Kinoayı haşlayın.',
      'Tavuğu ızgarada pişirin ve dilimleyin.',
      'Sebzeleri doğrayın.',
      'Tüm malzemeleri bir kasede karıştırın ve sos ekleyin.'
    ]
  },
  {
    id: 3,
    name: 'Fırında Somon',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2',
    category: 'Akşam',
    tags: ['Omega-3', 'Düşük Karbonhidrat'],
    time: '30 dk',
    calories: '480 kcal',
    description: 'Fırında pişirilmiş somon, kuskus ve ızgara sebzelerle hazırlanan lezzetli bir akşam yemeği.',
    ingredients: [
      '1 dilim somon',
      '1 su bardağı kuskus',
      'Karışık sebzeler (kabak, havuç, biber vb.)',
      'Zeytinyağı, limon, tuz, karabiber'
    ],
    steps: [
      'Sebzeleri doğrayıp fırın tepsisine dizin.',
      'Somonu sebzelerin üzerine yerleştirin.',
      'Zeytinyağı, limon, tuz ve karabiber ekleyin.',
      "Önceden ısıtılmış fırında 200°C'de 25 dakika pişirin."
    ]
  },
  {
    id: 4,
    name: 'Yeşil Smoothie',
    image: 'https://images.unsplash.com/photo-1638176066666-ffb9f013b88d',
    category: 'İçecekler',
    tags: ['Sağlıklı', 'Vejetaryen'],
    time: '5 dk',
    calories: '180 kcal',
    description: 'Ispanak, muz ve elma ile hazırlanan enerji verici bir smoothie.',
    ingredients: [
      '2 avuç ıspanak',
      '1 adet muz',
      '1 adet elma',
      '1 su bardağı badem sütü',
      '1 yemek kaşığı bal'
    ],
    steps: [
      'Tüm malzemeleri blendera koyun.',
      'Pürüzsüz bir kıvam alana kadar karıştırın.',
      'Buz ekleyerek soğuk servis yapın.'
    ]
  },
  {
    id: 5,
    name: 'Glutensiz Kinoa Salatası',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
    category: 'Glutensiz',
    tags: ['Sağlıklı', 'Vejetaryen'],
    time: '25 dk',
    calories: '320 kcal',
    description: 'Kinoa, taze sebzeler ve avokado ile hazırlanan besleyici bir salata.',
    ingredients: [
      '1 su bardağı kinoa',
      '1 adet avokado',
      '1 adet salatalık',
      '1 adet domates',
      'Zeytinyağı, limon suyu, tuz'
    ],
    steps: [
      'Kinoayı haşlayın ve soğumaya bırakın.',
      'Sebzeleri küp küp doğrayın.',
      'Avokadoyu dilimleyin.',
      'Tüm malzemeleri karıştırın ve sos ekleyin.'
    ]
  }
];

export default function ExploreScreen() {
  const router = useRouter();
  const { favoriteIds, toggleFavorite } = useFavorites();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Keşfet</Text>
        <Text style={styles.subtitle}>Yeni tarifler ve öneriler</Text>
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

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popüler Tarifler</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {RECIPES.map((recipe) => (
            <View key={recipe.id} style={styles.recipeCardWrapper}>
              <TouchableOpacity style={styles.recipeCard} onPress={() => router.push(`/recipes/${recipe.id}`)}>
                <Image
                  source={{ uri: recipe.image }}
                  style={styles.recipeImage}
                  resizeMode="cover"
                />
                <View style={styles.recipeInfo}>
                  <Text style={styles.recipeName}>{recipe.name}</Text>
                  <View style={styles.recipeTags}>
                    {recipe.tags.map((tag, index) => (
                      <Text key={index} style={styles.recipeTag}>{tag}</Text>
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
              <TouchableOpacity
                style={styles.favoriteIcon}
                onPress={() => toggleFavorite(recipe.id)}
              >
                <FontAwesome
                  name={favoriteIds.includes(recipe.id) ? 'star' : 'star-o'}
                  size={24}
                  color={favoriteIds.includes(recipe.id) ? colors.primary : colors.textLight}
                />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Kategoriler</Text>
        <View style={styles.categoriesGrid}>
          <TouchableOpacity style={styles.categoryCard}>
            <FontAwesome name="coffee" size={24} color={colors.primary} />
            <Text style={styles.categoryName}>Kahvaltı</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryCard}>
            <FontAwesome name="cutlery" size={24} color={colors.primary} />
            <Text style={styles.categoryName}>Ana Yemek</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryCard}>
            <FontAwesome name="leaf" size={24} color={colors.primary} />
            <Text style={styles.categoryName}>Salata</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryCard}>
            <FontAwesome name="glass" size={24} color={colors.primary} />
            <Text style={styles.categoryName}>İçecek</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryCard}>
            <FontAwesome name="birthday-cake" size={24} color={colors.primary} />
            <Text style={styles.categoryName}>Tatlı</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryCard}>
            <FontAwesome name="heart" size={24} color={colors.primary} />
            <Text style={styles.categoryName}>Sağlıklı</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryCard}>
            <FontAwesome name="glass" size={24} color={colors.primary} />
            <Text style={styles.categoryName}>İçecekler</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryCard}>
            <FontAwesome name="leaf" size={24} color={colors.primary} />
            <Text style={styles.categoryName}>Glutensiz</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Günün Tarifi</Text>
        <TouchableOpacity style={styles.featuredRecipe}>
          <Image
            source={{ uri: RECIPES[0].image }}
            style={styles.featuredImage}
            resizeMode="cover"
          />
          <View style={styles.featuredInfo}>
            <Text style={styles.featuredName}>{RECIPES[0].name}</Text>
            <Text style={styles.featuredDescription}>
              {RECIPES[0].description}
            </Text>
            <View style={styles.featuredStats}>
              <Text style={styles.featuredStat}>
                <FontAwesome name="clock-o" size={14} color={colors.textLight} /> {RECIPES[0].time}
              </Text>
              <Text style={styles.featuredStat}>
                <FontAwesome name="fire" size={14} color={colors.textLight} /> {RECIPES[0].calories}
              </Text>
              <Text style={styles.featuredStat}>
                <FontAwesome name="star" size={14} color={colors.textLight} /> 4.8
              </Text>
            </View>
          </View>
        </TouchableOpacity>
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
    backgroundColor: colors.background,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
    color: colors.primary,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textLight,
  },
  searchContainer: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: colors.background,
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    color: colors.text,
  },
  filterButton: {
    width: 50,
    height: 50,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    padding: 20,
    backgroundColor: colors.background,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: colors.primary,
  },
  recipeCardWrapper: {
    position: 'relative',
  },
  recipeCard: {
    width: 280,
    marginRight: 15,
    backgroundColor: colors.background,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  recipeImage: {
    width: '100%',
    height: 180,
  },
  recipeInfo: {
    padding: 15,
  },
  recipeName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.text,
  },
  recipeTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  recipeTag: {
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    marginRight: 5,
    marginBottom: 5,
    fontSize: 12,
    color: colors.textLight,
  },
  recipeStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recipeStat: {
    fontSize: 14,
    color: colors.textLight,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '30%',
    aspectRatio: 1,
    backgroundColor: '#f5f5f5',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  categoryName: {
    marginTop: 10,
    fontSize: 14,
    color: colors.text,
  },
  featuredRecipe: {
    backgroundColor: colors.background,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  featuredImage: {
    width: '100%',
    height: 200,
  },
  featuredInfo: {
    padding: 20,
  },
  featuredName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.text,
  },
  featuredDescription: {
    fontSize: 16,
    color: colors.textLight,
    marginBottom: 15,
    lineHeight: 24,
  },
  featuredStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  featuredStat: {
    fontSize: 16,
    color: colors.textLight,
  },
  favoriteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 2,
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: 20,
    padding: 4,
  },
});
