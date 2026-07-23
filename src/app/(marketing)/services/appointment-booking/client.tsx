"use client";

import { motion } from "framer-motion";
import { Calendar as CalendarIcon, Clock, Check, ArrowRight } from "lucide-react";
import React, { useState } from "react";

const steps = [
  "Inquiry", "Availability Checked", "Slots Suggested", "Slot Selected", "Confirmed", "Reminder Sent", "Completed"
];

export default function AppointmentBookingClient() {
  const [activeStep, setActiveStep] = useState(3);

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 overflow-hidden font-inter pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6 border border-blue-100"
          >
            <CalendarIcon className="w-4 h-4" />
            <span>Smart Appointment Booking</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-semibold tracking-tight font-manrope mb-6"
          >
            The lifecycle of a booking, fully automated.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            From the first inquiry to post-meeting follow-ups. Handle rescheduling, waitlists, and no-shows gracefully without lifting a finger.
          </motion.p>
        </div>

        {/* Spatial Calendar Timeline */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-32">
          
          {/* Interactive Calendar Visual */}
          <div className="lg:col-span-7 relative h-[500px] bg-slate-50 rounded-[32px] border border-slate-200 overflow-hidden p-8 flex flex-col perspective-1000">
            <motion.div 
              className="flex-1 w-full bg-white rounded-2xl shadow-xl border border-slate-100 p-6 flex flex-col"
              initial={{ rotateX: 10, rotateY: -10 }}
              whileHover={{ rotateX: 5, rotateY: -5 }}
              transition={{ duration: 0.5 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold text-lg">October 2026</h3>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center"><ArrowRight className="w-4 h-4 rotate-180" /></div>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center"><ArrowRight className="w-4 h-4" /></div>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2 mb-2 text-center text-xs text-slate-500 font-medium">
                {['Mo','Tu','We','Th','Fr','Sa','Su'].map(d => <div key={d}>{d}</div>)}
              </div>
              <div className="grid grid-cols-7 gap-2 flex-1">
                {Array.from({length: 31}).map((_, i) => {
                  const isSelected = i === 14;
                  const isAvailable = [13, 14, 15, 20, 21].includes(i);
                  const isPast = i < 10;
                  
                  return (
                    <div 
                      key={i} 
                      className={`
                        rounded-lg flex items-center justify-center text-sm font-medium transition-colors
                        ${isSelected ? 'bg-blue-600 text-white shadow-md' : 
                          isAvailable ? 'bg-blue-50 text-blue-700 cursor-pointer hover:bg-blue-100' : 
                          isPast ? 'text-slate-300' : 'text-slate-700 hover:bg-slate-50'}
                      `}
                    >
                      {i + 1}
                    </div>
                  );
                })}
              </div>

              {/* Selected State Overlay (Spatial) */}
              <motion.div 
                className="absolute right-[-20px] top-[40%] bg-white p-4 rounded-xl shadow-2xl border border-slate-100 w-48"
                style={{ transform: 'translateZ(50px)' }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-2 text-blue-600 mb-2">
                  <Clock className="w-4 h-4" />
                  <span className="font-semibold text-sm">2:00 PM Slot</span>
                </div>
                <p className="text-xs text-slate-500 mb-3">Oct 15, 2026</p>
                <div className="bg-blue-600 text-white text-center py-1.5 rounded-md text-xs font-medium cursor-pointer">
                  Confirm Booking
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Timeline steps */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {steps.map((step, idx) => {
              const isActive = idx === activeStep;
              const isPast = idx < activeStep;
              
              return (
                <div 
                  key={step}
                  className="flex items-start gap-4 cursor-pointer group"
                  onClick={() => setActiveStep(idx)}
                >
                  <div className="relative flex flex-col items-center">
                    <div className={`
                      w-8 h-8 rounded-full flex items-center justify-center z-10 transition-colors duration-300
                      ${isActive ? 'bg-blue-600 text-white shadow-md shadow-blue-200' : 
                        isPast ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'}
                    `}>
                      {isPast ? <Check className="w-4 h-4" /> : <span className="text-xs font-semibold">{idx + 1}</span>}
                    </div>
                    {idx < steps.length - 1 && (
                      <div className={`w-0.5 h-full absolute top-8 bottom-[-24px] ${isPast ? 'bg-slate-800' : 'bg-slate-100'}`} />
                    )}
                  </div>
                  <div className="pt-1.5 pb-2">
                    <p className={`font-medium transition-colors ${isActive ? 'text-blue-600' : isPast ? 'text-slate-900' : 'text-slate-400'}`}>
                      {step}
                    </p>
                    {isActive && (
                      <motion.p 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="text-sm text-slate-500 mt-1"
                      >
                        Automated handling ensures no drop-offs at this critical stage.
                      </motion.p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </div>
  );
}
