'use client';
import { SignedIn, UserButton } from '@clerk/nextjs'
import { Button } from './ui/button'
import Link from 'next/link'
import { FilePlus2 } from 'lucide-react'
import UpgradeButton from './UpgradeButton'
import useSubscription from "@/hooks/useSubscription";

function Header() {
    const { hasActiveMembership } = useSubscription();
    return (
        <div className='flex justify-between bg-white shadow-sm p-5 border-b'>
            <Link href="/dashboard"
                className='text-2xl flex flex-col'>
                <div>GetDocument<span className='text-indigo-600'>.info</span></div>

                <span className='text-sm text-indigo-600'>Chat With PDF</span>
            </Link>

            <SignedIn>
                <div className='flex items-center space-x-2'>

                    {!hasActiveMembership &&
                        <Button asChild variant="link" className='hidden md:flex'>
                            <Link href="/dashboard/upgrade">Pricing</Link>
                        </Button>
                    }

                    <Button asChild variant="outline" className=''>
                        <Link href="/dashboard">My Documents</Link>
                    </Button>

                    <Button asChild variant="outline" className=''>
                        <Link href="/dashboard/upload">
                            <FilePlus2 className='text-indigo-600'></FilePlus2>
                        </Link>
                    </Button>
                    <UpgradeButton />
                    <UserButton />
                </div>
            </SignedIn>

        </div>
    )
}

export default Header