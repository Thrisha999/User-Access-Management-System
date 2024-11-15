import React from 'react';
import { useAuthStore } from '../store/auth';
import { useRequestStore } from '../store/requests';
import { useSoftwareStore } from '../store/software';
import { Plus } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import { SoftwareCard } from '../components/dashboard/SoftwareCard';
import { RequestTable } from '../components/dashboard/RequestTable';

export default function Dashboard() {
  const user = useAuthStore((state) => state.user);
  const software = useSoftwareStore((state) => state.software);
  const { requests, updateRequestStatus } = useRequestStore();

  if (!user) return null;

  const pendingRequests = requests.filter(
    (request) => request.status === 'Pending'
  );

  return (
    <div className="space-y-8">
      <header className="border-b border-gray-100 pb-5">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="mt-1 text-sm text-gray-500">
              Welcome back, {user.username}
            </p>
          </div>
          {user.role === 'Admin' && (
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Software
            </Button>
          )}
        </div>
      </header>

      {user.role === 'Admin' && (
        <section className="space-y-6">
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold text-gray-900">
                Software Applications
              </h2>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {software.map((app) => (
                  <SoftwareCard key={app.id} software={app} />
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      )}

      {user.role === 'Manager' && (
        <section className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-900">
                  Access Requests
                </h2>
                <span className="px-2.5 py-0.5 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                  {pendingRequests.length} Pending
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <RequestTable
                requests={pendingRequests}
                onUpdateStatus={updateRequestStatus}
              />
            </CardContent>
          </Card>
        </section>
      )}
    </div>
  );
}