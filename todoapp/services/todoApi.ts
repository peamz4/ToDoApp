import { Todo, ApiResponse } from '../types/todo';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const todoApi = {
  // Fetch all todos
  getTodos: async (): Promise<ApiResponse<Todo[]>> => {
    try {
      const response = await fetch(`${API_BASE_URL}/todos`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      // Limit to first 20 todos for better performance
      return { data: data.slice(0, 20) };
    } catch (error) {
      return { error: error instanceof Error ? error.message : 'Failed to fetch todos' };
    }
  },

  // Create a new todo
  createTodo: async (todo: Omit<Todo, 'id'>): Promise<ApiResponse<Todo>> => {
    try {
      const response = await fetch(`${API_BASE_URL}/todos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return { data };
    } catch (error) {
      return { error: error instanceof Error ? error.message : 'Failed to create todo' };
    }
  },

  // Update a todo
  updateTodo: async (id: number, todo: Partial<Todo>): Promise<ApiResponse<Todo>> => {
    try {
      const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return { data };
    } catch (error) {
      return { error: error instanceof Error ? error.message : 'Failed to update todo' };
    }
  },

  // Delete a todo
  deleteTodo: async (id: number): Promise<ApiResponse<void>> => {
    try {
      const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return {};
    } catch (error) {
      return { error: error instanceof Error ? error.message : 'Failed to delete todo' };
    }
  },
};
