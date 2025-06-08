// export const metadata = {
//   title: "About Me",
// };

// export default function AboutPage() {
//   return (
//     <section className="p-4 space-y-4 w-8/12 mx-auto ">
//       <div
//         className="collapse bg-none rounded-none w-full m-0"
//       >
//         <input type="checkbox"/>
//         <div className="collapse-title p-0 ">
//             <h1 className="text-3xl font-bold mb-4 p-0">- About Me </h1>
//         </div>
//         <div className="collapse-content">
//           <p className="text-lg pl-4 bg-neutral shadow-2xl p-4">
//             I am a Solutions Architect, specializing in designing and
//             implementing technical solutions that drive lead generation and
//             optimize sales conversions. I work closely with product,
//             engineering, and customer success teams to deliver scalable,
//             user-friendly solutions. From developing novel integrations to
//             managing technical projects, I thrive in solving complex technical
//             challenges while ensuring seamless platform adoption and client
//             satisfaction.
//           </p>
//         </div>
//       </div>

//       {/* Background Accordion */}
//       <div className="collapse collapse-arrow bg-neutral text-neutral-content/90 rounded-none w-full shadow-2xl">
//         <input type="checkbox" name="accordion-about" />
//         <div className="collapse-title">
//           <h1 className="text-xl font-semibold">My Background</h1>
//         </div>
//         <div className="collapse-content ">
//           <p className="text-lg p-4 font-semibold glass">
//             Leveraging my background in academia and education, I enhance
//             documentation clarity, foster inter-departmental collaboration, and
//             deliver effective client technical education. This experience also
//             enables me to quickly learn and implement new technologies, ensuring
//             our solutions remain cutting-edge and aligned with business goals.
//           </p>
//         </div>
//       </div>

//       {/* Core Competencies Accordion with nested items remains unchanged */}
//       <div className="collapse collapse-arrow bg-neutral text-neutral-content/90 rounded-none w-full shadow-2xl">
//         <input type="checkbox" name="accordion-about" />
//         <div className="collapse-title">
//           <h1 className="text-xl font-semibold">Core Competencies</h1>
//         </div>
//         <div className="collapse-content space-y-2 [&>div]:rounded-none">
//           {/* Nested Accordion Item 1 */}
//           <div className="collapse collapse-arrow bg-none border border-current">
//             <input type="checkbox" name="accordion-core-nested" />
//             <div className="collapse-title text-lg font-semibold">
//               Solution Architecture & Design
//             </div>
//             <div className="collapse-content text-sm">
//               <p>
//                 Crafting scalable and efficient technical solutions tailored to
//                 business needs.
//               </p>
//             </div>
//           </div>
//           {/* Nested Accordion Item 2 */}
//           <div className="collapse collapse-arrow border border-current">
//             <input type="checkbox" name="accordion-core-nested" />
//             <div className="collapse-title text-lg font-semibold">
//               Technical Integration
//             </div>
//             <div className="collapse-content text-sm">
//               <p>
//                 Expertise in REST APIs, cloud-based platforms, and custom
//                 scripting (JavaScript, Python, SQL).
//               </p>
//             </div>
//           </div>
//           {/* Nested Accordion Item 3 */}
//           <div className="collapse collapse-arrow border border-current">
//             <input type="checkbox" name="accordion-core-nested" />
//             <div className="collapse-title text-lg font-semibold">
//               Customer Support & Troubleshooting
//             </div>
//             <div className="collapse-content text-sm">
//               <p>
//                 Diagnosing and resolving complex technical issues with a
//                 customer-first mindset.
//               </p>
//             </div>
//           </div>
//           {/* Nested Accordion Item 4 */}
//           <div className="collapse collapse-arrow border border-current">
//             <input type="checkbox" name="accordion-core-nested" />
//             <div className="collapse-title text-lg font-semibold">
//               Project Management
//             </div>
//             <div className="collapse-content text-sm">
//               <p>
//                 Managing technical projects from planning to execution while
//                 aligning with business objectives and timelines.
//               </p>
//             </div>
//           </div>
//           {/* Nested Accordion Item 5 */}
//           <div className="collapse collapse-arrow border border-current">
//             <input type="checkbox" name="accordion-core-nested" />
//             <div className="collapse-title text-lg font-semibold">
//               Cross-Functional Collaboration
//             </div>
//             <div className="collapse-content text-sm">
//               <p>
//                 Partnering across product, engineering, and customer teams to
//                 deliver innovative solutions and drive continuous improvement.
//               </p>
//             </div>
//           </div>
//           {/* Nested Accordion Item 6 */}
//           <div className="collapse collapse-arrow border border-current">
//             <input type="checkbox" name="accordion-core-nested" />
//             <div className="collapse-title text-lg font-semibold">
//               Technical Communication & Education
//             </div>
//             <div className="collapse-content text-sm">
//               <p>
//                 Translating complex technical concepts into accessible
//                 documentation and training to improve client understanding and
//                 system adoption.
//               </p>
//             </div>
//           </div>
//           {/* Nested Accordion Item 7 */}
//           <div className="collapse collapse-arrow border border-current">
//             <input type="checkbox" name="accordion-core-nested" />
//             <div className="collapse-title text-lg font-semibold">
//               Data Analysis & Reporting
//             </div>
//             <div className="collapse-content text-sm">
//               <p>
//                 Utilizing data to inform decision-making and optimize solution
//                 performance.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

