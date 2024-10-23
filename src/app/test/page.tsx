import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from 'next/link';
import Image from 'next/image';
import features from "@/components/ui/features";

export default function Component() {



    return (
        <div className="bg-gradient-to-bl from-white to-indigo-100 h-100 min-h-screen overflow-y-auto">
            <header className="flex justify-between items-center p-4">
                <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-indigo-600 rounded"></div>
                    <span className="font-bold text-xl font-mono">ResearchXcelerator</span>
                    <nav className="text-right">
                        <h3>gpt-3.5-turbo</h3>
                    </nav>
                </div>
            </header>
            <main className="container mx-auto px-4 py-16 text-center">
                <div className="inline-flex items-center bg-indigo-100 text-indigo-600 rounded-full px-4 py-1 text-sm mb-6">
                    <p className="font-semibold"> Your first 3 documents <span className="text-green-500 font-semibold">Free</span> </p> <ArrowRight className="w-4 h-4 ml-2" />
                </div>
                <h1 className="text-5xl font-bold mb-6">
                    Transform Company Annual Reports into <br /> Interactive Conversations
                </h1>
                <p className="text-md text-muted-foreground text-gray-600 mb-8">
                    This Bot turns static reports into <span className="font-semibold text-indigo-500">dynamic conversations</span>, enhancing market research productivity 10x effortlessly.
                </p>
                <div className="flex justify-center space-x-4">
                    <Button variant="default" className="bg-indigo-600 hover:bg-indigo-700"> <Link href='/dashboard'>Upload PDF</Link></Button>
                </div>

                <div className='relative overflow-hidden pt-16'>
                    <div className='mx-auto max-w-5xl px-6 lg:px-8'>
                        <Image
                            alt="App Screenshot"
                            src="https://res.cloudinary.com/dj2fwrhvv/image/upload/f_auto,q_auto/VciRSTI_hsgxyz"
                            width={2432}
                            height={1442}
                            className='mb-[-0%] rounded-xl shadow-2xl ring-1 ring-gray-900/10' />
                    </div>
                </div>

                <div className="mt-10 px-8">
                    <dl className="mx-auto my-10 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-muted-foreground sm:grid-cols-2 lg:mx-4 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.description} className="flex flex-col pl-9">
                                <dt className="mx-auto">
                                    <feature.icon
                                        aria-hidden="true"
                                        className="h-5 w-5 text-indigo-600"
                                    />
                                </dt>

                                <dd className="mt-2 font-medium text-gray-800">{feature.name}</dd>
                                <dd className="mt-1 text-muted-foreground">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>


            </main>
        </div>
    )
}