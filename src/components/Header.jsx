import { Menu, Search, Bell } from "lucide-react";
import { useState, useRef, useEffect } from "react";

function Header({ onMenuClick, onSearchChange, searchValue }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const searchRef = useRef(null)

  useEffect(() => {
    function handleClickOutside (event){
      if(searchRef.current && !searchRef.current.contains(event.target)){
        setIsSearchOpen(false);
        onSearchChange("")
      }
    }

    document.addEventListener("mousedown",handleClickOutside)
  
    return () => {
      document.removeEventListener("mousedown",handleClickOutside)
    }
  }, [])
  

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

        <div ref={searchRef} className="flex items-center">
          {/* Input-Search */}
          <input
            type="text"
            className={`h-6 w-36 border px-1.5 rounded-sm ${isSearchOpen ? "block" : "hidden"}`}
            placeholder="Search"
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
          />

          {/* Search */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="rounded-lg cursor-pointer p-2 transition hover:bg-gray-100"
            aria-label="Search tasks"
          >
            <Search size={22} />
          </button>
        </div>

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