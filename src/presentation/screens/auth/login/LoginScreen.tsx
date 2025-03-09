import { View, Text, Image, Alert } from "react-native"
import { DefaultRoundedButton, DefaultTextInput } from "../../../components"
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../navigator/MainStackNavigator";
import { styles } from "./Styles";
import { useState } from "react";
import { EmailValidator } from "../../../utils";
import { ApiRequestHandler } from "../../../../data/sources/remote/api/ApiRequestHandler";
import { AuthResponse } from "../../../../domain/models/AuthResponse";

interface Props extends StackScreenProps<RootStackParamList, 'LoginScreen'> { };

export const LoginScreen = ({ navigation, route }: Props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if (email == '' || password == '') {
            Alert.alert('Error', 'El email y el password no pueden estar vacios')
            return;
        }

        if (!EmailValidator(email)) {
            Alert.alert('Error', 'El email no es valido')
            return;
        }

        try {
            const response = await ApiRequestHandler.post<AuthResponse>('/auth/login', {
                email,
                password
            });

            console.log(response.data.user.name);
        } catch (error) {
            console.log('Error en la solicitud', error);
        }
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.imageBackground}
                source={require('../../../../../assets/city.jpg')}
            />

            <View style={styles.form}>
                <Image
                    style={styles.imageUser}
                    source={require('../../../../../assets/user.png')}
                />

                <Text style={styles.textLogin}>LOGIN</Text>

                <DefaultTextInput
                    placeholder='Email'
                    icon={require('../../../../../assets/email.png')}
                    onChangeText={text => setEmail(text)}
                    value={email}
                    keyboardType='email-address'
                />

                <DefaultTextInput
                    placeholder='Password'
                    icon={require('../../../../../assets/password.png')}
                    onChangeText={text => setPassword(text)}
                    value={password}
                    secureTextEntry
                />

                <DefaultRoundedButton
                    text='LOGIN'
                    onPress={handleLogin}
                    backgroundColor={'blue'}
                />

                <View style={{
                    flexDirection: 'row',
                    alignSelf: 'center',
                    alignItems: 'center',
                    marginTop: 15
                }}
                >
                    <View style={styles.divider} />
                    <Text style={styles.textDontHaveAccount}>Not have account?</Text>
                    <View style={styles.divider} />
                </View>

                <DefaultRoundedButton
                    text='REGISTER'
                    onPress={() => navigation.navigate('RegisterScreen')}
                    backgroundColor={'#000000'}
                />
            </View>
        </View>
    )
}