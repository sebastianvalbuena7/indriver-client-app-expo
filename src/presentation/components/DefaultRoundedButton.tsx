import { Pressable, StyleSheet, Text, ColorValue } from "react-native"

interface Props {
    text: string;
    onPress?: () => void;
    textColor?: ColorValue;
    backgroundColor?: ColorValue;
}

export const DefaultRoundedButton = ({ text, onPress, textColor, backgroundColor = 'red' }: Props) => {
    return (
        <Pressable
            style={{ ...styles.roundedButton, backgroundColor: backgroundColor }}
            onPress={onPress}
        >
            <Text style={{
                ...styles.textButton
                // , color: textColor
            }}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    roundedButton: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 55,
        marginTop: 25
    },
    textButton: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold'
    },
});