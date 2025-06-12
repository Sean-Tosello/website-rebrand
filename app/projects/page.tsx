export const metadata = {
  title: "Projects",
}

interface Project {
  name: string
  link: string
  description: string
  preview?: string
  demo?: string
  demo1?: string
  demo2?: string
}

const projects: Project[] = [
  {
    name: "This Website!",
    link: "https://github.com/Sean-Tosello/website-rebrand",
    description: "Built with Next.js, DaisyUI, and Tailwind CSS this website was custom built to showcase my experience and skills as both a Solutions Architect and Front End Engineer.",
  },
  {
    name: "Ravenous",
    link: "https://github.com/Sean-Tosello/ravenous",
    description: "Codecademy Project: A Yelp-like application built with React, Redux, and the Yelp API. It allows users to search for restaurants and view details.",
    demo: "https://www.loom.com/share/f2219e6e25724e2eb7739ea3af3c61a6?sid=35c52417-2484-476d-81bc-ba3c8d6966c5",
  },
    {
    name: "Further Demo App",
    link: "https://github.com/Sean-Tosello/integration_specialist_exercise",
    description: "A demo application for Further, showcasing integration with their API, Google Tag manager, and Google Analytics. Built with React and Next.js.",
    preview: "https://integration-specialist-exercise.vercel.app/",
    demo1: "https://www.loom.com/share/e5d4304bc91e4bd1a8212eb41439668e?sid=673d729b-1906-4265-9989-2bab41db0538",
    demo2: "https://www.loom.com/share/42c16cbfc17e413995c6f5b2e28db497?sid=1cf3b25d-1979-4fc4-ada3-09b338ace777",
  },
]

export default function ProjectsPage() {
  return (
    <section className="p-4 space-y-4 w-8/12 mx-auto ">
      <h1 className="text-3xl font-bold mb-4">- Projects</h1>
      {projects.map((project, i) => (
        <div
          key={i}
          className="collapse collapse-arrow bg-neutral rounded-none w-full border-double border-2 border-current"
        >
          <input
            type="checkbox"
            name="accordion-projects"
          />
          <div className="collapse-title">
            <h2 className="text-xl font-semibold">
                {project.name}
            </h2>
          </div>
          <div className="collapse-content font-semibold text-lg">
            <p className="p-4 bg-gradient-to-br from-white/20 via-black/10 to-white/20 border-double border-2 border-current">
              {project.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4 items-center mt-4">
              <button className="btn btn-outline border-current shadow-lg rounded-none">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See the Code!
                </a>
              </button>
              {project.preview && (
                <button className="btn btn-outline border-current shadow-lg rounded-none">
                  <a
                    href={project.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See a Preview!
                  </a>
                </button>
              )}
              {project.demo && (
                <button className="btn btn-outline border-current shadow-lg rounded-none">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See the Demo!
                  </a>
                </button>
              )}
              {project.demo1 && (
                <button className="btn btn-outline border-current shadow-lg rounded-none">
                  <a
                    href={project.demo1}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo Part 1!
                  </a>
                </button>
              )}
              {project.demo2 && (
                <button className="btn btn-outline border-current shadow-lg rounded-none">
                  <a
                    href={project.demo2}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo Part 2!
                  </a>
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

