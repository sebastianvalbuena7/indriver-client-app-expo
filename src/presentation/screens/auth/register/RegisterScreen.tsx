import { useState } from "react"
import { View, Image, Text, Pressable, Alert, KeyboardAvoidingView, Platform, ScrollView } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { styles } from "./Styles"
import { DefaultRoundedButton, DefaultTextInput } from "../../../components"
import { RootStackParamList } from "../../../navigator/MainStackNavigator"
import { EmailValidator } from "../../../utils"
import { container } from "../../../../di/container"
import { RegisterViewModel } from "./RegisterViewModel"

interface Props extends StackScreenProps<RootStackParamList, 'RegisterScreen'> { };

export const RegisterScreen = ({ navigation, route }: Props) => {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const registerViewModel: RegisterViewModel = container.resolve('registerViewModel');

    const handleRegister = async () => {
        if (name === '')
            return Alert.alert('Error', 'El nombre esta vacio');

        if (lastname === '')
            return Alert.alert('Error', 'El apellido esta vacio');

        if (email === '')
            return Alert.alert('Error', 'El correo esta vacio');

        if (phone === '')
            return Alert.alert('Error', 'El telefono esta vacio');

        if (password === '')
            return Alert.alert('Error', 'La contraseña esta vacia');

        if (confirmPassword === '')
            return Alert.alert('Error', 'La confirmación de contraseña no puede estar vacia');

        if (!EmailValidator(email))
            return Alert.alert('Error', 'El correo no es valido');

        if (password !== confirmPassword)
            return Alert.alert('Error', 'Las contraseñas no coinciden');

        const response = await registerViewModel.register({
            name,
            lastname,
            email,
            phone,
            password
        });

        console.log(response)
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
                            value={lastname}
                            onChangeText={setLastname}
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
