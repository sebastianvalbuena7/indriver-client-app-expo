import { AuthResponse, User } from "../../models";
import { ErrorResponse } from "../../models/ErrorResponse";
import { AuthRepository } from "../../repository/AuthRepository";

export class RegisterUseCase {
    private authRepository: AuthRepository

    constructor({ authRepository }: { authRepository: AuthRepository }) {
        this.authRepository = authRepository;
    }

    async execute(user: User): Promise<AuthResponse | ErrorResponse> {
        return await this.authRepository.register(user);
    }
}