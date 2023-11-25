// components/ContactScreen.js
import React from 'react';
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ContactScreen = () => {
  const openLinkedInProfile = () => {
    const linkedInURL = 'https://www.linkedin.com/in/seu-perfil-do-linkedin';
    Linking.openURL(linkedInURL);
  };

  const openTwitterProfile = () => {
    const twitterURL = 'https://twitter.com/seu-username-do-twitter';
    Linking.openURL(twitterURL);
  };

  const openGitHubProfile = () => {
    const githubURL = 'https://github.com/seu-username-do-github';
    Linking.openURL(githubURL);
  };

  const openInstagramProfile = () => {
    const instagramURL = 'https://www.instagram.com/seu-username-do-instagram';
    Linking.openURL(instagramURL);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informações de Contato</Text>

      <View style={styles.contactContainer}>
        <TouchableOpacity style={styles.contactButton} onPress={openLinkedInProfile}>
          <Text style={styles.buttonText}>LinkedIn</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactButton} onPress={openTwitterProfile}>
          <Text style={styles.buttonText}>Twitter</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactButton} onPress={openGitHubProfile}>
          <Text style={styles.buttonText}>GitHub</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactButton} onPress={openInstagramProfile}>
          <Text style={styles.buttonText}>Instagram</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  contactContainer: {
    alignItems: 'center',
  },
  contactButton: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: '80%', // Ajuste conforme necessário
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ContactScreen;
