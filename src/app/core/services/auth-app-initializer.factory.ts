import { AuthServices } from './auth-services';

export function authAppInitializerFactory(authService: AuthServices): () => Promise<void> {
  return () => authService.runInitialLoginSequence();
}
