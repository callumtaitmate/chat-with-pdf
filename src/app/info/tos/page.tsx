import React from 'react'
import Link from 'next/link'

export default function PrivacyPolicy() {
    return (
        <main className="h-dvh bg-gradient-to-bl from-white to-indigo-100 flex-1 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-track-slate-300 overflow-y-auto">
            <div>

                <div className="h-dvh bg-gradient-to-bl from-white to-indigo-100">
                    <header className="items-center p-4">
                        <div className="items-center space-x-2">
                            <div className="flex justify-between">
                                <div className="flex">
                                    <div className="w-6 h-6 bg-indigo-600 rounded mr-1" />
                                    <span className="font-bold text-xl font-mono">ResearchXcelerator</span>
                                </div>
                                <div className="flex">
                                    <nav>
                                        <Link href="/feedback" className="font-semibold text-gray-400 mr-2">feedback</Link>
                                    </nav>
                                    <nav>
                                        <Link href="/blog" className="font-semibold text-gray-400">blog</Link>
                                    </nav>
                                </div>

                            </div>
                        </div>
                    </header>

                    <div className="container mx-auto px-4 py-16 text-center">



                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            ResearchXcelerator Terms and Conditions
                        </h1>
                        <p className="text-muted-foreground text-gray-600 mb-8">
                            While the tool is still in Beta please log any feedback via the button in the <span className="font-semibold text-indigo-500">top right.</span>
                        </p>
                        <pre className="whitespace-pre-wrap leading-relaxed">Effective Date: September 17, 2024

                            Welcome to ResearchXcelerator (https://researchxcelerator.com). By using our website and services, you agree to comply with the following terms.

                            1. Overview

                            ResearchXcelerator is an AI tool to gather data from PDF files. Users can create an account to begin uploading and interacting with their documents via a chatbot. Once the free-tier limits are exceeded, users are asked to upgrade to a pro-tier.
                            2. Accounts

                            To use ResearchXcelerator, you must provide accurate information, including your name and payment information. By subscribing, you agree to pay any applicable fees.

                            3. Free Trial &amp; Subscriptions

                            New users are eligible for a free trial. After the trial period, a subscription is required to access ResearchXcelerator Pro Tier features. If no subscription is started after the free trial, all user analytics and collected data will be deleted.

                            4. Data Collection

                            For more details, please refer to our Privacy Policy.

                            5. Cookies, Data Usage, and GDPR Compliance

                            ResearchXcelerator uses cookies to enhance user experience, for analytics purposes, and to track user behavior. By using our site, you agree to our use of cookies.

                            Data Collection and Usage

                            The data collected through our software is used solely for analytics purposes. This includes tracking visitor behavior via cookies and IP addresses. We respect user privacy and are committed to protecting it. We do not sell any collected data to third parties.

                            GDPR Compliance and User Responsibilities

                            ResearchXclerator is fully compliant with the General Data Protection Regulation (GDPR). As a user of ResearchXcelerator, you acknowledge that ResearchXcelerator acts as a data processor for any data collected via the upload function, while you are the data controller.

                            As the data controller, you are responsible for:

                            &bull;	Obtaining Explicit Consent: You must display a cookie consent banner and obtain explicit consent from your website visitors before collecting any data through our script (e.g., IP addresses, cookie-based data).
                            &bull;	Providing Information to Users: You must inform your visitors about the nature of the data collected, its purpose (analytics), and how it will be used.
                            &bull;	Facilitating Data Subject Requests: You are responsible for addressing GDPR-compliant requests, such as access to personal data, requests for data deletion, or restricting data processing.

                            ResearchXcelerator, as the data processor, will:

                            &bull;	Process Data as Instructed: We will only process data in accordance with your instructions and the terms outlined in this agreement.
                            &bull;	Ensure Data Security: We implement appropriate technical and organizational measures to protect the data we process on your behalf.
                            &bull;	Assist with Compliance: ResearchXcelerator will assist you in meeting your GDPR obligations, such as responding to data subject requests.

                            6. Updates to Terms

                            We may update these terms from time to time. You will be notified of any changes via email.

                            7. Governing Law

                            These Terms &amp; Services are governed by the laws of the United Kingdom.

                            8. Contact

                            For questions or concerns, please contact us at callum.dtait@gmail.com.</pre>

                    </div>
                </div>
            </div>
        </main>
    )
}
