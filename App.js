// Este codigo é nosso app sobre desenvovimento e softkills
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

export default function App() {
  const [pagina, setPagina] = useState('login');
  const [historico, setHistorico] = useState([]);

  const navegarPara = (novaPagina) => {
    setHistorico((prev) => (pagina !== 'login' ? [...prev, pagina] : prev));
    setPagina(novaPagina);
  };

  const voltar = () => {
    if (historico.length > 0) {
      const anterior = historico[historico.length - 1];
      setHistorico((prev) => prev.slice(0, -1));
      setPagina(anterior);
    }
  };

  return (
    <View style={styles.container}>
      {pagina === 'login' && <LoginScreen navegarPara={navegarPara} />}
      {pagina === 'cadastro' && <CadastroScreen navegarPara={navegarPara} voltar={voltar} />}
      {pagina === 'desenvolvimento' && <DesenvolvimentoScreen navegarPara={navegarPara} voltar={voltar} />}
      {pagina === 'frameworks' && <FrameworkScreen voltar={voltar} />}
      {pagina === 'apis' && <APIsScreen voltar={voltar} />}
      {pagina === 'bancodedados' && <BancoDeDadosScreen voltar={voltar} />}
      {pagina === 'softskills' && <SoftSkillsScreen voltar={voltar} />}
    </View>
  );
}

function VoltarButton({ voltar }) {
  return (
    <TouchableOpacity style={styles.voltarButton} onPress={voltar}>
      <Text style={styles.voltarButtonText}>← Voltar</Text>
    </TouchableOpacity>
  );
}

function LoginScreen({ navegarPara }) {
  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>Bem-vindo ao DevConect</Text>
      <Text style={styles.subtitle}>Faça login para acessar os cursos!</Text>
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#A68FFF" />
      <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#A68FFF" secureTextEntry />
      <TouchableOpacity style={styles.button} onPress={() => navegarPara('desenvolvimento')}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navegarPara('cadastro')}>
        <Text style={styles.linkText}>Não tem conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}

function CadastroScreen({ navegarPara, voltar }) {
  return (
    <View style={styles.formContainer}>
      <VoltarButton voltar={voltar} />
      <Text style={styles.title}>Cadastro</Text>
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#A68FFF" />
      <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#A68FFF" secureTextEntry />
      <TouchableOpacity style={styles.button} onPress={() => navegarPara('login')}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

function DesenvolvimentoScreen({ navegarPara, voltar }) {
  return (
    <View style={styles.devContainer}>
      <VoltarButton voltar={voltar} />
      <Text style={styles.devTitle}>Área de Desenvolvimento</Text>
      <Text style={styles.devSubtitle}>Escolha um curso para aprender mais:</Text>
      <TouchableOpacity style={styles.card} onPress={() => navegarPara('frameworks')}>
        <Text style={styles.cardTitle}>Frameworks</Text>
        <Text style={styles.cardDesc}>Aprenda sobre as principais ferramentas para acelerar o desenvolvimento web e mobile.</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => navegarPara('apis')}>
        <Text style={styles.cardTitle}>APIs</Text>
        <Text style={styles.cardDesc}>Descubra como integrar sistemas e consumir dados de forma eficiente e segura.</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => navegarPara('bancodedados')}>
        <Text style={styles.cardTitle}>Banco de Dados</Text>
        <Text style={styles.cardDesc}>Entenda como armazenar, consultar e proteger informações em diferentes tipos de bancos.</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => navegarPara('softskills')}>
        <Text style={styles.cardTitle}>Soft Skills</Text>
        <Text style={styles.cardDesc}>Desenvolva habilidades essenciais como comunicação, gestão de tempo e trabalho em equipe.</Text>
      </TouchableOpacity>
    </View>
  );
}

function FrameworkScreen({ voltar }) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <VoltarButton voltar={voltar} />
      <Text style={styles.devTitle}>Frameworks</Text>
      <View style={styles.courseCard}>
        <Text style={styles.courseTitle}>O que são Frameworks?</Text>
        <Text style={styles.courseText}>
          Frameworks são conjuntos de ferramentas, bibliotecas e padrões que facilitam e aceleram o desenvolvimento de aplicações. Eles fornecem uma estrutura pronta para o código, promovendo organização e reutilização.
        </Text>
      </View>
      <View style={styles.courseCard}>
        <Text style={styles.courseTitle}>Exemplos Populares</Text>
        <Text style={styles.courseText}>
          <Text style={styles.bold}>Front-end:</Text> React, Angular, Vue.js{"\n"}
          <Text style={styles.bold}>Back-end:</Text> Django (Python), Laravel (PHP), Spring Boot (Java), Express (Node.js)
        </Text>
      </View>
      <View style={styles.courseCard}>
        <Text style={styles.courseTitle}>Vantagens</Text>
        <Text style={styles.courseText}>
          • Redução do tempo de desenvolvimento{"\n"}
          • Manutenção facilitada{"\n"}
          • Padrões de projeto e segurança{"\n"}
          • Comunidade ativa e documentação
        </Text>
      </View>
      <View style={styles.courseCard}>
        <Text style={styles.courseTitle}>Desvantagens</Text>
        <Text style={styles.courseText}>
          • Curva de aprendizado{"\n"}
          • Limitações impostas pelo framework{"\n"}
          • Atualizações frequentes podem exigir adaptações
        </Text>
      </View>
      <View style={styles.courseCard}>
        <Text style={styles.courseTitle}>Dicas</Text>
        <Text style={styles.courseText}>
          Escolha frameworks de acordo com o tipo de projeto, comunidade ativa, documentação e experiência da equipe.
        </Text>
      </View>
    </ScrollView>
  );
}

