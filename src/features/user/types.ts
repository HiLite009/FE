export interface User {
  id: string;
  username: string;
  email: string;
}

export interface UserState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}