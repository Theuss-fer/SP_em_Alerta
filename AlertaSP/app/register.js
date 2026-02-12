import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";
import{ Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function Register(){
    const router = useRouter();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function handleRegister() {
        if(!name || !email || !password || !confirmPassword){
            Alert.alert("Erro", "Preencha todos os campos.");
            return;
        }

        if(password !== confirmPassword){
            Alert.alert("Erro", "As senhas não coincidem.");
            return;
        }

        //integrar backend
        Alert.alert("Sucesso", "Conta criada com sucesso!");

        router.replace("/login");

    }
    return(
        <LinearGradient 
         colors={["#0d0000", "#2b0000", "#5a3a00"]}
        style={styles.container}>

            <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                <Ionicons name="arrow-back-circle" size={28} color="#fff"/>
            </TouchableOpacity>

            
            <Text style={styles.title}>Criar Conta</Text>

            <TextInput
             style={styles.input}
             placeholder="Nome"
             value={name}
             placeholderTextColor="#000000"
             onChangeText={setName}
            />

            <TextInput
             style={styles.input}
             placeholder="Email"
             value={email}
             placeholderTextColor="#000000"
             onChangeText={setEmail}
            />

            <TextInput
             style={styles.input}
             placeholder="Senha"
             value={password}
             placeholderTextColor="#000000"
             secureTextEntry
             onChangeText={setPassword}
            />

            <TextInput
             style={styles.input}
             placeholder="Confirmar Senha"
             value={confirmPassword}
             placeholderTextColor="#000000"
             secureTextEntry
             onChangeText={setConfirmPassword}
            />

            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Bora Alertar!</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => router.replace("/login")}>
                <Text style={styles.buttonText}>Já Alerta? Entrar</Text>
            </TouchableOpacity>

            
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    container:{
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
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
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
  backButton:{
    position: "absolute",
    top:  50,
    left: 20
  }
})