import { asClass, createContainer } from "awilix";
import { AuthService } from "../data/sources/remote/services/AuthService";
import { AuthRepositoryImpl } from "../data/repository/AuthRepositoryImpl";
import { LoginUseCase } from "../domain/useCases/auth/LoginUseCase";
import { LoginViewModel } from "../presentation/screens/auth/login/LoginViewModel";
import { RegisterViewModel } from "../presentation/screens/auth/register/RegisterViewModel";
import { RegisterUseCase } from "../domain/useCases/auth/RegisterUseCase";

const container = createContainer();

container.register({
    authService: asClass(AuthService).singleton(),
    authRepository: asClass(AuthRepositoryImpl).singleton(),
    loginUseCase: asClass(LoginUseCase).singleton(),
    loginViewModel: asClass(LoginViewModel).singleton(),
    registerUseCase: asClass(RegisterUseCase).singleton(),
    registerViewModel: asClass(RegisterViewModel).singleton()
});

export { container };