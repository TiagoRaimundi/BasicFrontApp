import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

const {height} = Dimensions.get('window')

export const styles = StyleSheet.create({

    safe: {
        flex: 1,
    },
    footer:{
        padding: 24,
        flexDirection: 'row',
        alignItems: 'center'

    },
    container: {
        borderWidth: 1,

    },

    image:{
        width: '100%',
        height: height * 0.45,
  
    },
    content: {
        backgroundColor: colors.white,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        marginTop: -40, 
        paddingHorizontal: 24,

    },

    title: {
        marginTop: 40,
        fontSize: 24,
        fontWeight: '500',

    },
    price: {
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 8,

    },
    description: {
        color: colors.textGrey,
        fontWeight: '300',
        marginVertical: 8,

    },
    bookmarkerContainer:{
        backgroundColor: colors.lightGrey,
        padding: 18,
        borderRadius: 8,
    },
    bookmarkerIcon:{
        width: 24,
        height: 24,

    }
})