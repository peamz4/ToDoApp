# TodoFlow - แอปพลิเคชัน Todo List สมัยใหม่

แอปพลิเคชัน Todo List ที่ทันสมัยและรองรับทุกขนาดหน้าจอ พัฒนาด้วย Next.js, TypeScript และ JSONPlaceholder API

## 🚀 เริ่มต้นใช้งาน

### ข้อกำหนดเบื้องต้น
- Node.js เวอร์ชัน 18 ขึ้นไป
- pnpm (แนะนำ) หรือ npm/yarn

### การติดตั้งและรันโปรแกรม

1. **เข้าไปที่โฟลเดอร์โปรเจค**
   ```bash
   cd todoapp
   ```

2. **ติดตั้ง dependencies**
   ```bash
   pnpm install
   ```

3. **เริ่ม development server**
   ```bash
   pnpm dev
   ```

4. **เปิดใน browser**
   ไปที่ `http://localhost:3000`

### Build สำหรับ Production

```bash
pnpm build
pnpm start
```

## ✨ คุณสมบัติหลัก

- ✅ **CRUD Operations**: เพิ่ม, แก้ไข, ลบ, ดู todos
- ✅ **เปลี่ยนสถานะ**: ทำเครื่องหมายเสร็จ/ไม่เสร็จ
- ✅ **กรองข้อมูล**: ดู All, Active, Completed tasks
- ✅ **Responsive Design**: รองรับทุกขนาดหน้าจอ
- ✅ **Error Handling**: จัดการข้อผิดพลาดอย่างครอบคลุม
- ✅ **Loading States**: แสดงสถานะการโหลด

## 🛠️ เทคโนโลยีที่ใช้

- **Next.js 15** - React Framework
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling
- **JSONPlaceholder API** - Backend Simulation

## 📋 วิธีใช้งาน

- **เพิ่ม Todo**: พิมพ์ในช่องและกด Enter หรือปุ่ม "Add Task"
- **เปลี่ยนสถานะ**: คลิก checkbox เพื่อทำเครื่องหมายเสร็จ/ไม่เสร็จ
- **แก้ไข Todo**: คลิกที่ข้อความ todo เพื่อแก้ไข
- **ลบ Todo**: คลิกปุ่มลบ (ถังขยะ)
- **กรองข้อมูล**: ใช้แท็บ All/Active/Completed

---

# TodoFlow - Modern Todo List Application

A modern, responsive todo list application built with Next.js, TypeScript, and JSONPlaceholder API integration.

## 🚀 Quick Start

### Prerequisites
- Node.js 18 or higher
- pnpm (recommended) or npm/yarn

### Installation & Running

1. **Navigate to the project directory**
   ```bash
   cd todoapp
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

### Build for Production

```bash
pnpm build
pnpm start
```

## ✨ Key Features

- ✅ **CRUD Operations**: Create, Read, Update, Delete todos
- ✅ **Toggle Status**: Mark todos as complete/incomplete
- ✅ **Smart Filtering**: View All, Active, or Completed tasks
- ✅ **Responsive Design**: Works on all device sizes
- ✅ **Error Handling**: Comprehensive error management
- ✅ **Loading States**: Visual feedback during operations

## �️ Tech Stack

- **Next.js 15** - React Framework with App Router
- **TypeScript** - Complete type safety
- **Tailwind CSS** - Utility-first styling
- **JSONPlaceholder API** - Backend simulation

## 📋 Usage

- **Add Todo**: Type in the input field and press Enter or click "Add Task"
- **Toggle Status**: Click the checkbox to mark complete/incomplete
- **Edit Todo**: Click on the todo text to edit inline
- **Delete Todo**: Click the delete (trash) icon
- **Filter Todos**: Use All/Active/Completed tabs

## 🚀 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 📄 License

This project is created for educational purposes as part of a technical assessment.

---

*Built with ❤️ using Next.js, TypeScript, and Tailwind CSS*

# TodoFlow - Modern Todo List Application

A modern, responsive todo list application built with Next.js, TypeScript, and JSONPlaceholder API integration. Features optimistic updates, comprehensive error handling, and a beautiful gradient UI design.

## 🚀 Quick Start

### Prerequisites
- Node.js 18 or higher
- pnpm (recommended) or npm/yarn

### Installation & Running

1. **Navigate to the project directory**
   ```bash
   cd todoapp
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

