
import Link from "next/link"

export default function Core_Nav(){
    return(
        <div className="flex flex-row justify-center gap-2">
            <Link href={'/'}>Ask</Link>
            <Link href={'/workflow'}>Workflow</Link>
        </div>
    )
}