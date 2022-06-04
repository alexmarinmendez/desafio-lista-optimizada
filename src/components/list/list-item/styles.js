import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerItem: {
        marginVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
      controlsContainer: {
        flexDirection: "row",
        justifyContent: "space-around"
      },
      item: {
        fontSize: 14,
        color: "#212121",
      },
      itemDone: {
        textDecorationLine: "line-through",
        color: "red",
        fontWeight: "bold",
      },
      doneButton: {
        backgroundColor: "#8CBCB9",
        paddingHorizontal: 15,
        paddingVertical: 5,
        margin: 1,
      },
      editButton: {
        backgroundColor: "#8FCCC9",
        paddingHorizontal: 15,
        paddingVertical: 5,
        margin: 1,
      },
      deleteButton: {
        backgroundColor: "#FFBCB9",
        paddingHorizontal: 15,
        paddingVertical: 5,
        margin: 1,
      },
      doneButtonText: {
        color: "#ffffff",
        fontSize: 14,
        fontWeight: "bold",
      },
      editButtonText: {
        color: "#ffffff",
        fontSize: 14,
        fontWeight: "bold",
      },
      deleteButtonText: {
        color: "#ffffff",
        fontSize: 14,
        fontWeight: "bold",
      },
})