### Build for Production

```bash
# Build the application
pnpm build

# Start production server
pnpm start
```

## 🚀 เริ่มต้นใช้งาน (Thai)

### ข้อกำหนดเบื้องต้น
- Node.js เวอร์ชัน 18 ขึ้นไป
- pnpm (แนะนำ) หรือ npm/yarn

### การติดตั้งและรันโปรแกรม

1. **เข้าไปที่โฟลเดอร์โปรเจค**
   ```bash
   cd todoapp
   ```

2. **ติดตั้ง dependencies**
   ```bash
   pnpm install
   ```

3. **เริ่ม development server**
   ```bash
   pnpm dev
   ```

4. **เปิดใน browser**
   ไปที่ `http://localhost:3000`

### Build สำหรับ Production

```bash
# Build แอปพลิเคชัน
pnpm build

# เริ่ม production server
pnpm start
```

## ✨ คุณสมบัติหลัก (Key Features)

### ความต้องการหลัก ✅

#### 1. **การเชื่อมต่อ API**
- **ความต้องการ**: เชื่อมต่อกับ JSONPlaceholder todos endpoint
- **การใช้งาน**: Service layer (`services/todoApi.ts`) พร้อม API abstraction ที่สะอาด
- **เหตุผล**: การจัดการ API calls แบบรวมศูนย์ทำให้ง่ายต่อการแก้ไข endpoint, เพิ่ม authentication หรือเปลี่ยน API

#### 2. **การจัดการข้อมูล CRUD**
- **ความต้องการ**: Create, Read, Update, Delete todos
- **การใช้งาน**: CRUD เต็มรูปแบบพร้อม optimistic updates และการกู้คืนข้อผิดพลาด
- **API Endpoints ที่ใช้**:
  - `GET /todos` - ดึงข้อมูล todos (จำกัด 20 รายการแรก)
  - `POST /todos` - สร้าง todo ใหม่
  - `PUT /todos/:id` - อัปเดต todo ที่มีอยู่
  - `DELETE /todos/:id` - ลบ todo

#### 3. **เปลี่ยนสถานะ**
- **ความต้องการ**: ทำเครื่องหมาย todos เป็นเสร็จ/ไม่เสร็จ
- **การใช้งาน**: คลิก checkbox เพื่อเปลี่ยนสถานะ completed พร้อมการตอบสนอง UI ทันที
- **เหตุผล**: รูปแบบ UI ที่เรียบง่ายและเข้าใจง่าย ซึ่งผู้ใช้คาดหวังจากแอป todo

#### 4. **React + TypeScript**
- **ความต้องการ**: ใช้ functional components พร้อม typing เต็มรูปแบบ
- **การใช้งาน**: TypeScript 100% พร้อม strict mode และ interfaces ครอบคลุม
- **เหตุผล**: Type safety ป้องกัน runtime errors และปรับปรุงประสบการณ์นักพัฒนา

#### 5. **การจัดการ State ในระดับ Local**
- **ความต้องการ**: ใช้ React hooks เท่านั้น (ไม่มี Redux/Context)
- **การใช้งาน**: Custom `useTodos` hook พร้อม useState
- **เหตุผล**: สำหรับขอบเขตนี้ local state เพียงพอและลดความซับซ้อน

#### 6. **Loading & Error States**
- **ความต้องการ**: จัดการสถานการณ์ loading และ error
- **การใช้งาน**: Error boundaries ครอบคลุม, ฟังก์ชัน retry, loading indicators
- **เหตุผล**: UX แบบมืออาชีพต้องการการจัดการ state ที่เหมาะสมสำหรับทุกสถานการณ์

### คุณสมบัติพิเศษ ✨

- **Optimistic Updates**: การตอบสนอง UI ทันทีพร้อม rollback อัตโนมัติเมื่อล้มเหลว
- **Inline Editing**: คลิกที่ข้อความ todo เพื่อแก้ไขโดยตรง
- **Smart Filtering**: ดู All, Active หรือ Completed tasks พร้อมการนับแบบ real-time
- **Error Recovery**: ข้อความแสดงข้อผิดพลาดที่เป็นมิตรกับผู้ใช้พร้อมฟังก์ชัน retry
- **Modern Gradient UI**: การออกแบบที่สวยงามและรองรับทุกขนาดหน้าจอพร้อมเอฟเฟค glassmorphism
- **Mobile-First Design**: รองรับทุกขนาดอุปกรณ์อย่างสมบูรณ์

