import { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace("/login");
    }, 200000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo(1).png")}
        style={styles.logo}
        resizeMode="contain"
      />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ece2e2",
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
