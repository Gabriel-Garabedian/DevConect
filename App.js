import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [pagina, setPagina] = useState('login');
  const [historico, setHistorico] = useState([]);

  function navegarPara(novaPagina) {
    setHistorico([...historico, pagina]);
    setPagina(novaPagina);
  }

  function voltar() {
    if (historico.length > 0) {
      const ultimaPagina = historico.pop();
      setPagina(ultimaPagina);
      setHistorico([...historico]); // Atualiza o histórico
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {pagina !== 'login' && <BotaoVoltar onPress={voltar} />}
      
      {pagina === 'login' && <LoginScreen onLogin={() => navegarPara('home')} onIrParaCadastro={() => navegarPara('cadastro')} />}
      {pagina === 'cadastro' && <CadastroScreen onCadastroConcluido={() => navegarPara('login')} />}
      {pagina === 'home' && <HomeScreen onIrParaDesenvolvimento={() => navegarPara('desenvolvimento')} />}
      {pagina === 'desenvolvimento' && <DesenvolvimentoScreen />}
    </SafeAreaView>
  );
}

function BotaoVoltar({ onPress }) {
  return (
    <TouchableOpacity style={styles.voltarButton} onPress={onPress}>
      <Text style={styles.voltarButtonText}>⬅ Voltar</Text>
    </TouchableOpacity>
  );
}

function LoginScreen({ onLogin, onIrParaCadastro }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#E0E0E0" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#E0E0E0" secureTextEntry value={senha} onChangeText={setSenha} />
      <TouchableOpacity style={styles.button} onPress={onLogin}>
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onIrParaCadastro}>
        <Text style={styles.linkText}>Não tem uma conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}

function CadastroScreen({ onCadastroConcluido }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <TextInput style={styles.input} placeholder="Nome completo" placeholderTextColor="#E0E0E0" value={nome} onChangeText={setNome} />
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#E0E0E0" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#E0E0E0" secureTextEntry value={senha} onChangeText={setSenha} />
      <TouchableOpacity style={styles.button} onPress={onCadastroConcluido}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

function HomeScreen({ onIrParaDesenvolvimento }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao DevConect</Text>
      <TouchableOpacity style={styles.card} onPress={onIrParaDesenvolvimento}>
        <Text style={styles.cardText}>Desenvolvimento</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardText}>Softskills</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardText}>Outros (Indisponível)</Text>
      </TouchableOpacity>
    </View>
  );
}

function DesenvolvimentoScreen() {
  return (
    <View style={styles.devContainer}>
      <Text style={styles.devTitle}>Área de Desenvolvimento</Text>
      <Text style={styles.devSubtitle}>Aprenda mais sobre tecnologia!</Text>

      <TouchableOpacity style={styles.devButton}>
        <Text style={styles.devButtonText}>Frameworks</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.devButton}>
        <Text style={styles.devButtonText}>APIs</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.devButton}>
        <Text style={styles.devButtonText}>Banco de Dados</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  voltarButton: { 
    position: 'absolute', 
    top: 40, // Ajustado para ficar visível 
    left: 10, 
    padding: 12, 
    backgroundColor: '#7F7AC6', 
    borderRadius: 8,
    zIndex: 10 // Garante que fique acima dos outros elementos
  },
  voltarButtonText: { 
    color: '#E0E0E0', 
    fontWeight: 'bold', 
    fontSize: 16 
  },

  container: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1E1E1E' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 30, color: '#E0E0E0' },
  input: { width: '100%', padding: 12, borderWidth: 1, borderRadius: 8, marginBottom: 20, backgroundColor: '#121212', color: '#E0E0E0' },
  button: { backgroundColor: '#7F7AC6', padding: 12, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#E0E0E0', fontWeight: 'bold' },
  linkText: { marginTop: 20, textAlign: 'center', color: '#A1EBF5' },
  card: { backgroundColor: '#121212', padding: 20, borderRadius: 10, marginBottom: 20, width: '100%', alignItems: 'center' },
  cardText: { fontSize: 18, color: '#E0E0E0' },

  devContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#121212' },
  devTitle: { fontSize: 28, fontWeight: 'bold', color: '#A1EBF5', marginBottom: 10 },
  devSubtitle: { fontSize: 18, color: '#E0E0E0', marginBottom: 20, textAlign: 'center' },
  devButton: { backgroundColor: '#7F7AC6', padding: 15, borderRadius: 8, width: '80%', alignItems: 'center', marginBottom: 10 },
  devButtonText: { color: '#E0E0E0', fontWeight: 'bold', fontSize: 18 },
});