## 🛠️ เทคโนโลยีที่ใช้ (Tech Stack)

- **Next.js 15** พร้อม App Router
- **TypeScript** สำหรับ type safety แบบสมบูรณ์
- **Tailwind CSS** สำหรับ utility-first styling
- **JSONPlaceholder API** สำหรับจำลอง backend
- **React Hooks** สำหรับการจัดการ state

---

## 📋 Project Requirements & Implementation

### Core Requirements ✅

#### 1. **API Integration**
- **Requirement**: Integrate with JSONPlaceholder todos endpoint
- **Implementation**: Service layer (`services/todoApi.ts`) with clean API abstraction
- **Reasoning**: Centralized API calls make it easier to modify endpoints, add authentication, or switch to different APIs

#### 2. **CRUD Operations**  
- **Requirement**: Create, Read, Update, Delete todos
- **Implementation**: Full CRUD with optimistic updates and error recovery
- **API Endpoints Used**:
  - `GET /todos` - Fetch todos (limited to first 20)
  - `POST /todos` - Create new todo
  - `PUT /todos/:id` - Update existing todo
  - `DELETE /todos/:id` - Delete todo

#### 3. **Toggle Status**
- **Requirement**: Mark todos as done/not done
- **Implementation**: Click checkbox to toggle completed status with immediate UI feedback
- **Reasoning**: Simple, intuitive UI pattern that users expect from todo applications

#### 4. **React + TypeScript**
- **Requirement**: Use functional components with full typing
- **Implementation**: 100% TypeScript with strict mode, comprehensive interfaces
- **Reasoning**: Type safety prevents runtime errors and improves developer experience

#### 5. **Local State Management**
- **Requirement**: React hooks only (no Redux/Context)
- **Implementation**: Custom `useTodos` hook with useState
- **Reasoning**: For this scope, local state is sufficient and reduces complexity

#### 6. **Loading & Error States**
- **Requirement**: Handle loading and error scenarios
- **Implementation**: Comprehensive error boundaries, retry functionality, loading indicators
- **Reasoning**: Professional UX requires proper state management for all scenarios

### Bonus Features ✨

- **Optimistic Updates**: Instant UI feedback with automatic rollback on failure
- **Inline Editing**: Click on todo text to edit directly
- **Smart Filtering**: View All, Active, or Completed tasks with real-time counts
- **Error Recovery**: User-friendly error messages with retry functionality
- **Modern Gradient UI**: Beautiful, responsive design with glassmorphism effects
- **Mobile-First Design**: Fully responsive across all device sizes

## 🛠️ Tech Stack

- **Next.js 15** with App Router
- **TypeScript** for complete type safety
- **Tailwind CSS** for utility-first styling
- **JSONPlaceholder API** for backend simulation
- **React Hooks** for state management

```
## 🏗️ Architecture & Design Decisions

### Project Structure

```
todoapp/
├── app/                     # Next.js App Router
│   ├── page.tsx            # Main application entry
│   ├── layout.tsx          # Root layout
│   └── globals.css         # Global styles
├── components/             # Reusable components
│   ├── todo/               # Todo-specific components
│   │   ├── TodoSection.tsx # Main container
│   │   ├── TodoForm.tsx    # Add new todos
│   │   ├── TodoList.tsx    # Display todos
│   │   ├── TodoItem.tsx    # Individual todo
│   │   ├── TodoFilter.tsx  # Filter controls
│   │   └── TodoStats.tsx   # Statistics display
│   └── ui/                 # Generic UI components
│       └── ErrorMessage.tsx # Error display
├── hooks/                  # Custom React hooks
│   └── useTodos.ts         # Todo state management
├── services/               # External service integrations
│   └── todoApi.ts          # API layer
└── types/                  # TypeScript definitions
    └── todo.ts             # Type definitions
