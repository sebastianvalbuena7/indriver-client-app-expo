import { AuthResponse, User } from "../../../../domain/models";
import { ErrorResponse } from "../../../../domain/models/ErrorResponse";
import { RegisterUseCase } from '../../../../domain/useCases/auth/RegisterUseCase';

export class RegisterViewModel {
    private registerUseCase: RegisterUseCase;

    constructor({ registerUseCase }: { registerUseCase: RegisterUseCase }) {
        this.registerUseCase = registerUseCase;
    }

    async register(user: User): Promise<AuthResponse | ErrorResponse> {
        return await this.registerUseCase.execute(user);
    }
}