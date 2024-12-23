'use client';

import Link from 'next/link'
import { getLocalStorage, setLocalStorage } from '@/lib/StorageHelper';
import { useState, useEffect } from 'react';

export default function CookieBanner() {

    const [cookieConsent, setCookieConsent] = useState(false);

    useEffect(() => {
        const storedCookieConsent = getLocalStorage("cookie_consent", null)

        setCookieConsent(storedCookieConsent)
    }, [setCookieConsent])


    useEffect(() => {
        const newValue = cookieConsent ? 'granted' : 'denied'

        window.gtag("consent", 'update', {
            'analytics_storage': newValue
        });

        setLocalStorage("cookie_consent", cookieConsent)

        //For Testing
        console.log("Cookie Consent: ", cookieConsent)

    }, [cookieConsent]);

    return (
        <div className={`my-10 mx-auto max-w-max md:max-w-screen-sm
                        fixed bottom-0 left-0 right-0 
                        ${cookieConsent != null ? "hidden" : "flex"} px-3 md:px-4 py-3 justify-between items-center flex sm:flex-row gap-4  
                         bg-indigo-600 text-white rounded-lg shadow`}>

            <div className='text-center text-sm'>
                <Link href="/info/cookies"><p>We use <span className='font-bold text-white'>cookies</span> on our site.</p></Link>
            </div>


            <div className='flex gap-2'>
                <button className="mr-1" onClick={() => setCookieConsent(false)}>Decline</button>
                <button className="text-bold outline outline-indigo-500 p-1 rounded-sm" onClick={() => setCookieConsent(true)}>Allow Cookies</button>
            </div>
        </div>
    )
}