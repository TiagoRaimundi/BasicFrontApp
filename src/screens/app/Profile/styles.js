import { StyleSheet } from "react-native";
import {colors} from "../../../utils/colors"

export const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1,
    },

    email:{
        fontSize: 14,
        color: colors.gray,
    },
    name:{
        fontSize: 20,
        color: colors.black,
        fontWeight: 'bold',
        marginBottom: 12,

    }, 
    content:{
        flex: 1,
   

    }
})