import React from 'react';
import { useTodos } from './hooks/useTodos';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Filter from './components/Filter';

function App() {
  const {
    addTodo,
    toggleTodo,
    deleteTodo,
    updateTodo,
    clearCompleted,
    getFilteredTodos,
    filter,
    setFilter,
    stats,
  } = useTodos();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">📝 My Todo List</h1>
          <p className="text-gray-600 text-lg">
            Stay organized and productive with ease
          </p>
        </div>

        {/* Stats Card */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-md text-center border-2 border-blue-200">
            <p className="text-2xl font-bold text-primary">{stats.total}</p>
            <p className="text-sm text-gray-600">Total Todos</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center border-2 border-yellow-200">
            <p className="text-2xl font-bold text-yellow-600">{stats.active}</p>
            <p className="text-sm text-gray-600">Active</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center border-2 border-green-200">
            <p className="text-2xl font-bold text-success">{stats.completed}</p>
            <p className="text-sm text-gray-600">Completed</p>
          </div>
        </div>

        {/* Add Todo Form */}
        <TodoForm onAdd={addTodo} />

        {/* Filter */}
        <Filter
          activeFilter={filter}
          onFilterChange={setFilter}
          stats={stats}
          onClearCompleted={clearCompleted}
        />

        {/* Todo List */}
        <TodoList
          todos={getFilteredTodos()}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onUpdate={updateTodo}
        />
      </div>
    </div>
  );
}

export default App;
