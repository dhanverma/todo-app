import { Circle, CircleCheck, Trash2 } from "lucide-react";

function TaskItem({ title, category, completed, onToggle, onDelete }) {
  return (
    <div className="flex min-w-0 items-center gap-3 rounded-xl bg-white p-4 shadow-sm">

      {/* Checkbox */}
      <button
        type="button"
        onClick={onToggle}
        aria-label={completed ? "Mark as incomplete" : "Mark as complete"}
        className="shrink-0 text-blue-600"
      >
        {completed ? (
          <CircleCheck size={22} />
        ) : (
          <Circle size={22} />
        )}
      </button>

      {/* Task details */}
      <div className="min-w-0 flex-1">
        <p
          className={`break-words text-sm font-medium sm:text-base ${
            completed
              ? "text-gray-400 line-through"
              : "text-gray-800"
          }`}
        >
          {title}
        </p>

        <span className="mt-1 inline-block text-xs text-gray-500">
          {category}
        </span>
      </div>

      {/* Delete button */}
      <button
        type="button"
        onClick={onDelete}
        aria-label={`Delete ${title}`}
        className="shrink-0 rounded-lg p-2 text-gray-400 transition hover:bg-red-50 hover:text-red-500"
      >
        <Trash2 size={18} />
      </button>

    </div>
  );
}

export default TaskItem;