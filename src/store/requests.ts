import { create } from 'zustand';
import { AccessRequest } from '../types';

type RequestStore = {
  requests: AccessRequest[];
  createRequest: (request: Omit<AccessRequest, 'id' | 'status' | 'createdAt'>) => void;
  updateRequestStatus: (id: string, status: 'Approved' | 'Rejected') => void;
};

export const useRequestStore = create<RequestStore>((set) => ({
  requests: [],
  createRequest: (newRequest) =>
    set((state) => ({
      requests: [
        ...state.requests,
        {
          ...newRequest,
          id: Math.random().toString(),
          status: 'Pending',
          createdAt: new Date().toISOString(),
        },
      ],
    })),
  updateRequestStatus: (id, status) =>
    set((state) => ({
      requests: state.requests.map((request) =>
        request.id === id ? { ...request, status } : request
      ),
    })),
}));