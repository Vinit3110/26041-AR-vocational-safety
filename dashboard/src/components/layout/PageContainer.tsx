import React from 'react';

interface PageContainerProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
}

export const PageContainer: React.FC<PageContainerProps> = ({
  title,
  subtitle,
  action,
  children
}) => {
  return (
    <main className="p-4 md:p-6 space-y-6 max-w-7xl mx-auto">
      {/* Page Title Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#E2E8E5]">
        <div>
          <h1 className="text-xl font-extrabold text-[#17211F] tracking-tight">{title}</h1>
          {subtitle && <p className="text-xs text-[#5F6B67] mt-0.5">{subtitle}</p>}
        </div>
        {action && <div className="flex items-center gap-3">{action}</div>}
      </div>

      {/* Page Content */}
      <div className="space-y-6">{children}</div>
    </main>
  );
};
