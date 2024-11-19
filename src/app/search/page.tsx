import { Button } from "@/components/ui/button";
import { fetchReports } from "@/lib/fetchReports";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from 'react'
import Header from "@/components/Header";

export type SearchParams = {
    company: string;
}
type Props =
    {
        searchParams: SearchParams;
    }

async function SearchPage(props: Props) {
    const searchParams = await props.searchParams;

    if (!searchParams.company) notFound();

    const results = await fetchReports(searchParams);

    if (!results!) return <div>No Results Found.</div>

    return (
        <>
            <Header />
            <section>

                <div className="max-w-7xl p-6 lg:px-8">
                    
                <Link href="/dashboard" className="text-xs mb-5 text-indigo-600">Back To Dashboard</Link>
                    <h1 className="text-4xl font-bold pb-3">Choose a Report</h1>
                    <h2 className="pb-3 font-semibold">
                        Company Search: {searchParams.company}
                    </h2>
                </div>

                <div className="max-w-5xl p-6 lg:px-8 space-y-2">
                    {results.map((item, i) => (
                        <div className="flex justify-between" key={i}>
                            <h1>
                                {item.company}
                            </h1>
                            <Link target="_blank" rel="noopener noreferrer" href={`https://www.annualreports.com${item.reportsLink}`}>
                                <Button className="sm bg-indigo-600">View Available Reports</Button>
                            </Link>

                        </div>
                    ))}
                </div>

            </section>
        </>
    )
}

export default SearchPage