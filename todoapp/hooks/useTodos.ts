import { useState, useEffect, useCallback } from 'react';
import { Todo, TodoState } from '../types/todo';
import { todoApi } from '../services/todoApi';

export const useTodos = () => {
  const [state, setState] = useState<TodoState>({
    todos: [],
    loading: false,
    error: null,
  });

  const setLoading = useCallback((loading: boolean) => {
    setState(prev => ({ ...prev, loading }));
  }, []);

  const setError = useCallback((error: string | null) => {
    setState(prev => ({ ...prev, error }));
  }, []);

  const setTodos = useCallback((todos: Todo[]) => {
    setState(prev => ({ ...prev, todos }));
  }, []);

  // Fetch todos from API
  const fetchTodos = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    const result = await todoApi.getTodos();
    
    if (result.error) {
      setError(result.error);
    } else if (result.data) {
      setTodos(result.data);
    }
    
    setLoading(false);
  }, [setLoading, setError, setTodos]);

  // Add a new todo
  const addTodo = useCallback(async (title: string) => {
    if (!title.trim()) return;

    setLoading(true);
    setError(null);

    // Optimistic update
    const tempTodo: Todo = {
      id: Date.now(), // Temporary ID
      userId: 1,
      title: title.trim(),
      completed: false,
    };

    setTodos([tempTodo, ...state.todos]);

    const result = await todoApi.createTodo({
      userId: 1,
      title: title.trim(),
      completed: false,
    });

    if (result.error) {
      setError(result.error);
      // Revert optimistic update
      setTodos(state.todos);
    } else if (result.data) {
      // Replace temp todo with actual one from API
      setTodos([result.data, ...state.todos]);
    }

    setLoading(false);
  }, [state.todos, setLoading, setError, setTodos]);

  // Update todo
  const updateTodo = useCallback(async (id: number, updates: Partial<Todo>) => {
    setError(null);

    // Optimistic update
    const updatedTodos = state.todos.map(todo =>
      todo.id === id ? { ...todo, ...updates } : todo
    );
    setTodos(updatedTodos);

    const result = await todoApi.updateTodo(id, updates);

    if (result.error) {
      setError(result.error);
      // Revert optimistic update
      setTodos(state.todos);
    }
  }, [state.todos, setError, setTodos]);

  // Toggle todo completion
  const toggleTodo = useCallback(async (id: number) => {
    const todo = state.todos.find(t => t.id === id);
    if (!todo) return;

    await updateTodo(id, { completed: !todo.completed });
  }, [state.todos, updateTodo]);

  // Delete todo
  const deleteTodo = useCallback(async (id: number) => {
    setError(null);

    // Optimistic update
    const filteredTodos = state.todos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);

    const result = await todoApi.deleteTodo(id);

    if (result.error) {
      setError(result.error);
      // Revert optimistic update
      setTodos(state.todos);
    }
  }, [state.todos, setError, setTodos]);

  // Load todos on mount
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return {
    ...state,
    fetchTodos,
    addTodo,
    updateTodo,
    toggleTodo,
    deleteTodo,
    clearError: () => setError(null),
  };
};
