import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Keyboard,
  Vibration,
  Modal,
  Image,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

interface GInputProps {
  addGoal: (enteredText: string) => void;
  closeModal: () => void;
  modalVisible: boolean;
}

const GoalInput: React.FC<GInputProps> = ({
  addGoal,
  closeModal,
  modalVisible,
}) => {
  const [enteredText, setEnteredText] = useState<string>("");

  const handleTextChange = (text: string) => {
    setEnteredText(text);
    console.log(text)
  };

  const onPressHandler = () => {
    addGoal(enteredText);
    setEnteredText("");
    Keyboard.dismiss();
    Vibration.vibrate(10);
    closeModal();
  };

  return (
    <Modal visible={modalVisible} animationType="slide">
      <LinearGradient
        // Button Linear Gradient
        colors={["#1E1E9F", "#1D1DBF", "rgba(0,212,255,1) "]}
      >
        <View style={styles.inputContainer}>
          <Image
            source={require("../assets/goal.png")}
            style={{ width: 120, height: 120 }}
          />
          <TextInput
            value={enteredText}
            onChangeText={handleTextChange} 
            style={styles.textInput}
            placeholder="Your Goals..."
            placeholderTextColor="#fff"
          ></TextInput>
          <View style={styles.buttonWrapper}>
            <Button title="Cancel" onPress={closeModal} color="#b82351"/>
            <Button onPress={onPressHandler} title="Add goal" color="#7171E5" />
          </View>
        </View>
      </LinearGradient>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10,
    marginVertical: 10,
    gap: 20,
    padding: 20,
    height:"100%"
  },
  textInput: {
    width: "100%",
    fontSize:20,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderColor: "#e4d0ff",
    borderWidth: 2,
    borderRadius: 10,
    color: '#fff',
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent:"center",
    gap: 10,
  },
});

export default GoalInput;
