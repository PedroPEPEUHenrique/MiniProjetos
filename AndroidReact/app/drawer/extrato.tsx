import { View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#1E90FF",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 28, marginBottom: 30 }}>
        Contador!
      </Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#ffedd4",
          justifyContent: "space-between",
          padding: 8,
          borderStyle: "solid",
          borderRadius: 20,
          borderWidth: 1,  
          borderColor: "#000"
        }}
      >
        <TouchableOpacity onPress={() => setContador(contador - 1)}>
          <FontAwesome5
            name="minus-circle"
            size={50}
            color="#1E90FF"
          />
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 40,
            marginHorizontal: 30,
          }}
        >
          {contador}
        </Text>

        <TouchableOpacity onPress={() => setContador(contador + 1)}>
          <FontAwesome5
            name="plus-circle"
            size={50}
            color="#1E90FF"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
