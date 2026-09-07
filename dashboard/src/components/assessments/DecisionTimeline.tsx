import React from 'react';
import type { AssessmentTimelineEvent } from '../../data/types';
import { CheckCircle2, XCircle, Clock, Eye } from 'lucide-react';

interface DecisionTimelineProps {
  events: AssessmentTimelineEvent[];
}

export const DecisionTimeline: React.FC<DecisionTimelineProps> = ({ events }) => {
  return (
    <div className="p-5 rounded-lg border border-[#E2E8E5] bg-white space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-[#E2E8E5]">
        <div>
          <h3 className="text-sm font-bold text-[#17211F]">
            AR Decision Log & Real-Time Action Sequence
          </h3>
          <p className="text-[11px] text-[#5F6B67]">
            Step-by-step spatial decisions evaluated inside the AR headset simulator
          </p>
        </div>
        <span className="text-[10px] font-mono font-bold text-[#176B5B] bg-[#176B5B]/10 px-2 py-1 rounded border border-[#176B5B]/30">
          {events.length} Spatial Trial Events Logged
        </span>
      </div>

      <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#E2E8E5]">
        {events.map((event) => (
          <div key={event.time} className="relative group">
            {/* Timeline Dot Icon */}
            <div className="absolute -left-6 top-0.5 transform -translate-x-1/2 bg-white rounded-full">
              {event.isCorrect ? (
                <CheckCircle2 className="w-5 h-5 text-[#18845B]" />
              ) : (
                <XCircle className="w-5 h-5 text-[#D64545]" />
              )}
            </div>

            {/* Event Card Content */}
            <div className="p-3.5 rounded-md border border-[#E2E8E5] bg-[#F7F8F6] space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[#176B5B]">
                    {event.timestamp}
                  </span>
                  <h4 className="text-xs font-bold text-[#17211F]">{event.action}</h4>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#5F6B67]">
                    <Clock className="w-3 h-3 text-[#5F6B67]" />
                    <span>{event.responseTimeSec}s</span>
                  </span>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                      event.isCorrect
                        ? 'bg-[#18845B]/10 text-[#18845B] border-[#18845B]/30'
                        : 'bg-[#D64545]/10 text-[#D64545] border-[#D64545]/30'
                    }`}
                  >
                    {event.isCorrect ? '✓ Correct Decision' : '✕ Incorrect Procedure'}
                  </span>
                </div>
              </div>

              {/* Observation Note */}
              <div className="p-2.5 rounded bg-white border border-[#E2E8E5] text-xs text-[#17211F] flex items-start gap-2">
                <Eye className="w-3.5 h-3.5 text-[#5F6B67] shrink-0 mt-0.5" />
                <p className="leading-relaxed">{event.notes}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
