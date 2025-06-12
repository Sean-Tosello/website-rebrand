export const metadata = {
  title: "Projects",
}

interface Project {
  name: string
  link: string
  description: string
  demo?: string
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
  },
    {
    name: "Further Demo App",
    link: "https://github.com/Sean-Tosello/integration_specialist_exercise",
    description: "A demo application for Further, showcasing integration with their API, Google Tag manager, and Google Analytics. Built with React and Next.js.",
    demo: "https://integration-specialist-exercise.vercel.app/"
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
            <button className="btn btn-outline border-current shadow-lg rounded-none mt-4 block mx-auto">
              <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              >
              See the Code!
              </a>
            </button>
            {project.demo && (
              <button className="btn btn-outline border-current shadow-lg rounded-none mt-4 block mx-auto">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See the Demo!
                </a>
              </button>
            )}
          </div>
        </div>
      ))}
    </section>
  )
}

// Explanation

// - Added `w-full` to the outer `<section>` to allow full-width layout.
// - Each accordion item now uses `w-full` so it spans the full page width.
// - The rest of the structure is left intact while ensuring all items stretch across the available space.// filepath: c:\Users\seanl\Documents\Personal Work\portfolio-website\app\projects\page.tsx
// export const metadata = {
//   title: "Projects",
// }

// interface Project {
//   name: string
//   link: string
//   description: string
// }

// const projects: Project[] = [
//   {
//     name: "Project X",
//     link: "https://github.com/yourusername/project-x",
//     description: "A scalable microservices architecture built with Kubernetes and Docker.",
//   },
//   {
//     name: "Project Y",
//     link: "https://github.com/yourusername/project-y",
//     description: "Serverless application using AWS Lambda and API Gateway.",
//   },
// ]

// export default function ProjectsPage() {
//   return (
//     <section className="p-4 space-y-4 w-full">
//       <h1 className="text-3xl font-bold mb-4">Projects</h1>
//       {projects.map((project, i) => (
//         <div
//           key={i}
//           className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-none w-full"
//         >
//           <input
//             type="radio"
//             name="accordion-projects"
//             defaultChecked={i === 0}
//           />
//           <div className="collapse-title">
//             <h2 className="text-xl font-semibold">
//               <a
//                 href={project.link}
//                 target="_blank"
//                 rel=" noreferrer"
//                 className="underline"
//               >
//                 {project.name}
//               </a>
//             </h2>
//           </div>
//           <div className="collapse-content">
//             <p>{project.description}</p>
//           </div>
//         </div>
//       ))}
//     </section>
//   )
// }
 

//  Explanation

// - Added `w-full` to the outer `<section>` to allow full-width layout.
// - Each accordion item now uses `w-full` so it spans the full page width.
// - The rest of the structure is left intact while ensuring all items stretch across the available space.
