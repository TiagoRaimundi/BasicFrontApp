import { StyleSheet } from "react-native"
import { colors } from "../../utils/colors"


export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
        backgroundColor: colors.white,
        marginVertical: 12,
        borderRadius: 4
    },
    title: {
        color: colors.blue,
        fontSize: 18,
        fontWeight: 'bold',
    

    },
    subtitle: {
        color: colors.gray,
        fontSize: 12,
        marginTop: 6,
    },
    arrow: {
        width: 32,
        height: 32,

    }

})

