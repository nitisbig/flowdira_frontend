
'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Core_Nav(){
    const pathname = usePathname()
    
    return(
        <div className="flex flex-row justify-center gap-2">
            <Link 
                href={'/'} 
                className={pathname === '/' ? 'bg-gray-900 font-bold px-3 rounded-l-lg text-gray-200' : 'text-gray-500'}
            >
                Ask
            </Link>
            <Link 
                href={'/workflow'} 
                className={pathname === '/workflow' ? 'bg-gray-900 font-bold px-3 rounded-r-lg text-gray-200' : 'text-gray-500'}
            >
                Workflow
            </Link>
        </div>
    )
}