export const metadata = {
  title: "About Me",
};

interface Competency {
  title: string;
  description: string;
}

const competencies: Competency[] = [
  {
    title: "Solution Architecture & Design",
    description:
      "Crafting scalable and efficient technical solutions tailored to business needs.",
  },
  {
    title: "Technical Integration",
    description:
      "Expertise in REST APIs, cloud-based platforms, and custom scripting (JavaScript, Python, SQL).",
  },
  {
    title: "Customer Support & Troubleshooting",
    description:
      "Diagnosing and resolving complex technical issues with a customer-first mindset.",
  },
  {
    title: "Project Management",
    description:
      "Managing technical projects from planning to execution while aligning with business objectives and timelines.",
  },
  {
    title: "Cross-Functional Collaboration",
    description:
      "Partnering across product, engineering, and customer teams to deliver innovative solutions and drive continuous improvement.",
  },
  {
    title: "Technical Communication & Education",
    description:
      "Translating complex technical concepts into accessible documentation and training to improve client understanding and system adoption.",
  },
  {
    title: "Data Analysis & Reporting",
    description:
      "Utilizing data to inform decision-making and optimize solution performance.",
  },
];

export default function AboutPage() {
  return (
    <section className="p-4 space-y-4 w-8/12 mx-auto ">
      <div className="bg-none rounded-none w-full m-0">
        <h1 className="text-3xl font-bold mb-4 p-0">- About Me </h1>
      </div>

      {/* Background Accordion */}
      <div className="collapse collapse-arrow bg-neutral text-neutral-content/90 rounded-none w-full border-double border-2 border-current">
        <input type="checkbox" name="accordion-about" />
        <div className="collapse-title">
          <h1 className="text-xl font-semibold">My Background</h1>
        </div>
        <div className="collapse-content ">
          <p className="text-lg p-4 font-semibold bg-gradient-to-br from-white/20 via-black/10 to-white/20 border-double border-2 border-current">
            Leveraging my background in academia and education, I enhance
            documentation clarity, foster inter-departmental collaboration, and
            deliver effective client technical education. This experience also
            enables me to quickly learn and implement new technologies, ensuring
            our solutions remain cutting-edge and aligned with business goals.
          </p>
        </div>
      </div>

      {/* Core Competencies Accordion */}
      <div className="collapse collapse-arrow bg-neutral text-neutral-content/90 rounded-none w-full border-double border-2 border-current">
        <input type="checkbox" name="accordion-about" />
        <div className="collapse-title">
          <h1 className="text-xl font-semibold">Core Competencies</h1>
        </div>
        <div className="collapse-content space-y-2 [&>div]:rounded-none">
          {competencies.map((comp, index) => (
            <div
              key={index}
              className="collapse collapse-arrow border border-current"
            >
              <input type="checkbox" name="accordion-core-nested" />
              <div className="collapse-title text-lg font-semibold bg-gradient-to-br from-white/20 via-black/10 to-white/20 border-double border-2 border-current">
                {comp.title}
              </div>
              <div className="collapse-content">
                <p className="text-med font-semibold bg-gradient-to-br from-white/20 via-black/10 to-white/20 border-double border-2 border-current p-4 mt-4">{comp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}