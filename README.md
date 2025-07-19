# TodoFlow - Task Management App

A modern Todo application demonstrating JSONPlaceholder API integration with Next.js, TypeScript, and Tailwind CSS.

## ✨ Features

- **Complete CRUD Operations**: Create, read, update, and delete todos
- **Smart Filtering**: View All, Active, or Completed tasks
- **Inline Editing**: Click on todos to edit them directly
- **Optimistic Updates**: Immediate UI feedback for smooth UX
- **Error Handling**: Graceful error states with retry functionality
- **Modern Design**: Beautiful gradient UI with responsive layout
- **TypeScript**: Full type safety throughout the application

## 🛠️ Tech Stack

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS v4** for styling
- **JSONPlaceholder API** for backend simulation
- **React Hooks** for state management

## 🔌 API Integration

Demonstrates full CRUD operations with JSONPlaceholder:
- `GET /todos` - Fetch todos (limited to first 20)
- `POST /todos` - Create new todo
- `PUT /todos/:id` - Update existing todo
- `DELETE /todos/:id` - Delete todo

## 📦 Quick Start

1. **Clone and navigate to the project**
   ```bash
   git clone <repository-url>
   cd ToDoApp/todoapp
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

## 🏗️ Architecture

```
todoapp/
├── app/                     # Next.js app router
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Main application
├── components/
│   ├── todo/               # Todo-specific components
│   │   ├── TodoSection.tsx # Main todo container
│   │   ├── TodoForm.tsx    # Add new todo
│   │   ├── TodoList.tsx    # Todo list with filtering
│   │   ├── TodoItem.tsx    # Individual todo item
│   │   ├── TodoFilter.tsx  # Filter tabs
│   │   └── TodoStats.tsx   # Statistics
│   └── ui/
│       └── ErrorMessage.tsx # Error handling
├── hooks/
│   └── useTodos.ts         # Todo state management
├── services/
│   └── todoApi.ts          # API service layer
└── types/
    └── todo.ts             # TypeScript definitions
```

## � Key Implementation Features

- **Custom Hook Pattern**: `useTodos` centralizes state and business logic
- **Optimistic Updates**: UI updates immediately, reverts on API failure
- **Error Recovery**: Automatic rollback with user-friendly error messages
- **Service Layer**: Clean API abstraction in `todoApi.ts`
- **Type Safety**: Comprehensive TypeScript interfaces
- **Component Composition**: Small, focused, reusable components

## � Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🎯 Usage

### Todo Operations
- **Add**: Type and press Enter or click Add button
- **Toggle**: Click checkbox to mark complete/incomplete
- **Edit**: Click on todo text to edit inline
- **Delete**: Click the delete (trash) icon
- **Filter**: Use All/Active/Completed tabs

### Key Features
- **Optimistic Updates**: Changes appear instantly
- **Error Recovery**: Failed operations revert automatically
- **Loading States**: Visual feedback during operations
- **Responsive Design**: Works on all device sizes

## 🚀 Deployment

Build and deploy to any Next.js compatible platform:

```bash
pnpm build
pnpm start
```

Recommended platforms: Vercel, Netlify, Azure Static Web Apps

## 📄 License

Part of T.T. Software Solutions technical assessment.

---

*Built with ❤️ using Next.js, TypeScript, and Tailwind CSS*
