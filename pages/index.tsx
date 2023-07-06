import { useCallback, useEffect, useState } from "react";
import Browser from "./browser";
import Tab from "./tab";
import Bar from "./Bar";

function Princeton() {
  return (
    <Browser title="HackPrinceton" blurb="I made a website for HackPrinceton." stack={["React", "Next.js", "TailwindCSS"]} filter={["hackathon"]} />
  )
}

function Meds() {
  return (
    <Browser title="Meds.FYI" blurb="Crowdsourced price transparency" stack={["React", "Google Cloud"]} filter={["hackathon"]} />
  )
}

function Tomo() {
  return (
    <Browser title="Tomo" blurb="Monitoring and adherence to outpatient psychiatric care" stack={["React Native", "PostreSQL"]} filter={["personal project"]} />
  )
}

function Microsoft() {
  return (
    <Browser title="Microsoft" blurb="I worked at Microsoft." stack={["C#", "Azure"]} filter={["software engineering", "internship"]} />
  )
}

function Roblox() {
  return (
    <Browser title="Roblox" blurb="I worked at Roblox." filter={["product management", "internship"]} />
  )
}


function Default() {
  return (
    <Browser title="Choose a tab above" blurb="Click on a tab to learn more" />
  )
}

export default function App() {
  const components = {
    "Tomo": <Tomo />,
    "Meds": <Meds />,
    "Microsoft": <Microsoft />,
    "Roblox": <Roblox />,
    "Default": <Default />
  }
  const [lastPressed, setLastPressed] = useState("Default");

  const setNewTab = useCallback((newTab: string) => {
      return () => setLastPressed(newTab);
  }, []); 

  return (
    <div>
      <Bar setNewTab={setNewTab} />
      {/* <Princeton />
      <Microsoft /> */}
      {components[lastPressed]}
      <p><a href="/about">About Isa</a></p>
    </div>
  )
}