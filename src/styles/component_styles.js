import {StyleSheet,Dimensions} from "react-native"
const deviceSize = Dimensions.get("window")

const custom_button_styles = StyleSheet.create({
    buttonContainer : {
        backgroundColor:"tomato",
        paddingVertical:10,
        borderRadius:10,
        marginTop:10,
        justifyContent:"center",
        alignItems:"center"
    },
    buttonText : {
        fontSize:15
    }
})

export {custom_button_styles}