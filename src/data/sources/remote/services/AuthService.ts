import { AuthResponse, User } from "../../../../domain/models";
import { defaultErrorResponse, ErrorResponse } from "../../../../domain/models/ErrorResponse";
import { ApiRequestHandler } from "../api/ApiRequestHandler";

export class AuthService {
    async login(email: string, password: string): Promise<AuthResponse | ErrorResponse> {
        try {
            const response = await ApiRequestHandler.post<AuthResponse>('/auth/login', {
                email,
                password
            });

            console.log(response.data);

            return response.data;
        } catch (error: any) {
            if (error.response) {
                const errorData: ErrorResponse = error.response.data;

                if (Array.isArray(errorData.message)) {
                    console.error('Errores multiples del servidor', errorData.message.join(', '));
                } else {
                    console.error('Error del servidor', errorData.message);
                }

                return errorData;
            } else {
                console.log('Error en la peticion', error.message);

                return defaultErrorResponse;
            }
        }
    }

    async register(user: User): Promise<AuthResponse | ErrorResponse> {
        try {
            const response = await ApiRequestHandler.post<AuthResponse>('/auth/register', user);

            console.log(response.data);

            return response.data;
        } catch (error: any) {
            if (error.response) {
                const errorData: ErrorResponse = error.response.data;

                if (Array.isArray(errorData.message)) {
                    console.error('Errores multiples del servidor', errorData.message.join(', '));
                } else {
                    console.error('Error del servidor', errorData.message);
                }

                return errorData;
            } else {
                console.log('Error en la peticion', error.message);

                return defaultErrorResponse;
            }
        }
    }
}