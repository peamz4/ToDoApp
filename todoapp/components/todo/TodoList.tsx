'use client';

import { Todo } from '../../types/todo';
import TodoItem from './TodoItem';
import { FilterType } from './TodoFilter';

interface TodoListProps {
  todos: Todo[];
  filter: FilterType;
  loading: boolean;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onUpdate: (id: number, updates: Partial<Todo>) => void;
}

export default function TodoList({ todos, filter, loading, onToggle, onDelete, onUpdate }: TodoListProps) {
  // Filter todos based on current filter
  const filteredTodos = todos.filter(todo => {
    switch (filter) {
      case 'active':
        return !todo.completed;
      case 'completed':
        return todo.completed;
      default:
        return true;
    }
  });

  if (loading && todos.length === 0) {
    return (
      <div className="bg-white/30 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8 text-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-gray-200 border-t-[#FF6A3F] rounded-full animate-spin"></div>
            <div className="absolute inset-0 w-16 h-16 border-4 border-gray-100 border-t-[#FFAC26] rounded-full animate-spin animation-delay-150"></div>
          </div>
          <div className="text-lg font-semibold text-gray-700">Loading your todos...</div>
          <div className="text-sm text-gray-500">Please wait while we fetch your tasks</div>
        </div>
      </div>
    );
  }

  if (filteredTodos.length === 0) {
    const emptyMessages = {
      all: "You haven't added any todos yet. Create your first task above!",
      active: 'Great job! You\'ve completed all your active tasks. 🎉',
      completed: 'No completed todos yet. Time to get things done!'
    };

    const emptyIcons = {
      all: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      ),
      active: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      completed: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    };

    return (
      <div className="bg-white/30 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-12 text-center">
        <div className="flex flex-col items-center space-y-6">
          <div className="w-24 h-24 bg-gradient-to-r from-[#FF6A3F] to-[#FFAC26] rounded-3xl flex items-center justify-center shadow-xl">
            {emptyIcons[filter]}
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-gray-800">
              {filter === 'active' ? 'All Done! 🎉' : filter === 'completed' ? 'Nothing Here Yet' : 'Ready to Start?'}
            </div>
            <div className="text-gray-600 max-w-md">
              {emptyMessages[filter]}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="bg-white/30 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
        <div className="divide-y divide-gray-200/30">
          {filteredTodos.map((todo, index) => (
            <div key={todo.id} className="group relative">
              {/* Hover glow effect */}
              <div className="absolute -inset-px bg-gradient-to-r from-[#FF6A3F]/20 to-[#FFAC26]/20 rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              <div className="relative">
                <TodoItem 
                  todo={todo} 
                  onToggle={onToggle}
                  onDelete={onDelete}
                  onUpdate={onUpdate}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Floating action hint */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 text-xs text-gray-500 bg-white/50 backdrop-blur-sm rounded-full px-3 py-1">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Hover over tasks to see more options</span>
        </div>
      </div>
    </div>
  );
}
