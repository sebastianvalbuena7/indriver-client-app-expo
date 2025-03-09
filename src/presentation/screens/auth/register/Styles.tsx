import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        opacity: 0.6
    },
    form: {
        width: '87%',
        height: '75%',
        position: 'absolute',
        backgroundColor: 'rgba(255,2555,255, 0.2)',
        borderRadius: 20,
        paddingHorizontal: 25,
        justifyContent: 'center'
    },
    imageUser: {
        width: 150,
        height: 150,
        alignSelf: 'center'
    },
    textRegister: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
        alignSelf: 'center'
    },
    back: {
        position: 'absolute',
        width: 35,
        height: 35,
        top: 5
    }
});