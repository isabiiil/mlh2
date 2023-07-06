import Tab from "./tab";

export default function App() {
  return (
    <div className="flex flex-row">
      <Tab winner={false} logo="/../public/msft.avif" company="Microsoft" />
      <Tab winner={true} title="HackPrinceton" />
    </div>
  )
}