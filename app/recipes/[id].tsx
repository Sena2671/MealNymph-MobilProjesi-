import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../../constants/theme';
import { RECIPES } from '../(tabs)/recipesData';

export default function RecipeDetailScreen() {
  const { id } = useLocalSearchParams();
  const recipe = RECIPES.find(r => r.id === Number(id));

  if (!recipe) {
    return (
      <View style={styles.centered}>
        <Text>Tarif bulunamadı.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: recipe.image }} style={styles.image} resizeMode="cover" />
      <View style={styles.content}>
        <Text style={styles.title}>{recipe.name}</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoText}><FontAwesome name="clock-o" size={16} /> {recipe.time}</Text>
          <Text style={styles.infoText}><FontAwesome name="fire" size={16} /> {recipe.calories}</Text>
        </View>
        <View style={styles.tagsRow}>
          {recipe.tags.map((tag, idx) => (
            <Text key={idx} style={styles.tag}>{tag}</Text>
          ))}
        </View>
        <Text style={styles.sectionTitle}>Açıklama</Text>
        <Text style={styles.description}>{recipe.description}</Text>
        <Text style={styles.sectionTitle}>Malzemeler</Text>
        {recipe.ingredients.map((item, idx) => (
          <Text key={idx} style={styles.ingredient}>• {item}</Text>
        ))}
        <Text style={styles.sectionTitle}>Hazırlanışı</Text>
        {recipe.steps.map((step, idx) => (
          <Text key={idx} style={styles.step}>{idx + 1}. {step}</Text>
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
  image: {
    width: '100%',
    height: 250,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    color: colors.textLight,
    marginRight: 15,
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,
  },
  tag: {
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    marginRight: 5,
    marginBottom: 5,
    fontSize: 12,
    color: colors.textLight,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
    marginTop: 20,
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 10,
  },
  ingredient: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 4,
  },
  step: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 6,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}); 