import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    imageBackground: {
        width: '100%',
        height: '100%',
        opacity: 0.5,
    },
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        justifyContent: 'center',
        borderRadius: 20,
        position: 'absolute',
        width: '87%',
        height: '80%',
        backgroundColor: 'rgba(255,255,255, 0.2)',
        paddingHorizontal: 20
    },
    textLogin: {
        color: '#ffffff',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    imageUser: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginBottom: 15,
    },
    textDontHaveAccount: {
        color: '#ffffff',
        fontSize: 18
    },
    divider: {
        height: 1,
        width: 80,
        backgroundColor: '#ffffff',
        marginHorizontal: 5
    }
});