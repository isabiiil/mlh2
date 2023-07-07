export default function Content({
  title,  // title of project or job
  blurb, // summary of project or description of job
  demo, // video
  stack, // tech stack
  filter  // tags at the bottom, eg hackathon or internship
}: {
  title: string
  blurb: string
  demo?: string
  stack?: string[]
  filter?: string[]
}) {
  return (
    <div className="flex flex-col bg-blue-400">
      <h1>{title}</h1>
      <p>{blurb}</p>
      {demo && 
        <video width="320" height="240" loop>
          <source src="https://youtu.be/L_ure3Z-qGw" type="video/mp4" />
          Your browser does not support the video tag.
        </video>}
      {stack?.map((tech) => <p key={tech}>{tech}</p>)}
      {filter?.map((tag) => <p key={tag}>{tag}</p>)}
    </div>
  )
}