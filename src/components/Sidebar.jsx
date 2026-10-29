import { X } from "lucide-react";

function Sidebar({ isOpen, onClose }) {
  return (
    <aside
  className={`
    fixed inset-y-0 left-0 z-50
    flex w-64 flex-col overflow-y-auto bg-white p-6
    shadow-xl transition-transform duration-300
    md:sticky md:top-0 md:z-auto md:h-screen
    md:translate-x-0 md:shadow-none
    ${isOpen ? "translate-x-0" : "-translate-x-full"}
    md:flex
  `}
>

    <div className="mb-6 flex justify-end md:hidden">
  <button
    type="button"
    onClick={onClose}
    aria-label="Close menu"
    className="rounded-lg p-2 hover:bg-gray-100"
  >
    <X size={22} />
  </button>
</div>

      {/* Profile */}
      <div className="mb-10">
        <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-600">
          J
        </div>

        <h2 className="text-lg font-bold">
          My Bubu
        </h2>

        <p className="text-sm text-gray-500">
          Stay productive!
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2">

        <button className="rounded-xl bg-blue-50 px-4 py-3 text-left font-semibold text-blue-600">
          My Tasks
        </button>

        <button className="rounded-xl px-4 py-3 text-left text-gray-500 transition hover:bg-gray-50">
          Upcoming
        </button>

        <button className="rounded-xl px-4 py-3 text-left text-gray-500 transition hover:bg-gray-50">
          Completed
        </button>

      </nav>

      {/* Consistency */}
      <div className="mt-10">
        <h3 className="mb-4 font-semibold">
          Consistency
        </h3>

        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: 28 }).map((_, index) => (
            <div
              key={index}
              className={`h-4 w-4 rounded-sm ${
                index % 3 === 0
                  ? "bg-blue-500"
                  : "bg-blue-100"
              }`}
            />
          ))}
        </div>

        <p className="mt-3 text-xs text-gray-400">
          Keep showing up every day!
        </p>
      </div>

    </aside>
  );
}

export default Sidebar;