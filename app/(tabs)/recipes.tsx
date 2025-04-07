import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function RecipesScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Tarifler</Text>
        <Text style={styles.subtitle}>Tüm tariflerimiz</Text>
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

      <View style={styles.filtersContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={[styles.filterChip, styles.filterChipActive]}>
            <Text style={[styles.filterChipText, styles.filterChipTextActive]}>Tümü</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterChip}>
            <Text style={styles.filterChipText}>Kahvaltı</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterChip}>
            <Text style={styles.filterChipText}>Öğle</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterChip}>
            <Text style={styles.filterChipText}>Akşam</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterChip}>
            <Text style={styles.filterChipText}>Tatlı</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterChip}>
            <Text style={styles.filterChipText}>Vejetaryen</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={styles.recipesGrid}>
        <TouchableOpacity style={styles.recipeCard}>
          <View style={styles.recipeImage}>
            <FontAwesome name="cutlery" size={40} color="#8A2BE2" />
          </View>
          <View style={styles.recipeInfo}>
            <Text style={styles.recipeName}>Avokadolu Tost</Text>
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
            <Text style={styles.recipeName}>Kinoa Bowl</Text>
            <View style={styles.recipeTags}>
              <Text style={styles.recipeTag}>Öğle</Text>
              <Text style={styles.recipeTag}>Protein</Text>
            </View>
            <View style={styles.recipeStats}>
              <Text style={styles.recipeStat}>
                <FontAwesome name="clock-o" size={14} color="#666" /> 25 dk
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
            <Text style={styles.recipeName}>Somon ve Sebze</Text>
            <View style={styles.recipeTags}>
              <Text style={styles.recipeTag}>Akşam</Text>
              <Text style={styles.recipeTag}>Balık</Text>
            </View>
            <View style={styles.recipeStats}>
              <Text style={styles.recipeStat}>
                <FontAwesome name="clock-o" size={14} color="#666" /> 35 dk
              </Text>
              <Text style={styles.recipeStat}>
                <FontAwesome name="fire" size={14} color="#666" /> 480 kcal
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
              <Text style={styles.recipeTag}>Salata</Text>
            </View>
            <View style={styles.recipeStats}>
              <Text style={styles.recipeStat}>
                <FontAwesome name="clock-o" size={14} color="#666" /> 20 dk
              </Text>
              <Text style={styles.recipeStat}>
                <FontAwesome name="fire" size={14} color="#666" /> 320 kcal
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
  filtersContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  filterChip: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    marginRight: 10,
  },
  filterChipActive: {
    backgroundColor: '#8A2BE2',
  },
  filterChipText: {
    fontSize: 14,
    color: '#666',
  },
  filterChipTextActive: {
    color: '#fff',
  },
  recipesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
  },
  recipeCard: {
    width: '48%',
    backgroundColor: '#fff',
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
    fontSize: 16,
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
    fontSize: 12,
    color: '#666',
  },
}); 