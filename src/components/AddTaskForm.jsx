import { useState } from "react";
import { X } from "lucide-react";

function AddTaskForm({ onAdd, onClose }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Business");

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      return;
    }

    onAdd({
      title: trimmedTitle,
      category,
    });

    setTitle("");
    setCategory("Business");
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
      >

        <div className="mb-6 flex items-center justify-between gap-3">
          <h2 className="text-xl font-bold">
            Create a Task
          </h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close form"
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"
          >
            <X size={20} />
          </button>
        </div>

        <label
          htmlFor="task-title"
          className="mb-2 block text-sm font-medium"
        >
          Task title
        </label>

        <input
          id="task-title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="What do you need to do?"
          maxLength={120}
          autoFocus
          className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />

        <label
          htmlFor="task-category"
          className="mb-2 mt-5 block text-sm font-medium"
        >
          Category
        </label>

        <select
          id="task-category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-blue-500"
        >
          <option value="Business">Business</option>
          <option value="Personal">Personal</option>
        </select>

        <div className="mt-6 flex gap-3">

          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-xl border border-gray-200 px-4 py-3 font-medium hover:bg-gray-50"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="flex-1 rounded-xl bg-blue-600 px-4 py-3 font-medium text-white hover:bg-blue-700"
          >
            Create Task
          </button>

        </div>

      </form>

    </div>
  );
}

export default AddTaskForm;