import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
      <nav className="navbar bg-neutral text-neutral-content shadow-sm p-4">
        {/* Navbar start: Brand (always on left) */}
        <div className="navbar-start pl-.5">
          <Link href="/" className="btn btn-ghost text-xl rounded-none">
            Sean Tosello
          </Link>
        </div>
        {/* Navbar end: Mobile dropdown and desktop menu on right */}
        <div className="navbar-end">
          {/* Mobile Dropdown: visible only on mobile */}
          <div className="dropdown dropdown-end lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-neutral text-neutral-content rounded-none mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link
                  href="/"
                  className={`rounded-none btn btn-ghost ${
                    pathname === "/" ? "btn-outline" : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  className={`rounded-none btn btn-ghost ${
                    pathname === "/experience" ? "btn-outline" : ""
                  }`}
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className={`rounded-none btn btn-ghost ${
                    pathname === "/projects" ? "btn-outline" : ""
                  }`}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`rounded-none btn btn-ghost ${
                    pathname === "/about" ? "btn-outline" : ""
                  }`}
                >
                  About Me
                </Link>
              </li>
            </ul>
          </div>
          {/* Desktop Menu: visible only on large screens */}
          <div className="hidden lg:flex pr-.5">
            <ul className="menu menu-horizontal p-0 space-x-4">
              <li>
                <Link
                  href="/"
                  className={`rounded-none btn btn-ghost ${
                    pathname === "/" ? "btn-outline" : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  className={`rounded-none btn btn-ghost ${
                    pathname === "/experience" ? "btn-outline" : ""
                  }`}
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className={`rounded-none btn btn-ghost ${
                    pathname === "/projects" ? "btn-outline" : ""
                  }`}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`rounded-none btn btn-ghost ${
                    pathname === "/about" ? "btn-outline" : ""
                  }`}
                >
                  About Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
  );
}
