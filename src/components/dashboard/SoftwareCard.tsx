import React from 'react';
import { Software } from '../../types';
import { Card, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Settings } from 'lucide-react';

type SoftwareCardProps = {
  software: Software;
};

export function SoftwareCard({ software }: SoftwareCardProps) {
  return (
    <Card className="group">
      <CardContent>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
              {software.name}
            </h3>
            <p className="mt-1 text-sm text-gray-500">{software.description}</p>
          </div>
          <button className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100">
            <Settings className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-4">
          <p className="text-xs font-medium text-gray-500 mb-2">Access Levels</p>
          <div className="flex flex-wrap gap-2">
            {software.accessLevels.map((level) => (
              <Badge key={level} variant={level === 'Admin' ? 'danger' : level === 'Write' ? 'warning' : 'default'}>
                {level}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}