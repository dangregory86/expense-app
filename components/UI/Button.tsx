import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { Props } from "react";
import { GlobalStyles } from "../../constants/styles";

const Button: React.FC<Props> = ({ children, mode, onPress, style }) => {
  //   const { children, mode, onPress, style } = props;

  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}>
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text
            style={[styles.buttonText, mode === "flate" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyles.colours.primary500,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  flatText: {
    color: GlobalStyles.colours.primary200,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colours.primary200,
  },
});
