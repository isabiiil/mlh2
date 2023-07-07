import Content from "./content"

const components = [
  <Content
    key={1}
    title="Microsoft"
    blurb="I worked on the Azure Core team as a software engineer intern."
    stack={["C#", "Azure"]}
    filter={["Internship", "SWE"]}
  />,
  <Content
    key={2}
    title="Roblox"
    blurb="I worked on the Studio Marketplace team as a product manager intern."
    filter={["Internship", "PM"]}
  />,
  <Content
    key={3}
    title="Tomo"
    blurb="I started the Tomo team and am developing and designing the application."
    stack={["React Native", "TypeScript", "PostreSQL"]}
    filter={["Personal Project"]}
  />,
  <Content
    key={4}
    title="Meds.FYI"
    blurb="I singlehandedly developed this website for Creatica."
    stack={["React", "Firebase", "Google Cloud"]}
    filter={["Hackathon"]}
  />
]

export default function Browser({ activeTab }: {
  activeTab: number
}) {
  const activeComponent = components[activeTab];

  return (
    <div className="flex flex-col bg-blue-400 h-auto w-1/2 p-4 my-0 mx-auto">
      {activeComponent}
      <p>jui</p>
    </div>
  )
}
