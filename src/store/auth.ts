import { create } from 'zustand';
import { Role, User } from '../types';

type AuthStore = {
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  signup: (username: string, password: string, role?: Role) => Promise<void>;
  logout: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  login: async (username, password) => {
    // Simulated API call
    const user: User = {
      id: '1',
      username,
      role: 'Employee',
    };
    set({ user });
  },
  signup: async (username, password, role = 'Employee') => {
    // Simulated API call
    const user: User = {
      id: '1',
      username,
      role,
    };
    set({ user });
  },
  logout: () => set({ user: null }),
}));