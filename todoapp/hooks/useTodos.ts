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

  const setTodos = useCallback((todos: Todo[] | ((prev: Todo[]) => Todo[])) => {
    setState(prev => ({ 
      ...prev, 
      todos: typeof todos === 'function' ? todos(prev.todos) : todos 
    }));
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

    // Optimistic update with negative temp ID to avoid conflicts
    const tempId = -Date.now(); // Use negative ID to avoid conflicts
    const tempTodo: Todo = {
      id: tempId,
      userId: 1,
      title: title.trim(),
      completed: false,
    };

    // Use function form to get current state
    setTodos(currentTodos => [tempTodo, ...currentTodos]);

    const result = await todoApi.createTodo({
      userId: 1,
      title: title.trim(),
      completed: false,
    });

    if (result.error) {
      setError(result.error);
      // Revert optimistic update by removing temp todo
      setTodos(currentTodos => currentTodos.filter(todo => todo.id !== tempId));
    } else if (result.data) {
      // Replace temp todo with actual one from API
      setTodos(currentTodos => currentTodos.map(todo => 
        todo.id === tempId ? result.data! : todo
      ));
    }

    setLoading(false);
  }, [setLoading, setError, setTodos]); // Remove state.todos from dependencies

  // Update todo
  const updateTodo = useCallback(async (id: number, updates: Partial<Todo>) => {
    setError(null);

    // Store original state for rollback
    let originalTodos: Todo[] = [];
    setState(currentState => {
      originalTodos = currentState.todos;
      return currentState;
    });

    // Optimistic update using function form
    setTodos(currentTodos => 
      currentTodos.map(todo => todo.id === id ? { ...todo, ...updates } : todo)
    );

    const result = await todoApi.updateTodo(id, updates);

    if (result.error) {
      setError(result.error);
      // Revert to original state instead of fetching
      setTodos(originalTodos);
    }
  }, [setError, setTodos]);

  // Toggle todo completion
  const toggleTodo = useCallback(async (id: number) => {
    // Find todo using current state access pattern
    setState(currentState => {
      const todo = currentState.todos.find(t => t.id === id);
      if (todo) {
        updateTodo(id, { completed: !todo.completed });
      }
      return currentState; // No state change here
    });
  }, [updateTodo]);

  // Delete todo
  const deleteTodo = useCallback(async (id: number) => {
    setError(null);

    // Store original state for rollback
    let originalTodos: Todo[] = [];
    setState(currentState => {
      originalTodos = currentState.todos;
      return currentState;
    });

    // Optimistic update using function form
    setTodos(currentTodos => currentTodos.filter(todo => todo.id !== id));

    const result = await todoApi.deleteTodo(id);

    if (result.error) {
      setError(result.error);
      // Revert to original state instead of fetching
      setTodos(originalTodos);
    }
  }, [setError, setTodos]);

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
