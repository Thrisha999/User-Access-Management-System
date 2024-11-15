import React from 'react';
import { AccessRequest } from '../../types';
import { Button } from '../ui/Button';
import { Check, X, Clock } from 'lucide-react';
import { Badge } from '../ui/Badge';

type RequestTableProps = {
  requests: AccessRequest[];
  onUpdateStatus: (id: string, status: 'Approved' | 'Rejected') => void;
};

export function RequestTable({ requests, onUpdateStatus }: RequestTableProps) {
  return (
    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
      <table className="min-w-full divide-y divide-gray-300">
        <thead className="bg-gray-50">
          <tr>
            <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
              User
            </th>
            <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Software
            </th>
            <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Access Type
            </th>
            <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Status
            </th>
            <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Reason
            </th>
            <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {requests.map((request) => (
            <tr key={request.id} className="hover:bg-gray-50">
              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm">
                <div className="font-medium text-gray-900">{request.userId}</div>
                <div className="text-gray-500">
                  {new Date(request.createdAt).toLocaleDateString()}
                </div>
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {request.softwareId}
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm">
                <Badge
                  variant={
                    request.accessType === 'Admin'
                      ? 'danger'
                      : request.accessType === 'Write'
                      ? 'warning'
                      : 'default'
                  }
                >
                  {request.accessType}
                </Badge>
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-yellow-500 mr-1.5" />
                  <span className="text-yellow-700">Pending</span>
                </div>
              </td>
              <td className="px-3 py-4 text-sm text-gray-500">
                <div className="max-w-xs truncate">{request.reason}</div>
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm">
                <div className="flex space-x-2">
                  <Button
                    variant="success"
                    size="sm"
                    onClick={() => onUpdateStatus(request.id, 'Approved')}
                  >
                    <Check className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => onUpdateStatus(request.id, 'Rejected')}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}