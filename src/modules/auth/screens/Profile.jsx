import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Icon, Avatar, Button } from "@rneui/base";
import { getAuth } from "firebase/auth";
import ProfileOptions from "../components/profile/ProfileOptions";

export default function Profile() {
  const auth = getAuth();
  const [user, setUser] = useState(auth.currentUser);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", marginLeft: 16, marginBottom: 16 }}>
        <Avatar
          rounded
          size="large"
          source={
            user.photoURL !== null
              ? { uri: user.photoURL }
              : {
                  uri: "https://placehold.co/600x400",
                }
          }
        />
        <View
          style={{
            marginLeft: 8,
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Text style={{ fontWeight: "bold" }}>
            {user.displayName ? user.displayName : "Sin nombre"}
          </Text>
          <Text>{user.email ? user.email : "Anónimo"}</Text>
        </View>
      </View>
      <ProfileOptions />
      <Button
        title={"Cerrar sesión"}
        containerStyle={styles.btnLogoutContainer}
        buttonStyle={styles.btnLogout}
        titleStyle={{ color: "#4abfa4" }}
        onPress={() => {
          auth.signOut();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 64,
  },
  btnLogoutContainer: {
    margin: 16,
  },
  btnLogout: {
    backgroundColor: 'white',
    borderColor: '#4abfa4',
    borderWidth: 2,
  }
});
