import { useState, useEffect } from "react";
import TaskItem from "./components/TaskItem";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Greeting from "./components/Greeting";
import CategoryCard from "./components/CategoryCard";
import AddTaskButton from "./components/AddTaskButton";
import AddTaskForm from "./components/AddTaskForm";

import { BriefcaseBusiness, UserRound } from "lucide-react";

function App() {

  const [filter, setFilter] = useState("All");

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

const [tasks, setTasks] = useState(() => {
  const savedTasks = localStorage.getItem("todo-tasks");

  if (savedTasks) {
    return JSON.parse(savedTasks);
  }

  return [
    {
      id: 1,
      title: "Finish React project",
      category: "Business",
      completed: false,
    },
    {
      id: 2,
      title: "Read for 30 minutes",
      category: "Personal",
      completed: true,
    },
    {
      id: 3,
      title: "Practice JavaScript",
      category: "Business",
      completed: false,
    },
    {
      id: 4,
      title: "Buy groceries",
      category: "Personal",
      completed: false,
    },
  ];
});

const filteredTasks = tasks.filter((task) => {
  if (filter === "Active") {
    return !task.completed;
  }

  if (filter === "Completed") {
    return task.completed;
  }

  return true;
});

useEffect(() => {
  localStorage.setItem("todo-tasks", JSON.stringify(tasks));
}, [tasks]);

const [isFormOpen, setIsFormOpen] = useState(false);

function toggleTask(id) {
  setTasks((currentTasks) =>
    currentTasks.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    )
  );
}

function deleteTask(id) {
  setTasks((currentTasks) =>
    currentTasks.filter((task) => task.id !== id)
  );
}

function addTask(newTask) {
  setTasks((currentTasks) => [
    ...currentTasks,
    {
      ...newTask,
      id: crypto.randomUUID(),
      completed: false,
    },
  ]);

  setIsFormOpen(false);
}

const businessTasks = tasks.filter(
  (task) => task.category === "Business"
);

const personalTasks = tasks.filter(
  (task) => task.category === "Personal"
);

const businessCompleted = businessTasks.filter(
  (task) => task.completed
).length;

const personalCompleted = personalTasks.filter(
  (task) => task.completed
).length;

  return (
    <div className="min-h-screen bg-[#F5F6FF] text-gray-800">

      <div className="flex min-h-screen">

        <Sidebar
  isOpen={isSidebarOpen}
  onClose={() => setIsSidebarOpen(false)}
/>

        <main className="min-w-0 flex-1 p-4 sm:p-6">

          <Header
  onMenuClick={() => setIsSidebarOpen(true)}
/>

          <Greeting />

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">

  <CategoryCard
    title="Business"
    taskCount={businessTasks.length}
    completedCount={businessCompleted}
    color="bg-blue-100 text-blue-600"
    icon={<BriefcaseBusiness size={22} />}
  />

  <CategoryCard
    title="Personal"
    taskCount={personalTasks.length}
    completedCount={personalCompleted}
    color="bg-purple-100 text-purple-600"
    icon={<UserRound size={22} />}
  />

</div>

<section className="mt-8">

  <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
  <div>
    <h2 className="text-lg font-bold sm:text-xl">
      Today's Tasks
    </h2>

    <p className="mt-1 text-sm text-gray-500">
      Stay organized and get things done.
    </p>
  </div>

  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
    {tasks.filter((task) => !task.completed).length} remaining
  </span>
</div>

  <div className="mb-4 flex flex-wrap gap-2">
  {["All", "Active", "Completed"].map((option) => (
    <button
      key={option}
      type="button"
      onClick={() => setFilter(option)}
      className={`rounded-full px-4 py-2 text-sm font-medium transition ${
        filter === option
          ? "bg-blue-600 text-white"
          : "bg-white text-gray-600 hover:bg-gray-100"
      }`}
    >
      {option}
    </button>
  ))}
</div>

  <div className="flex flex-col gap-3">
  {filteredTasks.length > 0 ? (
    filteredTasks.map((task) => (
      <TaskItem
        key={task.id}
        title={task.title}
        category={task.category}
        completed={task.completed}
        onToggle={() => toggleTask(task.id)}
        onDelete={() => deleteTask(task.id)}
      />
    ))
  ) : (
    <div className="rounded-2xl bg-white px-4 py-10 text-center">
      <p className="text-lg font-semibold text-gray-700">
        {filter === "Completed"
          ? "No completed tasks yet"
          : filter === "Active"
            ? "All caught up!"
            : "No tasks yet"}
      </p>

      <p className="mt-2 text-sm text-gray-500">
        {filter === "Active"
          ? "You've finished all your tasks. Great job!"
          : filter === "Completed"
            ? "Complete a task and it will appear here."
            : "Add a task to get started."}
      </p>
    </div>
  )}
</div>

</section>

        </main>

      </div>

      {isSidebarOpen && (
  <button
    type="button"
    aria-label="Close navigation menu"
    onClick={() => setIsSidebarOpen(false)}
    className="fixed inset-0 z-40 bg-black/40 md:hidden"
  />
)}

      <AddTaskButton
      onClick={() => setIsFormOpen(true)}
    />

    {isFormOpen && (
      <AddTaskForm
        onAdd={addTask}
        onClose={() => setIsFormOpen(false)}
      />
    )}

    </div>
  );
}

export default App;