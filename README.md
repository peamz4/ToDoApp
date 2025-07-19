# T.T. Software API Demo App

A comprehensive demonstration of JSONPlaceholder API integration built with Next.js, TypeScript, and Tailwind CSS. This application showcases both Todo management and Blog post functionality with beautiful UI and smooth interactions.

## 🚀 Features

### Todo Management
- **Full CRUD Operations**: Create, Read, Update, and Delete todos
- **Real-time Updates**: Optimistic updates for smooth user experience
- **Filter System**: View All, Active, or Completed todos
- **Statistics Dashboard**: Track your progress with visual stats
- **Inline Editing**: Click on todos to edit them directly

### Blog Posts
- **Post Management**: Create, view, and delete blog posts
- **Comments System**: Load and view comments for each post
- **Rich Content**: Full post content with author information
- **Expandable Interface**: Click to show/hide comments

### General Features
- **Modern UI Design**: Clean, professional interface with T.T. Software branding
- **API Integration**: Comprehensive use of JSONPlaceholder API endpoints
- **Error Handling**: Comprehensive error states with retry functionality
- **Loading States**: Smooth loading indicators throughout the app
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **TypeScript**: Full type safety throughout the application
- **Navigation**: Easy switching between Todos and Posts sections

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **State Management**: React Hooks (useState, useEffect, custom hooks)
- **API**: JSONPlaceholder (https://jsonplaceholder.typicode.com)
- **Package Manager**: pnpm

## 🔌 API Endpoints Demonstrated

### Todo Endpoints
- `GET /todos` - Fetch all todos
- `POST /todos` - Create new todo
- `PUT /todos/:id` - Update existing todo
- `DELETE /todos/:id` - Delete todo

### Posts Endpoints
- `GET /posts` - Fetch all posts
- `GET /posts/:id` - Fetch single post
- `POST /posts` - Create new post
- `PUT /posts/:id` - Update existing post
- `DELETE /posts/:id` - Delete post

### Comments Endpoints
- `GET /posts/:id/comments` - Fetch comments for a post
- `GET /comments?postId=:id` - Alternative way to fetch comments

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ToDoApp
   ```

2. **Navigate to the project directory**
   ```bash
   cd todoapp
   ```

3. **Install dependencies**
   ```bash
   pnpm install
   ```

4. **Start the development server**
   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

## 🏗️ Project Structure

```
todoapp/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main application page
├── components/
│   ├── ErrorMessage.tsx     # Error display component
│   ├── Navigation.tsx       # Tab navigation component
│   ├── PostsSection.tsx     # Blog posts section
│   ├── TodoSection.tsx      # Todo management section
│   ├── TodoFilter.tsx       # Filter tabs component
│   ├── TodoForm.tsx         # New todo input form
│   ├── TodoItem.tsx         # Individual todo item
│   ├── TodoList.tsx         # Todo list container
│   └── TodoStats.tsx        # Statistics dashboard
├── hooks/
│   └── useTodos.ts          # Custom hook for todo state management
├── services/
│   ├── todoApi.ts           # Todo API service layer
│   └── postApi.ts           # Posts API service layer
├── types/
│   ├── todo.ts              # Todo TypeScript definitions
│   └── post.ts              # Posts TypeScript definitions
└── public/                  # Static assets
```

## 🔧 Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🏛️ Architecture & Implementation Decisions

### 1. **Component Architecture**
- **Separation of Concerns**: Each component has a single responsibility
- **Composition over Inheritance**: Components are composed together rather than extending classes
- **Props Interface**: All components use TypeScript interfaces for type safety

### 2. **State Management Strategy**
- **Custom Hook Pattern**: `useTodos` centralizes all todo-related state and logic
- **Optimistic Updates**: UI updates immediately for better user experience
- **Error Recovery**: Automatic rollback when API calls fail
- **Local State**: Uses React's built-in state management (no external library needed)

### 3. **API Integration Design**
- **Service Layer**: Abstracted API calls in `todoApi.ts` for maintainability
- **Error Handling**: Comprehensive error catching and user-friendly messages
- **Response Typing**: Strongly typed API responses with generic interfaces
- **Realistic Simulation**: Uses JSONPlaceholder for realistic API behavior

### 4. **User Experience Decisions**
- **Immediate Feedback**: Optimistic updates prevent waiting for API responses
- **Progressive Enhancement**: App works with basic functionality even if some features fail
- **Loading States**: Clear visual feedback during async operations
- **Error Recovery**: Users can retry failed operations without page refresh

### 5. **Performance Optimizations**
- **React.useCallback**: Prevents unnecessary re-renders in child components
- **Limited Data Set**: Loads only first 20 todos for better performance
- **Efficient Filtering**: Client-side filtering for instant results
- **Minimal Bundle**: Only necessary dependencies included

### 6. **Accessibility Features**
- **Semantic HTML**: Proper use of buttons, forms, and ARIA labels
- **Keyboard Navigation**: Full keyboard support for all interactions
- **Screen Reader Support**: Meaningful alt texts and labels
- **Focus Management**: Proper focus handling during editing

### 7. **Responsive Design Strategy**
- **Mobile-First**: Designed for mobile devices first, then enhanced for desktop
- **Flexible Grid**: CSS Grid and Flexbox for robust layouts
- **Adaptive Components**: Components adjust behavior based on screen size
- **Touch-Friendly**: Adequate touch targets for mobile devices

## 🔌 API Integration Details

The app integrates with JSONPlaceholder API endpoints:

- `GET /todos` - Fetch all todos (limited to first 20)
- `POST /todos` - Create new todo
- `PUT /todos/:id` - Update existing todo
- `DELETE /todos/:id` - Delete todo

**Note**: JSONPlaceholder is a fake API for testing, so while the HTTP requests are made, the data doesn't actually persist on the server. The app handles this gracefully with optimistic updates.

## 🎯 Key Features Explanation

### Todo Operations
- **Add**: Type in the input field and press Enter or click Add
- **Toggle**: Click the circular checkbox to mark complete/incomplete
- **Edit**: Click on the todo text to edit inline, press Enter to save
- **Delete**: Hover over a todo and click the delete (trash) icon

### Filtering
- **All**: Shows all todos regardless of status
- **Active**: Shows only incomplete todos
- **Completed**: Shows only completed todos

### Statistics
- **Total**: Total number of todos
- **Remaining**: Number of active (incomplete) todos
- **Completed**: Number of completed todos
- **Progress**: Completion percentage

## 🚀 Deployment

The application is ready for deployment on any platform that supports Next.js:

### Vercel (Recommended)
```bash
pnpm build
# Deploy to Vercel
```

### Other Platforms
```bash
pnpm build
pnpm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is part of T.T. Software Solutions portfolio.

---

**Built with ❤️ by T.T. Software Solutions**
