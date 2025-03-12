import { User } from "../models";
import { AuthResponse } from "../models/AuthResponse";
import { ErrorResponse } from "../models/ErrorResponse";

export interface AuthRepository {
    login(email: string, password: string): Promise<AuthResponse | ErrorResponse>;
    register(user: User): Promise<AuthResponse | ErrorResponse>;
}