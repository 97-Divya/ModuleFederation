declare module "auth/useAuthStore" {
  interface AuthState {
    loggedInUser: string | null;
    login: (username: string, password: string) => boolean;
    signup: (username: string, password: string) => boolean;
    logout: () => void;
  }

  const useAuthStore: () => AuthState;
  export default useAuthStore;
}
