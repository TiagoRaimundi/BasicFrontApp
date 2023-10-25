import { StyleSheet } from "react-native"
import { colors } from "../../utils/colors"


export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
        backgroundColor: colors.white,
        marginVertical: 12,
        borderRadius: 4
    },

    subtitle: {
        color: colors.gray,
        fontSize: 12,
        marginTop: 6,
    },
    input:{
        color: colors.blue,
        fontWeight: '500',
        fontSize: 14,
    },
    
    label:{
        color: colors.gray,
        marginTop: 6,
        fontSize: 12,
        marginBottom: 6,
    },


})

