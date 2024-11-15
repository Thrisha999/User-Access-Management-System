import React from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-sm ring-1 ring-gray-100 transition-all duration-200 hover:shadow-md ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children }: { children: React.ReactNode }) {
  return <div className="px-6 py-4 border-b border-gray-50">{children}</div>;
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="px-6 py-4">{children}</div>;
}

export function CardFooter({ children }: { children: React.ReactNode }) {
  return <div className="px-6 py-4 bg-gray-50/50">{children}</div>;
}