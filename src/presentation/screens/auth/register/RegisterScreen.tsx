import { useState } from "react"
import { View, Image, Text, Pressable, Alert, KeyboardAvoidingView, Platform, ScrollView } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { styles } from "./Styles"
import { DefaultRoundedButton, DefaultTextInput } from "../../../components"
import { RootStackParamList } from "../../../navigator/MainStackNavigator"
import { EmailValidator } from "../../../utils"

interface Props extends StackScreenProps<RootStackParamList, 'RegisterScreen'> { };

export const RegisterScreen = ({ navigation, route }: Props) => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = () => {
        if (name === '') {
            Alert.alert('Error', 'El nombre esta vacio')
            return;
        }

        if (lastName === '') {
            Alert.alert('Error', 'El apellido esta vacio')
            return;
        }

        if (email === '') {
            Alert.alert('Error', 'El correo esta vacio')
            return;
        }

        if (phone === '') {
            Alert.alert('Error', 'El telefono esta vacio')
            return;
        }

        if (password === '') {
            Alert.alert('Error', 'La contraseña esta vacia')
            return;
        }

        if (confirmPassword === '') {
            Alert.alert('Error', 'La confirmación de contraseña no puede estar vacia')
            return;
        }

        if (EmailValidator(email)) {
            Alert.alert('Error', 'El correo no es valido')
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert('Error', 'Las contraseñas no coinciden')
            return;
        }

        console.log(name)
        console.log(lastName)
        console.log(email)
        console.log(phone)
        console.log(password)
        console.log(confirmPassword)
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{
                flex: 1
            }}
        >
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1
                }}
                keyboardShouldPersistTaps='handled'
            >
                <View style={styles.container}>
                    <Image
                        style={styles.imageBackground}
                        source={require('../../../../../assets/city.jpg')}
                    />

                    <View style={styles.form}>
                        <Pressable onPress={() => navigation.pop()}>
                            <Image
                                source={require('../../../../../assets/left_arrow.png')}
                                style={styles.back}
                            />
                        </Pressable>

                        <Image
                            source={require('../../../../../assets/user.png')}
                            style={styles.imageUser}
                        />

                        <Text style={styles.textRegister}>REGISTRO</Text>

                        <DefaultTextInput
                            placeholder='Name'
                            value={name}
                            onChangeText={setName}
                            icon={require('../../../../../assets/user.png')}
                        />

                        <DefaultTextInput
                            placeholder='Last Name'
                            value={lastName}
                            onChangeText={setLastName}
                            icon={require('../../../../../assets/user_image.png')}
                        />

                        <DefaultTextInput
                            placeholder='Email'
                            value={email}
                            onChangeText={setEmail}
                            icon={require('../../../../../assets/email.png')}
                            keyboardType="email-address"
                        />

                        <DefaultTextInput
                            placeholder='Phone'
                            value={phone}
                            onChangeText={setPhone}
                            icon={require('../../../../../assets/phone.png')}
                            keyboardType="numeric"
                        />

                        <DefaultTextInput
                            placeholder='Password'
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                            icon={require('../../../../../assets/password.png')}
                        />

                        <DefaultTextInput
                            placeholder='Confirm Password'
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            secureTextEntry
                            icon={require('../../../../../assets/password.png')}
                        />

                        <DefaultRoundedButton
                            onPress={handleRegister}
                            text="REGISTRARSE"
                            backgroundColor='black'
                        />
                    </View>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
