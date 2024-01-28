import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window")

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "wrap",
    }


})
export default styles;