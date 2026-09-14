# Todo List App

A modern, feature-rich todo list application built with React, TypeScript, and Tailwind CSS. All data is stored locally in your browser using localStorage.

## Features

✅ **Add Todos** - Create new todos with title, description, priority, and due date
✅ **Mark Complete** - Check off completed tasks
✅ **Edit Todos** - Update todo details anytime
✅ **Delete Todos** - Remove tasks you no longer need
✅ **Filter Tasks** - View All, Active, or Completed todos
✅ **Priority Levels** - Set Low, Medium, or High priority for tasks
✅ **Due Dates** - Assign deadlines to your todos
✅ **Local Storage** - All data saved automatically in your browser
✅ **Statistics** - Track total, active, and completed todos
✅ **Responsive Design** - Works great on desktop, tablet, and mobile
✅ **Clear Completed** - Bulk delete all completed todos

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **LocalStorage API** - Client-side data persistence

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/todo-list-app.git
cd todo-list-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will open at `http://localhost:3000`

## Building for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

## Usage

1. **Add a Todo**: Click the "+ Add New Todo" button and fill in the details
2. **Complete a Todo**: Check the checkbox next to the todo
3. **Edit a Todo**: Click the "Edit" button and modify the details
4. **Delete a Todo**: Click the "Delete" button
5. **Filter Todos**: Use the filter buttons (All, Active, Completed)
6. **View Statistics**: Check the cards at the top for todo count stats

## Data Storage

All todos are automatically saved to your browser's localStorage. Your data persists even after closing and reopening the browser.

**Note**: Clearing browser data or localStorage will delete all saved todos.

## Project Structure

```
src/
├── components/
│   ├── Filter.tsx        # Filter and stats component
│   ├── TodoForm.tsx      # Add new todo form
│   ├── TodoItem.tsx      # Individual todo item
│   └── TodoList.tsx      # List of todos
├── hooks/
│   └── useTodos.ts       # Custom hook for todo management
├── types/
│   └── index.ts          # TypeScript interfaces
├── App.tsx               # Main app component
├── main.tsx              # React entry point
└── index.css             # Global styles
```

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

MIT License - feel free to use this project for personal and commercial purposes.

## Support

If you encounter any issues or have suggestions, please open an issue on GitHub.
