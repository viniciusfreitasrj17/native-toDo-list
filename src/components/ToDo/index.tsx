import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";

const ToDo: React.FC = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([] as string[]);

  const handleAdd = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleRenderTask = ({ item }: { item: string }) => (
    <Text style={styles.item}> {item} </Text>
  );

  return (
    <SafeAreaView style={styles.adroidSafeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>ToDo List</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.field}
            autoCapitalize="none"
            autoCompleteType="off"
            autoCorrect={false}
            value={task}
            onChangeText={(text) => setTask(text)}
          />
          <TouchableWithoutFeedback onPress={handleAdd}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Add</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item}
          renderItem={handleRenderTask}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  adroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  container: {
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 20,
  },
  field: {
    borderWidth: 1,
    borderColor: "#dcdcdc",
    padding: 10,
    fontSize: 15,
    color: "#333",
    borderRadius: 5,
    flex: 1,
  },
  button: {
    backgroundColor: "#00cc99",
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    marginLeft: 10,
  },
  buttonText: {
    color: "#fdfdfd",
  },
  item: {
    borderWidth: 1,
    borderColor: "#dcdcdc",
    padding: 10,
    marginTop: 15,
    borderRadius: 3,
  },
  form: {
    flexDirection: "row",
  },
});

export default ToDo;
