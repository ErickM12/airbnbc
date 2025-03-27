import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Image, Input, Button } from "@rneui/base";
import { isEmpty, isEqual } from "lodash";
import { Icon } from "@rneui/base";
export default function CreateAccount(props) {
  const { navigation } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(true);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(true);
  const handleCreateAccount = () => {
    if (isEmpty(email) || isEmpty(password) || isEmpty(passwordConfirm)) {
      setError({
        email: "El correo electrónico es requerido",
        password: "La contraseña es requerida",
        confirmPassword: "La confirmación de la contraseña es requerida",
      });
    } else {
      if (!isEqual(password, passwordConfirm)) {
        setError({
          email: "",
          password: "Las contraseñas no coinciden",
          confirmPassword: "Las contraseñas no coinciden",
        });
      } else {
        setError({ email: "", password: "", confirmPassword: "" });
      }
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
        <Input
          placeholder="Confirmar contraseña"
          label="Confirmar contraseña"
          inputContainerStyle={{ width: "100%" }}
          secureTextEntry={showPasswordConfirm}
          onChange={({ nativeEvent: { text } }) => setPasswordConfirm(text)}
          errorMessage={error.confirmPassword}
          rightIcon={
            <Icon
              onPress={() => setShowPasswordConfirm(!showPasswordConfirm)}
              type="material-community"
              name={showPasswordConfirm ? "eye-outline" : "eye-off-outline"}
            />
          }
        />
        <Button title={"Crear cuenta"} onPress={handleCreateAccount} />
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