```

### Key Design Decisions

#### 1. **Service Layer Pattern**
```typescript
// services/todoApi.ts
export const todoApi = {
  getTodos: async (): Promise<ApiResponse<Todo[]>> => { /* ... */ },
  createTodo: async (todo: Omit<Todo, 'id'>): Promise<ApiResponse<Todo>> => { /* ... */ },
  // ...
}
```
**Reasoning**: 
- Abstracts API implementation details
- Easy to mock for testing
- Centralized error handling
- Consistent response format

#### 2. **Custom Hook for State Management**
```typescript
// hooks/useTodos.ts
export const useTodos = () => {
  const [state, setState] = useState<TodoState>({ /* ... */ });
  // ...
}
```
**Reasoning**:
- Encapsulates complex state logic
- Reusable across components
- Easier to test in isolation
- Follows React patterns

#### 3. **Optimistic Updates with Rollback**
```typescript
// Immediate UI update
setTodos(currentTodos => [tempTodo, ...currentTodos]);

// API call
const result = await todoApi.createTodo(todo);

// Handle result or rollback
if (result.error) {
  setTodos(originalTodos); // Rollback to original state
}
```
**Reasoning**:
- Instant user feedback
- Better perceived performance
- Graceful error handling with state recovery
- Maintains data consistency

#### 4. **Negative Temporary IDs**
```typescript
const tempId = -Date.now(); // Avoid conflicts with real IDs
```
**Reasoning**:
- Prevents collision with API IDs (1-200)
- Easy to identify temporary todos
- Maintains optimistic update consistency
- Solves the "editing newly added todos" problem

#### 5. **Component Composition**
```typescript
// TodoSection.tsx - Container component
<TodoForm onAdd={addTodo} loading={loading} />
<TodoFilter currentFilter={filter} onFilterChange={setFilter} />
<TodoList todos={filteredTodos} onUpdate={updateTodo} />
```
**Reasoning**:
- Single responsibility principle
- Easier testing and debugging
- Better reusability
- Clear data flow

#### 6. **Comprehensive TypeScript Integration**
```typescript
// types/todo.ts
export interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export interface TodoState {
  todos: Todo[];
  loading: boolean;
  error: string | null;
}
```
**Reasoning**:
- Prevents type-related bugs
- Better IDE support and refactoring
- Self-documenting code
- Consistent data structures

## 🎨 UI/UX Design Philosophy

### 1. **Mobile-First Responsive Design**
- Responsive breakpoints: mobile → tablet (640px+) → desktop (1024px+)
- Touch-friendly interfaces with adequate tap targets
- Optimized typography scaling across devices
- Collapsible content for better mobile experience

### 2. **Modern Gradient Design System**
- Orange to yellow gradient for primary actions
- Subtle glassmorphism effects with backdrop blur
- Consistent color palette throughout the application
- Smooth animations and micro-interactions

### 3. **Progressive Enhancement**
- Core functionality works without JavaScript
- Enhanced interactions with JavaScript enabled
- Graceful degradation for older browsers
- Accessible design patterns

### 4. **Error-First Design**
- Clear error messages with actionable solutions
- Non-blocking error display
- Retry mechanisms for failed operations
- Visual feedback for all user actions
```

## � Key Implementation Features

- **Custom Hook Pattern**: `useTodos` centralizes state and business logic
- **Optimistic Updates**: UI updates immediately, reverts on API failure
- **Error Recovery**: Automatic rollback with user-friendly error messages
- **Service Layer**: Clean API abstraction in `todoApi.ts`
- **Type Safety**: Comprehensive TypeScript interfaces
- **Component Composition**: Small, focused, reusable components

## 🔧 Performance Optimizations

### 1. **React Optimizations**
- `useCallback` for memoized functions to prevent unnecessary re-renders
- Optimistic updates to reduce perceived latency
- Efficient state updates using functional form
- Proper dependency arrays in hooks

### 2. **API Optimizations**
- Limited to 20 todos for better initial load performance
- Centralized error handling reduces code duplication
- Consistent response format for predictable data flow
- Proper HTTP status code handling

### 3. **Bundle & Runtime Optimizations**
- Next.js automatic code splitting
- Tree-shaking for unused code elimination
- Optimized component re-rendering patterns
- Efficient CSS-in-JS with Tailwind CSS

## 🧪 Technical Challenges Solved

### 1. **Stale Closure Problem**
**Problem**: `useCallback` dependencies causing stale state references
**Solution**: Used functional state updates to access current state
```typescript
// Instead of using stale state.todos
setTodos(currentTodos => [...currentTodos, newTodo]);
```