function APIsScreen({ voltar }) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <VoltarButton voltar={voltar} />
      <Text style={styles.devTitle}>APIs</Text>
      <View style={styles.courseCard}>
        <Text style={styles.courseTitle}>O que são APIs?</Text>
        <Text style={styles.courseText}>
          APIs (Application Programming Interfaces) são conjuntos de regras que permitem que diferentes sistemas se comuniquem, trocando dados e funcionalidades.
        </Text>
      </View>
      <View style={styles.courseCard}>
        <Text style={styles.courseTitle}>Tipos de APIs</Text>
        <Text style={styles.courseText}>
          • REST: Baseada em HTTP, simples e muito utilizada.{"\n"}
          • SOAP: Baseada em XML, mais rígida, comum em sistemas corporativos.{"\n"}
          • GraphQL: Consultas flexíveis, retorna apenas os dados necessários.
        </Text>
      </View>
      <View style={styles.courseCard}>
        <Text style={styles.courseTitle}>Ferramentas e Exemplos</Text>
        <Text style={styles.courseText}>
          • Postman (testes de APIs){"\n"}
          • Swagger (documentação){"\n"}
          • Consumo de dados de clima, redes sociais, pagamentos online, mapas, etc.
        </Text>
      </View>
      <View style={styles.courseCard}>
        <Text style={styles.courseTitle}>Boas Práticas</Text>
        <Text style={styles.courseText}>
          Sempre leia a documentação da API, atente-se à autenticação, limites de uso (rate limit) e segurança dos dados.
        </Text>
      </View>
    </ScrollView>
  );
}

function BancoDeDadosScreen({ voltar }) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <VoltarButton voltar={voltar} />
      <Text style={styles.devTitle}>Banco de Dados</Text>
      <View style={styles.courseCard}>
        <Text style={styles.courseTitle}>O que é um Banco de Dados?</Text>
        <Text style={styles.courseText}>
          Um banco de dados é uma coleção organizada de dados, podendo ser relacional (SQL) ou não relacional (NoSQL).
        </Text>
      </View>
      <View style={styles.courseCard}>
        <Text style={styles.courseTitle}>Exemplos</Text>
        <Text style={styles.courseText}>
          <Text style={styles.bold}>Relacionais:</Text> MySQL, PostgreSQL, Oracle, SQL Server{"\n"}
          <Text style={styles.bold}>NoSQL:</Text> MongoDB, Cassandra, Redis, Firebase
        </Text>
      </View>
      <View style={styles.courseCard}>
        <Text style={styles.courseTitle}>Características</Text>
        <Text style={styles.courseText}>
          <Text style={styles.bold}>Relacionais:</Text>{"\n"}
          • Estrutura em tabelas{"\n"}
          • Suporte a transações ACID{"\n"}
          • Uso de SQL{"\n\n"}
          <Text style={styles.bold}>NoSQL:</Text>{"\n"}
          • Estrutura flexível (documentos, chave-valor, grafos){"\n"}
          • Alta escalabilidade horizontal{"\n"}
          • Indicado para grandes volumes de dados não estruturados
        </Text>
      </View>
      <View style={styles.courseCard}>
        <Text style={styles.courseTitle}>Conceitos Importantes</Text>
        <Text style={styles.courseText}>
          • Chave primária e estrangeira{"\n"}
          • Normalização e desnormalização{"\n"}
          • Índices, backups, replicação e sharding{"\n"}
          • Segurança e controle de acesso
        </Text>
      </View>
      <View style={styles.courseCard}>
        <Text style={styles.courseTitle}>Profissional e Ferramentas</Text>
        <Text style={styles.courseText}>
          O DBA (Administrador de Banco de Dados) é o responsável pela gestão.{"\n"}
          Ferramentas: pgAdmin, SQL Server Management Studio, MongoDB Compass.
        </Text>
      </View>
      <View style={styles.courseCard}>
        <Text style={styles.courseTitle}>Dica</Text>
        <Text style={styles.courseText}>
          Escolha o banco de acordo com as necessidades do projeto, volume de dados e experiência da equipe.
        </Text>
      </View>
    </ScrollView>
  );
}

