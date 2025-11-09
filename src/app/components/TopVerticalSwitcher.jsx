"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const verticals = [
  {name:"Skillzrevo", slug:"skillzrevo", href:"https://skillzrevo.com"},
  {name:"Academy", slug:"academy", href:"https://academy.skillzrevo.com"},
  {name:"Talent", slug:"talent", href:"https://talent.skillzrevo.com"},
  {name:"Consulting", slug:"consulting", href:"https://consulting.skillzrevo.com"},
]

export default function TopVerticalSwitcher(){
  // const pathname = usePathname()

  return(
    <div className="sticky top-0 z-[20] w-full bg-[#1d8fff] text-white text-xs">
      <div className="mx-auto flex h-full items-center">
        {verticals.map(v=>{
          
          const isActive = (v.slug==="talent")

          return(
            <Link
              href={v.href}
              key={v.name}
              className={`px-4 md:px-6 py-3 heading-oswald uppercase md:text-sm font-medium transition-colors ${isActive ? 'bg-white text-[#1d8fff] font-semibold' : 'hover:bg-white/20'}
              `}
            >
              {v.name}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
