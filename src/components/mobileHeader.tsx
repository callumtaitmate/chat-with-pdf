'use client';
import { SignedIn, UserButton } from '@clerk/nextjs'
import { useState } from 'react';
import { Button } from './ui/button'
import Link from 'next/link'
import { FilePlus2 } from 'lucide-react'
import UpgradeButton from './UpgradeButton'
import useSubscription from "@/hooks/useSubscription";

function MobileHeader() {
    const { hasActiveMembership } = useSubscription();
    return (
        <div className='flex max-w-screen justify-between bg-white shadow-sm p-5 border-b'>


            <SignedIn>
                <div className=''>

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
                    </div>

                </div>

                <UserButton />

            </SignedIn>

        </div>
    )
}

export default MobileHeader