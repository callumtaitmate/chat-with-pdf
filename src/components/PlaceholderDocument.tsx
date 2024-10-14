'use client'
import { PlusCircleIcon } from "lucide-react"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"
import useSubscription from "@/hooks/useSubscription";
function PlaceholderDocument() {
    const router = useRouter();
    const { isOverFileLimit } = useSubscription();

    const handleClick = () => {
        router.push('/dashboard/upload')

    }
    return (
        <Button onClick={handleClick} disabled={isOverFileLimit} className="flex flex-col items-center justify-center w-64 h-80 rounded-xl bg-gray-200 drop-shadow-md text-gray-400">
            <PlusCircleIcon className="h-16 w-16" />
            <p>Add a Document</p>
            {isOverFileLimit && (<p className="text-red-500">Upgrade to add more files</p>)}
        </Button>
    )
}

export default PlaceholderDocument