import {StyleSheet,Dimensions} from "react-native"
const deviceSize = Dimensions.get("window")

const login_page_styles = StyleSheet.create({
    container : {
        flex:1,
    },
    formContainer : {
        flex:1,
        justifyContent:"center"
    },
    headerText : {
        fontSize:23,
        fontWeight:"bold"
    },
    inputContainer : {
        backgroundColor:"#dedede",
        marginHorizontal:10,
        marginTop:20,
        borderRadius:5
    }

})

export {login_page_styles}