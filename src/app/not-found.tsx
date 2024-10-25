'use client';
import TopBar from "@/components/contact"
import Link from "next/link"
export default function NotFound() {
    return (

        <div className="bg-gradient-to-bl from-white to-indigo-100 h-100 min-h-screen overflow-y-auto">
            <header className="flex justify-between items-center p-4">
                <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-indigo-600 rounded"></div>
                    <span className="font-bold text-xl font-mono">ResearchXcelerator</span>
                    <nav className="text-right">
                        <h3>gpt-3.5-turbo</h3>
                    </nav>
                    <Link href="/blog">
                        <nav >
                            <p>blog</p>
                        </nav>
                    </Link>
                </div>
            </header>

            <TopBar />

            <main className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-2xl font-semibold mb-3">404 - Page Not Found</h1>
                <Link href="/">
                <p>Click to return to safety</p></Link>
            </main>



        </div>

    )
}