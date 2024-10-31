'use client';
import { ArrowRight } from "lucide-react"
import Link from 'next/link';
import features from "@/components/ui/features";
import TopBar from "./contact";
import UploadButton from "./UploadButton";



export default function Component() {


    return (
        <div className="bg-gradient-to-bl from-white to-indigo-100">
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

            <main className="container mx-auto px-4 py-16 text-center">

                <TopBar />
                <Link href="/dashboard">
                    <div className="inline-flex items-center mt-10 bg-indigo-100 text-indigo-600 rounded-full px-4 py-1 text-sm mb-6">

                        <p className="font-semibold"> Your first 3 documents <span className="text-green-500 font-semibold animate-pulse">Free</span> </p> <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                </Link>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Transform Annual Company Reports into <br /> Dyanmic Conversations
                </h1>
                <p className="text-muted-foreground text-gray-600 mb-8">
                    ResearchXcelerator turns annual company reports into <span className="font-semibold text-indigo-500">dynamic conversations</span>, optimising market research.
                </p>
                <div className="flex justify-center space-x-4">
                    <UploadButton />

                </div>

                <div className='pt-16'>
                    <div className='mx-auto max-w-5xl px-6 lg:px-8'>
                        <iframe
                            src="https://fast.wistia.net/embed/iframe/rof86klaod?seo=true&videoFoam=true"
                            className="w-full aspect-video mb-[-0%] rounded-xl shadow-2xl ring-1 ring-gray-900/5"
                            allowFullScreen
                            title="ResearchXcelerator Demo Video"

                        />
                    </div>
                </div>


                <div className="mt-10 px-8">
                    <dl className="mx-auto my-10 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-muted-foreground sm:grid-cols-2 lg:mx-4 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16 justify-items-center">
                        {features.map((feature) => (
                            <div key={feature.description} className="flex justify-center rounded-sm flex-col hover:shadow-sm">
                                <dt className="mx-auto">
                                    <feature.icon
                                        aria-hidden="true"
                                        className="h-5 w-5 text-indigo-600"
                                    />
                                </dt>

                                <dd className="mt-2 font-mono font-semibold text-gray-800">{feature.name}</dd>
                                <dd className="mt-1 text-muted-foreground">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <div className="flex justify-center space-x-2">
                    <Link href="/info/tos">
                        <p>Terms</p>
                    </Link>
                    <Link href="/info/privacy-policy">
                        <p>Privacy</p>
                    </Link>
                    
                    <Link href="/info/cookies">
                        <p>Cookies</p>
                    </Link>
                </div>


            </main>
        </div>
    )
}