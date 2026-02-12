import { router } from "expo-router";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../styles/loginStyle";

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


