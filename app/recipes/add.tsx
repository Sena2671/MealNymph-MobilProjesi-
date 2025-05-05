import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../../constants/theme';
import { RecipeFormData, RecipeCategory, RecipeDifficulty } from '../../models/Recipe';
import { useAuth } from '../../contexts/AuthContext';
import * as ImagePicker from 'expo-image-picker';

const initialFormData: RecipeFormData = {
  name: '',
  description: '',
  imageUrl: '',
  ingredients: [''],
  instructions: [''],
  prepTime: 0,
  cookTime: 0,
  servings: 1,
  calories: 0,
  category: 'breakfast',
  difficulty: 'easy',
  tags: [],
};

export default function AddRecipeScreen() {
  const [formData, setFormData] = useState<RecipeFormData>(initialFormData);
  const [newIngredient, setNewIngredient] = useState('');
  const [newInstruction, setNewInstruction] = useState('');
  const [newTag, setNewTag] = useState('');
  const { user } = useAuth();

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setFormData({ ...formData, imageUrl: result.assets[0].uri });
    }
  };

  const addIngredient = () => {
    if (newIngredient.trim()) {
      setFormData({
        ...formData,
        ingredients: [...formData.ingredients, newIngredient.trim()],
      });
      setNewIngredient('');
    }
  };

  const addInstruction = () => {
    if (newInstruction.trim()) {
      setFormData({
        ...formData,
        instructions: [...formData.instructions, newInstruction.trim()],
      });
      setNewInstruction('');
    }
  };

  const addTag = () => {
    if (newTag.trim()) {
      setFormData({
        ...formData,
        tags: [...formData.tags, newTag.trim()],
      });
      setNewTag('');
    }
  };

  const handleSubmit = async () => {
    // TODO: API'ye gönder
    console.log('Form data:', formData);
    router.back();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Yeni Tarif Ekle</Text>
      </View>

      <View style={styles.form}>
        <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
          {formData.imageUrl ? (
            <Image source={{ uri: formData.imageUrl }} style={styles.image} />
          ) : (
            <View style={styles.imagePlaceholder}>
              <FontAwesome name="camera" size={40} color={colors.primary} />
              <Text style={styles.imagePlaceholderText}>Fotoğraf Seç</Text>
            </View>
          )}
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="Tarif Adı"
          value={formData.name}
          onChangeText={(text) => setFormData({ ...formData, name: text })}
        />

        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Tarif Açıklaması"
          value={formData.description}
          onChangeText={(text) => setFormData({ ...formData, description: text })}
          multiline
        />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Malzemeler</Text>
          {formData.ingredients.map((ingredient, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.listItemText}>• {ingredient}</Text>
            </View>
          ))}
          <View style={styles.addItemContainer}>
            <TextInput
              style={[styles.input, styles.addItemInput]}
              placeholder="Yeni malzeme ekle"
              value={newIngredient}
              onChangeText={setNewIngredient}
            />
            <TouchableOpacity style={styles.addButton} onPress={addIngredient}>
              <FontAwesome name="plus" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Hazırlanış</Text>
          {formData.instructions.map((instruction, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.listItemText}>{index + 1}. {instruction}</Text>
            </View>
          ))}
          <View style={styles.addItemContainer}>
            <TextInput
              style={[styles.input, styles.addItemInput]}
              placeholder="Yeni adım ekle"
              value={newInstruction}
              onChangeText={setNewInstruction}
            />
            <TouchableOpacity style={styles.addButton} onPress={addInstruction}>
              <FontAwesome name="plus" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Hazırlık Süresi (dk)</Text>
            <TextInput
              style={styles.input}
              placeholder="0"
              value={formData.prepTime.toString()}
              onChangeText={(text) => setFormData({ ...formData, prepTime: parseInt(text) || 0 })}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Pişirme Süresi (dk)</Text>
            <TextInput
              style={styles.input}
              placeholder="0"
              value={formData.cookTime.toString()}
              onChangeText={(text) => setFormData({ ...formData, cookTime: parseInt(text) || 0 })}
              keyboardType="numeric"
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Porsiyon</Text>
            <TextInput
              style={styles.input}
              placeholder="1"
              value={formData.servings.toString()}
              onChangeText={(text) => setFormData({ ...formData, servings: parseInt(text) || 1 })}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Kalori</Text>
            <TextInput
              style={styles.input}
              placeholder="0"
              value={formData.calories.toString()}
              onChangeText={(text) => setFormData({ ...formData, calories: parseInt(text) || 0 })}
              keyboardType="numeric"
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Etiketler</Text>
          <View style={styles.tagsContainer}>
            {formData.tags.map((tag, index) => (
              <View key={index} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>
          <View style={styles.addItemContainer}>
            <TextInput
              style={[styles.input, styles.addItemInput]}
              placeholder="Yeni etiket ekle"
              value={newTag}
              onChangeText={setNewTag}
            />
            <TouchableOpacity style={styles.addButton} onPress={addTag}>
              <FontAwesome name="plus" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Tarifi Kaydet</Text>
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
    backgroundColor: colors.primary,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  form: {
    padding: 20,
  },
  imagePicker: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imagePlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFF8E1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePlaceholderText: {
    marginTop: 10,
    color: colors.primary,
    fontSize: 16,
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.text,
  },
  listItem: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  listItemText: {
    fontSize: 16,
    color: colors.text,
  },
  addItemContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  addItemInput: {
    flex: 1,
    marginRight: 10,
  },
  addButton: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputGroup: {
    width: '48%',
  },
  label: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 5,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  tag: {
    backgroundColor: '#FFF8E1',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    marginRight: 5,
    marginBottom: 5,
  },
  tagText: {
    color: colors.primary,
    fontSize: 14,
  },
  submitButton: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 