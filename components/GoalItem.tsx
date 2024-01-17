import { View, Text, StyleSheet, Pressable } from "react-native";

interface GItemProps {
  item: { text: string; id: string };
  deleteGoal: (id: string) => void;
}

const GoalItem: React.FC<GItemProps> = ({ item, deleteGoal }) => {
  return (
    <View style={styles.listTextWrapper}>
      <Pressable
        onPress={() => deleteGoal(item.id)}
        android_ripple={{ color: "#9999F4",  borderless: true }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.listText}>{item.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  listTextWrapper: {
    backgroundColor: "#7A7AE6",
    borderRadius: 10,
    marginVertical: 5,
  },
  listText: {
    color: "#fff",
    fontWeight: "600",
    padding: 10,
    borderRadius: 10,
  },
  pressedItem: {
    opacity: 0.5,
  },
});

export default GoalItem;
