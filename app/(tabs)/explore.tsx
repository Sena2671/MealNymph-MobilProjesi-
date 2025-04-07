import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function ExploreScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Keşfet</Text>
        <Text style={styles.subtitle}>Yeni tarifler ve öneriler</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <FontAwesome name="search" size={20} color="#666" />
          <TextInput
            style={styles.searchInput}
            placeholder="Tarif ara..."
            placeholderTextColor="#666"
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <FontAwesome name="filter" size={20} color="#8A2BE2" />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popüler Tarifler</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.recipeCard}>
            <View style={styles.recipeImage}>
              <FontAwesome name="cutlery" size={40} color="#8A2BE2" />
            </View>
            <View style={styles.recipeInfo}>
              <Text style={styles.recipeName}>Sağlıklı Kahvaltı</Text>
              <View style={styles.recipeTags}>
                <Text style={styles.recipeTag}>Kahvaltı</Text>
                <Text style={styles.recipeTag}>Vejetaryen</Text>
              </View>
              <View style={styles.recipeStats}>
                <Text style={styles.recipeStat}>
                  <FontAwesome name="clock-o" size={14} color="#666" /> 15 dk
                </Text>
                <Text style={styles.recipeStat}>
                  <FontAwesome name="fire" size={14} color="#666" /> 350 kcal
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.recipeCard}>
            <View style={styles.recipeImage}>
              <FontAwesome name="cutlery" size={40} color="#8A2BE2" />
            </View>
            <View style={styles.recipeInfo}>
              <Text style={styles.recipeName}>Protein Salata</Text>
              <View style={styles.recipeTags}>
                <Text style={styles.recipeTag}>Öğle</Text>
                <Text style={styles.recipeTag}>Yüksek Protein</Text>
              </View>
              <View style={styles.recipeStats}>
                <Text style={styles.recipeStat}>
                  <FontAwesome name="clock-o" size={14} color="#666" /> 20 dk
                </Text>
                <Text style={styles.recipeStat}>
                  <FontAwesome name="fire" size={14} color="#666" /> 420 kcal
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.recipeCard}>
            <View style={styles.recipeImage}>
              <FontAwesome name="cutlery" size={40} color="#8A2BE2" />
            </View>
            <View style={styles.recipeInfo}>
              <Text style={styles.recipeName}>Akşam Yemeği</Text>
              <View style={styles.recipeTags}>
                <Text style={styles.recipeTag}>Akşam</Text>
                <Text style={styles.recipeTag}>Düşük Karbonhidrat</Text>
              </View>
              <View style={styles.recipeStats}>
                <Text style={styles.recipeStat}>
                  <FontAwesome name="clock-o" size={14} color="#666" /> 30 dk
                </Text>
                <Text style={styles.recipeStat}>
                  <FontAwesome name="fire" size={14} color="#666" /> 580 kcal
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Kategoriler</Text>
        <View style={styles.categoriesGrid}>
          <TouchableOpacity style={styles.categoryCard}>
            <FontAwesome name="coffee" size={24} color="#8A2BE2" />
            <Text style={styles.categoryName}>Kahvaltı</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryCard}>
            <FontAwesome name="cutlery" size={24} color="#8A2BE2" />
            <Text style={styles.categoryName}>Ana Yemek</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryCard}>
            <FontAwesome name="leaf" size={24} color="#8A2BE2" />
            <Text style={styles.categoryName}>Salata</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryCard}>
            <FontAwesome name="glass" size={24} color="#8A2BE2" />
            <Text style={styles.categoryName}>İçecek</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryCard}>
            <FontAwesome name="birthday-cake" size={24} color="#8A2BE2" />
            <Text style={styles.categoryName}>Tatlı</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryCard}>
            <FontAwesome name="heart" size={24} color="#8A2BE2" />
            <Text style={styles.categoryName}>Sağlıklı</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Günün Tarifi</Text>
        <TouchableOpacity style={styles.featuredRecipe}>
          <View style={styles.featuredImage}>
            <FontAwesome name="cutlery" size={60} color="#8A2BE2" />
          </View>
          <View style={styles.featuredInfo}>
            <Text style={styles.featuredName}>Somon ve Sebze</Text>
            <Text style={styles.featuredDescription}>
              Omega-3 açısından zengin somon ve taze sebzelerle hazırlanan sağlıklı bir akşam yemeği.
            </Text>
            <View style={styles.featuredStats}>
              <Text style={styles.featuredStat}>
                <FontAwesome name="clock-o" size={14} color="#666" /> 25 dk
              </Text>
              <Text style={styles.featuredStat}>
                <FontAwesome name="fire" size={14} color="#666" /> 450 kcal
              </Text>
              <Text style={styles.featuredStat}>
                <FontAwesome name="star" size={14} color="#666" /> 4.8
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
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    backgroundColor: '#8A2BE2',
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
    backgroundColor: '#fff',
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
    color: '#333',
  },
  filterButton: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
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
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  recipeCard: {
    width: 280,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginRight: 15,
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
    backgroundColor: '#f0f0f0',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  recipeInfo: {
    padding: 15,
  },
  recipeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  recipeTags: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  recipeTag: {
    fontSize: 12,
    color: '#8A2BE2',
    backgroundColor: '#f0e6ff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 5,
  },
  recipeStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recipeStat: {
    fontSize: 14,
    color: '#666',
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
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
  categoryName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  featuredRecipe: {
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  featuredImage: {
    height: 200,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  featuredInfo: {
    padding: 20,
  },
  featuredName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  featuredDescription: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
    lineHeight: 24,
  },
  featuredStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  featuredStat: {
    fontSize: 14,
    color: '#666',
  },
});
