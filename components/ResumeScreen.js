// components/ResumeScreen.js
import React from 'react';
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ResumeScreen = () => {
  // Função para abrir o perfil do LinkedIn no navegador
  const openLinkedInProfile = () => {
    const linkedInURL = 'https://www.linkedin.com/in/carlos-tavares-b49595b6/';
    Linking.openURL(linkedInURL);
  };
    const openGitHub = () => {
    const gitHubURL = 'https://github.com/carllostavares';
    Linking.openURL(gitHubURL);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/profile.png')}
          style={styles.profileImage}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Informações Pessoais</Text>
        <Text>Nome: Carlos Tavares</Text>
        <Text>Email: carlostavares.dev256@email.com</Text>
        <Text>Fone: (81) 97327-7835</Text>
        
        <TouchableOpacity onPress={openGitHub}>
          <Text style={styles.link}>GitHub: Carlos Tavares</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={openLinkedInProfile}>
          <Text style={styles.link}>LinkedIn: Carlos Tavares</Text>
        </TouchableOpacity>
        {/* Adicione mais informações pessoais conforme necessário */}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sobre Mim</Text>
        <Text>Após atuar por mais de 5 anos como Analista de suporte, decidir entrar de cabeça no mundo do Desenvolvimento de sistemas. Comecei estudando html, css e JavaScript. Contudo, decidir seguir o caminho do Back-End com C#, .Net, ASP.NET Core MVC e Linguagem SQL, que é a minha área de estudo neste momento. Busco aprender mais sobre POO, leitura e manipulação de arquivos, lidar com tipos de exceções, integração e entrega continua. Com foco em aprender as melhores práticas de Design e Arquitetura de software, seja monolítico ou em microsserviços. Tendo como metodologias o SCRUM e Kanban.</Text>
        {/* Adicione mais informações sobre interesses */}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experiências Profissionais</Text>
        <Text>Empresa ABC - Cargo - Data</Text>
        {/* Adicione mais informações sobre experiências profissionais */}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Informações Acadêmicas</Text>
        <Text>- Faculdade Senac Pernambuco / Análise e Desenvolvimento de Sistemas </Text>

        <Text>- Escola Técnica Estadual Professor Agamemnon Magalhães / Manutenção e Suporte em Informática</Text>
        {/* Adicione mais informações acadêmicas */}
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
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default ResumeScreen;
