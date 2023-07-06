import Tab from './tab'
import { useEffect, useState } from 'react';

export default function Bar({ setNewTab }: { setNewTab: (newTab: string) => () => void }) {
// export default function Bar({onClick: ()=>void}) {
  return (
    <div className="flex flex-row">
      <Tab 
        onClick={setNewTab("Microsoft")}
        winner={false} 
        logo="/../public/msft.avif" 
        company="Microsoft" />
      {/* <Tab 
        onClick={setNewTab("HackPrinceton")}
        winner={true} 
        title="HackPrinceton" /> */}
        <Tab 
          onClick={setNewTab("Roblox")}
          winner={false}
          logo="/../public/roblox.png"
          company="Roblox" />
        <Tab 
          onClick={setNewTab("Tomo")}
          winner={false}
          title='Tomo' />
        <Tab 
          onClick={setNewTab("Meds")}
          winner={true}
          title='Meds.FYI' />
    </div>
  )
}