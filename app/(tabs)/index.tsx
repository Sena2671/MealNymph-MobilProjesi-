import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../constants/theme';

interface QuickAccessCardProps {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
}

export default function HomeScreen() {
  const { user } = useAuth();

  const QuickAccessCard: React.FC<QuickAccessCardProps> = ({ title, icon, onPress }) => (
    <TouchableOpacity style={styles.quickAccessCard} onPress={onPress}>
      <Ionicons name={icon} size={24} color={colors.primary} />
      <Text style={styles.quickAccessText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome}>Hoş Geldin, {user?.name || 'Misafir'}</Text>
        <Text style={styles.subtitle}>Bugünkü öğün planın hazır!</Text>
      </View>

      <View style={styles.quickAccessContainer}>
        <QuickAccessCard 
          title="Öğün Ekle" 
          icon="add-circle-outline" 
          onPress={() => {}} 
        />
        <QuickAccessCard 
          title="Tarifler" 
          icon="book-outline" 
          onPress={() => {}} 
        />
        <QuickAccessCard 
          title="Alışveriş Listesi" 
          icon="cart-outline" 
          onPress={() => {}} 
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Günlük Öğün Planı</Text>
        <View style={styles.mealPlanCard}>
          <Text style={styles.mealTime}>Kahvaltı</Text>
          <Text style={styles.mealName}>Yulaf Ezmesi ve Meyve</Text>
          <Text style={styles.mealTime}>Öğle Yemeği</Text>
          <Text style={styles.mealName}>Izgara Tavuk Salata</Text>
          <Text style={styles.mealTime}>Akşam Yemeği</Text>
          <Text style={styles.mealName}>Sebzeli Makarna</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Günlük Besin Takibi</Text>
        <View style={styles.nutritionCard}>
          <View style={styles.nutritionItem}>
            <Text style={styles.nutritionValue}>1200</Text>
            <Text style={styles.nutritionLabel}>Kalori</Text>
          </View>
          <View style={styles.nutritionItem}>
            <Text style={styles.nutritionValue}>65g</Text>
            <Text style={styles.nutritionLabel}>Protein</Text>
          </View>
          <View style={styles.nutritionItem}>
            <Text style={styles.nutritionValue}>45g</Text>
            <Text style={styles.nutritionLabel}>Yağ</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Önerilen Tarifler</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.recipeCard}>
            <Text style={styles.recipeTitle}>Sağlıklı Smoothie</Text>
            <Text style={styles.recipeDesc}>Muz, çilek ve yulaf</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.recipeCard}>
            <Text style={styles.recipeTitle}>Quinoa Salata</Text>
            <Text style={styles.recipeDesc}>Sebzeli ve proteinli</Text>
          </TouchableOpacity>
        </ScrollView>
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
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: colors.primary,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textLight,
  },
  quickAccessContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: colors.background,
    marginTop: 10,
  },
  quickAccessCard: {
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#FFF8E1', // Sarının açık tonu
    borderRadius: 10,
    width: '30%',
  },
  quickAccessText: {
    marginTop: 5,
    fontSize: 12,
    color: colors.text,
  },
  section: {
    padding: 20,
    backgroundColor: colors.background,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: colors.primary,
  },
  mealPlanCard: {
    backgroundColor: '#FFF8E1', // Sarının açık tonu
    padding: 15,
    borderRadius: 10,
  },
  mealTime: {
    fontSize: 14,
    color: colors.textLight,
    marginTop: 10,
  },
  mealName: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
    color: colors.text,
  },
  nutritionCard: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFF8E1', // Sarının açık tonu
    padding: 15,
    borderRadius: 10,
  },
  nutritionItem: {
    alignItems: 'center',
  },
  nutritionValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
  },
  nutritionLabel: {
    fontSize: 12,
    color: colors.textLight,
    marginTop: 5,
  },
  recipeCard: {
    backgroundColor: '#FFF8E1', // Sarının açık tonu
    padding: 15,
    borderRadius: 10,
    marginRight: 10,
    width: 200,
  },
  recipeTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
  },
  recipeDesc: {
    fontSize: 12,
    color: colors.textLight,
    marginTop: 5,
  },
});
