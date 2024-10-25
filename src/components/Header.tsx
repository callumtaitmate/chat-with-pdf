'use client';
import { SignedIn, UserButton } from '@clerk/nextjs'
import { useState } from 'react';
import { Button } from './ui/button'
import Link from 'next/link'
import { FilePlus2 } from 'lucide-react'
import UpgradeButton from './UpgradeButton'
import useSubscription from "@/hooks/useSubscription";
import MobileHeader from './mobileHeader';

function Header() {
    const { hasActiveMembership, isOverFileLimit } = useSubscription();
    const [isOpen, setIsOpen] = useState<any | null>(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <div className='flex max-w-screen justify-between bg-white shadow-sm p-4 border-b'>
                <Link href="/dashboard"
                    className='flex flex-col'>
                    <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-indigo-600 rounded"></div>
                        <span className="font-bold text-xl font-mono">ResearchXcelerator</span>
                    </div>
                </Link>

                <div className='flex justify-evenly bg-white'>


                    <SignedIn>
                        <div className='hidden items-center space-x-2 sm:flex'>

                            {!hasActiveMembership &&
                                <Button asChild variant="link" className='hidden md:flex'>
                                    <Link href="/dashboard/upgrade">Pricing</Link>
                                </Button>
                            }


                            <Button asChild variant="outline" className=''>
                                <Link href="/dashboard">My Documents</Link>
                            </Button>
                            {!isOverFileLimit && <Button asChild variant="outline" className=''>
                                <Link href="/dashboard/upload">
                                    <FilePlus2 className='text-indigo-600'></FilePlus2>
                                </Link>
                            </Button>}

                            <UpgradeButton />
                            <UserButton />


                        </div>

                        <button onClick={handleClick}>
                            <svg className="visible sm:hidden block h-4 w-4 mx-1 fill-current text-indigo-600" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Mobile menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                            </svg></button>

                    </SignedIn>
                </div>


            </div>

            {isOpen ? (<MobileHeader />) : (null)}

        </div>
    )
}

export default Header