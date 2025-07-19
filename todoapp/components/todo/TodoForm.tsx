'use client';

import { useState } from 'react';

interface TodoFormProps {
  onAdd: (title: string) => void;
  loading: boolean;
}

export default function TodoForm({ onAdd, loading }: TodoFormProps) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title);
      setTitle('');
    }
  };

  return (
    <div className="group relative mb-6 sm:mb-8 lg:mb-12">
      {/* Floating glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#FF6A3F] via-[#FFAC26] to-[#FF6A3F] rounded-2xl sm:rounded-3xl blur opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
      
      <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl border border-orange-200/50 p-4 sm:p-6 lg:p-8">
        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#FF6A3F] to-[#FFAC26] rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <div>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 tracking-tight">Add New Task</h2>
            <p className="text-gray-500 text-xs sm:text-sm hidden sm:block">What would you like to accomplish today?</p>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF6A3F]/10 to-[#FFAC26]/10 rounded-xl sm:rounded-2xl blur-lg opacity-0 group-focus-within:opacity-100 transition-all duration-300"></div>
            <div className="relative flex flex-col sm:flex-row gap-3 sm:gap-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Type your task here..."
                  className="w-full px-4 py-3 sm:px-6 sm:py-4 text-base sm:text-lg text-gray-800 bg-orange-50/50 backdrop-blur-sm border-2 border-orange-200 rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#FF6A3F]/50 focus:border-[#FF6A3F] transition-all duration-300 placeholder-gray-400 shadow-lg hover:shadow-xl"
                  disabled={loading}
                />
                {/* Floating focus effect */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#FF6A3F]/0 via-[#FFAC26]/0 to-[#FF6A3F]/0 focus-within:from-[#FF6A3F]/5 focus-within:via-[#FFAC26]/5 focus-within:to-[#FF6A3F]/5 transition-all duration-300 pointer-events-none"></div>
              </div>
              
              <button
                type="submit"
                disabled={loading || !title.trim()}
                className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#FF6A3F] to-[#FFAC26] text-white font-semibold text-base sm:text-lg rounded-xl sm:rounded-2xl hover:from-[#E55A35] hover:to-[#E59B20] focus:outline-none focus:ring-2 focus:ring-[#FF6A3F] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 shadow-xl hover:shadow-2xl hover:scale-105 transform active:scale-95 w-full sm:w-auto"
              >
                {/* Button glow effect */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#FF6A3F] to-[#FFAC26] opacity-0 group-hover:opacity-30 blur-xl transition-all duration-300"></div>
                
                <div className="relative flex items-center gap-2 sm:gap-3">
                  {loading ? (
                    <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110 group-active:scale-95" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                    </svg>
                  )}
                  <span className="font-semibold">
                    {loading ? 'Adding...' : 'Add Task'}
                  </span>
                </div>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
