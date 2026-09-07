import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  children,
  className = '',
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeClasses = {
    sm: 'px-2.5 py-1 text-xs gap-1.5',
    md: 'px-3.5 py-1.5 text-xs gap-2',
    lg: 'px-4 py-2 text-sm gap-2'
  };

  const variantClasses = {
    primary:
      'bg-[#176B5B] text-white hover:bg-[#115044] border border-[#176B5B] shadow-xs font-semibold',
    secondary:
      'bg-[#F7F8F6] text-[#17211F] hover:bg-[#E2E8E5] border border-[#E2E8E5]',
    outline:
      'bg-white text-[#17211F] hover:bg-[#F7F8F6] border border-[#E2E8E5]',
    danger:
      'bg-[#D64545] text-white hover:bg-[#B91C1C] border border-[#D64545]'
  };

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
