import Image from 'next/image'

export default function Tab({ title, winner, logo, onClick, isActive }: {
  title?: string // either project title or company name
  winner?: boolean
  logo?: string // img src
  onClick?: () => void
  isActive: boolean
}) {

  return (
    // <div className="flex flex-row items-center justify-center h-auto w-1/4 bg-red-300 rounded-t-full" onClick={onClick}>
    <div className="flex flex-row flex-1 flex-grow items-center justify-center h-auto bg-red-300 rounded-t-full" style={{'backgroundColor': `${isActive ? 'green' : 'red'}`}} onClick={onClick}>
      <div className='h-full w-3 flex flex-col items-center justify-center'>
        {winner && <span className="text-sm">🏆 </span>}
        {logo && 
          <Image 
            src={logo}
            alt="company logo" 
            width={0}
            height={0}
            style={{ width: '100%', height: 'auto' }} 
          />}
      </div>
      <div className='h-auto w-3 text-sm ml-3'>
        {title && <p>{title}</p>}
      </div>
    </div>
  )
}