'use client';

import { useState } from 'react';
import { Todo } from '../../types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onUpdate: (id: number, updates: Partial<Todo>) => void;
}

export default function TodoItem({ todo, onToggle, onDelete, onUpdate }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.title);

  const handleSave = () => {
    if (editText.trim() && editText !== todo.title) {
      onUpdate(todo.id, { title: editText.trim() });
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditText(todo.title);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  return (
    <div className="group relative bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 p-6 hover:scale-[1.01]">
      {/* Subtle hover glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF6A3F]/5 to-[#FFAC26]/5 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none rounded-3xl blur-sm"></div>
      
      <div className="relative flex items-center gap-4">
        {/* Enhanced Checkbox with animation */}
        <button
          onClick={() => onToggle(todo.id)}
          className={`flex-shrink-0 w-10 h-10 rounded-full  transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl ${
            todo.completed
              ? 'bg-gradient-to-r from-[#FF6A3F] to-[#FFAC26] border-transparent scale-110 shadow-[#FF6A3F]/25'
              : 'border-gray-300 hover:border-[#FF6A3F] hover:scale-110 bg-white border-2 hover:shadow-[#FF6A3F]/10'
          }`}
          style={{ minWidth: '2.5rem', minHeight: '2.5rem', width: '2.5rem', height: '2.5rem' }}
        >
          {todo.completed ? (
            <svg className="w-6 h-6 text-white animate-in zoom-in duration-300" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#FF6A3F] to-[#FFAC26] opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
          )}
        </button>

        {/* Todo Content with better typography */}
        <div className="flex-1 min-w-0">
          {isEditing ? (
            <div className="relative">
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onBlur={handleSave}
                onKeyDown={handleKeyDown}
                className="w-full px-4 py-3 text-gray-800 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl focus:outline-none transition-all duration-300 shadow-lg placeholder-gray-400"
                placeholder="Edit your task..."
                autoFocus
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FF6A3F]/0 to-[#FFAC26]/0 focus-within:from-[#FF6A3F]/5 focus-within:to-[#FFAC26]/5 transition-all duration-300 pointer-events-none" />
            </div>
          ) : (
            <div
              className={`text-base transition-all duration-300 cursor-pointer px-3 py-2 rounded-xl hover:bg-white/30 relative group/content ${
                todo.completed
                  ? 'text-gray-500 line-through opacity-75'
                  : 'text-gray-800 hover:text-gray-900'
              }`}
              onClick={() => setIsEditing(true)}
            >
              {todo.title}
              
              {/* Click to edit hint */}
              <div className="absolute inset-0 rounded-xl border-2 border-dashed border-[#FF6A3F]/0 group-hover/content:border-[#FF6A3F]/20 transition-all duration-300"></div>
              
              {!todo.completed && (
                <div className="absolute -top-2 -right-2 opacity-0 group-hover/content:opacity-100 transition-opacity duration-300">
                  <div className="bg-[#FF6A3F] text-white text-xs px-2 py-1 rounded-full shadow-lg">
                    Click to edit
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Enhanced Action Buttons with better animations */}
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
          {!isEditing && (
            <>
              <button
                onClick={() => setIsEditing(true)}
                className="p-3 text-gray-400 hover:text-[#FF6A3F] hover:bg-[#FF6A3F]/10 rounded-2xl transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md border border-transparent hover:border-[#FF6A3F]/20"
                title="Edit task"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </button>
              
              <button
                onClick={() => onDelete(todo.id)}
                className="p-3 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md border border-transparent hover:border-red-200"
                title="Delete task"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </>
          )}
          
          {isEditing && (
            <div className="flex items-center gap-2">
              <button
                onClick={handleSave}
                className="p-3 text-green-600 hover:text-green-700 hover:bg-green-50 rounded-2xl transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md border border-transparent hover:border-green-200"
                title="Save changes"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </button>
              
              <button
                onClick={handleCancel}
                className="p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-2xl transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md border border-transparent hover:border-gray-200"
                title="Cancel editing"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
