'use client';

import { Todo } from '../../types/todo';

interface TodoStatsProps {
  todos: Todo[];
}

export default function TodoStats({ todos }: TodoStatsProps) {
  const total = todos.length;
  const completed = todos.filter(todo => todo.completed).length;
  const remaining = total - completed;
  const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

  const stats = [
    {
      label: 'Total Tasks',
      value: total,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      gradient: 'from-slate-500 to-gray-600',
      bgGradient: 'from-slate-50 to-gray-50',
      textColor: 'text-slate-600',
      iconBg: 'from-slate-500 to-gray-600'
    },
    {
      label: 'Active',
      value: remaining,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: 'from-[#FF6A3F] to-[#FFAC26]',
      bgGradient: 'from-orange-50 to-amber-50',
      textColor: 'text-[#FF6A3F]',
      iconBg: 'from-[#FF6A3F] to-[#FFAC26]'
    },
    {
      label: 'Completed',
      value: completed,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: 'from-emerald-500 to-green-600',
      bgGradient: 'from-emerald-50 to-green-50',
      textColor: 'text-emerald-600',
      iconBg: 'from-emerald-500 to-green-600'
    },
    {
      label: 'Progress',
      value: `${completionRate}%`,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      gradient: 'from-blue-500 to-indigo-600',
      bgGradient: 'from-blue-50 to-indigo-50',
      textColor: 'text-blue-600',
      iconBg: 'from-blue-500 to-indigo-600'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {stats.map((stat, index) => (
        <div key={stat.label} className="group relative">
          {/* Floating glow effect */}
          <div className={`absolute -inset-1 bg-gradient-to-r ${stat.gradient} rounded-3xl blur-lg opacity-0 group-hover:opacity-25 transition-all duration-500`}></div>
          
          <div className={`relative bg-gradient-to-br ${stat.bgGradient} backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 p-6 text-center group-hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}>
            {/* Icon container */}
            <div className="relative mb-4">
              <div className={`w-16 h-16 mx-auto bg-gradient-to-r ${stat.iconBg} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300`}>
                <div className="text-white">
                  {stat.icon}
                </div>
              </div>
              
              {/* Pulse effect for active stats */}
              {(stat.label === 'Active' && remaining > 0) && (
                <div className="absolute inset-0 w-16 h-16 mx-auto bg-gradient-to-r from-[#FF6A3F] to-[#FFAC26] rounded-2xl animate-pulse opacity-20"></div>
              )}
            </div>
            
            {/* Value */}
            <div className={`text-4xl font-bold ${stat.textColor} mb-2 group-hover:scale-110 transition-all duration-300`}>
              {stat.value}
            </div>
            
            {/* Label */}
            <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
              {stat.label}
            </div>
            
            {/* Progress bar for completion rate */}
            {stat.label === 'Progress' && (
              <div className="mt-4 w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div 
                  className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${completionRate}%` }}
                ></div>
              </div>
            )}
            
            {/* Subtle inner glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-white/0 via-white/10 to-white/20 pointer-events-none"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
