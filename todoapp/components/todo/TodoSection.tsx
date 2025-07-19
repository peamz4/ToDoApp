'use client';

import { useState } from 'react';
import { useTodos } from '../../hooks/useTodos';
import TodoForm from './TodoForm';
import TodoFilter, { FilterType } from './TodoFilter';
import TodoList from './TodoList';
import { ErrorMessage } from '../ui';

export default function TodoSection() {
  const {
    todos,
    loading,
    error,
    addTodo,
    updateTodo,
    toggleTodo,
    deleteTodo,
    fetchTodos,
    clearError,
  } = useTodos();

  const [filter, setFilter] = useState<FilterType>('all');

  // Calculate filter counts
  const todoCounts = {
    all: todos.length,
    active: todos.filter(todo => !todo.completed).length,
    completed: todos.filter(todo => todo.completed).length,
  };

  return (
    <div className="space-y-6">
      {/* Error Message */}
      {error && (
        <ErrorMessage
          message={error}
          onDismiss={clearError}
          onRetry={fetchTodos}
        />
      )}

      {/* Todo Form */}
      <TodoForm onAdd={addTodo} loading={loading} />

      {/* Todo Filter */}
      <TodoFilter
        currentFilter={filter}
        onFilterChange={setFilter}
        todoCounts={todoCounts}
      />

      {/* Todo List */}
      <TodoList
        todos={todos}
        filter={filter}
        loading={loading}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onUpdate={updateTodo}
      />
    </div>
  );
}
