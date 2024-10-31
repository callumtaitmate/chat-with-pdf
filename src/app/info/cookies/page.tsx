import React from 'react'
import Link from 'next/link'

export default function CookiesInfo() {
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
                            ResearchXcelerator Cookies Notice
                        </h1>
                        <p className="text-muted-foreground text-gray-600 mb-8">
                            While the tool is still in Beta please log any feedback via the button in the <span className="font-semibold text-indigo-500">top right.</span>
                        </p>
                        <pre className="whitespace-pre-wrap leading-relaxed">Effective Date: September 17, 2024</pre>
                        <pre>Please see our Privacy Policy and Terms of Service for information pertaining to cookie usage.</pre>

                        <div className="flex justify-center space-x-2 mt-5">

                            <Link href="/info/tos">
                                <p>Terms</p>
                            </Link>
                            <Link href="/info/privacy-policy">
                                <p>Privacy</p>
                            </Link>

                        </div>

                    </div>
                </div>
            </div>
        </main>
    )
}
