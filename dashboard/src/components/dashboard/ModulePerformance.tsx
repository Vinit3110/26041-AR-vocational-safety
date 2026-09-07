import React from 'react';
import type { TrainingModule } from '../../data/types';
import { Flame, Wind, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ModulePerformanceProps {
  modules: TrainingModule[];
  totalWorkers?: number;
}

export const ModulePerformance: React.FC<ModulePerformanceProps> = ({ modules, totalWorkers }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between pb-6">
        <div>
          <h3 className="text-xl font-bold text-[#17211F]">AR Module Performance</h3>
          <p className="text-sm text-[#5F6B67] mt-1">Core Training Simulator Metrics</p>
        </div>
        <Link
          to="/training"
          className="text-xs font-semibold text-[#176B5B] hover:text-[#115044] flex items-center gap-1"
        >
          <span>All Modules</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
        {modules.map((module) => {
          const isFire = module.id === 'fire-explosion';
          return (
            <div
              key={module.id}
              className="p-5 border-l-4 border-l-[#176B5B] bg-white space-y-4 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-[#176B5B]">
                    {isFire ? <Flame className="w-5 h-5 text-[#D99000]" /> : <Wind className="w-5 h-5 text-[#2878A8]" />}
                  </div>
                  <h4 className="text-sm font-bold text-[#17211F]">{module.title}</h4>
                </div>
                <p className="text-xs text-[#5F6B67] line-clamp-2 leading-relaxed">
                  {module.description}
                </p>
              </div>

              {/* Progress Bar & Stats Grid */}
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs text-[#5F6B67] uppercase font-bold tracking-wider mb-2">
                    <span>AR Completion</span>
                    <span className="font-mono text-[#17211F]">
                      {totalWorkers ? `${Math.round((module.completionRate/100) * totalWorkers)} / ${totalWorkers}` : `${module.completionRate}%`}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-[#E2E8E5] overflow-hidden">
                    <div
                      className="h-full bg-[#176B5B]"
                      style={{ width: `${module.completionRate}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-6 pt-3">
                  <div>
                    <div className="text-[10px] uppercase font-bold text-[#5F6B67]">AVG Score</div>
                    <div className="font-mono font-bold text-[#17211F] text-lg leading-none mt-1">{module.avgScore}%</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-[#5F6B67]">Pass Rate</div>
                    <div className="font-mono font-bold text-[#18845B] text-lg leading-none mt-1">{module.passRate}%</div>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex justify-between items-center text-[11px]">
                <span className="text-[#5F6B67]">{module.attempts} total attempts</span>
                <Link
                  to={`/training/${module.id}`}
                  className="font-semibold text-[#176B5B] hover:text-[#115044] flex items-center gap-1"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
