import { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Image, Animated } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient"

export default function Splash() {
  const router = useRouter();

  const scale = useRef(new Animated.Value(0.5)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
        Animated.parallel([
      Animated.timing(scale, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
    ]).start();

    const timer = setTimeout(() => {
      router.replace("/login")
    }, 3200)

    return () => clearTimeout(timer);
  }, []);

  return (
    <LinearGradient 
    colors={["#0d0000", "#2b0000", "#5a3a00"]} 
    style={styles.container}>


      <Animated.Image
        source={require("../assets/images/logo(1).png")}
        style={[styles.logo, {transform: [{ scale}], opacity}, ]}
        resizeMode="contain"
      />

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 300,
    height: 300,
    
  },
  slogan: {
    marginTop: 20,
    color: "#eb0a0a",
    fontSize: 24,
    fontWeight: "bold",
  },
});
