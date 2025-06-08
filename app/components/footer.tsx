import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center bg-neutral text-base-content gap-6 p-6">
      <nav className="grid grid-flow-col gap-2">
        <Link href="/" className="link link-hover">
          Home
        </Link>
        <Link href="/experience" className="link link-hover">
          Experience
        </Link>
        <Link href="/projects" className="link link-hover">
          Projects
        </Link>
        <Link href="/about" className="link link-hover">
          About Me
        </Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.linkedin.com/in/sean-tosello"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 
                        0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 
                        0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 
                        1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-1.337-.027-3.062-1.865-3.062-1.865 
                        0-2.151 1.453-2.151 2.957v5.709h-3v-11h2.884v1.501h.041c.402-.762 
                        1.386-1.565 2.853-1.565 3.053 0 3.619 2.008 3.619 4.623v6.441z"
              />
            </svg>
          </a>
          <a
            href="https://github.com/sean-tosello"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 0c-6.627 0-12 5.373-12 12 0 5.303 3.438 
                        9.8 8.205 11.385.6.111.82-.261.82-.577 0-.285-.011-1.04-.017-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729
                        1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 
                        3.495.998.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 
                        0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 
                        0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 
                        2.047.138 3.006.404 2.289-1.552 3.295-1.23 3.295-1.23.655 1.653.243 
                        2.874.119 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.807 5.625-5.479 
                        5.921.43.371.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 
                        0 .317.216.694.825.576 4.765-1.585 8.2-6.082 
                        8.2-11.384 0-6.627-5.373-12-12-12z"
              />
            </svg>
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} Sean Tosello. All rights
          reserved.
        </p>
      </aside>
    </footer>
  );
}
