import { router } from "expo-router";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Login() {
  return (
    <LinearGradient 
      colors={["#0d0000", "#2b0000", "#5a3a00"]}    
    style={styles.container}>
      <Text style={styles.title}>SP em Alerta ⚠️</Text>

      <TextInput style={styles.input} placeholder="E-mail" placeholderTextColor="#000000" />
      <TextInput style={styles.input} placeholder="Senha" olderTextColor="#000000" secureTextEntry />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.link}>Esqueci minha senha</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => router.navigate("/register")}>
        <Text style={styles.link}>Criar conta</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
    color: "#fff",
  },
  input: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    color: "#000000",
    
  },
  button: {
    backgroundColor: "#FFD700",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#000000",
    fontWeight: "bold",
  },
  link: {
    textAlign: "center",
    marginTop: 15,
    color: "#fff",
    fontWeight: "bold",
  },
});
