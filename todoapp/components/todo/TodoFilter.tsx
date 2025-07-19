'use client';

export type FilterType = 'all' | 'active' | 'completed';

interface TodoFilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  todoCounts: {
    all: number;
    active: number;
    completed: number;
  };
}

export default function TodoFilter({ currentFilter, onFilterChange, todoCounts }: TodoFilterProps) {
  const filters: { key: FilterType; label: string; count: number; icon: React.ReactNode }[] = [
    { 
      key: 'all', 
      label: 'All Tasks', 
      count: todoCounts.all,
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    { 
      key: 'active', 
      label: 'Active', 
      count: todoCounts.active,
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      key: 'completed', 
      label: 'Completed', 
      count: todoCounts.completed,
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
  ];

  return (
    <div className="flex justify-center mb-12 px-2">
      <div className="relative inline-flex bg-white/30 backdrop-blur-xl rounded-3xl p-2 shadow-2xl border border-white/50 w-full max-w-2xl">
        {/* Background sliding indicator */}
        <div 
          className="absolute top-2 bottom-2 bg-gradient-to-r from-[#FF6A3F] to-[#FFAC26] rounded-2xl shadow-lg transition-all duration-500 ease-out"
          style={{
            left: `${(filters.findIndex(f => f.key === currentFilter) * 100) / filters.length + 2}%`,
            width: `${100 / filters.length - 4}%`
          }}
        />
        
        {filters.map((filter, index) => (
          <button
            key={filter.key}
            onClick={() => onFilterChange(filter.key)}
            className={`relative flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl text-sm sm:text-base font-semibold transition-all duration-500 flex-1 group hover:scale-105 ${
              currentFilter === filter.key
                ? 'text-white z-10'
                : 'text-gray-600 hover:text-gray-800 hover:bg-white/20'
            }`}
          >
            {/* Icon */}
            <div className={`transition-all duration-300 ${
              currentFilter === filter.key 
                ? 'text-white' 
                : 'text-gray-500 group-hover:text-[#FF6A3F]'
            }`}>
              {filter.icon}
            </div>
            
            {/* Label */}
            <span className="relative font-medium whitespace-nowrap">
              {filter.label}
            </span>
            
            {/* Count badge */}
            <span
              className={`relative px-2.5 py-1 rounded-full text-xs font-bold transition-all duration-300 min-w-[24px] ${
                currentFilter === filter.key
                  ? 'bg-white/25 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 group-hover:bg-white/50 group-hover:text-[#FF6A3F]'
              }`}
            >
              {filter.count}
            </span>
            
            {/* Hover effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FF6A3F]/0 to-[#FFAC26]/0 group-hover:from-[#FF6A3F]/5 group-hover:to-[#FFAC26]/5 transition-all duration-300 pointer-events-none" />
          </button>
        ))}
        
        {/* Subtle glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#FF6A3F]/10 to-[#FFAC26]/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
    </div>
  );
}
