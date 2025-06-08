// app/page.tsx
// export const metadata = {
//   title: "Sean Tosello - Solutions Architect",
// }

// export default function HomePage() {
//   return (
//     <section>
//       <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
//       <p className="mb-6">
//         As a professional Solutions Architect, I specialize in designing
//         scalable, secure, and reliable solutions that drive business success.
//       </p>
//     </section>
//   )
// }

export const metadata = {
  title: "Sean Tosello - Solutions Architect",
}

export default function HomePage() {
  return (
    <div className="hero bg-none text-neutral-content py-6">
      <div className="hero-content bg-neutral text-neutral-content flex-col lg:flex-row gap-8 w-auto p-6 lg:p-10 lg:w-8/12 lg:mx-auto shadow-2xl">
        <img
          src="/profileSquare.jpg"
          alt="profile picture of Sean Tosello"
          className="w-full max-w-sm lg:max-w-xs shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Sean Tosello</h1>
          <h2 className="text-3xl pt-4">Solutions Architect & Front End Engineer</h2>
            <p className="text-xl py-8 italic">
            Energizing business outcomes by transforming your goals into reality—let's achieve your vision together.
            </p>
          <a href="/about" className="btn btn-outline rounded-none">About Me</a>
        </div>
      </div>
    </div>
  )
}
