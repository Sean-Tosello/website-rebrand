export const metadata = {
  title: "Professional Experience",
}

interface ExperienceItem {
  company: string
  role: string
  description: string
}

const experiences: ExperienceItem[] = [
  {
    company: "Further",
    role: "Solutions Architect",
    description:
      "As a Solutions Architect at Further, I design and implement technical solutions that help senior living and healthcare organizations streamline sales and marketing operations through AI-powered automation. I work closely with product, support, and customer success teams to ensure seamless platform adoption and drive business value for our clients.",
  },
  {
    company: "Further",
    role: "Integrations Support Engineer",
    description:
      "As an Integrations Support Engineer at FURTHER, I leveraged my expertise in CSS, JavaScript, HTML, Python, and SQL to customize client websites, build API integrations, and streamline CRM and database connectivity. I worked directly with clients to implement tailored technical solutions, process complex data into actionable insights, and ensure seamless deployment through proactive troubleshooting and support.",
  },
]

export default function ExperiencePage() {
  return (
    <section className="p-4 space-y-4 w-8/12 mx-auto">
      <h1 className="text-3xl font-bold mb-4">- Professional Experience</h1>
      {experiences.map((exp, i) => (
        <div
          key={i}
          className="collapse collapse-arrow bg-neutral rounded-none border-double border-2 border-current"
        >
          <input
            type="checkbox"
            name="accordion-experience"
          />
          <div className="collapse-title">
            <h2 className="text-xl font-semibold">
              {exp.role} at {exp.company}
            </h2>
          </div>
          <div className="collapse-content font-semibold text-lg">
            <p className="p-4 bg-gradient-to-br from-white/20 via-black/10 to-white/20 border-double border-2 border-current">{exp.description}</p>
          </div>
        </div>
      ))}
    </section>
  )
}
//  filepath: c:\Users\seanl\Documents\Personal Work\portfolio-website\app\experience\page.tsx
// export const metadata = {
//   title: "Professional Experience",
// }

// interface ExperienceItem {
//   company: string
//   role: string
//   description: string
// }

// const experiences: ExperienceItem[] = [
//   {
//     company: "Further",
//     role: "Solutions Architect",
//     description:
//       "As a Solutions Architect at Further, I design and implement technical solutions that help senior living and healthcare organizations streamline sales and marketing operations through AI-powered automation. I work closely with product, support, and customer success teams to ensure seamless platform adoption and drive business value for our clients.",
//   },
//   {
//     company: "Further",
//     role: "Integrations Support Engineer",
//     description:
//       "As an Integrations Support Engineer at FURTHER, I leveraged my expertise in CSS, JavaScript, HTML, Python, and SQL to customize client websites, build API integrations, and streamline CRM and database connectivity. I worked directly with clients to implement tailored technical solutions, process complex data into actionable insights, and ensure seamless deployment through proactive troubleshooting and support.",
//   },
// ]

// export default function ExperiencePage() {
//   return (
//     <section className="p-4 space-y-4">
//       <h1 className="text-3xl font-bold mb-4">Professional Experience</h1>
//       {experiences.map((exp, i) => (
//         <div
//           key={i}
//           className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-none"
//         >
//           <input
//             type="radio"
//             name="accordion-experience"
//             defaultChecked={i === 0}
//           />
//           <div className="collapse-title">
//             <h2 className="text-xl font-semibold">
//               {exp.role} at {exp.company}
//             </h2>
//           </div>
//           <div className="collapse-content">
//             <p>{exp.description}</p>
//           </div>
//         </div>
//       ))}
//     </section>
//   )
// }

