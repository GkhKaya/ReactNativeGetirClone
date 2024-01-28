import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window")

const styles = StyleSheet.create({
    toucableOpacityStyle: {
        width: width * 0.25,
        height: width * 0.25, 
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: "space-between",
        marginTop: 10,
    }
})
export default styles;