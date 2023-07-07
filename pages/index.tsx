import { useCallback, useEffect, useState } from "react";
import Content from "./content";
import Bar from "./Bar";
import Browser from "./browser";

export default function App() {
  const [activeTab, setActiveTab] = useState(0);

  // const setNewTab = (index: number) => {
  //     ; console.log("bar to app")}
  // } 

  return (
    <div>
      <Bar activeTab={activeTab} />
      {/* <Princeton />
      <Microsoft /> */}
      <Browser activeTab={activeTab} />
      <p><a href="/about">About Isa</a></p>
    </div>
  )
}