### 2. **Optimistic Update Consistency**
**Problem**: New todos disappearing after edit operations
**Solution**: Implemented proper rollback mechanism with original state preservation
```typescript
// Store original state before optimistic update
let originalTodos: Todo[] = [];
setState(currentState => {
  originalTodos = currentState.todos;
  return currentState;
});
```

### 3. **Temporary ID Conflicts**
**Problem**: Newly created todos causing 500 errors when edited
**Solution**: Used negative timestamps as temporary IDs
```typescript
const tempId = -Date.now(); // Guaranteed unique and separate from API IDs
```

### 4. **Mobile Responsiveness Balance**
**Problem**: Feature-rich UI becoming cramped on mobile
**Solution**: Progressive disclosure and responsive component sizing
```typescript
// Responsive text labels
<span className="sm:hidden">{filter.shortLabel}</span>
<span className="hidden sm:inline">{filter.label}</span>
```

## 🎯 Usage Guide

### Basic Operations
- **Add Todo**: Type in the input field and press Enter or click "Add Task"
- **Toggle Status**: Click the checkbox to mark complete/incomplete
- **Edit Todo**: Click on the todo text to edit inline
- **Delete Todo**: Click the delete (trash) icon
- **Filter Todos**: Use All/Active/Completed tabs with real-time counts

### Advanced Features
- **Optimistic Updates**: Changes appear instantly, automatically rollback on failure
- **Error Recovery**: Failed operations show error messages with retry options
- **Loading States**: Visual feedback during all API operations
- **Responsive Design**: Fully functional on mobile, tablet, and desktop

### Error Scenarios Handled
- Network connectivity issues
- API server errors (500, 404, etc.)
- Rate limiting and timeouts
- Invalid data submissions
- Concurrent modification conflicts

## 🚀 Available Scripts

- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Build optimized production bundle
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint with TypeScript support
- `pnpm type-check` - Run TypeScript compiler check

## 🌐 Deployment Guide

### Build Commands
```bash
# Production build
pnpm build

# Start production server
pnpm start

# Environment check
node --version  # Requires Node.js 18+
```

### Recommended Platforms
- **Vercel** (Recommended for Next.js)
- **Netlify** 
- **Azure Static Web Apps**
- **AWS Amplify**

### Environment Considerations
- No external environment variables required
- JSONPlaceholder is a public API (no authentication)
- Works entirely in client-side browser environment

## � Future Enhancements

### Immediate Improvements
1. **Unit Testing**: Comprehensive test coverage with Jest/React Testing Library
2. **Accessibility**: Enhanced ARIA labels and keyboard navigation
3. **Performance Monitoring**: Error tracking and performance metrics
4. **PWA Features**: Service workers for offline functionality

### Scalability Considerations
1. **State Management**: Consider Zustand or Redux Toolkit for larger applications
2. **API Layer**: GraphQL implementation for more efficient data fetching
3. **Caching Strategy**: Implement proper caching with React Query/SWR
4. **Virtual Scrolling**: For handling thousands of todos efficiently

### Feature Additions
1. **User Authentication**: Multi-user support with proper session management
2. **Real-time Collaboration**: WebSocket integration for live updates
3. **Advanced Filtering**: Date-based filters, tags, priorities
4. **Data Export**: CSV/JSON export functionality
5. **Theme System**: Dark mode and customizable themes

## 📚 Learning Outcomes

### Technical Skills Demonstrated
- **Modern React Patterns**: Hooks, functional components, custom hooks
- **TypeScript Mastery**: Strict typing, interfaces, generic types
- **State Management**: Complex state logic with proper error handling
- **API Integration**: RESTful API consumption with error recovery
- **Responsive Design**: Mobile-first CSS with modern layout techniques

### Best Practices Applied
- **Clean Architecture**: Separation of concerns across layers
- **Error Handling**: Comprehensive error boundaries and user feedback
- **Performance**: Optimized rendering and efficient state updates
- **Accessibility**: Semantic HTML and keyboard navigation support
- **Code Quality**: Consistent formatting, clear naming, proper documentation

## 📄 License

This project is created for educational purposes as part of a technical assessment.

---

**TodoFlow** - Stay organized and get things done efficiently! 🎯

*Built with ❤️ using Next.js, TypeScript, and modern web technologies*