function SoftSkillsScreen({ voltar }) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <VoltarButton voltar={voltar} />
      <Text style={styles.devTitle}>Soft Skills</Text>
      <View style={styles.courseCard}>
        <Text style={styles.courseTitle}>O que são Soft Skills?</Text>
        <Text style={styles.courseText}>
          Soft Skills são habilidades comportamentais e interpessoais essenciais para o sucesso profissional e pessoal. Elas complementam os conhecimentos técnicos (hard skills) e são cada vez mais valorizadas no mercado de trabalho.
        </Text>
      </View>
      <View style={styles.courseCard}>
        <Text style={styles.courseTitle}>Comunicação Eficaz</Text>
        <Text style={styles.courseText}>
          Saber se expressar de forma clara, ouvir ativamente e adaptar a comunicação ao público são pontos-chave. Uma boa comunicação evita conflitos, melhora o trabalho em equipe e aumenta a produtividade.
        </Text>
        <Text style={styles.courseTip}>
          Dica: Pratique feedbacks construtivos e esteja aberto a ouvir opiniões diferentes.
        </Text>
      </View>
      <View style={styles.courseCard}>
        <Text style={styles.courseTitle}>Gestão de Tempo</Text>
        <Text style={styles.courseText}>
          Organizar tarefas, definir prioridades e evitar procrastinação são fundamentais para entregar resultados no prazo e com qualidade. Técnicas como Pomodoro e uso de listas ajudam bastante.
        </Text>
        <Text style={styles.courseTip}>
          Dica: Use ferramentas como agendas, aplicativos de tarefas e estabeleça metas diárias.
        </Text>
      </View>
      <View style={styles.courseCard}>
        <Text style={styles.courseTitle}>Trabalho em Equipe</Text>
        <Text style={styles.courseText}>
          Colaborar, respeitar opiniões, dividir responsabilidades e ajudar colegas são atitudes que fortalecem o grupo e levam a melhores resultados.
        </Text>
        <Text style={styles.courseTip}>
          Dica: Compartilhe conhecimento, celebre conquistas coletivas e esteja disposto a ajudar.
        </Text>
      </View>
      <View style={styles.courseCard}>
        <Text style={styles.courseTitle}>Por que desenvolver Soft Skills?</Text>
        <Text style={styles.courseText}>
          Profissionais com boas soft skills se destacam, têm mais facilidade para liderar, resolver problemas e crescer na carreira.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    backgroundColor: '#181c2f',
    borderRadius: 16,
    margin: 20,
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  title: {
    fontSize: 28,
    color: '#A1EBF5',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#A68FFF',
    marginBottom: 25,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#A68FFF',
    borderRadius: 8,
    padding: 12,
    color: '#fff',
    marginBottom: 18,
    backgroundColor: '#23284d',
  },
  button: {
    backgroundColor: '#A68FFF',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    elevation: 2,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  linkText: {
    marginTop: 18,
    color: '#A1EBF5',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  voltarButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#181c2f',
    paddingVertical: 6,
    paddingHorizontal: 18,
    borderRadius: 20,
    marginBottom: 10,
    marginLeft: -10,
    marginTop: 5,
    elevation: 2,
  },
  voltarButtonText: {
    color: '#A1EBF5',
    fontWeight: 'bold',
    fontSize: 16,
  },
  devContainer: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    backgroundColor: '#181c2f',
  },
  devTitle: {
    fontSize: 26,
    color: '#A1EBF5',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  devSubtitle: {
    fontSize: 16,
    color: '#A68FFF',
    marginBottom: 18,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#23284d',
    padding: 18,
    borderRadius: 14,
    marginVertical: 10,
    width: '100%',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  cardTitle: {
    color: '#A68FFF',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 6,
  },
  cardDesc: {
    color: '#A1EBF5',
    fontSize: 15,
  },
  scrollContent: {
    padding: 20,
    backgroundColor: '#181c2f',
    minHeight: '100%',
  },
  courseCard: {
    backgroundColor: '#23284d',
    borderRadius: 14,
    padding: 18,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 6,
  },
  courseTitle: {
    color: '#A68FFF',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 6,
  },
  courseText: {
    color: '#A1EBF5',
    fontSize: 15,
    lineHeight: 22,
  },
  courseTip: {
    color: '#A1EBF5',
    fontSize: 14,
    marginTop: 8,
    fontStyle: 'italic',
  },
  bold: {
    fontWeight: 'bold',
    color: '#A1EBF5',
  },
});
