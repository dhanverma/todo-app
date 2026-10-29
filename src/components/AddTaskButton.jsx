import { Plus } from "lucide-react";

function AddTaskButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Add a new task"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition hover:bg-blue-700 active:scale-95 sm:bottom-8 sm:right-8"
    >
      <Plus size={28} />
    </button>
  );
}

export default AddTaskButton;