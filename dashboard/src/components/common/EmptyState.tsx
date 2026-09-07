import React from 'react';
import { Inbox } from 'lucide-react';

interface EmptyStateProps {
  title: string;
  description: string;
  action?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ title, description, action }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 rounded-lg border border-[#E2E8E5] bg-white text-center">
      <div className="p-3 rounded-full bg-[#F7F8F6] border border-[#E2E8E5] text-[#5F6B67] mb-3">
        <Inbox className="w-6 h-6" />
      </div>
      <h4 className="text-sm font-bold text-[#17211F]">{title}</h4>
      <p className="text-xs text-[#5F6B67] max-w-sm mt-1 mb-4">{description}</p>
      {action && <div>{action}</div>}
    </div>
  );
};
