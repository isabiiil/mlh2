import Tab from './tab'
import { useEffect, useState } from 'react';

export default function Bar({ onTabClick, activeTab }: { 
  onTabClick?: (index: number) => void
  activeTab: number
}) {
  const tabs = [
    {
      title: "Microsoft",
      logo: "/../public/msft.avif"
    },
    {
      title: "Roblox",
      logo: "/../public/roblox.png"
    },
    {
      title: "Tomo",
      winner: false
    },
    {
      title: "Meds.FYI",
      winner: true
    }
  ]

  return (
    <div className="flex flex-row h-auto w-1/2 my-0 mx-auto">
      {tabs.map((tab, index) => {
        return (
          <Tab
            key={index}
            logo={tab.logo}
            title={tab.title}
            winner={tab.winner}
            isActive={activeTab === index}
            // onClick={() => {onTabClick(index); console.log("tab to bar")}} 
          />
        )
      })}
      {/* <Tab 
        onClick={() => {setNewTab("Microsoft"); setLastPressed(true)}}
        winner={false} 
        logo="/../public/msft.avif" 
        company="Microsoft" 
        lastPressed={lastPressed} />
      <Tab 
        onClick={() => {setNewTab("Roblox"); setLastPressed(true)}}
        winner={false}
        logo="/../public/roblox.png"
        company="Roblox" 
        lastPressed={lastPressed} />
      <Tab 
        onClick={setNewTab("Tomo")}
        winner={false}
        title='Tomo' />
      <Tab 
        onClick={setNewTab("Meds")}
        winner={true}
        title='Meds.FYI' /> */}
    </div>
  )
}