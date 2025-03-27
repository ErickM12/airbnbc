import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Loading from "../../../kernel/components/Loading";
import { Button } from "@rneui/base";
export default function LearningComponent() {
  //let count = 1;
  const [count, setCount] = useState(1);
  return (
    <View style={{ flex: 1 }}>
      <Text>LearningComponent</Text>
      <Loading
        message="Espere un momento"
        color="red"
        size={32}
        count={count}
        isVisible={false}
      />
      <Button
        title="Incrementar"
        onPress={() => {
          setCount(count + 1);
          console.log("count", count);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
