import React from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#17211F]/40 backdrop-blur-xs">
      <div className="relative w-full max-w-lg rounded-lg border border-[#E2E8E5] bg-white text-[#17211F] shadow-lg overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#E2E8E5] bg-[#F7F8F6]">
          <h3 className="text-sm font-bold text-[#17211F]">{title}</h3>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-[#5F6B67] hover:text-[#17211F] hover:bg-[#E2E8E5] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
};
