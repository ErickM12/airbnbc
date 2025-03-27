import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Image, Input, Button } from "@rneui/base";
import { isEmpty } from "lodash";
import { Icon } from "@rneui/base";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default function Login(props) {
  const { navigation } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(true);
  const handleLogin = () => {
    if (isEmpty(email) || isEmpty(password)) {
      setError({
        email: "El correo electrónico es requerido",
        password: "La contraseña es requerida",
      });
    } else {
      setError({ email: "", password: "" });
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("iniciando: ",user);
          
          // ...
        })
        .catch((error) => {
          console.log("error: ", error);  
          
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        style={{ width: 50, height: 50 }}
      />
      <View style={{ margin: 16 }}>
        <Input
          placeholder="Correo electrónico"
          label="Correo electrónico"
          keyboardType="email-address"
          inputContainerStyle={{ width: "100%" }}
          onChange={({ nativeEvent: { text } }) => setEmail(text)}
          errorMessage={error.email}
        />

        <Input
          placeholder="Contraseña"
          label="Contraseña"
          inputContainerStyle={{ width: "100%" }}
          secureTextEntry={showPassword}
          onChange={({ nativeEvent: { text } }) => setPassword(text)}
          errorMessage={error.password}
          rightIcon={
            <Icon
              onPress={() => setShowPassword(!showPassword)}
              type="material-community"
              name={showPassword ? "eye-outline" : "eye-off-outline"}
            />
          }
        />
        <Button title={"Iniciar sesión"} onPress={handleLogin} />
        <Button
          type="clear"
          title="Crear cuenta"
          onPress={() => navigation.navigate("CreateAccountStack")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
