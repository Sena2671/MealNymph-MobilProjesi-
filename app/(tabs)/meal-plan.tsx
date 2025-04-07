import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const DAYS = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'];

export default function MealPlanScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Öğün Planı</Text>
        <Text style={styles.subtitle}>Haftalık öğün planınızı görüntüleyin</Text>
      </View>

      <View style={styles.daysContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {DAYS.map((day, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.dayButton, index === 0 && styles.dayButtonActive]}>
              <Text style={[styles.dayText, index === 0 && styles.dayTextActive]}>
                {day}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.mealsContainer}>
        <View style={styles.mealCard}>
          <View style={styles.mealHeader}>
            <View style={styles.mealIcon}>
              <FontAwesome name="coffee" size={24} color="#8A2BE2" />
            </View>
            <View style={styles.mealInfo}>
              <Text style={styles.mealTitle}>Kahvaltı</Text>
              <Text style={styles.mealTime}>08:00 - 09:00</Text>
            </View>
            <TouchableOpacity style={styles.editButton}>
              <FontAwesome name="pencil" size={20} color="#8A2BE2" />
            </TouchableOpacity>
          </View>
          <View style={styles.mealContent}>
            <Text style={styles.mealDescription}>
              Avokadolu tost, haşlanmış yumurta, domates ve salatalık
            </Text>
            <View style={styles.mealStats}>
              <Text style={styles.mealStat}>
                <FontAwesome name="fire" size={14} color="#666" /> 350 kcal
              </Text>
              <Text style={styles.mealStat}>
                <FontAwesome name="cutlery" size={14} color="#666" /> 15g protein
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.mealCard}>
          <View style={styles.mealHeader}>
            <View style={styles.mealIcon}>
              <FontAwesome name="cutlery" size={24} color="#8A2BE2" />
            </View>
            <View style={styles.mealInfo}>
              <Text style={styles.mealTitle}>Öğle Yemeği</Text>
              <Text style={styles.mealTime}>12:00 - 13:00</Text>
            </View>
            <TouchableOpacity style={styles.editButton}>
              <FontAwesome name="pencil" size={20} color="#8A2BE2" />
            </TouchableOpacity>
          </View>
          <View style={styles.mealContent}>
            <Text style={styles.mealDescription}>
              Kinoa bowl, ızgara tavuk, avokado ve sebzeler
            </Text>
            <View style={styles.mealStats}>
              <Text style={styles.mealStat}>
                <FontAwesome name="fire" size={14} color="#666" /> 420 kcal
              </Text>
              <Text style={styles.mealStat}>
                <FontAwesome name="cutlery" size={14} color="#666" /> 25g protein
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.mealCard}>
          <View style={styles.mealHeader}>
            <View style={styles.mealIcon}>
              <FontAwesome name="moon-o" size={24} color="#8A2BE2" />
            </View>
            <View style={styles.mealInfo}>
              <Text style={styles.mealTitle}>Akşam Yemeği</Text>
              <Text style={styles.mealTime}>18:00 - 19:00</Text>
            </View>
            <TouchableOpacity style={styles.editButton}>
              <FontAwesome name="pencil" size={20} color="#8A2BE2" />
            </TouchableOpacity>
          </View>
          <View style={styles.mealContent}>
            <Text style={styles.mealDescription}>
              Fırında somon, kuskus ve ızgara sebzeler
            </Text>
            <View style={styles.mealStats}>
              <Text style={styles.mealStat}>
                <FontAwesome name="fire" size={14} color="#666" /> 480 kcal
              </Text>
              <Text style={styles.mealStat}>
                <FontAwesome name="cutlery" size={14} color="#666" /> 30g protein
              </Text>
            </View>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.addButton}>
        <FontAwesome name="plus" size={20} color="#fff" />
        <Text style={styles.addButtonText}>Öğün Ekle</Text>
      </TouchableOpacity>
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
  daysContainer: {
    padding: 20,
    marginTop: -30,
  },
  dayButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#fff',
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
  dayButtonActive: {
    backgroundColor: '#8A2BE2',
  },
  dayText: {
    fontSize: 14,
    color: '#666',
  },
  dayTextActive: {
    color: '#fff',
  },
  mealsContainer: {
    padding: 20,
  },
  mealCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  mealHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  mealIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#f0e6ff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mealInfo: {
    flex: 1,
    marginLeft: 15,
  },
  mealTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  mealTime: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  editButton: {
    width: 40,
    height: 40,
    backgroundColor: '#f0e6ff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mealContent: {
    padding: 15,
  },
  mealDescription: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  mealStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mealStat: {
    fontSize: 14,
    color: '#666',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8A2BE2',
    margin: 20,
    padding: 15,
    borderRadius: 10,
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10,
  },
}); 