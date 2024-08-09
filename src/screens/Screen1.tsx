import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../theme/appTheme";
import { ButtonComponent } from "../components/ButtonComponent";

export const Screen1 = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>BIENVENIDO</Text>
      <View style={styles.buttonContainer}>
        <ButtonComponent textButton="Imagen 1" useNavigationScreen="Screen2" />
        <ButtonComponent textButton="Imagen 2" useNavigationScreen="Screen3" />
        <ButtonComponent textButton=">=" useNavigationScreen="Screen4" />
        <ButtonComponent textButton="<=" useNavigationScreen="Screen5" />
      </View>
    </View>
  );
};
