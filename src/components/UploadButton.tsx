'use client';
import { Button } from "./ui/button";
import { Loader2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import * as fbq from "../lib/fpixel";



export default function UploadButton() {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();


    const handleAccount = () => {
        startTransition(async () => {
            fbq.event("SignUp_Intent");
            router.push("/sign-up");

        })
    }

    return (
        <Button
            onClick={handleAccount}
            disabled={isPending}
            variant="default"
            className="border-indigo-600 bg-indigo-600 hover:bg-indigo-700"
        >
            {isPending ? (<Loader2Icon className="animate-spin" />) : (
                <p>
                    <span>Upload PDF </span>

                </p>

            )}
        </Button>
    )
}
