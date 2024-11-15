export type Role = 'Employee' | 'Manager' | 'Admin';

export type User = {
  id: string;
  username: string;
  role: Role;
};

export type Software = {
  id: string;
  name: string;
  description: string;
  accessLevels: ('Read' | 'Write' | 'Admin')[];
};

export type AccessRequest = {
  id: string;
  userId: string;
  softwareId: string;
  accessType: 'Read' | 'Write' | 'Admin';
  reason: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  createdAt: string;
};