import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileImageContainer}>
          <Image
            source={require('../assets/default-avatar.png')}
            style={styles.profileImage}
          />
        </View>
        <Text style={styles.name}>Kullanıcı Adı</Text>
        <Text style={styles.email}>kullanici@email.com</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Kişisel Bilgiler</Text>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Boy:</Text>
          <Text style={styles.value}>175 cm</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Kilo:</Text>
          <Text style={styles.value}>70 kg</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Yaş:</Text>
          <Text style={styles.value}>25</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Cinsiyet:</Text>
          <Text style={styles.value}>Erkek</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sağlık Durumu</Text>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Hastalıklar:</Text>
          <Text style={styles.value}>Diyabet</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Alerjiler:</Text>
          <Text style={styles.value}>Fıstık</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Profili Düzenle</Text>
      </TouchableOpacity>
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
  profileImageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#ffffff',
    padding: 3,
    marginBottom: 15,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 60,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#ffffff',
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
    marginBottom: 15,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  label: {
    fontSize: 16,
    color: '#666666',
  },
  value: {
    fontSize: 16,
    color: '#333333',
    fontWeight: '500',
  },
  editButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    margin: 20,
    alignItems: 'center',
  },
  editButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen; 