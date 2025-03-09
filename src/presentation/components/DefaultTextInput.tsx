import { View, ColorValue, TextInput, StyleSheet, Image, KeyboardTypeOptions } from "react-native"

interface Props {
    placeholder?: string;
    value: string;
    onChangeText: (text: string) => void;
    keyboardType?: KeyboardTypeOptions;
    icon: any;
    secureTextEntry?: boolean;
}

export const DefaultTextInput = ({ placeholder,
    value,
    onChangeText,
    keyboardType = 'default',
    icon,
    secureTextEntry = false
}: Props) => {
    return (
        <View style={styles.containerTextInput}>
            <Image
                style={styles.textInputIcon}
                source={icon}
            />

            <TextInput
                onChangeText={text => onChangeText(text)}
                keyboardType={keyboardType}
                style={styles.textInput}
                value={value}
                placeholder={placeholder}
                placeholderTextColor='#ffffff'
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    containerTextInput: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginTop: 10
    },
    textInputIcon: {
        width: 25,
        height: 25,
        marginRight: 15
    },
    textInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff',
        color: '#ffffff',
        fontSize: 18,
        width: '85%'
    }
});
