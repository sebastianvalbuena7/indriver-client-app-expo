import { AuthResponse } from "../../../../domain/models";
import { ErrorResponse } from "../../../../domain/models/ErrorResponse";
import { LoginUseCase } from "../../../../domain/useCases/auth/LoginUseCase";

export class LoginViewModel {
    private loginUseCase: LoginUseCase;

    constructor({ loginUseCase }: { loginUseCase: LoginUseCase }) {
        this.loginUseCase = loginUseCase;
    }

    async login(email: string, password: string): Promise<AuthResponse | ErrorResponse> {
        return await this.loginUseCase.execute(email, password);
    }
}