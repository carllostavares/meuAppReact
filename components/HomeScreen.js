// components/HomeScreen.js
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const navigateToCurriculo = () => {
    navigation.navigate('Currículo');
  };

  const navigateToPortfolio = () => {
    navigation.navigate('Contato');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigateToCurriculo}>
          <Image
            source={require('../assets/profile.png')}
            style={{ width: 150, height: 150, borderRadius: 75, marginBottom: 20 }}
          />
          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>Seu Nome</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={navigateToCurriculo}>
            <Text style={styles.buttonText}>Currículo</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.button} onPress={navigateToPortfolio}>
            <Text style={styles.buttonText}>Contato</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  nameContainer: {
    alignItems: 'center',
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#3498db', // Cor de fundo do botão
    padding: 15,
    borderRadius: 10,
    flex: 1, // Ocupa a largura disponível
    marginLeft: 10, // Espaçamento entre os botões
  },
  buttonText: {
    color: '#fff', // Cor do texto do botão
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;
