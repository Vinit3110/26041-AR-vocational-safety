import React, { useState } from 'react';
import { Modal } from '../common/Modal';
import { Button } from '../common/Button';
import type { Worker } from '../../data/types';
import { UserPlus } from 'lucide-react';

interface AddWorkerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddWorker: (worker: Omit<Worker, 'id' | 'joinedDate' | 'progress' | 'progressPercent' | 'latestScore' | 'certificateStatus'>) => void;
}

export const AddWorkerModal: React.FC<AddWorkerModalProps> = ({
  isOpen,
  onClose,
  onAddWorker
}) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('Miner');
  const [department, setDepartment] = useState('Underground Operations');
  const [location, setLocation] = useState('Dhanbad Colliery');
  const [language, setLanguage] = useState('Hindi');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    onAddWorker({
      name,
      role,
      department,
      location,
      preferredLanguage: language
    });

    setName('');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Enroll New Industrial Worker">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-[#5F6B67] mb-1">Full Name</label>
          <input
            type="text"
            required
            placeholder="e.g. Birsa Munda"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 text-xs bg-white border border-[#E2E8E5] rounded-md text-[#17211F] focus:outline-none focus:border-[#176B5B]"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-[#5F6B67] mb-1">Role / Trade</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-3 py-2 text-xs bg-white border border-[#E2E8E5] rounded-md text-[#17211F] focus:outline-none focus:border-[#176B5B]"
            >
              <option value="Miner">Miner</option>
              <option value="Operator">Operator</option>
              <option value="Technician">Technician</option>
              <option value="Electrician">Electrician</option>
              <option value="Safety Inspector">Safety Inspector</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#5F6B67] mb-1">Preferred Language</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full px-3 py-2 text-xs bg-white border border-[#E2E8E5] rounded-md text-[#17211F] focus:outline-none focus:border-[#176B5B]"
            >
              <option value="Hindi">Hindi (हिंदी)</option>
              <option value="Santhali">Santhali (संथाली)</option>
              <option value="Bengali">Bengali (বাংলা)</option>
              <option value="English">English</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-[#5F6B67] mb-1">Department</label>
            <input
              type="text"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="w-full px-3 py-2 text-xs bg-white border border-[#E2E8E5] rounded-md text-[#17211F] focus:outline-none focus:border-[#176B5B]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#5F6B67] mb-1">Location Hub</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-3 py-2 text-xs bg-white border border-[#E2E8E5] rounded-md text-[#17211F] focus:outline-none focus:border-[#176B5B]"
            />
          </div>
        </div>

        <div className="pt-4 border-t border-[#E2E8E5] flex justify-end gap-2">
          <Button type="button" variant="outline" size="sm" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" variant="primary" size="sm" icon={<UserPlus className="w-4 h-4" />}>
            Enroll Worker
          </Button>
        </div>
      </form>
    </Modal>
  );
};
