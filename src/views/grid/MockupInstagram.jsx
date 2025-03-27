import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Avatar } from "@rneui/base";
export default function MockupInstagram(props) {
    const { backgroundColor, size1, size2, size3 } = props;
  return (
    <View style={{ flexDirection: "row", marginHorizontal: 8, backgroundColor: backgroundColor }}>
      <Avatar size={size1} rounded title="EM" containerStyle={styles.avatar} />
      <Avatar size={size2} rounded title="EM" containerStyle={styles.avatar} />
      <Avatar size={size3} rounded title="EM" containerStyle={styles.avatar} />
    </View>
  );
}
const styles = StyleSheet.create({
    avatar: {
        marginHorizontal: 8,
        backgroundColor: "red",
        borderRadius: 50,
      },
});
