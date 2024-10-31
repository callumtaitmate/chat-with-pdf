'use client';
import Link from "next/link";

import { Button } from "@/components/ui/button";

const error = ({
  error,
  reset,
}: {
  error: Error; reset: () => void
}) => {
  return  <main className="flex-1 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-track-slate-300 overflow-y-auto">
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
          Oops! Something went wrong.
        </h1>
        <p className="text-muted-foreground text-gray-600 mb-8">
          While the tool is still in Beta please try again, or log feedback via the button in the <span className="font-semibold text-indigo-500">top right.</span>
        </p>
        <div className="flex justify-center space-x-4">
          <Button className='bg-indigo-600' onClick={reset}> Try Again </Button>

        </div>






      </div>
    </div>
  </div>
</main>
}

export default error