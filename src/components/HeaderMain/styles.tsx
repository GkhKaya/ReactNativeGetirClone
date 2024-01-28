import { StyleSheet, Dimensions } from "react-native";

const {height}= Dimensions.get("window");

const styles = StyleSheet.create({
    headerMain: {
        height: height * 0.064,
        backgroundColor: "#F7D102",
    },
    headerOne : {
        height: height * 0.064,
        width: "80%",
        backgroundColor: "white",
        alignItems: "center",
        paddingHorizontal: "3%",
        flexDirection: "row",
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
    },

    headerOneView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: 8,
        paddingLeft: 8,
        borderLeftColor: "#F3F2Fd",
        borderLeftWidth: 2,
    },
    image:{
        width: 30,
        height: 30,
    },
    headerTwo: {  
        width: "25%",
        height: height * 0.064,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 10,
        marginLeft: 10,

    }
    
})
export default styles;