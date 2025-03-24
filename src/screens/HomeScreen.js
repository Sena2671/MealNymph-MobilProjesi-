import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>MealNymph</Text>
        <Text style={styles.subtitle}>Kişisel Beslenme Asistanınız</Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Günlük Öneriler</Text>
        {/* Buraya günlük öneriler gelecek */}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Kalori Durumu</Text>
        {/* Buraya kalori durumu grafiği gelecek */}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Özel Tarifler</Text>
        {/* Buraya özel tarifler listesi gelecek */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  subtitle: {
    fontSize: 16,
    color: '#ffffff',
    marginTop: 5,
  },
  section: {
    padding: 15,
    backgroundColor: '#ffffff',
    margin: 10,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
  },
});

export default HomeScreen; 