import { AuthResponse } from "../../models";
import { ErrorResponse } from "../../models/ErrorResponse";
import { AuthRepository } from "../../repository/AuthRepository";

export class LoginUseCase {
    private authRepository: AuthRepository

    constructor({ authRepository }: { authRepository: AuthRepository }) {
        this.authRepository = authRepository;
    }

    async execute(email: string, password: string): Promise<AuthResponse | ErrorResponse> {
        return await this.authRepository.login(email, password);
    }
}