import { create } from 'zustand';
import { Software } from '../types';

type SoftwareStore = {
  software: Software[];
  addSoftware: (software: Omit<Software, 'id'>) => void;
};

export const useSoftwareStore = create<SoftwareStore>((set) => ({
  software: [],
  addSoftware: (newSoftware) =>
    set((state) => ({
      software: [
        ...state.software,
        { ...newSoftware, id: Math.random().toString() },
      ],
    })),
}));