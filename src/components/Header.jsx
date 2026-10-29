import { Menu, Search, Bell } from "lucide-react";

function Header({ onMenuClick }) {
  return (
    <header className="flex items-center justify-between gap-4">

      {/* Menu */}
      <button
  type="button"
  onClick={onMenuClick}
  aria-label="Open menu"
  className="rounded-lg p-2 transition hover:bg-gray-100"
>
  <Menu size={24} />
</button>

      {/* Right-side icons */}
      <div className="flex items-center gap-2 sm:gap-4">

        {/* Search */}
        <button
          className="rounded-lg p-2 transition hover:bg-gray-100"
          aria-label="Search tasks"
        >
          <Search size={22} />
        </button>

        {/* Notifications */}
        <button
          className="rounded-lg p-2 transition hover:bg-gray-100"
          aria-label="Notifications"
        >
          <Bell size={22} />
        </button>

      </div>

    </header>
  );
}

export default Header;